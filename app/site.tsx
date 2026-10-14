'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Building2, Code2, FileText, Mail, MapPin, Menu, X } from 'lucide-react';
import { areas, projects, news, pages, sectionAliases, labDetails, memberGroups, advisorProfile, supervisorPublications, type Project, type NewsItem } from './data';

const nav = [
  ['home', 'Homepage', '/'],
  ['advisor', 'Supervisor', '/advisor'],
  ['members', 'Members', '/members'],
  ['publications', 'Publications', '/publications'],
  ['news', 'News', '/news'],
];
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
const known = (value?: string) => Boolean(value && value !== 'XXX');
type PublicationItem = {
  id:string; title:string; authors?:string; venue:string;
  kind:'conference'|'journal'|'preprint'; researchAreas:string[];
  paper?:string; code?:string;
};
const publications:PublicationItem[] = [
  ...projects.filter(p => p.kind !== 'manuscript').map(p => ({
    id:'project-' + p.id,
    title:known(p.en) ? p.en : p.title,
    authors:p.authors,
    venue:p.status,
    kind:p.kind as PublicationItem['kind'],
    researchAreas:p.researchAreas,
    paper:p.paper,
    code:p.code,
  })),
  ...supervisorPublications.flatMap(p => p.publicationKind && p.researchAreas?.length ? [{
    id:'selected-' + p.id,
    title:p.title,
    authors:p.authors,
    venue:p.venue + ' · ' + p.year,
    kind:p.publicationKind,
    researchAreas:p.researchAreas,
    paper:p.paper,
    code:p.code,
  }] : []),
];

function Github({ size = 16 }: { size?:number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>;
}

function ScholarIcon({ size = 16 }: { size?:number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" /></svg>;
}

function assetPath(path: string) {
  return /^(?:https?:\/\/|data:)/.test(path) ? path : basePath + '/' + path.replace(/^\/+/, '');
}

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><b>T</b><i>L</i></span>;
}

function Portrait({ photo, name, className }: { photo: string; name: string; className: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [photo]);
  const placeholder = !known(photo) || failed;
  return <img
    className={className}
    src={assetPath(placeholder ? '/member-placeholder.svg' : photo)}
    alt={placeholder ? 'Portrait placeholder' : name}
    width={160}
    height={160}
    onError={() => setFailed(true)}
  />;
}

function NewsThumbnail({ item }: { item: NewsItem }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [item.image]);
  return known(item.image) && !failed ? <a className="news-thumbnail" href={assetPath(item.image!)} target="_blank" rel="noreferrer" aria-label={'Open full-size method overview: ' + item.title}>
    <img src={assetPath(item.image!)} alt={item.imageAlt || item.title} width={item.imageWidth || 2400} height={item.imageHeight || 1000} loading="lazy" onError={() => setFailed(true)} />
  </a> : <div className="news-thumbnail news-thumbnail-placeholder" aria-hidden="true"><FileText size={24} /></div>;
}

function ResearchOverview({ text }: { text: string }) {
  return <p>{text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part)}</p>;
}

function SectionTitle({ title, href }: { title: string; href?: string }) {
  return <div className="section-title"><h2>{title}</h2>{href && <Link href={href}>View all<ArrowUpRight size={14} /></Link>}</div>;
}

function Sidebar() {
  return <aside className="lab-profile" aria-label="About TrustLab">
    <Link className="identity" href="/" aria-label="TrustLab homepage">
      <Mark /><div><h2>TrustLab</h2><p>Trustworthy AI &amp; System Security</p></div>
    </Link>
    <div className="affiliation"><Building2 size={17} /><div><strong>Zhejiang Gongshang University</strong><p>College of Computer Science and Technology</p></div></div>
    <p className="location"><MapPin size={16} />Hangzhou, China</p>
    <dl className="sidebar-details">
      <div><dt>Supervisor</dt><dd><Link href="/advisor">Peng Qian (钱鹏)</Link><span>Associate Research Fellow</span></dd></div>
      <div><dt>Office</dt><dd>Room 402-1, Teaching Building 3<br />Jiaogong Road Campus</dd></div>
    </dl>
    <div className="sidebar-links">
      <a href="https://github.com/trustlab-zjsu" target="_blank" rel="noreferrer"><Github size={15} />GitHub<ArrowUpRight size={12} /></a>
      <Link href="/contact"><Mail size={15} />Contact</Link>
    </div>
  </aside>;
}

