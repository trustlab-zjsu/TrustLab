import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
const root=resolve('out');
if(!existsSync(resolve(root,'index.html'))) { console.error('Run pnpm build first.'); process.exit(1); }
const basePath=JSON.parse(readFileSync(resolve(root,'site-config.json'),'utf8')).basePath;
const port=Number(process.env.PORT || 3000);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
createServer(async (req,res)=>{
 try{
  const raw=new URL(req.url,'http://localhost').pathname;
  if(raw===basePath&&basePath){res.writeHead(302,{Location:basePath+'/'});res.end();return;}
  if(basePath&&!(raw.startsWith(basePath+'/'))){res.writeHead(404);res.end('Not found');return;}
  let file=resolve(root,'.'+decodeURIComponent(raw.slice(basePath.length)||'/'));
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);res.end('Forbidden');return;}
  try{if((await stat(file)).isDirectory())file=resolve(file,'index.html');}
  catch{file=resolve(root,'404.html');res.statusCode=404;}
  const body=await readFile(file);
  res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');res.end(body);
 }catch{res.writeHead(404);res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`TrustLab is running at http://localhost:${port}${basePath}/`));
