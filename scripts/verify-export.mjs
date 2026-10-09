import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';
const root=resolve('out');
const {basePath}=JSON.parse(readFileSync(resolve(root,'site-config.json'),'utf8'));
const routes=['','advisor','members','research','publications','news','contact','resources',
 'people','community','join','projects',...['recast','halluprop','evoguard','lara','redpj'].map(x=>'projects/'+x)];
const failures=[];
for(const route of routes){if(!existsSync(resolve(root,route,'index.html')))failures.push('Missing route '+route);}
if(!existsSync(resolve(root,'404.html')))failures.push('Missing 404.html');
if(!existsSync(resolve(root,'.nojekyll')))failures.push('Missing .nojekyll');
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(dir,e.name)):[resolve(dir,e.name)]);}
const pages=walk(root).filter(p=>p.endsWith('.html'));
let checkedLinks=0;
for(const page of pages){
 const text=readFileSync(page,'utf8');
 if(/\p{Script=Han}/u.test(text))failures.push('Untranslated content '+relative(root,page));
 if(!text.includes('lang="en"'))failures.push('Missing English document language '+relative(root,page));
 const current='https://local.test'+basePath+'/'+relative(root,page).split(sep).join('/').replace(/index\.html$/,'');
 for(const match of text.matchAll(/<(?:a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"/g)){
  const href=match[1].replaceAll('&amp;','&');
  if(href==='XXX'||href.includes('/XXX')){failures.push('Placeholder is an active URL '+href);continue;}
  if(/^(?:mailto:|tel:|data:|https?:\/\/|\/\/)/.test(href))continue;
  const url=new URL(href,current);
  if(basePath&&url.pathname!==basePath&&!url.pathname.startsWith(basePath+'/')){failures.push('Missing basePath: '+href);continue;}
  let path=resolve(root,'.'+decodeURIComponent(url.pathname.slice(basePath.length)||'/'));
  if(existsSync(path)&&statSync(path).isDirectory())path=resolve(path,'index.html');
  if(!existsSync(path)){failures.push('Missing local target '+href+' in '+relative(root,page));continue;}
  if(url.hash&&path.endsWith('.html')){
   const target=readFileSync(path,'utf8');
   if(!target.includes('id="'+decodeURIComponent(url.hash.slice(1))+'"'))failures.push('Missing anchor '+href+' in '+relative(root,page));
  }
  checkedLinks++;
 }
}
for(const page of ['advisor/index.html','members/index.html','contact/index.html']){
 if(!readFileSync(resolve(root,page),'utf8').includes('XXX'))failures.push('Missing XXX fields on '+page);
}
if(failures.length){console.error([...new Set(failures)].join('\n'));process.exit(1);}
console.log(`PASS: ${routes.length} site routes, ${pages.length} HTML files, ${checkedLinks} local links/assets; basePath=${basePath||'/'}; XXX placeholders checked.`);
