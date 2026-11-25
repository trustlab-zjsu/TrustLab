export const galleryCategories = [
  {id:'lab', name:'Laboratory'},
  {id:'awards', name:'Awards'},
  {id:'conferences', name:'Conferences'},
] as const;

export type GalleryCategory = typeof galleryCategories[number]['id'];
export type GalleryImage = {
  image:string;
  thumbnail?:string;
  imageAlt:string;
  width?:number;
  height?:number;
};
export type GalleryItem = {
  id:string;
  title:string;
  category:GalleryCategory;
  date:string;
  dateLabel?:string;
  photos:[GalleryImage, ...GalleryImage[]];
};

export const galleryItems:GalleryItem[] = [
  {
    id:'pricai-2026', title:'PRICAI 2026 in Guangzhou', category:'conferences', date:'2026-11', dateLabel:'Nov 16–20, 2026',
    photos:[
      {
        image:'/gallery/pricai-2026-venue.jpg', thumbnail:'/gallery/thumbs/pricai-2026-venue.webp', width:2048, height:1079,
        imageAlt:'PRICAI 2026 conference banner in Guangzhou, China',
      },
      {
        image:'/gallery/pricai-2026-shi-lin.jpg', thumbnail:'/gallery/thumbs/pricai-2026-shi-lin.webp', width:1094, height:1514,
        imageAlt:'Shi Lin standing beside the ReDPJ poster at PRICAI 2026',
      },
      {
        image:'/gallery/pricai-2026-redpj-poster.jpg', thumbnail:'/gallery/thumbs/pricai-2026-redpj-poster.webp', width:1284, height:1878,
        imageAlt:'Printed ReDPJ research poster on display at PRICAI 2026',
      },
    ],
  },
  {
    id:'cvpr-workshop-2025', title:'CVPR 2025 Workshop Challenge · Fourth Place', category:'awards', date:'2025-06',
    photos:[{
      image:'/gallery/cvpr-workshop-2025.webp', thumbnail:'/gallery/thumbs/cvpr-workshop-2025.webp', width:1450, height:2048,
      imageAlt:'Fourth-place certificate for the CVPR 2025 workshop challenge',
    }],
  },
  {
    id:'zjsu-mathematical-modeling-2026', title:'ZJSU Graduate Mathematical Modeling Competition · Third Prize', category:'awards', date:'2026-06',
    photos:[{
      image:'/gallery/zjsu-mathematical-modeling-2026-scan.jpg?v=2', thumbnail:'/gallery/thumbs/zjsu-mathematical-modeling-2026-scan.webp?v=2', width:1910, height:1389,
      imageAlt:'Third-prize certificate for the 2026 ZJSU graduate mathematical modeling competition',
    }],
  },
  {
    id:'generative-ai-security-2024', title:'Generative AI Security Competition · Merit Award', category:'awards', date:'2024-12',
    photos:[{
      image:'/gallery/generative-ai-security-2024.webp', thumbnail:'/gallery/thumbs/generative-ai-security-2024.webp', width:2048, height:1449,
      imageAlt:'Merit award certificate for the 2024 Generative AI Security Competition',
    }],
  },
  {
    id:'huawei-cup-2024', title:'6th Huawei Cup Graduate AI Innovation Competition · Third Prize', category:'awards', date:'2024-10',
    photos:[{
      image:'/gallery/huawei-cup-2024.webp', thumbnail:'/gallery/thumbs/huawei-cup-2024.webp', width:2048, height:1449,
      imageAlt:'Third-prize certificate for the sixth Huawei Cup Graduate AI Innovation Competition',
    }],
  },
  {
    id:'ccf-bdci-rag-2024', title:'2024 CCF BDCI RAG Challenge · Certificate Rank: 15th', category:'awards', date:'2024-12',
    photos:[{
      image:'/gallery/ccf-bdci-rag-2024.webp', thumbnail:'/gallery/thumbs/ccf-bdci-rag-2024.webp', width:1449, height:2048,
      imageAlt:'Certificate for the 2024 CCF BDCI RAG challenge',
    }],
  },
  {
    id:'ccf-bdci-graph-query-2024', title:'2024 CCF BDCI Graph Query Challenge · Certificate Rank: 12th', category:'awards', date:'2024-12',
    photos:[{
      image:'/gallery/ccf-bdci-graph-query-2024.webp', thumbnail:'/gallery/thumbs/ccf-bdci-graph-query-2024.webp', width:1449, height:2048,
      imageAlt:'Certificate for the 2024 CCF BDCI graph query challenge',
    }],
  },
  {
    id:'zjsu-assistantship-star', title:'ZJSU Graduate Assistantship Star · Nomination Award', category:'awards', date:'2026-06',
    photos:[{
      image:'/gallery/zjsu-assistantship-star.webp', thumbnail:'/gallery/thumbs/zjsu-assistantship-star.webp', width:2048, height:1448,
      imageAlt:'Graduate Assistantship Star nomination award certificate from Zhejiang Gongshang University',
    }],
  },
];

export const galleryAlbums = galleryItems.filter(item => item.photos.length > 1);
