import { areas, projects, supervisorPublications, type ResearchAreaId, type SelectedPublication } from './data';

export type PublicationItem = {
  id:string; title:string; authors?:string; venue:string; year:number;
  kind:'conference'|'journal'|'preprint'; researchAreas:ResearchAreaId[];
  paper?:string; code?:string;
};

// Publication filters and labels use exactly the homepage's three research areas.
// Earlier work outside these areas remains visible under All without an unrelated label.
export const publicationAreas = areas.map(area => ({ id:area.id, name:area.en }));

// Google Scholar profile zUD2t5wAAAAJ, checked against publisher records on 2026-10-21.
// See docs/publications-bibliography.md for duplicate handling and publication-year decisions.
const additionalPublications:SelectedPublication[] = [
  {
    "id": "lmae4eth",
    "title": "LMAE4Eth: Generalizable and Robust Ethereum Fraud Detection by Exploring Transaction Semantics and Masked Graph Embedding",
    "authors": "Yifan Jia, Yanbin Wang, Jianguo Sun, Ye Tian, Peng Qian",
    "venue": "IEEE Transactions on Information Forensics and Security (TIFS)",
    "year": 2025,
    "publicationKind": "journal",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://doi.org/10.1109/tifs.2025.3612149",
    "code": "https://github.com/trustlab-zjsu/LMAE4Eth"
  },
  {
    "id": "defi-review",
    "title": "Comprehensive Review of Smart Contract and DeFi Security: Attack, Vulnerability Detection, and Automated Repair",
    "authors": "Peng Qian, Rui Cao, Zhenguang Liu, Wenqing Li, Ming Li, Lun Zhang, Yufeng Xu, Jianhai Chen, Qinming He",
    "venue": "Expert Systems with Applications (ESWA)",
    "year": 2025,
    "publicationKind": "journal",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://doi.org/10.1016/j.eswa.2025.128431"
  },
  {
    "id": "mecon",
    "title": "Mecon: A GNN-based Graph Classification Framework for MEV Activity Detection",
    "authors": "Zihao Yao, Fanding Huang, Yannan Li, Wei Duan, Peng Qian, Nan Yang, Willy Susilo",
    "venue": "Expert Systems with Applications (ESWA)",
    "year": 2025,
    "publicationKind": "journal",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://doi.org/10.1016/j.eswa.2025.126486",
    "code": "https://github.com/trustlab-zjsu/Mecon"
  },
  {
    "id": "sfuzz",
    "title": "SwFuzz: Structure-Sensitive WebAssembly Fuzzing",
    "authors": "Jiashui Wang, Ziyi Guo, Xinlei Ying, Peng Qian, Yan Chen",
    "venue": "Asia-Pacific Software Engineering Conference (APSEC)",
    "year": 2024,
    "publicationKind": "conference",
    "researchAreas": [],
    "paper": "https://doi.org/10.1109/apsec65559.2024.00045"
  },
  {
    "id": "webaudio",
    "title": "Exploring Depths of WebAudio: Advancing Greybox Fuzzing for Vulnerability Detection in Safari",
    "authors": "Jiashui Wang, Jiahui Wang, Jundong Xie, Zhenyuan Li, Yan Chen, Peng Qian",
    "venue": "Asia-Pacific Software Engineering Conference (APSEC)",
    "year": 2024,
    "publicationKind": "conference",
    "researchAreas": [],
    "paper": "https://doi.org/10.1109/apsec65559.2024.00029"
  },
  {
    "id": "clean-image",
    "title": "Clean-Image Backdoor Attacks",
    "authors": "Dazhong Rong, Guoyao Yu, Shuheng Shen, Xinyi Fu, Peng Qian, Jianhai Chen, Qinming He, Xing Fu, Weiqiang Wang",
    "venue": "International Conference on Artificial Neural Networks (ICANN)",
    "year": 2024,
    "publicationKind": "conference",
    "researchAreas": [],
    "paper": "https://doi.org/10.1007/978-3-031-72359-9_14"
  },
  {
    "id": "insider-threat",
    "title": "Detect Insider Threat with Associated Session Graph",
    "authors": "Junmei Ding, Peng Qian, Jing Ma, Zhiqiang Wang, Yueming Lu, Xiaqing Xie",
    "venue": "Electronics",
    "year": 2024,
    "publicationKind": "journal",
    "researchAreas": [],
    "paper": "https://doi.org/10.3390/electronics13244885",
    "code": "https://github.com/trustlab-zjsu/ASG-ITD"
  },
  {
    "id": "iquery",
    "title": "iQuery: A Trustworthy and Scalable Blockchain Analytics Platform",
    "authors": "Lingling Lu, Zhenyu Wen, Ye Yuan, Binru Dai, Peng Qian, Changting Lin, Qinming He, Zhenguang Liu, Jianhai Chen, Rajiv Ranjan",
    "venue": "IEEE Transactions on Dependable and Secure Computing (TDSC)",
    "year": 2023,
    "publicationKind": "journal",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://doi.org/10.1109/tdsc.2022.3228908"
  },
  {
    "id": "stfn",
    "title": "STFN: Spatio-Temporal Fusion Network to Detect Ethereum Phishing Scams",
    "authors": "Yufeng Xu, Lun Zhang, Turan Vural, Peng Qian, Yanbin Wang, Yuqing Fan, Ming Li, Xueyan Tang, Zheng Cao",
    "venue": "International Conference on Electronic Information Technology and Computer Engineering (EITCE)",
    "year": 2023,
    "publicationKind": "conference",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://doi.org/10.1145/3650400.3650499"
  },
  {
    "id": "contract-survey",
    "title": "Smart Contract Vulnerability Detection Technique: A Survey",
    "authors": "Peng Qian, Zhenguang Liu, Qinming He, Butian Huang, Duanzheng Tian, Xun Wang",
    "venue": "Journal of Software",
    "year": 2022,
    "publicationKind": "journal",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://www.jos.org.cn/1000-9825/6375.htm"
  },
  {
    "id": "ijcai-2020",
    "title": "Smart Contract Vulnerability Detection Using Graph Neural Network",
    "authors": "Yuan Zhuang, Zhenguang Liu, Peng Qian, Qi Liu, Xiang Wang, Qinming He",
    "venue": "International Joint Conference on Artificial Intelligence (IJCAI)",
    "year": 2020,
    "publicationKind": "conference",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://doi.org/10.24963/ijcai.2020/454",
    "code": "https://github.com/trustlab-zjsu/GNNSCVulDetector"
  },
  {
    "id": "reentrancy",
    "title": "Towards Automated Reentrancy Detection for Smart Contracts Based on Sequential Models",
    "authors": "Peng Qian, Zhenguang Liu, Qinming He, Roger Zimmermann, Xun Wang",
    "venue": "IEEE Access",
    "year": 2020,
    "publicationKind": "journal",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://doi.org/10.1109/access.2020.2969429",
    "code": "https://github.com/trustlab-zjsu/ReChecker"
  },
  {
    "id": "digital-rights",
    "title": "Digital Resource Rights Confirmation and Infringement Tracking Based on Smart Contracts",
    "authors": "Peng Qian, Zhenguang Liu, Xun Wang, Jianhai Chen, Bei Wang, Roger Zimmermann",
    "venue": "IEEE International Conference on Cloud Computing and Intelligence Systems (CCIS)",
    "year": 2019,
    "publicationKind": "conference",
    "researchAreas": [
      "contract-security"
    ],
    "paper": "https://doi.org/10.1109/ccis48116.2019.9073733",
    "code": "https://github.com/trustlab-zjsu/Resource-CI"
  }
];

// Keep the supervisor's selected list concise while displaying the complete published catalogue here.
// Projects already represented by a published paper should not be added a second time.
export const publications:PublicationItem[] = [
  ...projects.filter(p => p.kind !== 'manuscript').map(p => ({
    id:'project-' + p.id,
    title:p.en !== 'XXX' ? p.en : p.title,
    authors:p.authors,
    venue:p.status,
    year:Number(p.status.match(/\b(20\d{2})\b/)?.[1] || 0),
    kind:p.kind as PublicationItem['kind'],
    researchAreas:p.researchAreas,
    paper:p.paper,
    code:p.code,
  })),
  ...[...supervisorPublications, ...additionalPublications].map(p => ({
    id:'published-' + p.id,
    title:p.title,
    authors:p.authors,
    venue:p.venue + ' · ' + p.year,
    year:p.year,
    kind:p.publicationKind,
    researchAreas:p.researchAreas,
    paper:p.paper,
    code:p.code,
  })),
].sort((a, b) => b.year - a.year);
