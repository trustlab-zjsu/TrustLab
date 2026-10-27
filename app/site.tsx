'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Building2, Camera, ChevronDown, Code2, FileText, Mail, MapPin, Menu, Network, ShieldCheck, X } from 'lucide-react';
import { areas, projects, news, pages, sectionAliases, labDetails, memberGroups, advisorProfile, supervisorPublications, type Project, type NewsItem } from './data';
import { publications, publicationAreas, type PublicationItem } from './publications';
import { galleryCategories, galleryPhotos } from './gallery';
import { formatNewsDate, isRecentNews, newsYear } from './news-dates';

const nav = [
  ['home', 'Homepage', '/'],
  ['advisor', 'Supervisor', '/advisor'],
  ['members', 'Members', '/members'],
  ['publications', 'Publications', '/publications'],
  ['news', 'News', '/news'],
  ['gallery', 'Gallery', '/gallery'],
];
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
const known = (value?: string) => Boolean(value && value !== 'XXX');

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
  const [previewOpen, setPreviewOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => setFailed(false), [item.image]);
  useEffect(() => {
    if (!previewOpen || !dialogRef.current) return;
    const overflow = document.body.style.overflow;
    const paddingRight = document.body.style.paddingRight;
    const scrollbarGutter = document.documentElement.style.scrollbarGutter;
    const gutterWidth = Math.max(0, window.innerWidth - document.documentElement.getBoundingClientRect().width);
    const currentPadding = parseFloat(getComputedStyle(document.body).paddingRight) || 0;
    document.body.style.paddingRight = `${currentPadding + gutterWidth}px`;
    document.documentElement.style.scrollbarGutter = 'auto';
    document.body.style.overflow = 'hidden';
    if (!dialogRef.current.open) dialogRef.current.showModal();
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      document.documentElement.style.scrollbarGutter = scrollbarGutter;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [previewOpen]);
  return known(item.image) && !failed ? <>
    <a ref={triggerRef} className="news-thumbnail" href={assetPath(item.image!)} target="_blank" rel="noreferrer" aria-haspopup="dialog" aria-label={'Open full-size image: ' + item.title} onClick={event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      setPreviewOpen(true);
    }}>
      <img src={assetPath(item.image!)} alt={item.imageAlt || item.title} width={item.imageWidth || 2400} height={item.imageHeight || 1000} loading="lazy" onError={() => setFailed(true)} />
    </a>
    <dialog ref={dialogRef} className="image-preview" aria-label={'Image preview: ' + item.title} onClose={() => setPreviewOpen(false)} onKeyDown={event => {
      if (event.key === 'Tab') {
        event.preventDefault();
        event.currentTarget.querySelector<HTMLButtonElement>('.image-preview-close')?.focus();
      }
    }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
    }}>
      {previewOpen && <>
        <div className="image-preview-header"><p>{item.title}</p><button type="button" className="image-preview-close" aria-label="Close image preview" onClick={() => dialogRef.current?.close()}><X size={20} /></button></div>
        <div className="image-preview-body"><img src={assetPath(item.image!)} alt={item.imageAlt || item.title} width={item.imageWidth || 2400} height={item.imageHeight || 1000} /></div>
      </>}
    </dialog>
  </> : <div className="news-thumbnail news-thumbnail-placeholder" aria-hidden="true"><FileText size={24} /></div>;
}

function ResearchOverview({ text }: { text: string }) {
  return <p>{text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part)}</p>;
}

function SectionTitle({ title, href }: { title: string; href?: string }) {
  return <div className="section-title"><h2>{title}</h2>{href && <Link href={href}>View all<ArrowUpRight size={14} /></Link>}</div>;
}

function useNewsClock() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 60_000);
    document.addEventListener('visibilitychange', update);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  return now;
}

