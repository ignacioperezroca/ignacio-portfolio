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
// Replace placeholder metrics, dates, company names, logos, testimonials, and artifacts here.
// The components are intentionally driven by this file so the site can be edited without touching layout code.

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type TimelineRole = {
  company: string;
  logoText: string;
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
  email: "replace-with-your-email@example.com",
  linkedinUrl: "https://github.com/ignacioperezroca",
  githubUrl: "https://github.com/ignacioperezroca/ignacio-portfolio",
  resumeUrl: "/resume/ignacio-perez-roca-product-manager-cv.pdf",
  profileImage: "/images/profile-placeholder.svg",
  heroEyebrow: "Senior Product Manager - fintech, identity, onboarding, growth",
  heroHeadline:
    "Senior Product Manager for trust-critical fintech, identity, onboarding, and growth products.",
  heroSubheadline:
    "I turn regulated complexity into clear product systems: onboarding journeys, KYC flows, authentication, digital identity, and activation loops that balance conversion, risk, UX, and operational scale.",
  shortPositioning:
    "I build the product infrastructure that helps users prove who they are, trust what they are using, and get to value faster.",
  availability:
    "Open to senior product roles, product leadership, advisory, and select consulting work in fintech, crypto, AI, identity, and platform teams."
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
    value: "16+ yrs",
    label: "Product, design, and development",
    detail:
      "I've acquired a wide range of tools, tactics, and experience across various roles and industries."
  },
  {
    value: "12MM+",
    label: "Users impacted",
    detail: "Use actual active users, verified users, or accounts reached."
  },
  {
    value: "12+ American",
    label: "Markets and regions",
    detail: "Adjust to the exact countries and segments you have served."
  },
  {
    value: "2x",
    label: "Growth systems",
    detail: "Replace with a verified activation, conversion, or revenue metric."
  }
];

