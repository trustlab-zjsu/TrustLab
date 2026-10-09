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
  description:'Study safety failures, adversarial attacks, and defenses in large language models, with an emphasis on risks across multi-turn conversations.',
  overview:'We study **LLM safety and security** across both individual responses and multi-turn conversations. Our research examines how **jailbreak attacks** and other adversarial inputs influence model behavior, how risks accumulate as an interaction unfolds, and which signals appear before a safety failure. We develop methods for **risk modeling and early warning**, alongside evaluation and defense strategies that help identify unsafe trajectories and support timely intervention while preserving the usefulness of language models.',
  projects:['recast','redpj']
 },
 {
  id:'agent-trust',name:'Trustworthy Agent Systems',en:'Trustworthy Agent Systems',icon:'network',
  description:'Understand how errors and security risks spread through agent collaboration, and develop methods for reliable reasoning, communication, and tool use.',
  overview:'We investigate the reliability and security of **agent and multi-agent systems**, where information, decisions, and tool calls are connected through ongoing collaboration. We study **hallucination and risk propagation**, the influence of agent roles and communication topology, and the risks introduced by delegation and tool use. Our goal is to develop **trustworthy collaboration** through risk inference, adaptive mitigation, and system design that contains errors and unsafe behavior while retaining useful information flow and collective problem-solving.',
  projects:['halluprop','evoguard']
 },
 {
  id:'contract-security',name:'Blockchain & Smart Contract Security',en:'Blockchain & Smart Contract Security',icon:'code',
  description:'Investigate blockchain and smart contract security through program analysis, vulnerability discovery, and testing guided by language models.',
  overview:'Our research focuses on **blockchain and smart contract security**, with an emphasis on vulnerabilities that arise from contract logic, transaction sequences, and state changes. We combine **program analysis and fuzzing** with language-model reasoning to understand how security-critical behaviors emerge during execution. By incorporating **retrieval-augmented vulnerability knowledge** and execution feedback, we develop testing methods that explore underexamined states, identify vulnerability-triggering paths, and improve the effectiveness of smart contract vulnerability discovery.',
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
 advisor:{title:'Advisor'},
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
 email:'XXX',office:'XXX',admissions:'XXX',
 admissionQuota:'XXX',applicationDeadline:'XXX',
 academicAppointments:'XXX',programCommittees:'XXX',reviewing:'XXX',
 courses:'XXX',teachingMaterials:'XXX'
};

// The advisor’s identity, biography, and credentials must be confirmed before publication.
export const advisorProfile = {
 name:'XXX',title:'XXX',photo:'XXX',
 department:'School of Computer and Information Engineering',
 institution:'Zhejiang Gongshang University',
 bio:'XXX',research:'XXX',
 education:[{period:'XXX',degree:'XXX',institution:'XXX'}],
 experience:[{period:'XXX',position:'XXX',institution:'XXX'}],
 awards:['XXX'],service:['XXX'],teaching:['XXX'],
 email:'XXX',office:'XXX',homepage:'XXX',scholar:'XXX',cv:'XXX'
};

export type Member = {name:string;photo:string;research:string;homepage?:string;email?:string;year?:string};
export const memberGroups:{id:string;title:string;members:Member[]}[] = [
 {id:'phd',title:'PhD Students',members:[]},
 {id:'masters',title:"Master's Students",members:[
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'}
 ]},
 {id:'undergraduates',title:'Undergraduates',members:[
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'},
  {name:'XXX',photo:'XXX',research:'XXX',homepage:'XXX',email:'XXX'}
 ]}
];