function NewsDate({ item, now }: { item:NewsItem; now:number | null }) {
  return <div className="news-meta">
    <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
    {isRecentNews(item.date, now) && <span className="news-new" aria-label="News from the last 30 days">New</span>}
  </div>;
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const photos = galleryPhotos.filter(photo => activeCategory === 'all' || photo.category === activeCategory);
  return <section className="panel gallery-panel">
    <div className="gallery-toolbar" role="group" aria-label="Filter photos by category">
      {[{id:'all',name:'All'}, ...galleryCategories].map(category => <button type="button" className="gallery-filter" key={category.id} aria-pressed={activeCategory === category.id} onClick={() => setActiveCategory(category.id)}>{category.name}</button>)}
    </div>
    {photos.length > 0 ? <div className="gallery-grid">{photos.map(photo => <figure className="gallery-photo" key={photo.id}>
      <a className="gallery-photo-link" href={assetPath(photo.image)} target="_blank" rel="noreferrer" aria-label={'Open full-size photo: ' + photo.title}>
        <img src={assetPath(photo.image)} alt={photo.imageAlt} loading="lazy" width={photo.width} height={photo.height} />
      </a>
      <figcaption><h2>{photo.title}</h2>{photo.date && <time dateTime={photo.date}>{formatNewsDate(photo.date)}</time>}{photo.caption && <p>{photo.caption}</p>}</figcaption>
    </figure>)}</div> : <div className="gallery-empty" role="status">
      <div className="gallery-empty-art" aria-hidden="true"><span /><span /><span><Camera size={34} strokeWidth={1.3} /></span></div>
      <p>Photos coming soon</p>
    </div>}
  </section>;
}

function Sidebar() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  return <aside className="lab-profile" aria-label="About TrustLab">
    <noscript><style>{'@media(max-width:600px){.sidebar-extra{display:block!important}.sidebar-toggle{display:none!important}}'}</style></noscript>
    <Link className="identity" href="/" aria-label="TrustLab homepage">
      <Mark /><div><h2>TrustLab</h2><p>Trustworthy AI &amp; System Security</p></div>
    </Link>
    <div className="affiliation"><Building2 size={17} /><div><strong>Zhejiang Gongshang University</strong><p>College of Computer Science and Technology</p></div></div>
    <div className="sidebar-links">
      <a href="https://github.com/trustlab-zjsu" target="_blank" rel="noreferrer"><Github size={15} />GitHub<ArrowUpRight size={12} /></a>
      <Link href="/contact"><Mail size={15} />Contact</Link>
      <button type="button" className="sidebar-toggle" aria-label={detailsOpen ? 'Hide lab details' : 'Show lab details'} aria-expanded={detailsOpen} aria-controls="lab-details" onClick={() => setDetailsOpen(!detailsOpen)}>Lab info<ChevronDown size={14} /></button>
    </div>
    <div id="lab-details" className={detailsOpen ? 'sidebar-extra is-expanded' : 'sidebar-extra'}>
      <p className="location"><MapPin size={16} />Hangzhou, China</p>
      <dl className="sidebar-details">
        <div><dt>Supervisor</dt><dd><Link href="/advisor">Peng Qian (钱鹏)</Link><span>Associate Research Fellow</span></dd></div>
        <div><dt>Office</dt><dd><span className="office-line">Room 402-1</span><span className="office-line">Teaching Building 3</span><span className="office-line">Jiaogong Road Campus</span></dd></div>
      </dl>
    </div>
  </aside>;
}

function Home() {
  const now = useNewsClock();
  return <>
    <section className="panel welcome">
      <h1>Welcome to <span>TrustLab</span></h1>
      <p className="welcome-tagline">Advancing Security and Trust in Intelligent and Decentralized Systems.</p>
      <p>TrustLab is a research group at Zhejiang Gongshang University dedicated to improving the security, reliability, and trustworthiness of emerging technologies. Our research covers <strong>LLM safety and security</strong>, <strong>Trustworthy Agent Systems</strong>, and <strong>Blockchain &amp; Smart Contract Security</strong>. We focus on uncovering emerging threats, developing innovative security solutions, and building trustworthy, intelligent, and decentralized systems.</p>
    </section>
    <section className="panel home-section">
      <SectionTitle title="News" href="/news" />
      <div className="news-list">{news.slice(0,4).map(n => <article className="news-row" key={n.id}>
        <NewsThumbnail item={n} /><div className="news-row-copy"><NewsDate item={n} now={now} /><Link href={'/news#' + n.id}>{n.title}<ArrowUpRight size={14} /></Link></div>
      </article>)}</div>
    </section>
    <section className="panel home-section" id="research">
      <SectionTitle title="Research" href="/publications" />
      <div className="home-research-grid">{areas.map(area => <Link key={area.id} href={'/publications?area=' + area.id + '#conference-papers'} id={area.id} className="home-research-card">
        <div className="research-card-top"><span className="research-icon" aria-hidden="true">{area.icon === 'shield' ? <ShieldCheck size={20} /> : area.icon === 'network' ? <Network size={20} /> : <Code2 size={20} />}</span><ArrowUpRight size={15} aria-hidden="true" /></div>
        <h3>{area.en}</h3><ResearchOverview text={area.overview} />
      </Link>)}</div>
    </section>
  </>;
}