function Home() {
  return <>
    <section className="panel welcome">
      <h1>WELCOME TO TRUSTLAB</h1>
      <p>TrustLab is a research group at Zhejiang Gongshang University. We study <strong>LLM safety and security</strong>, <strong>trustworthy agent systems</strong>, and <strong>blockchain and smart contract security</strong>.</p>
    </section>
    <section className="panel home-section" id="research">
      <SectionTitle title="Research" href="/publications" />
      <div className="home-research-grid">{areas.map(area => <Link key={area.id} href={'/publications?area=' + area.id + '#conference-papers'} id={area.id} className="home-research-card">
        <h3>{area.name}<ArrowUpRight size={14} /></h3><ResearchOverview text={area.overview} />
      </Link>)}</div>
    </section>
    <section className="panel home-section">
      <SectionTitle title="News" href="/news" />
      <div className="news-list">{news.slice(0,4).map(n => <article className="news-row" key={n.id}>
        <NewsThumbnail item={n} /><div className="news-row-copy"><time>{n.date}</time><Link href={'/news#' + n.id}>{n.title}<ArrowUpRight size={14} /></Link></div>
      </article>)}</div>
    </section>
  </>;
}

function ProfileField({ label, value, href }: { label: string; value: string; href?: string }) {
  return <div><dt>{label}</dt><dd>{known(value) && href ? <a href={href} target="_blank" rel="noreferrer">{label === 'GitHub' && <Github size={15} />}{value}<ArrowUpRight size={13} /></a> : value}</dd></div>;
}

function ProfileEmails({ emails }: { emails: string[] }) {
  return <div><dt>Email</dt><dd className="profile-email-list">{emails.filter(known).map(email =>
    <a href={'mailto:' + email} key={email}>{email}<ArrowUpRight size={13} /></a>
  )}</dd></div>;
}

function PersonName({ name }: { name: string }) {
  const parts = name.match(/^(.+?)\s(\([^()]+\))$/);
  return parts ? <>{parts[1]} <span className="native-name">{parts[2]}</span></> : name;
}

function Advisor() {
  return <>
    <section className="panel advisor-profile">
      <Portrait className="advisor-portrait" photo={advisorProfile.photo} name={advisorProfile.name} />
      <div>
        <h2><PersonName name={advisorProfile.name} /></h2><p className="advisor-position">{advisorProfile.title}</p>
        <p className="advisor-affiliation">{advisorProfile.department}<br />{advisorProfile.institution}</p>
        <div className="profile-external">
          {known(advisorProfile.scholar) && <a href={advisorProfile.scholar} target="_blank" rel="noreferrer"><ScholarIcon />Google Scholar<ArrowUpRight size={13} /></a>}
          {known(advisorProfile.homepage) && <a href={advisorProfile.homepage} target="_blank" rel="noreferrer">Homepage<ArrowUpRight size={13} /></a>}
          {known(advisorProfile.cv) && <a href={assetPath(advisorProfile.cv)} target="_blank" rel="noreferrer">CV<ArrowUpRight size={13} /></a>}
        </div>
      </div>
      <dl className="profile-fields advisor-contact">
        <ProfileField label="Email" value={advisorProfile.email} href={'mailto:' + advisorProfile.email} />
        <ProfileField label="Office" value={advisorProfile.office} />
      </dl>
    </section>
    <section className="panel" id="biography"><SectionTitle title="Biography" /><div className="panel-copy biography-copy">
      {advisorProfile.bio.split('\n\n').map((paragraph, i) => <ResearchOverview key={i} text={paragraph} />)}
    </div></section>
    <section className="panel"><SectionTitle title="Research Interests" /><div className="panel-copy"><ResearchOverview text={advisorProfile.research} /></div></section>
    <section className="panel" id="selected-publications">
      <SectionTitle title="Selected Publications" />
      <div className="paper-list">{supervisorPublications.map(p => <article className="paper-row" key={p.id}>
        <h3><a href={p.paper} target="_blank" rel="noreferrer">{p.title}</a></h3>
        <p className="paper-authors">{p.authors.split(/(Peng Qian)/g).map((part, i) => part === 'Peng Qian' ? <strong key={i}>{part}</strong> : part)}</p>
        <p className="paper-venue">{p.venue} · {p.year}{p.corresponding && <span className="paper-role"> · Corresponding author</span>}</p>
        {p.code && <div className="paper-links"><a href={p.code} target="_blank" rel="noreferrer"><Github size={14} />Code<ArrowUpRight size={12} /></a></div>}
      </article>)}</div>
    </section>
    {advisorProfile.education.some(item => known(item.degree)) && <section className="panel">
      <SectionTitle title="Education" /><div className="academic-records">{advisorProfile.education.map((item, i) => <article key={i}><time>{item.period}</time><div><h3>{item.degree}</h3><p>{item.institution}</p></div></article>)}</div>
    </section>}
    {advisorProfile.experience.some(item => known(item.position)) && <section className="panel">
      <SectionTitle title="Experience" /><div className="academic-records">{advisorProfile.experience.map((item, i) => <article key={i}><time>{item.period}</time><div><h3>{item.position}</h3><p>{item.institution}</p></div></article>)}</div>
    </section>}
    {[
      ['Honors & Awards', advisorProfile.awards],
      ['Academic Service', advisorProfile.service],
      ['Teaching', advisorProfile.teaching],
    ].map(([title, items]) => {
      const entries = (items as string[]).filter(known);
      return entries.length ? <section className="panel" key={title as string}><SectionTitle title={title as string} /><div className="panel-copy"><ul>{entries.map(item => <li key={item}>{item}</li>)}</ul></div></section> : null;
    })}
  </>;
}

