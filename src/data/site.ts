/* ============================================================================
 * EDIT THIS FILE to change the site's content. Nothing else needs touching.
 * Content is drawn from Hayato Otsuka's CV (public/resume.pdf).
 * ==========================================================================*/

export const site = {
  name: "Hayato Otsuka",
  initials: "HO",
  role: "Senior Full-Stack Engineer",
  tagline: "Python · Java · React · Applied AI",
  email: "hayatootsuka.dev@gmail.com",
  phone: "", // optional — leave "" to hide the phone row entirely
  location: "Tokyo, Japan · Open to remote",
  availability: "Open to senior & staff engineering roles",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/del-bestdev",
    // Empty = hidden. Every social icon is filtered out when its URL is blank,
    // so re-adding a link here is all it takes to bring the icon back.
    linkedin: "",
    twitter: "",
  },
};

/* ---------------------------------------------------------------- hero ---- */
export const hero = {
  titleLead: "Architecting",
  titleGradient: "Intelligent Systems",
  blurb:
    "Senior AI full-stack engineer with 12+ years designing and leading distributed enterprise systems — high-scale microservices in Java and Python, modern reactive frontends in TypeScript and React, and generative-AI pipelines taken all the way to production.",
  badge: {
    title: "12+ Years of Engineering Experience",
    subtitle: "Timee · IBM · Mercari · Money Forward · Sansan",
  },
};

/* --------------------------------------------------------------- stats ---- */
// Every figure here traces back to a specific line on the CV.
export const stats = [
  { icon: "code-slash", value: 12, suffix: "+", label: "Years Engineering" },
  { icon: "people-fill", value: 45, suffix: "K+", label: "Users on AI Platform" },
  { icon: "diagram-3", value: 4.5, suffix: "M+", label: "Daily Events Served" },
  { icon: "speedometer2", value: 3.5, suffix: "x", label: "Throughput Gain" },
];