function ProfileField({ label, value, href }: { label: string; value: string; href?: string }) {
  return <div><dt>{label}</dt><dd>{known(value) && href ? <a href={href} target="_blank" rel="noreferrer">{label === 'GitHub' && <Github size={15} />}{value}<ArrowUpRight size={13} /></a> : label === 'Office' ? <OfficeAddress value={value} /> : value}</dd></div>;
}

function OfficeAddress({ value }: { value: string }) {
  const parts = value.split(/,\s*/);
  const lines = parts.length > 2 ? [parts.slice(0, 2).join(', '), ...parts.slice(2)] : [value];
  return <span className="office-address">{lines.map((line, i) => <span key={i}>{line}</span>)}</span>;
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
  return <>{memberGroups.filter(group => group.members.length > 0).map(group => <section className="member-group" key={group.id} id={group.id}>
    <SectionTitle title={group.title} />
    <div className="member-grid">{group.members.map((member, i) => <article className="member-card" key={i}>
      {known(member.homepage) ? <a href={member.homepage} target="_blank" rel="noreferrer">
        <div className="member-portrait"><Portrait className="member-photo" photo={member.photo} name={member.name} /></div><h3><PersonName name={member.name} /></h3>
      </a> : <><div className="member-portrait"><Portrait className="member-photo" photo={member.photo} name={member.name} /></div><h3><PersonName name={member.name} /></h3></>}
      <p className="member-year">{known(member.year) ? member.year + ' Cohort' : 'XXX'}</p>
      <p className="member-research">{member.research}</p>
      {known(member.scholar) && <a href={member.scholar} className="text-link" target="_blank" rel="noreferrer"><ScholarIcon />Google Scholar<ArrowUpRight size={13} /></a>}
    </article>)}</div>
  </section>)}</>;
}

function PaperRow({ p, onAreaSelect }: { p: PublicationItem; onAreaSelect: (id:string) => void }) {
  return <article className="paper-row">
    {p.researchAreas.length > 0 && <div className="paper-tags" aria-label="Research areas">{p.researchAreas.map(id => {
      const area = publicationAreas.find(item => item.id === id);
      return area ? <button type="button" className={'research-tag tag-' + id} key={id} onClick={() => onAreaSelect(id)}>{area.name}</button> : null;
    })}</div>}
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
      const areaId = requestedArea === 'all' || publicationAreas.some(area => area.id === requestedArea) ? requestedArea : 'all';
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
        {[{id:'all',name:'All'}, ...publicationAreas].map(area => <button
          type="button"
          key={area.id}
          className="area-filter"
          aria-pressed={activeArea === area.id}
          onClick={() => selectArea(area.id)}
        >{area.name}</button>)}
      </div>
    </div>
    {categories.map(category => {
    const entries = publications.filter(p => p.kind === category.kind && (activeArea === 'all' || p.researchAreas.some(id => id === activeArea)));
    return <section
      className="publication-panel"
      id={category.id}
      key={category.id}
      role="tabpanel"
      aria-labelledby={'tab-' + category.id}
      hidden={activeCategory !== category.id}
      tabIndex={0}
    >
      {entries.length ? <div className="paper-list">{entries.map(p => <PaperRow key={p.id} p={p} onAreaSelect={selectArea} />)}</div> : <p className="empty-list">No {category.title.toLowerCase()}{activeArea !== 'all' ? ` in ${publicationAreas.find(area => area.id === activeArea)?.name}` : ''} yet.</p>}
    </section>;
    })}
  </div>;
}