function Members() {
  return <>{memberGroups.filter(group => group.members.length > 0).map(group => <section className="panel" key={group.id} id={group.id}>
    <SectionTitle title={group.title} />
    <div className="member-grid">{group.members.map((member, i) => <article className="member-card" key={i}>
      {known(member.homepage) ? <a href={member.homepage} target="_blank" rel="noreferrer">
        <Portrait className="member-photo" photo={member.photo} name={member.name} /><h3><PersonName name={member.name} /></h3>
      </a> : <><Portrait className="member-photo" photo={member.photo} name={member.name} /><h3><PersonName name={member.name} /></h3></>}
      <p className="member-year">{known(member.year) ? member.year + ' Cohort' : 'XXX'}</p>
      <p className="member-research">{member.research}</p>
      {known(member.scholar) && <a href={member.scholar} className="text-link" target="_blank" rel="noreferrer"><ScholarIcon />Google Scholar<ArrowUpRight size={13} /></a>}
    </article>)}</div>
  </section>)}</>;
}

function PaperRow({ p, onAreaSelect }: { p: PublicationItem; onAreaSelect: (id:string) => void }) {
  return <article className="paper-row">
    <div className="paper-tags" aria-label="Research areas">{p.researchAreas.map(id => {
      const area = areas.find(item => item.id === id);
      return area ? <button type="button" className={'research-tag tag-' + id} key={id} onClick={() => onAreaSelect(id)}>{area.name}</button> : null;
    })}</div>
    <h3>{p.paper ? <a href={p.paper} target="_blank" rel="noreferrer">{p.title}</a> : p.title}</h3>
    {known(p.authors) && <p className="paper-authors">{p.authors}</p>}
    <p className="paper-venue">{p.venue}</p>
    <div className="paper-links">
      {p.paper && <a href={p.paper} target="_blank" rel="noreferrer">Paper<FileText size={13} /></a>}
      {p.code && <a href={p.code} target="_blank" rel="noreferrer"><Github size={13} />Code</a>}
    </div>
  </article>;
}