/* ----------------------------------------------------------- tech stack --- */
export const stack = [
  {
    group: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "Backend & Frameworks",
    items: ["FastAPI", "Django", "Flask", "Spring Boot 3", "GraphQL", "REST"],
  },
  {
    group: "Frontend & UI",
    items: ["React", "Next.js", "Redux", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "AI & LLM Stack",
    items: ["LangChain", "LlamaIndex", "PyTorch", "RAG", "pgvector", "Ollama / vLLM"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (ECS/EKS/Lambda)", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    group: "Architecture & Data",
    items: ["Kafka", "PostgreSQL", "MongoDB", "Redis", "Event-Driven", "Distributed Systems"],
  },
];

/* ---------------------------------------------------------------- about --- */
export const about = {
  heading: "About Me",
  paragraphs: [
    "I am a senior full-stack engineer based in Tokyo with over 12 years of experience designing, implementing and leading distributed enterprise systems. My work spans high-scale microservices in Java and Python, modern reactive web stacks in TypeScript and React, and the engineering and operationalization of generative AI.",
    "Most recently I built a company-wide RAG and agentic workflow platform serving more than 45,000 internal users, and led the migration of monolithic transaction engines into distributed services on AWS EKS. I care as much about the guardrails, caching and evaluation around an LLM as about the model call itself.",
    "Great engineering is not simply about writing code. It is about making sound technical decisions, understanding trade-offs, and building systems that deliver lasting value — then helping the team around you do the same.",
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Timee, Inc",
      period: "May 2024 – Oct 2026",
      points: [
        "Built a company-wide RAG and agentic workflow platform (Python, FastAPI, LangChain) reaching 45,000+ internal users.",
        "Led the port of monolithic transaction engines into distributed Java (Spring Boot) and Python microservices on AWS EKS, delivering a 3.5x throughput gain.",
        "Rebuilt legacy customer portals in TypeScript, React and Next.js, cutting average page load from 3.8s to 1.1s.",
        "Shipped semantic caching and input/output guardrails with LlamaGuard to block prompt injection and data exfiltration across all client entry points.",
        "Mentored 3 junior developers and set prompt-engineering, CI/CD and code-quality standards across cross-functional teams.",
      ],
    },
    {
      role: "Presales Engineer",
      company: "IBM",
      period: "Oct 2022 – Apr 2024",
      points: [
        "Built and operated high-concurrency Java and Python REST APIs handling 4.5M+ daily transactional events.",
        "Architected interactive React dashboards with real-time WebSocket telemetry monitoring.",
        "Re-architected the data ingestion tier on Apache Kafka to decouple high-volume analytics from primary relational storage.",
        "Wrote Terraform modules for AWS (RDS PostgreSQL, ECS, S3), cutting infrastructure time-to-market by 60%.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Mercari, Inc",
      period: "Jun 2018 – Sep 2022",
      points: [
        "Delivered full-stack features in Java (Spring), Python (Flask) and Angular/TypeScript.",
        "Migrated legacy schemas from SQL Server to PostgreSQL, improving complex analytical query performance.",
        "Authored company-wide OpenAPI specifications so teams could build against stable contracts independently.",
        "Built Datadog dashboards and APM alerting that halved MTTR for significant production incidents.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Money Forward, Inc",
      period: "Feb 2017 – May 2018",
      points: [
        "Built backend services in Java (Spring MVC) and Python, including large-scale data processing scripts.",
        "Migrated legacy jQuery frontends to TypeScript and early React components.",
        "Established JUnit/PyTest suites reaching 90%+ coverage across key business lines.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Sansan Corporation",
      period: "May 2014 – Jan 2017",
      points: [
        "Created web portals with Django and JavaScript over large relational schemas in MySQL.",
        "Decomposed payment gateway and billing microservices, improving throughput via stronger error handling and transaction validation.",
        "Automated backup plans and SSL/TLS termination across all public-facing servers.",
      ],
    },
  ],
  education: {
    degree: "BSc, Information Technology",
    school: "Tokyo Denki University",
    period: "Sep 2011 – May 2015",
  },
  // Proficiency bars - animate to these values on scroll.
  skills: [
    { label: "Backend Engineering (Python / Java)", value: 95 },
    { label: "AI, LLM Orchestration & RAG", value: 92 },
    { label: "Distributed Systems & Architecture", value: 92 },
    { label: "Frontend (React / TypeScript)", value: 88 },
    { label: "Cloud, DevOps & Platform", value: 88 },
  ],
};

/* ------------------------------------------------------------ expertise --- */
export const expertise = [
  {
    icon: "cpu",
    title: "Applied AI & LLM Systems",
    body: "RAG architectures, agentic workflows and LLM orchestration with LangChain and LlamaIndex — plus the evaluation harnesses (Ragas, TruLens) that keep answer quality measurable.",
  },
  {
    icon: "server",
    title: "Backend Engineering",
    body: "High-concurrency REST and GraphQL APIs in Python (FastAPI, Django) and Java (Spring Boot 3), built for correctness, observability and predictable performance under load.",
  },
  {
    icon: "diagram-3",
    title: "Distributed Architecture",
    body: "Event-driven systems on Kafka, service decomposition from monoliths, and system boundaries that let services scale and deploy independently.",
  },
  {
    icon: "shield-check",
    title: "AI Security & Guardrails",
    body: "LlamaGuard and NeMo guardrails, semantic caching security, prompt-injection and exfiltration defence, OAuth2/OIDC and RBAC/ABAC across client entry points.",
  },
  {
    icon: "cloud-fill",
    title: "Cloud & Platform",
    body: "AWS ECS, EKS and Lambda provisioned as code with Terraform, containerised with Docker and Kubernetes, shipped through GitHub Actions CI/CD.",
  },
  {
    icon: "layers-fill",
    title: "Frontend & AI-Native UX",
    body: "React and Next.js applications with Redux state management, real-time SSE and WebSocket streaming, and interface patterns designed around model latency.",
  },
];

/* ------------------------------------------------------------- projects --- */
// Drawn from production work at Timee, IBM and Mercari. Enterprise codebases
// are not public, so cards show "Private / under NDA" rather than dead links.
export const projects = [
  {
    title: "Enterprise RAG & Agent Platform",
    visual: "rag",
    language: "Python",
    body: "Company-wide retrieval-augmented generation and agentic workflow platform serving 45,000+ internal users. Owned the ingestion and embedding pipeline, vector-backed retrieval, multi-agent orchestration, and the enterprise blueprints other teams built against.",
    tags: ["FastAPI", "LangChain", "pgvector", "RAG"],
    repo: "",
    demo: "",
    featured: true,
  },
  {
    title: "Monolith to Microservices Migration",
    visual: "microservices",
    language: "Java",
    body: "Led the decomposition of core monolithic transaction engines into distributed Java (Spring Boot) and Python services on AWS EKS. Defined the service boundaries and rollout sequence that delivered a 3.5x throughput gain without a freeze on feature work.",
    tags: ["Spring Boot", "AWS EKS", "Kubernetes", "Python"],
    repo: "",
    demo: "",
    featured: true,
  },
  {
    title: "Customer Portal Modernization",
    visual: "portal",
    language: "TypeScript",
    body: "Rebuilt several legacy customer portals in TypeScript, React and Next.js, bringing average page load from 3.8s down to 1.1s. Introduced streaming SSE and WebSocket channels so agent output and intermediate reasoning surface in the UI as they are produced.",
    tags: ["React", "Next.js", "SSE / WebSockets", "Redux"],
    repo: "",
    demo: "",
    featured: true,
  },
  {
    title: "LLM Guardrails & Semantic Cache",
    visual: "guardrails",
    language: "Python",
    body: "Production guardrail and semantic caching layer using LlamaGuard to screen model input and output, blocking prompt injection and data exfiltration across every client entry point while cutting token inference and cloud cost.",
    tags: ["LlamaGuard", "Semantic Caching", "OWASP", "Security"],
    repo: "",
    demo: "",
    featured: false,
  },
  {
    title: "Real-Time Telemetry Platform",
    visual: "telemetry",
    language: "Java",
    body: "High-concurrency Java and Python REST APIs backing 4.5M+ daily transactional events, surfaced through interactive React dashboards with live WebSocket telemetry and scikit-learn/PyTorch micro-models for automatic anomaly detection.",
    tags: ["Spring Boot", "WebSockets", "React", "PyTorch"],
    repo: "",
    demo: "",
    featured: false,
  },
  {
    title: "Kafka Event-Driven Ingestion Tier",
    visual: "kafka",
    language: "Java",
    body: "Re-architected the data ingestion tier on Apache Kafka to decouple high-volume analytical traffic from primary relational storage, paired with Terraform modules for RDS PostgreSQL, ECS and S3 that cut infrastructure time-to-market by 60%.",
    tags: ["Kafka", "Terraform", "PostgreSQL", "AWS"],
    repo: "",
    demo: "",
    featured: false,
  },
];

/* ---------------------------------------------------------------- focus --- */
export const focus = {
  heading: "Current Engineering Focus",
  blurb:
    "Where my attention goes right now, and the kind of problems I am looking for next.",
  items: [
    {
      icon: "cpu",
      title: "Production-Grade AI",
      body: "Taking LLM features past the demo stage — evaluation harnesses, guardrails, caching and cost control that make them safe to run at scale.",
    },
    {
      icon: "diagram-3",
      title: "Multi-Agent Systems",
      body: "Enterprise blueprints for agentic workflows, and the orchestration patterns that keep them debuggable when a chain spans many tools.",
    },
    {
      icon: "server",
      title: "Maintainable Services",
      body: "Backend services and APIs in Python and Java designed so the next engineer can change them safely.",
    },
    {
      icon: "speedometer2",
      title: "Frontend Performance",
      body: "React and Next.js architecture measured against real user metrics, including interfaces built around streaming model output.",
    },
    {
      icon: "cloud-fill",
      title: "Cloud & Automation",
      body: "Terraform-provisioned AWS infrastructure and CI/CD that make shipping to production a routine, low-drama event.",
    },
    {
      icon: "people-fill",
      title: "Team Development",
      body: "Mentoring engineers, raising code review standards, and writing down the reasoning behind technical decisions.",
    },
  ],
};

/* ------------------------------------------------------------------ faq --- */
export const faq = [
  {
    q: "What is your core technology stack?",
    a: "Python and Java on the backend — FastAPI, Django and Flask alongside Spring Boot 3 — with TypeScript and React on the frontend. Data sits in PostgreSQL, MongoDB and Redis, with Kafka for event-driven flows. Infrastructure runs on AWS (ECS, EKS, Lambda) provisioned with Terraform and shipped through GitHub Actions. For AI work I use LangChain, LlamaIndex, PyTorch and the OpenAI and Anthropic APIs over vector stores such as pgvector, Pinecone and Milvus.",
  },
  {
    q: "What kind of role are you looking for?",
    a: "Senior, staff or principal engineering roles where architecture and hands-on delivery go together — where I can set technical direction and still write code. I am equally comfortable owning an AI platform, leading a backend domain, or acting as the technical anchor on a small team. I am based in Tokyo and open to remote work with distributed teams.",
  },
  {
    q: "How much of your AI work has actually reached production?",
    a: "All of it. The RAG and agentic platform I built at Timee serves more than 45,000 internal users, and it ships with semantic caching, LlamaGuard input and output guardrails, and evaluation via Ragas and TruLens. In my experience the model call is the easy part — the durable engineering is in retrieval quality, guardrails, cost control and evaluation.",
  },
  {
    q: "How do you approach a system you have not seen before?",
    a: "I start with the code and the incident history rather than the documentation, because they tell you what the system actually does. From there I map the real boundaries, find where change is expensive, and make targeted improvements that pay for themselves before proposing anything larger.",
  },
  {
    q: "How do you handle large migrations without stalling the roadmap?",
    a: "Incrementally, and with a way back. When I moved Timee's monolithic transaction engines onto distributed services, the work went out service by service behind measurable throughput targets rather than as a single cutover. Legacy code is usually load-bearing, so I add tests and observability around whatever I intend to change first.",
  },
  {
    q: "What does mentoring look like for you?",
    a: "Mostly code review, pairing on genuinely hard problems, and writing down the reasoning behind technical decisions. At Timee that meant bringing three junior developers up to speed on prompt-engineering pipelines and CI/CD standards. The goal is that the team makes good calls without me, not that they route decisions through me.",
  },
];

/* --------------------------------------------------------- testimonials --- */
// Empty on purpose — invented recommendations are a liability on a page you
// send to employers. Paste genuine quotes (e.g. a LinkedIn recommendation,
// with permission) and the section appears automatically.
export const testimonials: Array<{
  quote: string;
  name: string;
  title: string;
}> = [];

/* ----------------------------------------------------------------- nav ---- */
export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Projects", href: "/#portfolio" },
  { label: "Focus", href: "/#focus" },
  { label: "FAQ", href: "/#faq" },
];

export const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];