function News() {
  const now = useNewsClock();
  const years = [...new Set(news.map(item => newsYear(item.date)))].sort((a, b) => Number(b) - Number(a));
  return <div className="panel news-archive">{years.map(year => <section className="news-year-group" key={year} aria-labelledby={'news-year-' + year}>
    <div className="news-year-heading"><h2 id={'news-year-' + year}>{year}</h2></div>
    <div>{news.filter(item => newsYear(item.date) === year).map(n => <article className="news-item" id={n.id} key={n.id}>
      <NewsThumbnail item={n} /><div className="news-item-copy"><NewsDate item={n} now={now} /><h3>{n.title}</h3><p>{n.body}</p>
        <div className="paper-links"><a href={n.href} target="_blank" rel="noreferrer">{n.linkLabel || 'Paper'}{n.linkLabel ? <ArrowUpRight size={13} /> : <FileText size={13} />}</a>
          {n.code && <a href={n.code} target="_blank" rel="noreferrer"><Github size={13} />Code</a>}
        </div></div>
    </article>)}</div>
  </section>)}</div>;
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
  const navigationRef = useRef<HTMLElement>(null);
  const section = sectionAliases[requestedSection] || requestedSection;
  const work = projects.find(p => p.id === projectId);
  const current = section === 'project-detail' ? (work?.kind === 'manuscript' ? 'home' : 'publications') : section;
  const page = pages[section];
  useEffect(() => {
    const navigation = navigationRef.current;
    if (!navigation) return;
    let frame = 0;
    let disposed = false;
    const placeLens = (link = navigation.querySelector<HTMLElement>('[aria-current="page"]')) => {
      if (!link || !navigation.getBoundingClientRect().width) {
        delete navigation.dataset.lens;
        return;
      }
      navigation.style.setProperty('--lens-x', `${link.offsetLeft}px`);
      navigation.style.setProperty('--lens-y', `${link.offsetTop}px`);
      navigation.style.setProperty('--lens-width', `${link.offsetWidth}px`);
      navigation.style.setProperty('--lens-height', `${link.offsetHeight}px`);
      navigation.dataset.lens = 'ready';
    };
    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => { if (!disposed) placeLens(); });
    };
    const preview = (event: Event) => {
      if (event instanceof PointerEvent && event.pointerType === 'touch') return;
      const link = event.target instanceof Element ? event.target.closest<HTMLElement>('a') : null;
      if (link && navigation.contains(link)) placeLens(link);
    };
    const restore = () => placeLens();
    const observer = new ResizeObserver(update);
    observer.observe(navigation);
    navigation.querySelectorAll('a').forEach(link => observer.observe(link));
    navigation.addEventListener('pointerover', preview);
    navigation.addEventListener('pointerleave', restore);
    navigation.addEventListener('focusin', preview);
    navigation.addEventListener('focusout', restore);
    document.fonts.ready.then(() => { if (!disposed) update(); });
    update();
    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      navigation.removeEventListener('pointerover', preview);
      navigation.removeEventListener('pointerleave', restore);
      navigation.removeEventListener('focusin', preview);
      navigation.removeEventListener('focusout', restore);
    };
  }, [current, menu]);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedTransparency = window.matchMedia('(prefers-reduced-transparency: reduce)');
    if (!finePointer.matches || reducedMotion.matches || reducedTransparency.matches) return;
    let frame = 0;
    let surface:HTMLElement | null = null;
    let pending:{target:HTMLElement | null;x:number;y:number} | null = null;
    const clear = () => {
      surface?.style.removeProperty('--light-x');
      surface?.style.removeProperty('--light-y');
      surface = null;
    };
    const move = (event:PointerEvent) => {
      if (event.pointerType === 'touch' || reducedMotion.matches || reducedTransparency.matches || !finePointer.matches) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('.header-inner, .lab-profile, .welcome, .home-research-card, .member-card, .gallery-photo') : null;
      pending = {target,x:event.clientX,y:event.clientY};
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (!pending) return;
        if (surface !== pending.target) { clear(); surface = pending.target; }
        if (!surface) return;
        const bounds = surface.getBoundingClientRect();
        surface.style.setProperty('--light-x', `${((pending.x - bounds.left) / bounds.width) * 100}%`);
        surface.style.setProperty('--light-y', `${((pending.y - bounds.top) / bounds.height) * 100}%`);
      });
    };
    const leave = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      pending = null;
      clear();
    };
    document.addEventListener('pointermove', move, {passive:true});
    document.addEventListener('pointerleave', leave);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      clear();
    };
  }, []);
  const content: Record<string, ReactNode> = {
    home: <Home />, advisor: <Advisor />, members: <Members />,
    publications: <Publications />, news: <News />, gallery: <Gallery />, contact: <Contact />, resources: <Resources />,
  };
  return <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && menu) { setMenu(false); document.getElementById('menu-toggle')?.focus(); } }}><div className="header-inner">
      <Link className="wordmark" href="/" aria-label="TrustLab homepage"><Mark /><span>TrustLab</span></Link>
      <nav ref={navigationRef} id="main-nav" aria-label="Main navigation" className={menu ? 'main-nav open' : 'main-nav'}>
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
