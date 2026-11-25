import { notFound } from 'next/navigation';
import { galleryAlbums } from '../../gallery';
import { LabSite } from '../../site';

type Params = { params:Promise<{album:string}> };

export const dynamicParams = false;
export function generateStaticParams() {
  return galleryAlbums.map(item => ({album:item.id}));
}

export async function generateMetadata({ params }: Params) {
  const { album } = await params;
  return {title:galleryAlbums.find(item => item.id === album)?.title ?? 'Album not found'};
}

export default async function AlbumPage({ params }: Params) {
  const { album } = await params;
  const item = galleryAlbums.find(entry => entry.id === album);
  if (!item) notFound();
  return <LabSite section="gallery" album={item} />;
}