function Publications() {
  const categories = [
    { id: 'conference-papers', title: 'Conference Papers', kind: 'conference' },
    { id: 'journal-papers', title: 'Journal Papers', kind: 'journal' },
    { id: 'preprints', title: 'Preprints', kind: 'preprint' },
  ];
  const [activeCategory, setActiveCategory] = useState('conference-papers');
  const [activeArea, setActiveArea] = useState('all');

  const updateLocation = (categoryId: string, areaId: string) => {
    const url = new URL(window.location.href);
    if (areaId === 'all') url.searchParams.delete('area'); else url.searchParams.set('area', areaId);
    url.hash = categoryId;
    window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
  };

  useEffect(() => {
    const syncFilters = () => {
      const requestedArea = new URLSearchParams(window.location.search).get('area') || 'all';
      const areaId = requestedArea === 'all' || areas.some(area => area.id === requestedArea) ? requestedArea : 'all';
      const requestedCategory = window.location.hash.slice(1);
      const categoryId = categories.some(category => category.id === requestedCategory) ? requestedCategory : 'conference-papers';
      setActiveArea(areaId);
      setActiveCategory(categoryId);
    };
    syncFilters();
    window.addEventListener('hashchange', syncFilters);
    window.addEventListener('popstate', syncFilters);
    return () => {
      window.removeEventListener('hashchange', syncFilters);
      window.removeEventListener('popstate', syncFilters);
    };
  }, []);

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    updateLocation(id, activeArea);
  };

  const selectArea = (id: string) => {
    setActiveArea(id);
    updateLocation(activeCategory, id);
  };

  return <div className="panel publication-section">
    <div className="publication-tabs" role="tablist" aria-label="Publication categories">
      {categories.map((category, index) => <button
        key={category.id}
        type="button"
        role="tab"
        className="publication-tab"
        id={'tab-' + category.id}
        aria-controls={category.id}
        aria-selected={activeCategory === category.id}
        tabIndex={activeCategory === category.id ? 0 : -1}
        onClick={() => selectCategory(category.id)}
        onKeyDown={event => {
          let next: number;
          switch (event.key) {
            case 'ArrowRight': next = (index + 1) % categories.length; break;
            case 'ArrowLeft': next = (index - 1 + categories.length) % categories.length; break;
            case 'Home': next = 0; break;
            case 'End': next = categories.length - 1; break;
            default: return;
          }
          event.preventDefault();
          selectCategory(categories[next].id);
          event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
        }}
      >{category.title}</button>)}
    </div>
    <div className="publication-filter">
      <span>Research Area</span>
      <div role="group" aria-label="Filter publications by research area">
        {[{id:'all',name:'All'}, ...areas].map(area => <button
          type="button"
          key={area.id}
          className="area-filter"
          aria-pressed={activeArea === area.id}
          onClick={() => selectArea(area.id)}
        >{area.name}</button>)}
      </div>
    </div>
    {categories.map(category => {
    const entries = publications.filter(p => p.kind === category.kind && (activeArea === 'all' || p.researchAreas.includes(activeArea)));
    return <section
      className="publication-panel"
      id={category.id}
      key={category.id}
      role="tabpanel"
      aria-labelledby={'tab-' + category.id}
      hidden={activeCategory !== category.id}
      tabIndex={0}
    >
      {entries.length ? <div className="paper-list">{entries.map(p => <PaperRow key={p.id} p={p} onAreaSelect={selectArea} />)}</div> : <p className="empty-list">No {category.title.toLowerCase()}{activeArea !== 'all' ? ` in ${areas.find(area => area.id === activeArea)?.name}` : ''} yet.</p>}
    </section>;
    })}
  </div>;
}

function News() {
  return <div className="panel news-archive">{news.map(n => <article className="news-item" id={n.id} key={n.id}>
    <NewsThumbnail item={n} /><div className="news-item-copy"><time>{n.date}</time><h2>{n.title}</h2><p>{n.body}</p>
      <div className="paper-links"><a href={n.href} target="_blank" rel="noreferrer">Paper<FileText size={13} /></a>
        {n.code && <a href={n.code} target="_blank" rel="noreferrer"><Github size={13} />Code</a>}
      </div></div>
  </article>)}</div>;
}

function Contact() {
  return <section className="panel contact-panel" id="contact">
    <div className="contact-affiliation"><Building2 size={20} /><div><h2>Zhejiang Gongshang University</h2><p>College of Computer Science and Technology</p></div></div>
    <p className="contact-address"><MapPin size={17} />Hangzhou, Zhejiang 310018, China</p>
    <dl className="profile-fields">
      <ProfileEmails emails={labDetails.emails} />
      <ProfileField label="Office" value={labDetails.office} />
      <ProfileField label="GitHub" value="trustlab-zjsu" href="https://github.com/trustlab-zjsu" />
    </dl>
  </section>;
}

