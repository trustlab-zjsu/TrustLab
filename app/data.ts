export type Project = {id:string; name:string; title:string; en:string; area:string; status:string; kind:'conference'|'journal'|'preprint'|'manuscript'; summary:string; problem:string; method:string[]; tags:string[]; authors?:string; paper?:string; code?:string};
export const projects:Project[] = [
 {
  id:'recast',name:'RECAST',title:'Forecasting Safety Risks Across Multi-turn Conversations',
  en:'Forecasting Trajectory-Level Safety Risks in Black-Box Multi-Turn Interactions',
  authors:'Shi Lin, Peng Qian, Dinghao Liu, Renjie Sun, Sifan Wu, Dezhang Kong, Chenpei Wang, Xun Wang',
  paper:'https://arxiv.org/abs/2607.26820',area:'LLM Safety',status:'Preprint · 2026',kind:'preprint',
  summary:'Model how risks accumulate along a conversation and issue warnings before a safety failure occurs.',
  problem:'Single-turn checks can overlook risks that develop across an interaction. We study whether a conversation prefix can reveal the likelihood and timing of a future first safety failure.',
  method:[
   'Combine local interaction windows with long-term memory to represent risk at multiple timescales.',
   'Revisit historical evidence in the context of the current turn to identify changes in risk.',
   'Estimate first-failure risk within a future window to support timely intervention.'
  ],tags:['Multi-turn Interaction','Risk Trajectories','Early Warning']
 },
 {
  id:'halluprop',name:'HalluProp',title:'Inferring Hallucination Risks Before Agents Interact',
  en:'Before Agents Speak: Pre-hoc Failure Risk Inference in Multi-Agent Systems',
  authors:'Shi Lin, Chenpei Wang, Peng Qian, Dezhang Kong, Minghao Li, Yufeng Li, Xun Wang',
  paper:'https://arxiv.org/abs/2607.26836',area:'Trustworthy Agents',status:'Preprint · 2026',kind:'preprint',
  summary:'Use role semantics and communication topology to infer intrinsic agent risks and their potential propagation.',
  problem:'A local error can spread through a multi-agent communication network. Evaluating answers only after interaction ends provides limited guidance for preventive system configuration.',
  method:[
   'Estimate agent capability and susceptibility from task and role information.',
   'Model information transfer and risk propagation along communication links.',
   'Combine intrinsic risk with propagation effects to identify agents requiring closer attention.'
  ],tags:['Pre-interaction Inference','Communication Topology','Risk Propagation']
 },
 {
  id:'evoguard',name:'EvoGuard',title:'Governing Multi-agent Hallucinations Through Evolutionary Games',
  en:'XXX',area:'Trustworthy Agents',status:'Research Manuscript',kind:'manuscript',
  summary:'Adapt agent strategies and communication structures to reduce hallucinations while preserving useful collaboration.',
  problem:'Removing risky agents or communication links may contain errors but also weaken collective reasoning. We study how to balance risk mitigation and collaboration as interactions evolve.',
  method:[
   'Continuously estimate intrinsic node risk, edge transmission effects, and propagated risk.',
   'Integrate self-reflection, topology governance, and strategy evolution into a shared governance process.',
   'Adapt strategies and topology using interaction feedback while retaining beneficial information flow.'
  ],tags:['Evolutionary Games','Adaptive Governance','Collaboration Preservation']
 },
 {
  id:'lara',name:'LARA',title:'Retrieval-augmented LLM Guidance for Smart Contract Fuzzing',
  en:'Unlocking Underexplored States: LLM-Enhanced Smart Contract Fuzzing with Retrieval-Augmented Generation',
  area:'Contract Security',status:'Research Manuscript',kind:'manuscript',
  summary:'Combine vulnerability knowledge retrieval with LLM reasoning to explore deeper contract states and vulnerability-triggering paths.',
  problem:'Smart contract vulnerabilities often require specific transaction sequences and state conditions. Conventional input mutation can struggle to cover these deeper states.',
  method:[
   'Retrieve vulnerability knowledge relevant to a target contract to provide analysis context.',
   'Use LLM reasoning about contract logic and state constraints to generate targeted test inputs.',
   'Incorporate execution feedback to guide further testing toward underexplored states.'
  ],tags:['Retrieval Augmentation','Vulnerability Discovery','Fuzzing']
 },
 {
  id:'redpj',name:'ReDPJ',title:'Adaptive Reasoning Guidance for LLM Jailbreak Testing',
  en:'Reasoning as a Weapon: Adaptive Dual-Path Jailbreak Attack on Large Language Models',
  authors:'Shi Lin, Peng Qian, Hongming Yang, Renjie Sun, Dezhang Kong, Xun Wang',
  paper:'https://arxiv.org/abs/2407.16205',code:'https://github.com/theshi-1128/ReDPJ',
  area:'LLM Safety',status:'PRICAI 2026 · Accepted',kind:'conference',
  summary:'Explore risky reasoning paths through adaptive testing to better understand the safety boundaries of large language models.',
  problem:'Fixed prompts provide limited coverage of the reasoning paths that may lead to model failures. Safety evaluation needs to examine potential failure modes across different reasoning strategies.',
  method:[
   'Use a two-stage reasoning-guidance process to organize diverse safety-testing paths.',
   'Adapt testing strategies in response to feedback from the target model.',
   'Analyze outcomes and failure patterns to inform defensive research.'
  ],tags:['Safety Evaluation','Adaptive Reasoning','Adversarial Testing']
 }
];
export const areas=[
 {
  id:'llm-safety',name:'LLM Safety & Security',en:'LLM Safety & Security',icon:'shield',
  description:'Explore the safety and security of large language models, and improve their robustness, reliability, and trustworthiness.',
  overview:'We study **LLM safety and security**, focusing on the risks and challenges involved in developing and using large language models. Our goal is to improve their **safety, robustness, and reliability** across a wide range of applications.',
  projects:['recast','redpj']
 },
 {
  id:'agent-trust',name:'Trustworthy Agent Systems',en:'Trustworthy Agent Systems',icon:'network',
  description:'Study the security and reliability of intelligent agents and collaborative systems for safe, effective task execution.',
  overview:'We explore **trustworthy agent systems**, including both individual agents and collaborative multi-agent systems. Our research focuses on **security and reliability**, with the goal of enabling intelligent agents to carry out tasks and work together safely and effectively in complex environments.',
  projects:['halluprop','evoguard']
 },
 {
  id:'contract-security',name:'Blockchain & Smart Contract Security',en:'Blockchain & Smart Contract Security',icon:'code',
  description:'Investigate the security of decentralized systems and smart contracts to support reliable blockchain technologies and applications.',
  overview:'We study **blockchain and smart contract security**, focusing on the security challenges of decentralized systems and applications. Our research aims to improve **security, reliability, and trust** in blockchain technologies and support their safe deployment and practical use.',
  projects:['lara']
 }
];
export type NewsItem = {id:string;date:string;title:string;body:string;href:string;image?:string;imageAlt?:string};
// Add image paths (for example /news/paper-overview.png) when confirmed images are available.
export const news:NewsItem[]=[
 {id:'exchange',date:'2026.09',title:'Academic exchange on agent and generative content security',body:'We shared research observations from a security forum on agent security, generative content security, and vulnerability discovery.',href:'/news#exchange'},
 {id:'redpj',date:'2026',title:'ReDPJ accepted at PRICAI 2026',body:'Our paper studies adaptive dual-path jailbreak attacks on large language models.',href:'/publications#conference-papers'}
];
export const pages:Record<string,{title:string}>= {
 advisor:{title:'Supervisor'},
 members:{title:'Members'},
 research:{title:'Research'},
 publications:{title:'Publications'},
 news:{title:'News'},
 contact:{title:'Contact'},
 resources:{title:'Learning & Teaching'}
};

