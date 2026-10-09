'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Building2, Code2, FileText, Mail, MapPin, Menu, Network, ShieldCheck, X } from 'lucide-react';
import { areas, projects, news, pages, sectionAliases, labDetails, memberGroups, advisorProfile, type Project, type NewsItem } from './data';

const nav = [
  ['home', 'Homepage', '/'],
  ['advisor', 'Supervisor', '/advisor'],
  ['members', 'Members', '/members'],
  ['research', 'Research', '/research'],
  ['publications', 'Publications', '/publications'],
  ['news', 'News', '/news'],
];
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
const known = (value?: string) => Boolean(value && value !== 'XXX');
const publications = projects.filter(p => p.kind !== 'manuscript');

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

function AreaIcon({ id }: { id: string }) {
  return id === 'shield' ? <ShieldCheck /> : id === 'network' ? <Network /> : <Code2 />;
}

function NewsThumbnail({ item }: { item: NewsItem }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [item.image]);
  return <div className="news-thumbnail" aria-hidden={!known(item.image) || failed ? true : undefined}>
    {known(item.image) && !failed && <img src={assetPath(item.image!)} alt={item.imageAlt || item.title} width={160} height={100} onError={() => setFailed(true)} />}
  </div>;
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
      <Mark /><div><h2>TrustLab<span className="brand-dot">.</span></h2><p>Trustworthy AI &amp; System Security</p></div>
    </Link>
    <div className="affiliation"><Building2 size={17} /><div><strong>Zhejiang Gongshang University</strong><p>School of Computer and Information Engineering</p></div></div>
    <p className="location"><MapPin size={16} />Hangzhou, China</p>
    <div className="sidebar-links">
      <a href="https://github.com/trustlab-zjsu" target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={13} /></a>
      <Link href="/contact">Contact<Mail size={13} /></Link>
    </div>
  </aside>;
}

function Home() {
  return <>
    <section className="panel welcome">
      <h1>WELCOME TO TRUSTLAB</h1>
      <p>TrustLab is a research group at Zhejiang Gongshang University. We study <strong>LLM safety and security</strong>, <strong>trustworthy agent systems</strong>, and <strong>blockchain and smart contract security</strong>.</p>
    </section>
    <section className="panel home-section">
      <SectionTitle title="News" href="/news" />
      <div className="news-list">{news.map(n => <article className="news-row" key={n.id}>
        <NewsThumbnail item={n} /><div className="news-row-copy"><time>{n.date}</time><Link href={n.href}>{n.title}<ArrowUpRight size={14} /></Link></div>
      </article>)}</div>
    </section>
    <section className="panel home-section">
      <SectionTitle title="Research Areas" href="/research" />
      <div className="area-grid">{areas.map(a => <Link key={a.id} href={'/research#' + a.id} className="area-card">
        <AreaIcon id={a.icon} /><h3>{a.name}</h3><p>{a.description}</p>
      </Link>)}</div>
    </section>
  </>;
}

function ProfileField({ label, value, href }: { label: string; value: string; href?: string }) {
  return <div><dt>{label}</dt><dd>{known(value) && href ? <a href={href} target="_blank" rel="noreferrer">{value}<ArrowUpRight size={13} /></a> : value}</dd></div>;
}

function Advisor() {
  return <>
    <section className="panel advisor-profile">
      <Portrait className="advisor-portrait" photo={advisorProfile.photo} name={advisorProfile.name} />
      <div>
        <h2>{advisorProfile.name}</h2><p className="advisor-position">{advisorProfile.title}</p>
        <p className="advisor-affiliation">{advisorProfile.department}<br />{advisorProfile.institution}</p>
        <dl className="profile-fields">
          <ProfileField label="Email" value={advisorProfile.email} href={'mailto:' + advisorProfile.email} />
          <ProfileField label="Office" value={advisorProfile.office} />
        </dl>
        <div className="profile-external">
          {known(advisorProfile.homepage) && <a href={advisorProfile.homepage} target="_blank" rel="noreferrer">Homepage<ArrowUpRight size={13} /></a>}
          {known(advisorProfile.scholar) && <a href={advisorProfile.scholar} target="_blank" rel="noreferrer">Google Scholar<ArrowUpRight size={13} /></a>}
          {known(advisorProfile.cv) && <a href={assetPath(advisorProfile.cv)} target="_blank" rel="noreferrer">CV<ArrowUpRight size={13} /></a>}
        </div>
      </div>
    </section>
    <section className="panel"><SectionTitle title="About" /><div className="panel-copy"><p>{advisorProfile.bio}</p></div></section>
    <section className="panel"><SectionTitle title="Research Interests" /><div className="panel-copy"><p>{advisorProfile.research}</p></div></section>
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
        <Portrait className="member-photo" photo={member.photo} name={member.name} /><h3>{member.name}</h3>
      </a> : <><Portrait className="member-photo" photo={member.photo} name={member.name} /><h3>{member.name}</h3></>}
      <p>{member.research}</p>
    </article>)}</div>
  </section>)}</>;
}

