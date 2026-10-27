export const galleryCategories = [
  {id:'lab', name:'Laboratory'},
  {id:'awards', name:'Awards'},
  {id:'competitions', name:'Competitions'},
  {id:'projects', name:'Projects'},
  {id:'group', name:'Group Photos'},
  {id:'conferences', name:'Conferences'},
] as const;

export type GalleryCategory = typeof galleryCategories[number]['id'];
export type GalleryPhoto = {
  id:string;
  title:string;
  image:string;
  imageAlt:string;
  category:GalleryCategory;
  date?:string;
  caption?:string;
  width?:number;
  height?:number;
};

// Add original photos and confirmed English captions here. Gallery is published
// with an intentional empty state until photos are supplied; no sample photos or awards are invented.
export const galleryPhotos:GalleryPhoto[] = [];