// Keep previously published URLs working without adding them to the navigation.
export const sectionAliases:Record<string,string> = {
 people:'members', community:'news', join:'contact', projects:'publications'
};

// Replace literal XXX values with confirmed laboratory information.
export const labDetails = {
 email:'messi.qp711@gmail.com',office:'Room 402-1, Teaching Building 3, Jiaogong Road Campus, Zhejiang Gongshang University',admissions:'XXX',
 admissionQuota:'XXX',applicationDeadline:'XXX',
 academicAppointments:'XXX',programCommittees:'XXX',reviewing:'XXX',
 courses:'XXX',teachingMaterials:'XXX'
};

// Confirmed supervisor details; unprovided optional records remain placeholders.
export const advisorProfile = {
 name:'钱鹏',title:'Associate Research Fellow',photo:'/members/qian-peng.jpg',
 department:'College of Computer Science and Technology',
 institution:'Zhejiang Gongshang University',
 bio:`Peng Qian is an Associate Research Fellow at the College of Computer Science and Technology, Zhejiang Gongshang University, China, where he is a member of the research team led by Prof. Xun Wang (王勋). He received his Ph.D. in Artificial Intelligence from Zhejiang University in 2025 under the supervision of Prof. Qinming He (何钦铭). He was also a Visiting Scholar at the National University of Singapore, where he conducted research under the guidance of Prof. Roger Zimmermann.

His research interests span AI security, large language model (LLM) and multi-agent system security, blockchain security, and smart contract vulnerability detection. He has published over 20 papers in leading journals and conferences, including IEEE TSE, IEEE TIFS, IEEE TKDE, ICSE, ISSTA, and WWW. He has received several academic honors, including the National Scholarship for Graduate Students, the Best Paper Runner-up Award at IEEE CCIS 2019, and recognition for a 2024 High-Impact Paper in the Journal of Software (软件学报). He has also served as a program committee member or reviewer for leading conferences and journals, including AAAI, NeurIPS, IEEE TIFS, ACM TOSEM, and IEEE TNSM.`,
 research:'His research interests include **AI safety and security**, **blockchain and smart contract security**, and **vulnerability discovery**. He studies how to understand and mitigate risks in intelligent and decentralized systems, with the goal of improving their safety, robustness, and reliability. His work also explores methods for discovering software vulnerabilities and strengthening the security of complex computing systems.',
 education:[{period:'XXX',degree:'XXX',institution:'XXX'}],
 experience:[{period:'XXX',position:'XXX',institution:'XXX'}],
 awards:['XXX'],service:['XXX'],teaching:['XXX'],
 email:'messi.qp711@gmail.com',office:'Room 402-1, Teaching Building 3, Jiaogong Road Campus, Zhejiang Gongshang University',homepage:'XXX',scholar:'https://scholar.google.com/citations?user=zUD2t5wAAAAJ',cv:'XXX'
};

