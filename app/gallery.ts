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
  thumbnail?:string;
  imageAlt:string;
  category:GalleryCategory;
  date?:string;
  caption?:string;
  width?:number;
  height?:number;
};

export const galleryPhotos:GalleryPhoto[] = [
  {
    id:'pricai-2026-venue', title:'PRICAI 2026 in Guangzhou', category:'conferences', date:'2026-11',
    image:'/gallery/pricai-2026-venue.jpg', thumbnail:'/gallery/thumbs/pricai-2026-venue.webp', width:2048, height:1079,
    imageAlt:'PRICAI 2026 conference banner in Guangzhou, China',
    caption:'The 23rd Pacific Rim International Conference on Artificial Intelligence, November 16–20.',
  },
  {
    id:'pricai-2026-shi-lin', title:'Shi Lin at the PRICAI 2026 Poster Session', category:'conferences', date:'2026-11',
    image:'/gallery/pricai-2026-shi-lin.jpg', thumbnail:'/gallery/thumbs/pricai-2026-shi-lin.webp', width:1094, height:1514,
    imageAlt:'Shi Lin standing beside the ReDPJ poster at PRICAI 2026',
    caption:'Shi Lin with the ReDPJ research poster in Guangzhou.',
  },
  {
    id:'pricai-2026-redpj-poster', title:'ReDPJ Poster at PRICAI 2026', category:'conferences', date:'2026-11',
    image:'/gallery/pricai-2026-redpj-poster.jpg', thumbnail:'/gallery/thumbs/pricai-2026-redpj-poster.webp', width:1284, height:1878,
    imageAlt:'Printed ReDPJ research poster on display at PRICAI 2026',
    caption:'Reasoning as a Weapon: Adaptive Dual-Path Jailbreak Attack on Large Language Models.',
  },
  {
    id:'cvpr-workshop-2025', title:'CVPR 2025 Workshop Challenge · Fourth Place', category:'awards', date:'2025-06',
    image:'/gallery/cvpr-workshop-2025.webp', thumbnail:'/gallery/thumbs/cvpr-workshop-2025.webp', width:1450, height:2048,
    imageAlt:'Fourth-place certificate for the CVPR 2025 workshop challenge',
    caption:'Challenge: Jailbreaking Attacks on Multimodal Foundation Models.',
  },
  {
    id:'zjsu-mathematical-modeling-2026', title:'ZJSU Graduate Mathematical Modeling Competition · Third Prize', category:'awards', date:'2026-06',
    image:'/gallery/zjsu-mathematical-modeling-2026-scan.jpg', thumbnail:'/gallery/thumbs/zjsu-mathematical-modeling-2026-scan.webp', width:1946, height:1519,
    imageAlt:'Third-prize certificate for the 2026 ZJSU graduate mathematical modeling competition',
    caption:'Zhejiang Gongshang University.',
  },
  {
    id:'generative-ai-security-2024', title:'Generative AI Security Competition · Merit Award', category:'awards', date:'2024-12',
    image:'/gallery/generative-ai-security-2024.webp', thumbnail:'/gallery/thumbs/generative-ai-security-2024.webp', width:2048, height:1449,
    imageAlt:'Merit award certificate for the 2024 Generative AI Security Competition',
    caption:'Security Attack track.',
  },
  {
    id:'huawei-cup-2024', title:'6th Huawei Cup Graduate AI Innovation Competition · Third Prize', category:'awards', date:'2024-10',
    image:'/gallery/huawei-cup-2024.webp', thumbnail:'/gallery/thumbs/huawei-cup-2024.webp', width:2048, height:1449,
    imageAlt:'Third-prize certificate for the sixth Huawei Cup Graduate AI Innovation Competition',
    caption:'Entry: Analyzing-based Jailbreak.',
  },
  {
    id:'ccf-bdci-rag-2024', title:'2024 CCF BDCI · RAG Challenge', category:'awards', date:'2024-12',
    image:'/gallery/ccf-bdci-rag-2024.webp', thumbnail:'/gallery/thumbs/ccf-bdci-rag-2024.webp', width:1449, height:2048,
    imageAlt:'Certificate for the 2024 CCF BDCI RAG challenge',
    caption:'TuGraph for AI: Retrieval-augmented generation for intelligent question answering. Rank shown on the certificate: 15th.',
  },
  {
    id:'ccf-bdci-graph-query-2024', title:'2024 CCF BDCI · Graph Query Challenge', category:'awards', date:'2024-12',
    image:'/gallery/ccf-bdci-graph-query-2024.webp', thumbnail:'/gallery/thumbs/ccf-bdci-graph-query-2024.webp', width:1449, height:2048,
    imageAlt:'Certificate for the 2024 CCF BDCI graph query challenge',
    caption:'AI for TuGraph: Few-shot fine-tuning for natural language to graph query translation. Rank shown on the certificate: 12th.',
  },
  {
    id:'zjsu-assistantship-star', title:'ZJSU Graduate Assistantship Star · Nomination Award', category:'awards', date:'2026-06',
    image:'/gallery/zjsu-assistantship-star.webp', thumbnail:'/gallery/thumbs/zjsu-assistantship-star.webp', width:2048, height:1448,
    imageAlt:'Graduate Assistantship Star nomination award certificate from Zhejiang Gongshang University',
    caption:'Fifth edition of the university’s Graduate Assistantship Star selection.',
  },
];