// Existing learning-resource URLs remain available, but are no longer a navigation item.
function Resources() {
  return <section className="panel"><SectionTitle title="Research Practice" /><div className="panel-copy">
    <ul><li>Read papers around a specific research question.</li><li>Reproduce methods with clear experimental configurations.</li><li>Design comparisons and ablations, and analyze failure cases.</li></ul>
    <dl className="profile-fields"><ProfileField label="Courses" value={labDetails.courses} /><ProfileField label="Materials" value={labDetails.teachingMaterials} /></dl>
  </div></section>;
}

function ProjectDetail({ id }: { id: string }) {
  const p = projects.find(item => item.id === id)!;
  const area = areas.find(a => a.projects.includes(id));
  return <>
    <Link href={p.kind === 'manuscript' ? '/#research' : '/publications'} className="back-link">← {p.kind === 'manuscript' ? 'Research' : 'Publications'}</Link>
    <section className="panel work-heading"><p className="paper-venue">{p.status}</p><h1>{known(p.en) ? p.en : p.title}</h1>{known(p.authors) && <p className="paper-authors">{p.authors}</p>}<p>{p.summary}</p>
      <div className="paper-links">{p.paper && <a href={p.paper} target="_blank" rel="noreferrer">Paper<FileText size={13} /></a>}{p.code && <a href={p.code} target="_blank" rel="noreferrer">Code<Code2 size={13} /></a>}</div>
    </section>
    <section className="panel"><SectionTitle title="Research Question" /><div className="panel-copy"><p>{p.problem}</p></div></section>
    <section className="panel"><SectionTitle title="Approach" /><div className="panel-copy"><ul>{p.method.map(m => <li key={m}>{m}</li>)}</ul>{area && <Link href={'/publications?area=' + area.id + '#conference-papers'} className="text-link">{area.name}<ArrowUpRight size={14} /></Link>}</div></section>
  </>;
}

export function LabSite({ section: requestedSection, projectId }: { section: string; projectId?: string }) {
  const [menu, setMenu] = useState(false);
  const section = sectionAliases[requestedSection] || requestedSection;
  const work = projects.find(p => p.id === projectId);
  const current = section === 'project-detail' ? (work?.kind === 'manuscript' ? 'home' : 'publications') : section;
  const page = pages[section];
  const content: Record<string, ReactNode> = {
    home: <Home />, advisor: <Advisor />, members: <Members />,
    publications: <Publications />, news: <News />, contact: <Contact />, resources: <Resources />,
  };
  return <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className="site-header"><div className="header-inner">
      <Link className="wordmark" href="/" aria-label="TrustLab homepage"><Mark /><span>TrustLab</span></Link>
      <nav id="main-nav" aria-label="Main navigation" className={menu ? 'main-nav open' : 'main-nav'} onKeyDown={event => { if (event.key === 'Escape') { setMenu(false); document.getElementById('menu-toggle')?.focus(); } }}>
        {nav.map(([key, label, href]) => <Link key={key} className={current === key ? 'active' : ''} aria-current={current === key ? 'page' : undefined} href={href} onClick={() => setMenu(false)}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link href="/contact" className={section === 'contact' ? 'header-contact active' : 'header-contact'} aria-current={section === 'contact' ? 'page' : undefined} onClick={() => setMenu(false)}>Contact</Link>
        <button type="button" id="menu-toggle" className="mobile-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="main-nav" onClick={() => setMenu(!menu)}>{menu ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
    </div></header>
    <div className="site-body"><Sidebar /><main id="main-content" className="main-content">
      {page && <div className="page-heading"><h1>{page.title}</h1></div>}
      {projectId ? <ProjectDetail id={projectId} /> : content[section]}
      <footer className="site-footer"><p>© 2026 TrustLab · Zhejiang Gongshang University</p><a href="#main-content">Back to top ↑</a></footer>
    </main></div>
  </>;
}