export type SelectedPublication = {id:string;title:string;authors:string;venue:string;year:number;paper:string;corresponding?:boolean};
// Selected supervisor papers, kept separate from the laboratory publication tabs.
// Conference details and publisher/author records were checked against the supplied bibliography.
export const supervisorPublications:SelectedPublication[] = [
 {
  id:'echofuzz',title:'EchoFuzz: Empowering Smart Contract Fuzzing with Large Language Models',
  authors:'Juanen Li, Peng Qian, Guanyan Li, Rui Wang, Peixin Wang, Zhiqing Tang, Fuchen Ma, Yuanliang Chen, Lun Zhang',
  venue:'International Conference on Software Engineering (ICSE)',year:2026,
  paper:'https://conf.researchr.org/details/icse-2026/icse-2026-research-track/124/EchoFuzz-Empowering-Smart-Contract-Fuzzing-with-Large-Language-Models'
 },
 {
  id:'freewavm',title:'FreeWavm: Enhanced WebAssembly Runtime Fuzzing Guided by Parse Tree Mutation and Snapshot',
  authors:'Peng Qian, Xinlei Ying, Jiashui Wang, Long Liu, Lun Zhang, Jianhai Chen, Qinming He',
  venue:'ACM International Symposium on Software Testing and Analysis (ISSTA)',year:2025,
  paper:'https://doi.org/10.1145/3728877'
 },
 {
  id:'mufuzz',title:'MuFuzz: Sequence-Aware Mutation and Seed Mask Guidance for Blockchain Smart Contract Fuzzing',
  authors:'Peng Qian, Hanjie Wu, Zeren Du, Turan Vural, Dazhong Rong, Zheng Cao, Lun Zhang, Yanbin Wang, Jianhai Chen, Qinming He',
  venue:'IEEE International Conference on Data Engineering (ICDE)',year:2024,
  paper:'https://ieeexplore.ieee.org/document/10597778/'
 },
 {
  id:'tacoma',title:'Tacoma: Enhanced Browser Fuzzing with Fine-Grained Semantic Alignment',
  authors:'Jiashui Wang, Peng Qian, Xilin Huang, Xinlei Ying, Yan Chen, Shouling Ji, Jianhai Chen, Jundong Xie, Long Liu',
  venue:'ACM International Symposium on Software Testing and Analysis (ISSTA)',year:2024,corresponding:true,
  paper:'https://doi.org/10.1145/3650212.3680351'
 },
 {
  id:'random-number',title:'Demystifying Random Number in Ethereum Smart Contract: Taxonomy, Vulnerability Identification, and Attack Detection',
  authors:'Peng Qian, Jianting He, Lingling Lu, Siwei Wu, Zhipeng Lu, Lei Wu, Yajin Zhou, Qinming He',
  venue:'IEEE Transactions on Software Engineering (TSE)',year:2023,
  paper:'https://doi.org/10.1109/TSE.2023.3271417'
 },
 {
  id:'cross-modality',title:'Cross-Modality Mutual Learning for Enhancing Smart Contract Vulnerability Detection on Bytecode',
  authors:'Peng Qian, Zhenguang Liu, Yifang Yin, Qinming He',
  venue:'The ACM Web Conference (WWW)',year:2023,
  paper:'https://doi.org/10.1145/3543507.3583367'
 },
 {
  id:'ir-fuzz',title:'Rethinking Smart Contract Fuzzing: Fuzzing With Invocation Ordering and Important Branch Revisiting',
  authors:'Zhenguang Liu, Peng Qian, Jiaxu Yang, Lingfeng Liu, Xiaojun Xu, Qinming He, Xiaosong Zhang',
  venue:'IEEE Transactions on Information Forensics and Security (TIFS)',year:2023,corresponding:true,
  paper:'https://doi.org/10.1109/TIFS.2023.3237370'
 },
 {
  id:'graph-expert',title:'Combining Graph Neural Networks With Expert Knowledge for Smart Contract Vulnerability Detection',
  authors:'Zhenguang Liu, Peng Qian, Xiaoyang Wang, Yuan Zhuang, Lin Qiu, Xun Wang',
  venue:'IEEE Transactions on Knowledge and Data Engineering (TKDE)',year:2023,corresponding:true,
  paper:'https://doi.org/10.1109/TKDE.2021.3095196'
 }
];