export const timelineRoles: TimelineRole[] = [
  {
    company: "Fintech / Crypto Scale-up",
    logoText: "FX",
    role: "Senior Product Manager",
    dates: "2023 - Present",
    mission:
      "Own high-trust product surfaces where onboarding, compliance, authentication, and growth directly affect business performance.",
    scope: "Growth, identity, regulated onboarding, cross-functional execution",
    specialty: "Trust-critical growth",
    impacts: [
      "Led discovery and prioritization across onboarding, identity verification, and activation opportunities.",
      "Balanced conversion goals with risk, compliance, support load, and user trust.",
      "Created clearer product decision loops between data, UX, engineering, and operations.",
      "Shipped measurable improvements to key funnels. Replace with confirmed metric."
    ],
    details: [
      "Ideal place to add your real company, market, user scale, team size, and owned KPIs.",
      "Add 2-3 representative launches, such as KYC redesign, authentication improvements, account recovery, onboarding experiments, or operational tooling."
    ]
  },
  {
    company: "Identity / KYC Platform",
    logoText: "ID",
    role: "Product Manager",
    dates: "2021 - 2023",
    mission:
      "Simplify complex identity, verification, and security flows so legitimate users can move faster while risk remains controlled.",
    scope: "KYC, authentication, fraud/risk collaboration, platform thinking",
    specialty: "Identity systems",
    impacts: [
      "Mapped fragmented verification journeys and redesigned them around user intent and risk state.",
      "Reduced operational ambiguity by clarifying rules, escalation states, and backoffice signals.",
      "Improved stakeholder alignment across product, engineering, compliance, support, and data.",
      "Established reusable flow patterns for future onboarding and trust products."
    ],
    details: [
      "Replace with your actual role title, company, and dates.",
      "Use this entry for work involving verification vendors, document review, liveness checks, risk tiers, support tooling, or compliance constraints."
    ]
  },
  {
    company: "Product-Led Growth Team",
    logoText: "PLG",
    role: "Product / Growth Lead",
    dates: "2019 - 2021",
    mission:
      "Improve activation by identifying where users lose confidence, intent, or momentum before reaching core product value.",
    scope: "Experimentation, analytics, onboarding, activation, UX strategy",
    specialty: "Activation systems",
    impacts: [
      "Translated funnel data into sharper hypotheses, UX changes, and experiment roadmaps.",
      "Partnered with design and engineering to ship lower-friction entry points and clearer product education.",
      "Instrumented success metrics beyond click-through, including trust, completion, and downstream retention.",
      "Created repeatable rituals for learning from experiments and qualitative feedback."
    ],
    details: [
      "Add experiment names, before/after conversion, confidence levels, and business outcomes.",
      "This is a strong place to show product-led growth depth beyond generic acquisition language."
    ]
  },
  {
    company: "UX / Frontend Foundations",
    logoText: "UX",
    role: "UX/UI and Frontend-Oriented Product Builder",
    dates: "Earlier career",
    mission:
      "Build the craft foundation that now strengthens product judgment: interface quality, implementation tradeoffs, and user empathy.",
    scope: "Design systems, UI execution, frontend fluency, prototyping",
    specialty: "Design-to-engineering bridge",
    impacts: [
      "Built a strong working model for translating ambiguous problems into usable interfaces.",
      "Developed enough technical fluency to reason with engineering teams about feasibility, quality, and tradeoffs.",
      "Learned to connect visual hierarchy, interaction detail, and measurable product outcomes.",
      "Carried design craft into product leadership without becoming design-led at the expense of business goals."
    ],
    details: [
      "Replace with actual early roles, projects, agencies, startups, or independent work.",
      "Use artifacts here: Figma explorations, prototypes, design systems, frontend projects, or shipped UI."
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "kyc-onboarding-optimization",
    title: "Reducing identity friction in regulated onboarding",
    kicker: "KYC / Onboarding / Conversion",
    summary:
      "A structured redesign of onboarding and verification states to increase completion while preserving compliance and risk controls.",
    topics: ["KYC", "Onboarding", "Growth"],
    stage: "Scale-up optimization",
    scope: "Consumer fintech / crypto",
    impactMetric: "+18% completion placeholder",
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
          value: "+18%",
          label: "KYC completion",
          detail: "Placeholder. Replace with confirmed before/after impact."
        },
        {
          value: "-22%",
          label: "Support contacts",
          detail: "Placeholder for avoidable verification inquiries."
        },
        {
          value: "+11%",
          label: "Activation after approval",
          detail: "Placeholder for downstream user value."
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
    title: "Designing a unified authentication and trust layer",
    kicker: "Authentication / Security / Platform",
    summary:
      "A platform-oriented approach to authentication that made security decisions more consistent while improving user recovery and product velocity.",
    topics: ["Authentication", "Identity", "Platform"],
    stage: "Platform consolidation",
    scope: "Multi-surface product ecosystem",
    impactMetric: "-30% recovery friction placeholder",
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
          value: "-30%",
          label: "Recovery friction",
          detail: "Placeholder for time-to-recover or drop-off reduction."
        },
        {
          value: "-25%",
          label: "Auth support cases",
          detail: "Placeholder for account access inquiries."
        },
        {
          value: "1 model",
          label: "Reusable auth pattern",
          detail: "Replace with actual number of adopted surfaces or teams."
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
    title: "Building an activation system for product-led growth",
    kicker: "Growth / Experimentation / Activation",
    summary:
      "A disciplined growth program that connected funnel analytics, user insight, and product changes to improve time-to-value.",
    topics: ["Growth", "Experimentation", "Onboarding"],
    stage: "Growth acceleration",
    scope: "Self-serve and assisted onboarding",
    impactMetric: "+24% activation placeholder",
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
          value: "+24%",
          label: "Activation",
          detail: "Placeholder for first-value or qualified activation rate."
        },
        {
          value: "-16%",
          label: "Time-to-value",
          detail: "Placeholder for elapsed time from signup to key action."
        },
        {
          value: "12",
          label: "Experiments shipped",
          detail: "Placeholder. Replace with actual experiment volume."
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
    title: "Redesigning KYC operations tooling for speed and consistency",
    kicker: "Backoffice / Operations / Risk",
    summary:
      "An internal product effort to reduce ambiguity in manual review, improve decision quality, and expose better signals to frontline teams.",
    topics: ["KYC", "Operations", "Platform"],
    stage: "Operational scale",
    scope: "Manual review and escalation tooling",
    impactMetric: "-35% handling time placeholder",
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
          value: "-35%",
          label: "Review handling time",
          detail: "Placeholder. Replace with actual operational impact."
        },
        {
          value: "-20%",
          label: "Reopened cases",
          detail: "Placeholder for decision quality or rework."
        },
        {
          value: "+1",
          label: "Decision taxonomy",
          detail: "Replace with actual process, queue, or policy artifact."
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
    title: "Improving account trust and recovery in crypto products",
    kicker: "Crypto / Trust / Account Recovery",
    summary:
      "A recovery and trust-state product model for high-anxiety account moments where security, access, and confidence must coexist.",
    topics: ["Crypto", "Authentication", "Trust"],
    stage: "Trust and safety",
    scope: "Account access, recovery, and user communication",
    impactMetric: "-28% abandonment placeholder",
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
          value: "-28%",
          label: "Recovery abandonment",
          detail: "Placeholder for completed recovery journey improvement."
        },
        {
          value: "-18%",
          label: "Repeat attempts",
          detail: "Placeholder for duplicate or confused recovery submissions."
        },
        {
          value: "+",
          label: "Trust signal quality",
          detail: "Replace with actual qualitative or quantitative trust measure."
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

export const achievements: Metric[] = [
  {
    value: "+24%",
    label: "Activation lift",
    detail: "Placeholder for product-led onboarding or first-value improvement."
  },
  {
    value: "+18%",
    label: "KYC completion",
    detail: "Placeholder for identity verification completion improvement."
  },
  {
    value: "-35%",
    label: "Operational handling time",
    detail: "Placeholder for backoffice or manual review efficiency."
  },
  {
    value: "1 platform",
    label: "Unified identity model",
    detail: "Placeholder for platform consolidation across product surfaces."
  },
  {
    value: "MM+",
    label: "Users touched",
    detail: "Placeholder for verified, onboarded, or active users impacted."
  },
  {
    value: "X markets",
    label: "Regional complexity",
    detail: "Placeholder for country, regulatory, or segment coverage."
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
    title: "Execution should clarify strategy",
    description:
      "Good product teams do not choose between thinking and shipping. They ship in a way that produces cleaner decisions."
  }
];

export const socialProof = {
  logoPlaceholders: [
    "Company logo",
    "Fintech brand",
    "Crypto product",
    "Identity vendor",
    "Growth team"
  ],
  testimonials: [
    {
      quote:
        "Add a concise quote from a founder, Head of Product, engineering leader, or design partner about your ability to connect strategy, UX, and execution.",
      name: "Reference name",
      title: "Title and company"
    },
    {
      quote:
        "Use this for a testimonial about identity, onboarding, KYC, growth, or cross-functional leadership under constraints.",
      name: "Reference name",
      title: "Title and company"
    },
    {
      quote:
        "Add one proof point about how you simplify complex product systems and create measurable business impact.",
      name: "Reference name",
      title: "Title and company"
    }
  ] satisfies Testimonial[]
};

export const thoughts = [
  {
    title: "Designing onboarding for trust, not just completion",
    description:
      "A future essay on why regulated onboarding needs to optimize confidence, proof, quality, and conversion together."
  },
  {
    title: "What KYC teaches product teams about state models",
    description:
      "A placeholder for writing about identity systems, compliance constraints, and how to keep users oriented."
  },
  {
    title: "Growth in products where risk matters",
    description:
      "A future note on experimentation when every funnel improvement must be weighed against abuse, risk, and user trust."
  }
];

export const contactIntents = [
  "Senior Product role",
  "Product leadership",
  "Advisory",
  "Consulting",
  "Collaboration"
];

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
