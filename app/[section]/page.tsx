import { notFound } from 'next/navigation';
import { LabSite } from '../site';
import { pages, sectionAliases } from '../data';
export async function generateMetadata({params}:{params:Promise<{section:string}>}) { const {section}=await params; return {title:pages[sectionAliases[section] || section]?.title||'Page not found'}; }
export default async function Page({params}:{params:Promise<{section:string}>}) { const {section}=await params; if(!pages[sectionAliases[section] || section])notFound(); return <LabSite section={section}/>; }

export const dynamicParams = false;
export function generateStaticParams(){ return [...Object.keys(pages), ...Object.keys(sectionAliases)].map(section => ({section})); }