export type Member = {name:string;photo:string;research:string;homepage?:string;scholar?:string;email?:string;year?:string};
export const memberGroups:{id:string;title:string;members:Member[]}[] = [
 {id:'phd',title:'Ph.D. Students',members:[{name:'林石',photo:'/members/lin-shi.jpg',year:'2025',research:'LLM Safety & Security · Trustworthy Agent Systems',homepage:'XXX',scholar:'https://scholar.google.com/citations?user=00pnoYAAAAAJ&hl=zh-CN',email:'XXX'}]},
 {id:'masters',title:'Graduate Students',members:[
  {name:'李昊泽',photo:'/members/li-haoze.jpg',year:'2025',research:'Blockchain & Smart Contract Security',homepage:'XXX',email:'XXX'},
  {name:'陈行栋',photo:'/members/chen-xingdong.jpg',year:'2026',research:'Trustworthy Agent Systems',homepage:'XXX',email:'XXX'},
  {name:'范明锐',photo:'/members/fan-mingrui.jpg',year:'2026',research:'Blockchain & Smart Contract Security',homepage:'XXX',email:'XXX'},
  {name:'王陈培',photo:'/members/wang-chenpei.jpg',year:'2025',research:'Trustworthy Agent Systems',homepage:'XXX',email:'XXX'}
 ]},
 {id:'undergraduates',title:'Undergraduate Students',members:[
  {name:'吴承宇',photo:'/members/wu-chengyu.jpg',year:'2024',research:'Blockchain & Smart Contract Security',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'}
 ]}
];
