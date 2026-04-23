import {
  BarChart3,
  Binary,
  Fingerprint,
  FlaskConical,
  Layers3,
  LineChart,
  LockKeyhole,
  LucideIcon,
  Network,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

// Primary content model.
// Components are intentionally driven by this file so positioning, proof points, and case-study content stay easy to maintain.

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type TimelineRole = {
  company: string;
  logoText: string;
  logoSrc: string;
  logoAlt: string;
  detailTitle?: string;
  role: string;
  dates: string;
  mission: string;
  scope: string;
  specialty: string;
  impacts: string[];
  details: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  topics: string[];
  stage: string;
  scope: string;
  impactMetric: string;
  accentClass: string;
  artifact: {
    label: string;
    primary: string;
    secondary: string;
  };
  previewBullets: string[];
  story: {
    context: string[];
    problem: string[];
    userPain: string[];
    businessPain: string[];
    constraints: string[];
    myRole: string[];
    strategy: string[];
    research: string[];
    solution: string[];
    execution: string[];
    stakeholderManagement: string[];
    metrics: Metric[];
    lessons: string[];
  };
};

export type SkillCategory = {
  title: string;
  description: string;
  methods: string[];
  icon: LucideIcon;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const personalInfo = {
  name: "Ignacio Perez Roca",
  displayName: "Ignacio Perez Roca",
  title: "Senior Product Manager",
  location: "Buenos Aires, Argentina",
  email: "ignacio.perezroca@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/ignacio-perez-roca-10101010/",
  githubUrl: "https://github.com/ignacioperezroca",
  resumeUrl: "/resume/ignacio-perez-roca-product-manager-cv.pdf",
  profileImage: "/images/profile-portrait.svg",
  heroEyebrow:
    "Senior Product Manager | Identity, Onboarding, KYC, Authentication",
  heroHeadline:
    "I build trust-critical product systems that scale growth without breaking security, compliance, or UX.",
  heroSubheadline:
    "Senior Product Manager with 16+ years across fintech, crypto, and digital identity. I’ve helped scale onboarding and trust infrastructure for millions of users across LatAm, bridging product strategy, UX clarity, technical constraints, and measurable business impact.",
  shortPositioning:
    "I design and build the infrastructure of digital trust",
  availability:
    "Open to conversations about onboarding, identity, authentication, growth, and platform product roles."
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" }
];

export const heroMetrics: Metric[] = [
  {
    value: "+262%",
    label: "onboarding conversion",
    detail:
      "Improved onboarding conversion from 8% to 29% through experimentation, sharper diagnosis, and cleaner funnel design."
  },
  {
    value: "60K to 2M",
    label: "users",
    detail:
      "Supported onboarding and trust infrastructure during one of LatAm crypto’s fastest growth phases."
  },
  {
    value: "2.5M+",
    label: "user ecosystem",
    detail:
      "Leading product strategy for identity, authentication, and trust infrastructure across a large financial ecosystem."
  },
  {
    value: "16+ years",
    label: "product, UX & software",
    detail:
      "Across product, UX, and software development, with unusual leverage between strategy, design, and technical execution."
  },
  {
    value: "7 countries",
    label: "LatAm expansion",
    detail:
      "Experience across onboarding and product delivery in Argentina, Brazil, Mexico, Peru, Colombia, Uruguay, and Ecuador."
  },
  {
    value: "Trust-critical",
    label: "product focus",
    detail:
      "Specialized in onboarding, KYC, authentication, identity, platform migration, and activation under regulatory and operational constraints."
  },
  {
    value: "Product + UX",
    label: "technical fluency",
    detail:
      "Bridging strategy, user experience, analytics, and implementation across high-complexity digital products."
  },
  {
    value: "Growth",
    label: "without ignoring trust",
    detail:
      "Focused on improving activation and conversion where security, compliance, and confidence are part of the product itself."
  }
];

export const timelineRoles: TimelineRole[] = [
  {
    company: "Itti",
    logoText: "ITTI",
    logoSrc: "https://www.itti.digital/wp-content/uploads/2022/08/itti_logo.svg",
    logoAlt: "Itti logo",
    detailTitle: "Current scope",
    role: "Senior Product Manager",
    dates: "2024 - Present",
    mission:
      "Centralizing authentication and identity for Paraguay's largest financial ecosystem.",
    scope: "Unified identity, authentication, KYC, platform strategy",
    specialty: "Identity platform",
    impacts: [
      "Own the product strategy for UNID as a shared authentication and digital identity hub.",
      "Translate KYC, compliance, fraud, and access needs into reusable platform capabilities.",
      "Design trust flows for a 2.5M+ user ecosystem where security and adoption have to move together.",
      "Align product, design, engineering, operations, legal, and leadership around migration sequencing."
    ],
    details: [
      "Leading product strategy for a shared identity and authentication layer across a multi-brand financial ecosystem.",
      "Translating compliance, fraud, access, and onboarding needs into reusable platform capabilities.",
      "Defining migration sequencing across products, teams, and operational dependencies.",
      "Building the foundation for more consistent authentication, identity verification, and account recovery experiences."
    ]
  },
  {
    company: "Bitso",
    logoText: "BIT",
    logoSrc: "/logos/bitso.svg",
    logoAlt: "Bitso logo",
    role: "Product Manager - Onboarding",
    dates: "Oct 2022 - 2024",
    mission:
      "Redesign crypto onboarding and acquisition flows across a large exchange user base.",
    scope: "Onboarding, acquisition, activation, experimentation",
    specialty: "Conversion at scale",
    impacts: [
      "Improved onboarding conversion from 8% to 29%, a +262% lift in one year.",
      "Supported annual user growth from 4M to nearly 7M users.",
      "Developed a new exchange home screen for an 8M+ user product, increasing activation by 35%.",
      "Connected acquisition, UX, analytics, and product education into a clearer growth system."
    ],
    details: [
      "Strong portfolio angle: The +262% Conversion Lift: Redesigning the Bitso Onboarding Funnel.",
      "Best artifacts: funnel diagnosis, experiment roadmap, onboarding state model, home activation metrics."
    ]
  },
  {
    company: "Lemon Cash",
    logoText: "LEM",
    logoSrc: "https://framerusercontent.com/assets/Rd3Vepv2BCGVA2ynwKixOHHA0.png",
    logoAlt: "Lemon Cash logo",
    role: "Product Manager - Acquisition",
    dates: "Oct 2021 - Oct 2022",
    mission:
      "Scale onboarding infrastructure during one of LATAM crypto's fastest growth moments.",
    scope: "Crypto onboarding, regional launches, KYC, activation",
    specialty: "Hyper-growth crypto",
    impacts: [
      "Scaled Lemon from 60K to 1.5M users, a +2500% growth period.",
      "Launched onboarding for Argentina, Brazil, Mexico, Peru, Colombia, Uruguay, and Ecuador in 6 months.",
      "Helped acquire more than 1M users in the first year of regional onboarding expansion.",
      "Increased onboarding conversion from 50% to 80% within a year."
    ],
    details: [
      "Strong portfolio angle: Scaling Lemon Cash: Managing identity infrastructure during 30x growth.",
      "Best artifacts: country launch plan, KYC requirements matrix, onboarding metrics, launch sequencing."
    ]
  },
  {
    company: "Personal Pay",
    logoText: "PAY",
    logoSrc: "https://www.personal.com.ar/content/dam/teco-cms-ecosystem/componentes-cross/vidrieras/iso-pay.svg",
    logoAlt: "Personal Pay logo",
    role: "Product Manager",
    dates: "Jul 2020 - Oct 2021",
    mission:
      "Build consumer fintech experiences where account creation, activation, and trust shape adoption.",
    scope: "Fintech onboarding, payments, activation, UX strategy",
    specialty: "Consumer fintech",
    impacts: [
      "Worked on fintech product surfaces that required clear UX, account readiness, and reliable user progression.",
      "Translated business and regulatory needs into product flows that users could understand.",
      "Partnered with design and engineering to move from ambiguous requirements to buildable releases.",
      "Strengthened the bridge between product strategy, financial services constraints, and mobile UX."
    ],
    details: [
      "Strong portfolio angle: Transforming legacy banking and telco distribution into modern financial products.",
      "Best artifacts: onboarding maps, payments flows, activation metrics, product requirements."
    ]
  },
  {
    company: "IUNIGO",
    logoText: "IUN",
    logoSrc: "/logos/iunigo.svg",
    logoAlt: "IUNIGO logo",
    role: "Product Manager",
    dates: "Jul 2019 - Jul 2020",
    mission:
      "Move deeper into product ownership across digital insurance and financial-service workflows.",
    scope: "Product ownership, UX, agile delivery, digital services",
    specialty: "Digital product ownership",
    impacts: [
      "Owned product discovery and delivery work in a regulated digital-services environment.",
      "Used UX and frontend fluency to clarify requirements before engineering execution.",
      "Coordinated stakeholders around roadmap priorities, delivery tradeoffs, and user impact.",
      "Built the operating muscle that connected design craft with product management."
    ],
    details: [
      "Strong portfolio angle: Engineering-first PRDs and high-fidelity prototypes for regulated product teams.",
      "Best artifacts: PRDs, discovery notes, prototypes, sprint plans, stakeholder decision records."
    ]
  },
  {
    company: "Ripio",
    logoText: "RIP",
    logoSrc: "https://cdn.prod.website-files.com/5f17344acf2c6d3c3a1d6238/68223e2a6a651095b0183f04_Logo%20Nav.svg",
    logoAlt: "Ripio logo",
    role: "Product Owner - Credit Crypto Product",
    dates: "Sep 2017 - Jul 2019",
    mission:
      "Own product work for crypto credit and blockchain-based financial infrastructure.",
    scope: "Crypto credit, DeFi, blockchain, product ownership",
    specialty: "Crypto product",
    impacts: [
      "Worked at the intersection of blockchain, credit, frontend execution, and product strategy.",
      "Contributed to Ripio Credit Network as crypto lending infrastructure evolved in LATAM.",
      "Brought hands-on development understanding into product decisions for complex financial technology.",
      "Built product judgment around trust, transparency, and usability in emerging crypto rails."
    ],
    details: [
      "Public references identify Ignacio Perez Roca as a Frontend & dApp developer on Ripio Credit Network.",
      "Best artifacts: credit-flow models, dApp interfaces, product specs, blockchain UX decisions."
    ]
  },
  {
    company: "Personal - Telecom",
    logoText: "TEL",
    logoSrc: "https://www.personal.com.ar/content/dam/teco-cms-ecosystem/componentes-cross/header/logo-personal-brand-new.svg",
    logoAlt: "Personal Telecom logo",
    role: "Designer & Frontend Developer",
    dates: "Mar 2015 - Sep 2017",
    mission:
      "Design and build digital interfaces inside a large-scale telecom environment.",
    scope: "UX/UI, frontend development, design systems, large-company delivery",
    specialty: "Enterprise UX",
    impacts: [
      "Shipped interface work where visual hierarchy, usability, and implementation quality mattered.",
      "Built practical frontend fluency across HTML, CSS, JavaScript, and design-system patterns.",
      "Learned to navigate stakeholder complexity inside a large established organization.",
      "Developed the technical empathy that later became a product leadership advantage."
    ],
    details: [
      "Strong portfolio angle: reducing friction between design and development through technical product leadership.",
      "Best artifacts: UI components, responsive layouts, frontend prototypes, design-system work."
    ]
  },
  {
    company: "Thet Studio",
    logoText: "TH",
    logoSrc: "/logos/thet-studio.svg",
    logoAlt: "Thet Studio logo",
    role: "Designer & Frontend Developer",
    dates: "Feb 2011 - Mar 2015",
    mission:
      "Build the creative and technical foundation behind later product leadership.",
    scope: "Graphic design, web development, UI craft, client delivery",
    specialty: "Design + code foundation",
    impacts: [
      "Worked hands-on across design, web interfaces, frontend execution, and client-facing delivery.",
      "Built the craft base for turning abstract needs into usable, shippable digital experiences.",
      "Developed strong taste for typography, hierarchy, interaction detail, and implementation constraints.",
      "Started the multidisciplinary path that now connects strategy, design systems, and frontend logic."
    ],
    details: [
      "Strong portfolio angle: Logic-first design, architecture before aesthetics.",
      "Best artifacts: early web projects, design systems, UI explorations, responsive builds."
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "kyc-onboarding-optimization",
    title: "Case Study: Migrating 2.5M users to a Unified Authentication Hub",
    kicker: "KYC / Onboarding / Conversion",
    summary:
      "Centralizing authentication and identity into a scalable trust layer for a multi-brand financial ecosystem.",
    topics: ["KYC", "Onboarding", "Growth"],
    stage: "Scale-up optimization",
    scope: "Consumer fintech / crypto",
    impactMetric: "Verification state map",
    accentClass: "from-accent-green/20 via-paper-cool to-accent-blue/12",
    artifact: {
      label: "Flow artifact",
      primary: "Verification state map",
      secondary: "Drop-off, retry, escalation, approved"
    },
    previewBullets: [
      "Reframed KYC as a trust journey instead of a compliance interruption.",
      "Separated user confusion from risk-driven rejection states.",
      "Created a measurement plan for completion, retries, support contacts, and approved users."
    ],
    story: {
      context: [
        "Onboarding was a direct growth lever, but it lived inside a regulated environment where every reduction in friction had to respect risk, vendor behavior, and compliance rules.",
        "The product needed to help legitimate users move through identity verification with more confidence and fewer dead ends."
      ],
      problem: [
        "Users were dropping at points where the product did not clearly explain what was needed, why it mattered, or what would happen next.",
        "Internally, funnel metrics, vendor states, and operational review queues were not aligned into one shared model."
      ],
      userPain: [
        "Users could not distinguish a normal pending state from a problem state.",
        "Rejected or retry states felt final, even when the path was recoverable.",
        "The flow asked for trust before the product had earned it."
      ],
      businessPain: [
        "Every failed verification created acquisition waste, lower activation, and avoidable support contacts.",
        "The team lacked a shared language for where conversion loss was caused by UX, risk rules, vendor behavior, or user quality."
      ],
      constraints: [
        "Compliance and risk thresholds could not be treated as negotiable UX variables.",
        "Vendor events were imperfect and sometimes lagged behind the user's mental model.",
        "Engineering had to work inside existing onboarding architecture while improving observability."
      ],
      myRole: [
        "Owned the product problem framing, funnel diagnosis, solution strategy, and cross-functional alignment.",
        "Partnered with design, engineering, data, compliance, risk, support, and operations to define the right level of friction for each state."
      ],
      strategy: [
        "Map every user-facing state against the underlying risk/vendor state and business objective.",
        "Prioritize interventions where confusion was high and compliance risk was low.",
        "Move from generic status screens to precise, confidence-building guidance."
      ],
      research: [
        "Reviewed funnel data, support tickets, user session patterns, and qualitative feedback from failed or delayed verifications.",
        "Separated drop-off into intent loss, comprehension loss, technical failure, and risk-driven rejection."
      ],
      solution: [
        "Redesigned the onboarding state model, copy hierarchy, retry guidance, and success criteria.",
        "Added clearer next steps for pending, retry, failed, and manual review states.",
        "Defined analytics events that connected user action, vendor response, operational state, and activation outcome."
      ],
      execution: [
        "Sequenced the work into high-confidence UX fixes, instrumentation improvements, and deeper platform changes.",
        "Used release gates tied to approval quality, conversion, retry rate, and support volume."
      ],
      stakeholderManagement: [
        "Created a shared decision frame so growth, compliance, and risk were not arguing from different scorecards.",
        "Kept tradeoffs explicit: conversion uplift was valuable only when verified user quality and operational load remained healthy."
      ],
      metrics: [
        {
          value: "State map",
          label: "KYC completion",
          detail: "Mapped every user-facing verification state to risk, vendor, and activation outcomes."
        },
        {
          value: "Support",
          label: "Support contacts",
          detail: "Designed clearer guidance for pending, retry, failed, and manual review moments."
        },
        {
          value: "Activation",
          label: "Activation after approval",
          detail: "Connected verification outcomes to downstream activation and user confidence."
        }
      ],
      lessons: [
        "In regulated onboarding, the best UX is not always fewer steps. It is the right amount of clarity at the right moment.",
        "Trust flows need a shared state model before teams can make high-quality tradeoffs.",
        "Conversion improvements are strongest when the team also measures quality, risk, and operational side effects."
      ]
    }
  },
  {
    slug: "authentication-trust-platform",
    title: "Case Study: Scaling a Crypto-Wallet to 2M users in hyper-growth",
    kicker: "Authentication / Security / Platform",
    summary:
      "Managing identity infrastructure and onboarding quality while Lemon Cash scaled from 60K to 2M users.",
    topics: ["Authentication", "Identity", "Platform"],
    stage: "Platform consolidation",
    scope: "Multi-surface product ecosystem",
    impactMetric: "Authentication decision model",
    accentClass: "from-accent-blue/20 via-paper-cool to-accent-green/12",
    artifact: {
      label: "System artifact",
      primary: "Auth decision model",
      secondary: "Login, MFA, recovery, risk step-up"
    },
    previewBullets: [
      "Connected user trust, risk signals, and product access decisions into a reusable model.",
      "Reduced one-off authentication patterns across product surfaces.",
      "Improved recovery clarity without weakening account protection."
    ],
    story: {
      context: [
        "Authentication had become a product experience problem, not only a security layer.",
        "Different teams were solving access, recovery, and step-up flows with inconsistent patterns."
      ],
      problem: [
        "Users experienced fragmented login and recovery flows depending on where they entered the product.",
        "Security decisions were hard to explain, hard to measure, and expensive to evolve."
      ],
      userPain: [
        "Users did not understand why additional verification was needed.",
        "Recovery flows created anxiety because the product did not communicate progress or safety."
      ],
      businessPain: [
        "Inconsistent auth patterns increased engineering maintenance and support escalations.",
        "Security improvements were slower because each surface required bespoke coordination."
      ],
      constraints: [
        "The solution had to respect existing account systems, session behavior, device constraints, and risk policies.",
        "Teams needed a migration path that did not interrupt active users."
      ],
      myRole: [
        "Led product strategy for the unified experience model and worked with engineering to scope platform primitives.",
        "Aligned security, support, data, design, and product teams around a common set of user states and outcomes."
      ],
      strategy: [
        "Define authentication as a set of reusable product decisions: identify, verify, step up, recover, and re-establish trust.",
        "Create one mental model for users and one operating model for internal teams."
      ],
      research: [
        "Analyzed support escalations, login failures, recovery attempts, and account lockout patterns.",
        "Reviewed where users abandoned flows because they could not distinguish protection from failure."
      ],
      solution: [
        "Created a unified state model and reusable UX patterns for login, MFA, recovery, and risk step-up.",
        "Defined product requirements for visibility into why a step-up happened and how users could resolve it."
      ],
      execution: [
        "Sequenced delivery by highest-risk inconsistency first, then migrated lower-risk surfaces.",
        "Used a shared component and analytics contract so future product teams could adopt the platform pattern."
      ],
      stakeholderManagement: [
        "Translated security requirements into product language and product tradeoffs into security language.",
        "Made the migration credible by separating foundational platform work from visible UX improvements."
      ],
      metrics: [
        {
          value: "Recovery",
          label: "Recovery friction",
          detail: "Mapped account access failures into clearer login, step-up, and recovery states."
        },
        {
          value: "Support",
          label: "Auth support cases",
          detail: "Clarified where users needed guidance, escalation, or stronger protection."
        },
        {
          value: "1 model",
          label: "Reusable auth pattern",
          detail: "Defined a shared decision model for authentication, MFA, recovery, and risk step-up."
        }
      ],
      lessons: [
        "Authentication is one of the highest-leverage places to earn or lose user trust.",
        "A platform is not a backend concept only. It is a repeatable product promise.",
        "The right state model reduces both user anxiety and internal decision cost."
      ]
    }
  },
  {
    slug: "activation-growth-system",
    title: "Case Study: A data-driven approach to a +262% conversion increase",
    kicker: "Growth / Experimentation / Activation",
    summary:
      "Redesigning the Bitso onboarding funnel with sharper diagnosis, cleaner UX, and conversion-focused execution.",
    topics: ["Growth", "Experimentation", "Onboarding"],
    stage: "Growth acceleration",
    scope: "Self-serve and assisted onboarding",
    impactMetric: "Activation map",
    accentClass: "from-accent-bronze/20 via-paper-warm to-accent-blue/10",
    artifact: {
      label: "Experiment artifact",
      primary: "Activation map",
      secondary: "Intent, setup, verification, first value"
    },
    previewBullets: [
      "Defined activation as a sequence of trust, comprehension, and first-value milestones.",
      "Prioritized experiments by impact, confidence, and operational risk.",
      "Built a tighter loop between analytics, research, design, and delivery."
    ],
    story: {
      context: [
        "The team needed growth improvements that came from better product adoption, not shallow acquisition tactics.",
        "Activation depended on users understanding the product, trusting the flow, and completing several high-intent steps."
      ],
      problem: [
        "The funnel showed where users dropped, but not why they lost momentum.",
        "Teams were debating tactics without a shared definition of activation quality."
      ],
      userPain: [
        "Users encountered too many unclear choices before experiencing core product value.",
        "The flow optimized for completion of screens rather than confidence in the next action."
      ],
      businessPain: [
        "Acquisition spend and top-of-funnel growth were under-monetized because activation leaked.",
        "Experiments were difficult to compare without a consistent learning model."
      ],
      constraints: [
        "The work had to ship in small increments without destabilizing regulated or trust-sensitive steps.",
        "Some events and attribution paths needed cleanup before deeper optimization."
      ],
      myRole: [
        "Owned the activation strategy, experiment roadmap, prioritization model, and cross-functional operating cadence.",
        "Worked with data and design to turn ambiguous drop-off into testable product hypotheses."
      ],
      strategy: [
        "Define activation milestones that represented real user progress, not vanity events.",
        "Use a portfolio of experiments: copy and hierarchy, flow simplification, progressive disclosure, trust signals, and personalized next steps."
      ],
      research: [
        "Combined funnel analytics, heatmaps/session review where available, support feedback, and targeted interviews.",
        "Tagged drop-off causes by motivation, comprehension, trust, eligibility, technical failure, and timing."
      ],
      solution: [
        "Introduced a clearer first-session journey, stronger trust language, and fewer ambiguous decisions.",
        "Built an experiment backlog with expected impact, confidence, effort, risk, and learning value."
      ],
      execution: [
        "Ran sequential and parallel experiments depending on traffic, dependency risk, and measurement confidence.",
        "Created post-experiment readouts that captured decisions, not just results."
      ],
      stakeholderManagement: [
        "Aligned growth, product, design, engineering, analytics, and risk teams on which tradeoffs were acceptable.",
        "Kept leadership conversations focused on compounding learning, not isolated wins."
      ],
      metrics: [
        {
          value: "+262%",
          label: "Onboarding conversion",
          detail: "Improved conversion from 8% to 29% through diagnosis, experimentation, and cleaner funnel design."
        },
        {
          value: "8% to 29%",
          label: "Conversion range",
          detail: "Moved the funnel from low single-digit completion to a materially stronger onboarding baseline."
        },
        {
          value: "Experiments",
          label: "Learning system",
          detail: "Used structured tests to separate UX confusion, trust gaps, technical friction, and eligibility issues."
        }
      ],
      lessons: [
        "PLG is strongest when growth work improves product clarity, not when it adds pressure.",
        "Activation needs a quality bar, especially in fintech and identity products.",
        "A good experiment system compounds even when a single experiment does not win."
      ]
    }
  },
  {
    slug: "kyc-operations-backoffice",
    title: "Deconstructing the \"Perfect\" KYC flow: A PM/Designer perspective",
    kicker: "Backoffice / Operations / Risk",
    summary:
      "Breaking down the product logic behind KYC flows that balance AML security, clarity, and user conversion.",
    topics: ["KYC", "Operations", "Platform"],
    stage: "Operational scale",
    scope: "Manual review and escalation tooling",
    impactMetric: "Review queue model",
    accentClass: "from-accent-green/16 via-paper-warm to-accent-bronze/12",
    artifact: {
      label: "Ops artifact",
      primary: "Review queue model",
      secondary: "Evidence, decision, escalation, audit"
    },
    previewBullets: [
      "Converted messy review workflows into clearer decision states.",
      "Reduced repeated support and operations work through better signals.",
      "Protected compliance quality while improving throughput."
    ],
    story: {
      context: [
        "Growth increased the volume and variability of identity review cases.",
        "Operations teams needed tooling that made the right decision easier and the wrong decision less likely."
      ],
      problem: [
        "Reviewers were switching across systems, interpreting inconsistent signals, and escalating cases without a clear decision tree.",
        "Product teams lacked visibility into why cases were slow or frequently reopened."
      ],
      userPain: [
        "Internal users lost time reconstructing context that should have been visible in one place.",
        "End users experienced delays and unclear communication while cases moved through operations."
      ],
      businessPain: [
        "Manual review costs scaled faster than desired.",
        "Inconsistent decisions created risk, rework, and customer experience problems."
      ],
      constraints: [
        "Auditability, compliance evidence, and permissioning were core product requirements.",
        "The team had to improve workflows without disrupting live operations."
      ],
      myRole: [
        "Led problem discovery with operations and risk, converted workflow pain into product requirements, and prioritized delivery with engineering.",
        "Built the narrative for why internal tooling was a growth and trust lever, not only an efficiency project."
      ],
      strategy: [
        "Model the review workflow as a decision system with clear evidence, actions, outcomes, and escalation reasons.",
        "Prioritize the highest-volume, highest-ambiguity case types before edge cases."
      ],
      research: [
        "Shadowed review workflows, analyzed handling time, reviewed escalation themes, and mapped repeated decision conflicts.",
        "Identified where missing context caused either delay or over-escalation."
      ],
      solution: [
        "Designed a clearer review queue, evidence hierarchy, decision taxonomy, and escalation path.",
        "Defined analytics for queue health, handling time, reopen rate, and decision consistency."
      ],
      execution: [
        "Delivered workflow improvements in slices aligned to reviewer roles and case types.",
        "Created adoption checkpoints with operations so rollout quality could be measured."
      ],
      stakeholderManagement: [
        "Balanced reviewer speed, risk confidence, auditability, and engineering feasibility.",
        "Kept internal users involved through prototype reviews and rollout feedback."
      ],
      metrics: [
        {
          value: "Queue model",
          label: "Review handling time",
          detail: "Designed a clearer evidence hierarchy and escalation path for operational review."
        },
        {
          value: "Decision quality",
          label: "Reopened cases",
          detail: "Reduced ambiguity by making review criteria, taxonomy, and handoffs more explicit."
        },
        {
          value: "Taxonomy",
          label: "Decision taxonomy",
          detail: "Created a decision framework that supported auditability and reviewer consistency."
        }
      ],
      lessons: [
        "Internal products deserve the same product rigor as customer-facing flows.",
        "Operational clarity can unlock growth by reducing delay, cost, and risk.",
        "The best backoffice work makes judgment easier instead of pretending judgment can disappear."
      ]
    }
  },
  {
    slug: "crypto-account-trust-recovery",
    title: "Case Study: Designing account recovery for trust, protection, and clarity",
    kicker: "Crypto / Trust / Account Recovery",
    summary:
      "Designing recovery flows for moments when legitimate users lose access and trust is most fragile. Framed recovery as a product system that balances verification, protection, support load, and emotional clarity.",
    topics: ["Crypto", "Authentication", "Trust"],
    stage: "Trust and safety",
    scope: "Account access, recovery, and user communication",
    impactMetric: "Recovery journey",
    accentClass: "from-accent-blue/14 via-paper-warm to-accent-bronze/16",
    artifact: {
      label: "Trust artifact",
      primary: "Recovery journey",
      secondary: "Signal, verify, protect, restore"
    },
    previewBullets: [
      "Designed for the emotional reality of account access loss, not only the technical path.",
      "Made protection states more legible to legitimate users.",
      "Reduced ambiguity across security, support, and product teams."
    ],
    story: {
      context: [
        "In crypto and fintech products, account recovery is a trust-defining moment.",
        "Users need access restored quickly, but the product must prevent attackers from exploiting urgency."
      ],
      problem: [
        "Recovery flows were difficult to explain and easy for users to misinterpret.",
        "Support, security, and product teams were operating with different definitions of success."
      ],
      userPain: [
        "Users were anxious, time-sensitive, and unsure whether the product was protecting them or blocking them.",
        "Legitimate users needed a path that felt guided, not punitive."
      ],
      businessPain: [
        "Poor recovery experiences increased support load, churn risk, and reputational damage.",
        "Security-sensitive flows needed consistency and measurement."
      ],
      constraints: [
        "Attack resistance, fraud signals, device behavior, and regulatory obligations shaped the product surface.",
        "Communication had to be precise without exposing exploitable details."
      ],
      myRole: [
        "Owned product framing, requirements, risk-aligned UX principles, and cross-functional alignment.",
        "Helped convert a security-heavy process into a user-comprehensible product journey."
      ],
      strategy: [
        "Separate the user's emotional state from the system's risk state, then design communication for both.",
        "Create progressive verification and explicit safety messaging instead of opaque blocking."
      ],
      research: [
        "Reviewed recovery tickets, account lockout reasons, failed attempts, and user language from support interactions.",
        "Mapped moments where users lost confidence because the product could not explain itself."
      ],
      solution: [
        "Designed a recovery journey with clearer state labels, safety rationale, expected timing, and next actions.",
        "Defined escalation and communication rules for high-risk cases."
      ],
      execution: [
        "Prioritized the most common legitimate recovery paths first while preserving stronger review for risky states.",
        "Instrumented abandonment, repeat attempts, support contact rate, and successful recovery quality."
      ],
      stakeholderManagement: [
        "Aligned security and support teams on what could be explained to users and what should remain intentionally abstract.",
        "Made tradeoffs explicit between speed, protection, and user confidence."
      ],
      metrics: [
        {
          value: "Recovery",
          label: "Recovery abandonment",
          detail: "Designed clearer states, timing expectations, safety rationale, and next actions."
        },
        {
          value: "Repeat attempts",
          label: "Repeat attempts",
          detail: "Addressed ambiguity for legitimate users by explaining recoverable states more clearly."
        },
        {
          value: "Trust signals",
          label: "Trust signal quality",
          detail: "Balanced user reassurance with security-sensitive information boundaries."
        }
      ],
      lessons: [
        "Account recovery is product, security, and service design at the same time.",
        "In high-trust products, ambiguity is expensive.",
        "The product should make users feel protected without revealing the system's full defensive logic."
      ]
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Product Strategy",
    description:
      "Turning ambiguous business goals and user problems into clear bets, sequencing, and measurable product direction.",
    methods: ["Opportunity sizing", "Narrative strategy", "Roadmapping", "Executive alignment"],
    icon: Layers3
  },
  {
    title: "Growth & Activation",
    description:
      "Improving conversion and time-to-value through better onboarding, instrumentation, and experimentation systems.",
    methods: ["Funnel diagnosis", "Experiment design", "Activation metrics", "PLG loops"],
    icon: LineChart
  },
  {
    title: "Identity / KYC / Auth",
    description:
      "Building trust-critical flows where verification, security, compliance, and user confidence have to work together.",
    methods: ["KYC states", "MFA", "Risk step-up", "Account recovery"],
    icon: Fingerprint
  },
  {
    title: "Research & Experimentation",
    description:
      "Combining behavioral data with qualitative insight to understand why users move, hesitate, or abandon.",
    methods: ["User interviews", "Support mining", "A/B tests", "Decision readouts"],
    icon: FlaskConical
  },
  {
    title: "UX / Design Collaboration",
    description:
      "Using a design background to sharpen problem definition, information hierarchy, interaction quality, and product clarity.",
    methods: ["Journey mapping", "Prototyping", "Design critique", "Copy hierarchy"],
    icon: Sparkles
  },
  {
    title: "Data & Analytics",
    description:
      "Defining useful metrics, event taxonomies, and readouts that help teams make decisions rather than collect dashboards.",
    methods: ["Event design", "Cohort analysis", "Metric trees", "Instrumentation QA"],
    icon: BarChart3
  },
  {
    title: "Technical / Platform Collaboration",
    description:
      "Working fluently with engineering on architecture tradeoffs, migration paths, reusable primitives, and delivery risk.",
    methods: ["API thinking", "State models", "Migration sequencing", "Technical discovery"],
    icon: Binary
  },
  {
    title: "Leadership & Stakeholders",
    description:
      "Creating shared judgment across product, engineering, design, compliance, risk, data, support, and leadership.",
    methods: ["Operating cadence", "Tradeoff framing", "Decision docs", "Stakeholder maps"],
    icon: Users
  }
];

export const workingPrinciples = [
  {
    title: "Data-informed, never data-blind",
    description:
      "I use data to locate the problem and measure the change, but I do not let dashboards replace user understanding or product judgment."
  },
  {
    title: "User trust is a product requirement",
    description:
      "In fintech, crypto, and identity, trust is not a tone layer. It is part of the system: states, language, recovery, proof, and protection."
  },
  {
    title: "Complex systems need simple surfaces",
    description:
      "The more complex the regulation, risk, or platform architecture, the more carefully the user-facing model has to be designed."
  },
  {
    title: "Reducing friction between Design and Dev",
    description:
      "Reducing friction between Design and Dev through technical Product Leadership."
  }
];

export const socialProof = {
  logos: [] as string[],
  testimonials: [] as Testimonial[]
};

export const thoughts = Object.assign(
  [
    {
      label: "Published article",
      title: "How to make an Onboarding and don’t die trying",
      teaser:
        "A practical guide to building a powerful digital onboarding and identity verification flow that balances authentication, KYC, user friction, and conversion.",
      date: "Jan 8, 2021",
      readTime: "5 min read",
      cta: "Read on Medium",
      directUrl: "https://ignacio-perezroca.medium.com/how-to-make-an-onboarding-and-dont-die-trying-9a02b725b92b"
    },
    {
      label: "Published article",
      title: "🚨 I almost got scammed during a job interview process.",
      teaser:
        "A sharp breakdown of how modern interview scams work, why even experienced candidates are vulnerable, and a simple framework to stay safe.",
      date: "Apr 10, 2026",
      readTime: "3 min read",
      cta: "Read on Medium",
      directUrl: "https://ignacio-perezroca.medium.com/i-almost-got-scammed-during-a-job-interview-process-52352d3b80ac"
    },
    {
      label: "Published article",
      title: "Onboarding Plan for Mastering the Product Life Cycle",
      teaser:
        "A structured onboarding plan for product managers, covering stakeholder alignment, KPI definition, user feedback, experimentation, and impact forecasting.",
      date: "Jul 26, 2024",
      readTime: "5 min read",
      cta: "Read on Medium",
      directUrl: "https://ignacio-perezroca.medium.com/mastering-the-product-life-cycle-7b2ca5265868"
    },
    {
      label: "Published article",
      title: "Mastering Your First Days as a Product Manager: A Comprehensive Onboarding Guide",
      teaser:
        "A practical framework to ramp up faster as a new product manager through purposeful meetings, stakeholder mapping, product context, and active learning.",
      date: "Jul 5, 2024",
      readTime: "3 min read",
      cta: "Read on Medium",
      directUrl: "https://ignacio-perezroca.medium.com/employees-onboarding-hidden-secrets-of-step-0-b81ce000ab95"
    },
    {
      label: "Published article",
      title: "How to track your events and don’t die trying",
      teaser:
        "A concise guide to event tracking and behavioral analytics, with practical naming conventions and funnel thinking to measure product performance better.",
      date: "Aug 16, 2021",
      readTime: "2 min read",
      cta: "Read on Medium",
      directUrl: "https://ignacio-perezroca.medium.com/how-to-track-your-events-and-dont-die-trying-3a0809efd075"
    }
  ],
  {
    sectionTitle: "Product thinking",
    sectionSubtitle:
      "Essays and perspectives on product strategy, onboarding, UX, analytics, and trust-critical systems.",
    sectionIntro:
      "A curated selection of articles written by Ignacio Perez Roca on onboarding, product thinking, behavioral analytics, digital trust, and product leadership.",
    footerCta: {
      title: "Explore more writing",
      copy: "More essays, ideas, and product reflections available on Medium.",
      buttonLabel: "View Medium profile",
      buttonUrl: "https://ignacio-perezroca.medium.com"
    }
  }
);

export const trustThemes = [
  {
    label: "Trust-critical products",
    icon: ShieldCheck
  },
  {
    label: "Identity and access",
    icon: LockKeyhole
  },
  {
    label: "Platform thinking",
    icon: Network
  }
];