function Research() {
  return <>{areas.map(a => <section className="panel research-panel" id={a.id} key={a.id}>
    <SectionTitle title={a.name} />
    <div className="panel-copy"><ResearchOverview text={a.overview} /></div>
  </section>)}</>;
}

function PaperRow({ p }: { p: Project }) {
  const title = known(p.en) ? p.en : p.title;
  return <article className="paper-row">
    <h3>{p.paper ? <a href={p.paper} target="_blank" rel="noreferrer">{title}</a> : <Link href={'/projects/' + p.id}>{title}</Link>}</h3>
    {known(p.authors) && <p className="paper-authors">{p.authors}</p>}
    <p className="paper-venue">{p.status}</p>
    <div className="paper-links">
      {p.paper && <a href={p.paper} target="_blank" rel="noreferrer">Paper<FileText size={13} /></a>}
      {p.code && <a href={p.code} target="_blank" rel="noreferrer">Code<Code2 size={13} /></a>}
      <Link href={'/projects/' + p.id}>Details<ArrowUpRight size={13} /></Link>
    </div>
  </article>;
}

function Publications() {
  const categories = [
    { id: 'conference-papers', title: 'Conference Papers', kind: 'conference' },
    { id: 'journal-papers', title: 'Journal Papers', kind: 'journal' },
    { id: 'preprints', title: 'Preprints', kind: 'preprint' },
  ];
  return <>{categories.map(category => {
    const entries = publications.filter(p => p.kind === category.kind);
    return <section className="panel publication-section" id={category.id} key={category.id}>
      <SectionTitle title={category.title} />
      {entries.length ? <div className="paper-list">{entries.map(p => <PaperRow key={p.id} p={p} />)}</div> : <p className="empty-list">No entries yet.</p>}
    </section>;
  })}</>;
}

function News() {
  return <div className="panel news-archive">{news.map(n => <article className="news-item" id={n.id} key={n.id}>
    <NewsThumbnail item={n} /><div className="news-item-copy"><time>{n.date}</time><h2>{n.title}</h2><p>{n.body}</p>{n.id !== 'exchange' && <Link href={n.href} className="text-link">Paper details<ArrowUpRight size={14} /></Link>}</div>
  </article>)}</div>;
}

function Contact() {
  return <section className="panel contact-panel" id="contact">
    <div className="contact-affiliation"><Building2 size={20} /><div><h2>Zhejiang Gongshang University</h2><p>School of Computer and Information Engineering</p></div></div>
    <p className="contact-address"><MapPin size={17} />Hangzhou, Zhejiang 310018, China</p>
    <dl className="profile-fields">
      <ProfileField label="Email" value={labDetails.email} href={'mailto:' + labDetails.email} />
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
    <Link href={p.kind === 'manuscript' ? '/research' : '/publications'} className="back-link">← {p.kind === 'manuscript' ? 'Research' : 'Publications'}</Link>
    <section className="panel work-heading"><p className="paper-venue">{p.status}</p><h1>{known(p.en) ? p.en : p.title}</h1>{known(p.authors) && <p className="paper-authors">{p.authors}</p>}<p>{p.summary}</p>
      <div className="paper-links">{p.paper && <a href={p.paper} target="_blank" rel="noreferrer">Paper<FileText size={13} /></a>}{p.code && <a href={p.code} target="_blank" rel="noreferrer">Code<Code2 size={13} /></a>}</div>
    </section>
    <section className="panel"><SectionTitle title="Research Question" /><div className="panel-copy"><p>{p.problem}</p></div></section>
    <section className="panel"><SectionTitle title="Approach" /><div className="panel-copy"><ul>{p.method.map(m => <li key={m}>{m}</li>)}</ul>{area && <Link href={'/research#' + area.id} className="text-link">{area.name}<ArrowUpRight size={14} /></Link>}</div></section>
  </>;
}

export function LabSite({ section: requestedSection, projectId }: { section: string; projectId?: string }) {
  const [menu, setMenu] = useState(false);
  const section = sectionAliases[requestedSection] || requestedSection;
  const work = projects.find(p => p.id === projectId);
  const current = section === 'project-detail' ? (work?.kind === 'manuscript' ? 'research' : 'publications') : section;
  const page = pages[section];
  const content: Record<string, ReactNode> = {
    home: <Home />, advisor: <Advisor />, members: <Members />, research: <Research />,
    publications: <Publications />, news: <News />, contact: <Contact />, resources: <Resources />,
  };
  return <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className="site-header"><div className="header-inner">
      <Link className="wordmark" href="/" aria-label="TrustLab homepage"><Mark /><span>TrustLab<span className="brand-dot">.</span></span></Link>
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
