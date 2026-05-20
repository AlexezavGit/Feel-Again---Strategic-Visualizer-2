
import { Dictionary, Language, DocumentId } from './types';

// Updated Logos to keys for SVG rendering
const LOGOS = {
  feelAgain: "feelAgain",
  enkidu: "solana",
  quorum: "solana",
  shevchenko: "shevchenko",
  openSociety: "open_society",
  usc: "usc",
  geha: "geha",
  kse: "shevchenko" // Using placeholder for now or mapping to shevchenko
};

// Updated to 4 Operational Stacks (Coordination is the Umbrella)
const CONSORTIUM_ROLES_EN = [
  { org: "CLINICAL STACK", role: "GEHA (Israel) + 8000 UA Psychologists", logo: LOGOS.geha, link: "https://www.geha.org.il/" },
  { org: "TECH STACK", role: "USC ICT (VR Scenarios)", logo: LOGOS.usc, link: "https://ict.usc.edu/" },
  { org: "FINTECH STACK", role: "HighCastle (Solana) + Enkidu P2P Platform", logo: LOGOS.enkidu, link: "https://highcastle.co/" },
  { org: "ANALYTICS STACK", role: "British GDP Methodology + KNU + Economy Min", logo: LOGOS.shevchenko, link: "https://www.knu.ua/" },
];

const CONSORTIUM_ROLES_UA = [
  { org: "КЛІНІЧНИЙ СТЕК", role: "GEHA (Ізраїль) + 8000 Психологів", logo: LOGOS.geha, link: "https://www.geha.org.il/" },
  { org: "ТЕХНОЛОГІЧНИЙ СТЕК", role: "USC ICT (VR Сценарії)", logo: LOGOS.usc, link: "https://ict.usc.edu/" },
  { org: "ФІНТЕХ СТЕК", role: "HighCastle (Solana) + Enkidu P2P Платформа", logo: LOGOS.enkidu, link: "https://highcastle.co/" },
  { org: "АНАЛІТИЧНИЙ СТЕК", role: "British GDP Methodology + КНУ + Мінекономіки", logo: LOGOS.shevchenko, link: "https://www.knu.ua/" },
];

const PROGRAM_DESCRIPTION_UA = "Фінтех — це перша у світі digital-інфраструктура, що об'єднує зусилля учасників гуманітарного реагування: від локальних меценатів до глобальних організацій. Ми будуємо «цифровий хребет» для MHPSS сектору в Україні, що дозволяє локалізувати до 70% допомоги, забезпечуючи прозорість транзакцій через де-персоніфікований реєстр та деризиковане співфінансування.";

const PROGRAM_DESCRIPTION_EN = "Fintech is the world's first digital infrastructure unifying humanitarian response efforts: from local philanthropists to global organizations. We are building the 'digital backbone' for the MHPSS sector in Ukraine, enabling up to 70% localization of aid while ensuring transaction transparency through a de-identified registry and de-risked co-financing.";

export const CONTENT: Dictionary = {
  [Language.EN]: {
    appNav: {
      cta: "Join Consortium",
      schemaLabel: "Visual Strategy",
      reportLabel: "Deep Dive",
      nextDoc: "Next Section",
      prevDoc: "Prev Section",
      backToSchema: "Back to Map",
      startTour: "Start Exploration",
      readMore: "Analysis",
      viewOpportunity: "Opportunity",
      viewProblem: "Analysis",
      close: "Close",
      warRoom: "War Room",
      enterSpace: "View Solution",
      contact: "Contact HQ"
    },
    hero: {
      title: "FeeL Again. Humanitarian.",
      subtitle: "Digital Infrastructure for Localization and GDP Preservation.",
      description4to1: [
        "A de-identified registry for MHPSS in Ukraine.",
        "Connecting global resources with local private-sector capacity."
      ],
      footer: "Strategic Alignment: UN SDGs & Grand Bargain Localization Targets",
      slogans: ["Localization First", "Radical Transparency", "GDP Preservation"]
    },
    warRoom: {
      title: "Unified Deployment Matrix",
      subtitle: "January 2026 Status: Operational & Strategic Vectors",
      matrixTitle: "Strategic Deployment Matrix",
      items: [
        {
          id: "budget-gap",
          title: "The Budget-Need Paradox",
          subtitle: "98% vs 70% Structural Mismatch",
          status: "Critical Decision",
          description: "98% of the state budget is currently locked into maintaining massive psychiatric hospitals (inpatient care), while 70% of beneficiaries explicitly request outpatient/ambulatory support. This is the primary 'Gap' in humanitarian delivery.",
          keyProjects: ["Budget Realignment", "Outpatient Expansion", "Ambulatory Rails"],
          deployment: [
            { name: "State Hospitals", icon: "Building", beneficiaries: "89% Budget" },
            { name: "Beneficiary Preference", icon: "Heart", beneficiaries: "70% Demand" }
          ]
        },
        {
          id: "specialist-recruitment",
          title: "The Shadow Sector Mobilization",
          subtitle: "Recruiting the 'Invisible' 15,000",
          status: "Active",
          description: "To bridge the capacity gap, we must recruit specialists from the 'statistical shadow': private practitioners, psychiatrists in transition, and NGO staff. Our research shows specific leverage points for recruitment.",
          keyProjects: ["Specialist Onboarding", "Private Sector Integration", "Clinical Licensing"],
          deployment: [
            { name: "Financial Incentive", icon: "DollarSign", beneficiaries: "70% Weight" },
            { name: "Working Conditions", icon: "Briefcase", beneficiaries: "20% Weight" },
            { name: "Patient Contingent", icon: "Users", beneficiaries: "10% Weight" }
          ]
        }
      ] 
    },
    charts: {
      shadowVsCluster: "Capacity Gap: Official Cluster (500 orgs) vs Private Sector Potential (15k)",
      fundingGap: "Funding vs Needs Gap",
      techStack: "Infrastructure Efficiency",
      adminCost: "Operational Friction vs Digital Efficiency",
      donorDashboard: "Live Humanitarian Control Center",
      derisking: "De-risking Model: Grants + P2P",
      globalLocal: "The Digital Bridge: Connecting Banks A & B",
      dashboard_transparency: "FeeL Again Middleware: Real-time Compliance Reporting",
      dashboard_monitoring: "FeeL Again Middleware: AI Fraud Detection & Control",
      dashboard_funding: "FeeL Again Middleware: Program & Campaign Management"
    },
    docs: {
      [DocumentId.CHALLENGE]: {
        navTitle: "The Challenge",
        schema: {
          title: "A River With No Bridge: Global Resources vs Local Reality",
          subtitle: "The Structural Gap in Humanitarian Delivery",
          centerNode: {
            title: "Solution",
            subtitle: "Humanitarian Fintech",
            description: PROGRAM_DESCRIPTION_EN,
            targetPage: 5,
            features: [
              { title: "Smart Contracts", desc: "Traceability of every dollar to every session." },
              { title: "Clinical Integrity", desc: "Scaling WHO mhGAP standards to the private sector." },
              { title: "Market Growth", desc: "Turning aid into sustainable market development." }
            ]
          },
          nodes: [
            {
              id: "gap",
              title: "The Gap",
              highlight: "Global vs Local",
              icon: "ArrowRightLeft",
              targetPage: 1,
              points: ["Bank A: Global Resources", "Bank B: Local Reality", "Disconnect"]
            },
            {
              id: "mismatch",
              title: "Mismatch",
              highlight: "Wall against needs",
              icon: "ShieldAlert",
              targetPage: 2,
              points: ["89% budget to inpatient care", "71% patients want outpatient", "Structural wall"]
            },
            {
              id: "stigma",
              title: "New Stigma",
              highlight: "83% Potential",
              icon: "Users",
              targetPage: 3,
              points: ["38% 'not important'", "45% 'too expensive'", "Economic barriers"]
            },
            {
              id: "displacement",
              title: "Capacity",
              highlight: "23% Drop",
              icon: "TrendingDown",
              targetPage: 4,
              points: ["21.7% workers displaced", "Psychiatrist shortage", "Systemic drain"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "A River With No Bridge",
              subtitle: "The Gap Between Global Resources and Local Reality.",
              body: "<b>Bank A (Global Resources):</b> $177M Health Cluster funds — a parallel cash flow without a common unit of measurement for aid delivered. They have high standards but are restricted by analog processes that limit direct reach (~1.2% to local initiatives).<br/><br/><b>Bank B (Local Reality):</b> 10,000-15,000 private psychologists ready to serve. They are not 'shadowy' by intent; they are simply unconnected. Without a technological bridge, they remain in the 'statistical shadow'.",
              bullets: ["$177M Health Cluster: Parallel cash flow.", "Bank B: 15,000 Private Specialists.", "The Missing Link: Digital Infrastructure."],
              chartId: "shadowVsCluster"
            },
            {
              id: 2,
              title: "A fundamental mismatch wall against needs",
              subtitle: "89% of the budget goes to inpatient care (psychiatric hospitals).",
              body: "There is a structural wall between funding and reality. While the vast majority of resources are locked into large-scale inpatient facilities, the actual demand is shifting rapidly towards flexible, community-based support.",
              quote: "ми платим за стіни, а пацієнтів залишаємо зовні",
              signature: "Budgets flow one way. Ukrainians move the other.",
              bullets: ["89% Budget: Inpatient care.", "71% Patients: Want outpatient facilities.", "Structural Mismatch."],
              chartId: "fundingGap"
            },
            {
              id: 3,
              title: "New Stigma",
              subtitle: "Economic and social barriers to mental health.",
              body: "38% of the population considers mental health 'not important', 45% — 'too expensive' (PMC 2024). These are not just cultural stigmas, but economic ones. 83% of the population could become active seekers of help if costs were covered and the war ended.",
              bullets: ["38% 'Not Important'.", "45% 'Too Expensive'.", "83% Potential help-seekers."],
              chartId: "localizationGap"
            },
            {
              id: 4,
              title: "Capacity Drain",
              subtitle: "The human capital crisis in healthcare.",
              body: "21.7% of healthcare workers are displaced, and the number of psychiatrists per facility has fallen by 23% (PMC 2024). The system is losing its most valuable asset: the specialists themselves.",
              bullets: ["21.7% Workers Displaced.", "23% Drop in Psychiatrists.", "Systemic Capacity Crisis."]
            },
            {
              id: 5,
              title: "THE SOLUTION IS A DIGITAL BRIDGE",
              subtitle: "Connecting Banks A & B",
              body: PROGRAM_DESCRIPTION_EN,
              bullets: ["Humanitarian Fintech.", "Synchronized Resources.", "Traceable Impact."]
            }
          ]
        }
      },
      [DocumentId.IMPERATIVE]: {
        navTitle: "The Imperative",
        schema: {
          title: "The Scale of Human Capital Needs",
          subtitle: "50 000 000+ Therapy Hours Annually",
          centerNode: {
            title: "Scale",
            subtitle: "National Security",
            description: "Infrastructure rebuilding is impossible without rebuilding people. Mental health is a core pillar of national resilience.",
            targetPage: 1,
            features: [
              { title: "Human Capital", desc: "Preserving the workforce." },
              { title: "Resilience", desc: "Building a trauma-informed society." }
            ]
          },
          nodes: [
            {
              id: "hours",
              title: "Demand",
              highlight: "50M Hours",
              icon: "Activity",
              targetPage: 1,
              points: ["15M Ukrainians in need", "12-20 sessions per case", "Systemic deficit"]
            },
            {
              id: "gdp",
              title: "Economy",
              highlight: "5-15% GDP",
              icon: "TrendingDown",
              targetPage: 1,
              points: ["LSE Methodology", "Productivity loss", "Reconstruction risk"]
            },
            {
              id: "capital",
              title: "Human Capital",
              highlight: "Preservation",
              icon: "Users",
              targetPage: 1,
              points: ["Workforce recovery", "Mental resilience", "National asset"]
            },
            {
              id: "resilience",
              title: "Resilience",
              highlight: "Trauma-informed",
              icon: "ShieldCheck",
              targetPage: 1,
              points: ["Social cohesion", "Long-term stability", "Community support"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "The Imperative: 50 000 000+ Hours",
              subtitle: "The Scale of Human Capital Needs.",
              body: "According to Ministry of Health estimates, over 15 million Ukrainians will require psychological support. To meet this demand using standard protocols, the national system requires a capacity of over 50 000 000 Therapy Hours annually. Untreated mental health issues cost the economy 5-15% of GDP in lost productivity.",
              bullets: ["15M People in Need.", "50 000 000 Annual Therapy Hours.", "5-15% GDP Impact."]
            }
          ]
        }
      },
      [DocumentId.GOVERNANCE]: {
        navTitle: "Governance",
        schema: {
          title: "Whole Governance - Strategic Framework",
          subtitle: "Four-Quadrant Architecture for MHPSS",
          centerNode: {
            title: "RESET",
            subtitle: "Strategic Goal",
            description: "A unified governance model aligning global standards with local delivery through a four-quadrant strategic framework.",
            targetPage: 1,
            features: [
              { title: "Alignment", desc: "Global-Local synchronization." },
              { title: "Governance", desc: "Whole-of-government approach." }
            ]
          },
          nodes: [
            {
              id: "quad1",
              title: "Quadrant 1",
              highlight: "Policy",
              icon: "ShieldCheck",
              targetPage: 1,
              points: ["National Standards", "WHO Compliance", "Legislative Rails"]
            },
            {
              id: "quad2",
              title: "Quadrant 2",
              highlight: "Delivery",
              icon: "Zap",
              targetPage: 1,
              points: ["Private Sector", "NGO Integration", "Public-Private Partnership"]
            },
            {
              id: "quad3",
              title: "Quadrant 3",
              highlight: "Data",
              icon: "Database",
              targetPage: 1,
              points: ["Open De-persified Set", "Real-time Analytics", "Outcome Tracking"]
            },
            {
              id: "quad4",
              title: "Quadrant 4",
              highlight: "Finance",
              icon: "Wallet",
              targetPage: 1,
              points: ["Blended Finance", "Smart Contracts", "Audit Trails"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Whole Governance Framework",
              subtitle: "Strategic alignment for national resilience.",
              body: "The Whole Governance model ensures that all actors — from the Ministry of Health to private practitioners — operate within a single strategic framework. This prevents duplication of effort and ensures that every dollar spent is aligned with national priorities.",
              bullets: ["Strategic Alignment.", "Inter-agency Coordination.", "Outcome-based Governance."]
            }
          ]
        }
      },
      [DocumentId.INFRASTRUCTURE]: {
        navTitle: "Technology",
        schema: {
          title: "The Digital Backbone: Middleware & API",
          subtitle: "Integrating the 'Invisible' Private Sector",
          centerNode: { 
            title: "Digital Bridge", 
            subtitle: "Middleware Core",
            description: "A non-competitive digital infrastructure connecting humanitarian actors, local providers, and beneficiaries through a de-identified registry.",
            targetPage: 5,
            features: [
              { title: "API Integration", desc: "Connecting search platforms to clinical standards." },
              { title: "Real-time Transparency", desc: "Every transaction visible and verified." },
              { title: "Innovation Line", desc: "VR-therapy & EMDR capacity building." }
            ]
          },
          nodes: [
            {
              id: "tech",
              title: "Middleware",
              highlight: "API-First",
              icon: "Cpu",
              targetPage: 1,
              points: ["Integration with search platforms", "Clinical data systems", "Government medical data"]
            },
            {
              id: "compliance",
              title: "Monitoring",
              highlight: "De-identified",
              icon: "ShieldCheck",
              targetPage: 2,
              points: ["Immutable registry", "Privacy-first KYC", "Transparent audit trail"]
            },
            {
              id: "capability",
              title: "Innovation",
              highlight: "VR & EMDR",
              icon: "Zap",
              targetPage: 3,
              points: ["USC ICT VR-therapy", "Geha Clalit EMDR protocols", "Specialist training"]
            },
            {
              id: "data",
              title: "Connectivity",
              highlight: "Real-time",
              icon: "Globe",
              targetPage: 4,
              points: ["Instant reporting", "IATI XML standards", "mhGAP compliance"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "The Technological Bridge",
              subtitle: "Recovering 30% of lost value.",
              body: "FeeL Again acts as a digital bridge connecting humanitarian actors, local providers (volunteers, private professionals, clinics), and beneficiaries. Our API-first architecture integrates search platforms with clinical accounting systems and government medical data, ensuring real-time transparency for every transaction.",
              bullets: ["API-first architecture.", "Middleware connectivity.", "Real-time transparency."],
              chartId: "dashboard_monitoring"
            },
            {
              id: 2,
              title: "Monitoring & Registry",
              subtitle: "Privacy-first, immutable verification.",
              body: "We use a de-identified registry to ensure the privacy of beneficiaries while maintaining an immutable audit trail. Integration with Diia for KYC verification ensures that every actor in the system is legitimate, while smart contracts automate the de-risked co-financing process.",
              bullets: ["De-identified registry.", "Diia KYC integration.", "Smart contract automation."],
              chartId: "dashboard_transparency"
            },
            {
              id: 3,
              title: "Innovation & Capacity Building",
              subtitle: "Advanced methodology for clinical excellence.",
              body: "Our 'Innovation Line' provides specialists with advanced tools: VR-therapy (partner USC ICT) and EMDR protocols (partner Geha Clalit). This capacity-building program ensures that even private practitioners can provide world-class care using standardized, technology-backed methodologies.",
              bullets: ["VR-therapy (USC ICT).", "EMDR (Geha Clalit).", "Specialist training."],
              chartId: "techStack"
            },
            {
              id: 4,
              title: "Real-time Connectivity",
              subtitle: "Instant reporting and compliance.",
              body: "The system provides real-time connectivity between all stakeholders. By automating data flow according to IATI XML standards and mhGAP compliance, we ensure that every session is recorded and reported instantly to donors and government bodies.",
              bullets: ["Instant reporting.", "IATI XML standards.", "mhGAP compliance."],
              chartId: "donorDashboard"
            },
            {
              id: 5,
              title: "The Digital Backbone",
              subtitle: "Integrating the 'Invisible' Private Sector.",
              body: "By providing the digital infrastructure that removes the administrative burden, we allow private practitioners to emerge from the 'statistical shadow'. The system automates reporting according to humanitarian (IATI) and clinical (mhGAP) standards, making the private sector a reliable partner for global donors.",
              bullets: ["Automated reporting.", "IATI & mhGAP compliance.", "Market legitimization."],
              chartId: "dashboard_funding"
            }
          ]
        }
      },
      [DocumentId.FINANCE]: {
        navTitle: "Finance",
        schema: {
          title: "Foundation II: Financial Integrity via Strategic Purchasing",
          subtitle: "De-risking & Fintech Transparency",
          centerNode: { 
            title: "Фінтех", 
            subtitle: "Fintech Core",
            description: "Transitioning from passive funding to Active Purchasing. We link payments to provider outcomes using a De-risked Co-financing model.",
            targetPage: 5,
            features: [
              { title: "Active Purchasing", desc: "Payment for results (sessions)." },
              { title: "Risk Pooling", desc: "Resource redistribution; beneficiary protection." },
              { title: "Benefit Design", desc: "Aligning services with reality." }
            ]
          },
          nodes: [
            {
              id: "blended",
              title: "De-risking",
              highlight: "P2P Validation",
              icon: "Scale",
              targetPage: 1,
              points: ["Community co-payments validate demand", "Donors fund verified transactions", "Market demand as verification"]
            },
            {
              id: "risk",
              title: "Sustainability",
              highlight: "SaaS for Government",
              icon: "RefreshCw",
              targetPage: 2,
              points: ["Infrastructure fees from partners", "Revenue reinvestment", "Premium Analytics"]
            },
            {
              id: "direct",
              title: "Transparency",
              highlight: "Radical",
              icon: "Globe",
              targetPage: 3,
              points: ["Tracking every dollar", "From 'sessions' to 'restored people'", "Live Ticker"]
            },
            {
              id: "registry",
              title: "Leverage",
              highlight: "Matching",
              icon: "TrendingUp",
              targetPage: 4,
              points: ["Institutional donors close the gap", "Humanitarian Financial Leverage", "Sustainable Model"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "De-risked Co-financing Model",
              subtitle: "Donors fund transactions, not forecasts.",
              body: "The program implements a <b>P2P Validation</b> mechanism (community co-payments) of need through a social contract between the immediate environment and the beneficiary. This reduces risks and attracts other types of resources: corporate, local funds, while global budgets (Institutional donors) close the financial gap for final rehabilitation payments.",
              bullets: ["P2P Demand Validation.", "Donors Close the Gap.", "Market Verification."],
              chartId: "derisking"
            },
            {
              id: 2,
              title: "SaaS for Government: Sustainability & Scale",
              subtitle: "Cost-effective, scalable, and data-driven MHPSS management.",
              body: "The infrastructure operates as a <b>SaaS for Government</b> model, providing a ready-to-use digital backbone for national MHPSS management. It eliminates the need for expensive custom development, offering immediate <b>scalability</b> across regions. Government entities gain <b>data-driven decision-making</b> capabilities through real-time analytics, while the self-sustaining fee structure ensures <b>cost-effectiveness</b> and long-term viability without constant emergency funding.",
              bullets: ["Cost-effective Infrastructure", "National Scalability", "Data-driven Governance"],
              chartId: "adminCost"
            },
            {
              id: 3,
              title: "Radical Transparency: Donor Dashboard",
              subtitle: "From tracking 'sessions delivered' to 'restored people' and GDP contribution.",
              body: "The Fintech Core provides an Activity Heatmap and a Resource Efficiency Index for Mental Health. End-to-end traceability of transactions from 'Source to Service'. The dashboard automatically monitors compliance with Grand Bargain and IATI standards.",
              bullets: ["Live Heatmap.", "Efficiency Index (MHEI).", "End-to-end Traceability."],
              chartId: "dashboard_transparency"
            },
            {
              id: 4,
              title: "Financial Integrity via Strategic Purchasing",
              subtitle: "Active Purchasing, Risk Pooling, Benefit Design.",
              body: "We transition from passive grant distribution to <b>Strategic Purchasing</b> (Source: WHO IRIS Guidelines). <br/>1. <b>Active Purchasing:</b> Linking payments to provider work (hourly).<br/>2. <b>Risk Pooling:</b> Protecting beneficiaries from out-of-pocket costs.<br/>3. <b>Benefit Design:</b> Aligning services with reality.",
              bullets: ["Payment for Results.", "Risk Pooling.", "WHO Aligned."]
            },
            {
              id: 5,
              title: "Fintech Core of the Program",
              subtitle: "Radical Transparency & Traceability.",
              body: "The Fintech Core provides an Activity Heatmap and a Resource Efficiency Index for Mental Health. End-to-end traceability of transactions from 'Source to Service'. The dashboard automatically monitors compliance with Grand Bargain and IATI standards.",
              bullets: ["Activity Heatmap.", "End-to-end Traceability.", "Grand Bargain Compliance."],
              chartId: "dashboard_funding"
            }
          ]
        }
      },
      [DocumentId.OPERATIONAL]: {
        navTitle: "Operational",
        schema: {
          title: "Operational Strategy: 6 Key Functions",
          subtitle: "A Vision for the Global Humanitarian Reset",
          centerNode: { 
            title: "RESET", 
            subtitle: "Strategic Goal",
            description: "FeeL Again is a national project aiming for a Humanitarian Reset in MHPSS, targeting 25% direct localization funding according to the Grand Bargain.",
            targetPage: 5,
            features: [
              { title: "Localization", desc: "Target: 25% direct funding." },
              { title: "Transparency", desc: "Real-time transaction monitoring." },
              { title: "Scalability", desc: "Ready for export to 10+ countries." }
            ],
            consortiumRoles: CONSORTIUM_ROLES_EN
          },
          nodes: [
            {
              id: "data",
              title: "data",
              highlight: "Open De-persified",
              icon: "Layers",
              targetPage: 1,
              points: ["Unified online data set", "Digital coordination between actors", "Verified donor initiatives"]
            },
            {
              id: "clinical",
              title: "Function 3-4",
              highlight: "Compliance",
              icon: "ShieldCheck",
              targetPage: 2,
              points: ["Clinical protocol tracking (mhGAP)", "Automated IATI reporting", "Quality control"]
            },
            {
              id: "tech",
              title: "Function 5-6",
              highlight: "Mobilization",
              icon: "Zap",
              targetPage: 3,
              points: ["Expertise center", "Resource mobilization center", "Proven WFP/UNHCR models"]
            },
            {
              id: "fintech",
              title: "Operational stack",
              highlight: "Partners",
              icon: "Users",
              targetPage: 4,
              points: ["Open Society (Coordination)", "GEHA Clalit (Clinical)", "USC ICT (VR Tech)", "HighCastle (Fintech)"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Data & Coordination",
              subtitle: "Functions 1 & 2: The foundation of digital aid.",
              body: "We prepare a unified online data set (Estonian experience, 99% digitized data) and enable digital coordination between humanitarian actors. Funding programs become visible to verified providers, and aid projects become visible to donors, verified to the level of humanitarian scoring.",
              bullets: ["Unified data sets.", "Digital coordination.", "Verified initiatives."],
              chartId: "donorDashboard"
            },
            {
              id: 2,
              title: "Protocols & Reporting",
              subtitle: "Functions 3 & 4: Ensuring quality and transparency.",
              body: "The system tracks the implementation of clinical protocols (mhGAP) and automates reporting according to the IATI XML standard. This removes the administrative burden from psychologists while ensuring that donors receive real-time, high-quality data on every session.",
              bullets: ["mhGAP protocol tracking.", "Automated IATI reporting.", "Administrative relief."],
              chartId: "dashboard_monitoring"
            },
            {
              id: 3,
              title: "Expertise & Mobilization",
              subtitle: "Functions 5 & 6: Scaling resources and knowledge.",
              body: "We establish a network center of expertise and a resource mobilization center. This model is proven by WFP ($325M), Oxfam, and UNHCR. It ensures that resources are allocated to the most effective initiatives while building local capacity through continuous training.",
              bullets: ["Expertise network.", "Resource mobilization.", "Proven global models."],
              chartId: "dashboard_funding"
            },
            {
              id: 4,
              title: "The Operational Stack",
              subtitle: "Multidisciplinary expertise for a paradigm shift.",
              body: "<b>Coordination:</b> Open Society + FeeL Again.<br/><b>Clinical Stack:</b> GEHA Clalit (Israel) & verified UA specialists.<br/><b>Tech Stack:</b> USC ICT (VR Methodology) & Atmaraksi.<br/><b>Fintech Stack:</b> HighCastle (Solana) & P2P.<br/><b>Analytics:</b> KNU Shevchenko & Ministry of Economy.",
              bullets: ["Multidisciplinary solution.", "Global & local partners.", "Paradigm shift in aid."]
            },
            {
              id: 5,
              title: "Humanitarian Reset",
              subtitle: "Targeting 25% direct localization.",
              body: "Our operational goal in the MHPSS sector is to reach a national project status aligned with the Grand Bargain. We aim for a 'Humanitarian Reset' in Ukraine, targeting 25% direct localization funding, supported by international actors like Tom Fletcher.",
              bullets: ["Grand Bargain alignment.", "25% Localization target.", "National project status."]
            }
          ]
        }
      },
      [DocumentId.MONITORING]: {
        navTitle: "Monitoring",
        schema: {
          title: "Monitoring & Impact: Evidence-Based Investment",
          subtitle: "Measuring Minds Restored, Not Just Sessions Delivered",
          centerNode: { 
            title: "Моніторинг", 
            subtitle: "Human Capital",
            description: "We aim for 70% localization of aid from day one, ensuring that resources directly empower local providers and beneficiaries.",
            targetPage: 5,
            features: [
              { title: "Localization", desc: "70% Direct funding target." },
              { title: "GDP Impact", desc: "Safeguarding $8-28B annually." },
              { title: "Exportable", desc: "WHO & Grand Bargain compliant." }
            ]
          },
          nodes: [
            {
              id: "budget",
              title: "Efficiency",
              highlight: "30% Recovery",
              icon: "Zap",
              targetPage: 1,
              points: ["Eliminating admin losses", "98% fee reduction (WFP model)", "Direct delivery"]
            },
            {
              id: "local",
              title: "Localization",
              highlight: "70% Goal",
              icon: "Globe",
              targetPage: 2,
              points: ["Exceeding Grand Bargain (25%)", "Empowering local providers", "Community social contract"]
            },
            {
              id: "scale",
              title: "Scalability",
              highlight: "10+ Countries",
              icon: "Layers",
              targetPage: 3,
              points: ["API-first architecture", "Exportable to conflict zones", "Digital Marshall Plan engine"]
            },
            {
              id: "analytics",
              title: "Validation",
              highlight: "De-identified Registry",
              icon: "BarChart3",
              targetPage: 4,
              points: ["Estonian eHealth model", "IATI & mhGAP integrated", "Transparent outcomes"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Operational Efficiency",
              subtitle: "Recovering 30% of lost value.",
              body: "Current humanitarian chains lose 30% to administration. Our digital bridge recovers this value, ensuring more funding reaches the beneficiary. Following the WFP 'Building Blocks' model, we aim for a 98% reduction in transaction fees through a de-identified registry.",
              bullets: ["30% admin recovery.", "98% fee reduction.", "Direct delivery."],
              chartId: "adminCost"
            },
            {
              id: 2,
              title: "Localization: 70% Target",
              subtitle: "Exceeding the Grand Bargain commitment.",
              body: "While the Grand Bargain targets 25% localization, FeeL Again aims for 70% from day one. By providing the compliance layer, we allow donors to safely fund local actors, transforming aid from a 1.2% local trickle to a 70% flood of support.",
              bullets: ["70% Localization target.", "Empowering local actors.", "Grand Bargain alignment."],
              chartId: "globalLocal"
            },
            {
              id: 3,
              title: "Global Scalability",
              subtitle: "Ready for export to 10+ countries.",
              body: "Our API-first architecture and compliance with WHO MHPSS standards make the model ready for global export. It serves as a 'Digital Marshall Plan' engine, adaptable to any conflict zone or humanitarian modality requiring transparency and efficiency.",
              bullets: ["Exportable model.", "API-first architecture.", "Digital Marshall Plan."],
              chartId: "techStack"
            },
            {
               id: 4,
               title: "Validation & Standards",
               subtitle: "Building on proven global success.",
               body: "The technology is validated by WFP, UNHCR, and Oxfam. We integrate IATI and mhGAP standards into the core, following the Estonian eHealth model (95% de-identified records) to ensure national-scale reliability and transparency.",
               bullets: ["WFP/UNHCR validated.", "Estonian model.", "IATI & mhGAP integrated."],
               chartId: "dashboard_transparency"
            },
            {
              id: 5,
              title: "Economic Impact: GDP Recovery",
              subtitle: "Protecting Ukraine's human capital.",
              body: "By restoring 3-4 million Ukrainians to social and economic life, we safeguard $8-28 million in annual GDP. Every dollar invested in mental health prevents $4 in lost productivity, creating a sustainable cycle of recovery and growth.",
              bullets: ["$8-28M GDP impact.", "Human capital protection.", "Sustainable recovery."]
            }
          ]
        }
      },
      [DocumentId.PARTNERS]: {
        navTitle: "Consortium",
        schema: {
          title: "Consortium & Strategic Partners",
          subtitle: "Global Collaboration for Local Impact",
          centerNode: { 
            title: "Consortium", 
            subtitle: "Strategic Goal",
            description: "A multidisciplinary consortium of global and local partners working together to rebuild Ukraine's mental health infrastructure.",
            targetPage: 1,
            features: [
              { title: "Collaboration", desc: "Shared goals and resources." },
              { title: "Impact", desc: "Measurable results at scale." }
            ],
            consortiumRoles: CONSORTIUM_ROLES_EN
          },
          nodes: [
            {
              id: "clinical",
              title: "Clinical",
              highlight: "GEHA Clalit",
              icon: "Stethoscope",
              targetPage: 1,
              points: ["Evidence-based trauma care", "EMDR protocols", "Psychologist training"]
            },
            {
              id: "tech",
              title: "Technology",
              highlight: "USC ICT",
              icon: "Cpu",
              targetPage: 1,
              points: ["VR-therapy methodology", "Digital clinical tools", "Innovation"]
            },
            {
              id: "fintech",
              title: "Fintech",
              highlight: "HighCastle",
              icon: "Wallet",
              targetPage: 1,
              points: ["Blockchain settlement", "P2P platform", "Financial transparency"]
            },
            {
              id: "analytics",
              title: "Analytics",
              highlight: "KNU Shevchenko",
              icon: "BarChart3",
              targetPage: 1,
              points: ["GDP impact methodology", "Economic research", "Data validation"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "The Consortium Partners",
              subtitle: "A multidisciplinary approach to recovery.",
              body: "Our partners bring together world-class expertise in clinical care, technology, fintech, and economic analytics. Together, we provide the comprehensive infrastructure needed to address the mental health crisis in Ukraine.",
              bullets: ["Global Expertise.", "Local Implementation.", "Multidisciplinary Solution."]
            }
          ]
        }
      }
    }
  },
  [Language.UA]: {
    appNav: {
      cta: "Приєднатися",
      schemaLabel: "Візуальна Стратегія",
      reportLabel: "Детальний Огляд",
      nextDoc: "Наступний Розділ",
      prevDoc: "Попередній Розділ",
      backToSchema: "До Мапи",
      startTour: "Почати Огляд",
      readMore: "Аналіз",
      viewOpportunity: "Можливість",
      viewProblem: "Аналіз",
      close: "Закрити",
      warRoom: "War Room",
      enterSpace: "Переглянути",
      contact: "Контакт HQ"
    },
    hero: {
      title: "FeeL Again. Гуманітарний.",
      subtitle: "Цифрова інфраструктура для локалізації та збереження ВВП.",
      description4to1: [
        "Деідентифікований реєстр для MHPSS в Україні.",
        "З'єднання глобальних ресурсів із місцевим приватним сектором."
      ],
      footer: "Стратегічне узгодження: Цілі сталого розвитку ООН та Grand Bargain",
      slogans: ["Локалізація передусім", "Радикальна прозорість", "Збереження ВВП"]
    },
    warRoom: {
      title: "Єдина Матриця Розгортання",
      subtitle: "Січень 2026: Операційний статус та стратегічні вектори",
      matrixTitle: "Стратегічна Матриця Розгортання",
      items: [
        {
          id: "budget-gap",
          title: "Парадокс Бюджету та Потреб",
          subtitle: "98% vs 70% Структурна Невідповідність",
          status: "Critical Decision",
          description: "98% державного бюджету наразі заблоковано на утримання стаціонарів (психлікарень), тоді як 70% бенефіціарів бажають отримати амбулаторну допомогу. Це ключовий 'Геп' у гуманітарному реагуванні.",
          keyProjects: ["Перегляд Бюджету", "Розширення Амбулаторій", "Цифрові Рейки"],
          deployment: [
            { name: "Держлікарні", icon: "Building", beneficiaries: "89% Бюджету" },
            { name: "Бажання Бенефіціарів", icon: "Heart", beneficiaries: "70% Попиту" }
          ]
        },
        {
          id: "specialist-recruitment",
          title: "Мобілізація Тіньового Сектору",
          subtitle: "Рекрутинг 'Невидимих' 15,000",
          status: "Active",
          description: "Для подолання дефіциту фахівців ми пропонуємо рекрутувати їх з 'статистичної тіні': приватної практики, психіатрів та гуманітарних організацій. Наші дані вказують на конкретні важелі впливу.",
          keyProjects: ["Онбординг Фахівців", "Інтеграція Приватного Сектору", "Клінічне Ліцензування"],
          deployment: [
            { name: "Фінансовий Важіль", icon: "DollarSign", beneficiaries: "70% Ваги" },
            { name: "Умови Роботи", icon: "Briefcase", beneficiaries: "20% Ваги" },
            { name: "Контингент", icon: "Users", beneficiaries: "10% Ваги" }
          ]
        }
      ] 
    },
    charts: {
      shadowVsCluster: "Потенціал Ринку: Офіційний Кластер (500 орг) vs Приватний Сектор (15k)",
      fundingGap: "Розрив фінансування vs Потреби",
      techStack: "Ефективність Інфраструктури",
      adminCost: "Операційне Тертя vs Цифрова Ефективність",
      donorDashboard: "Живий Центр Гуманітарного Контролю",
      derisking: "Модель Де-ризикінгу: Гранти + P2P",
      globalLocal: "Цифровий Міст: З'єднуючи Берег А та Берег Б",
      dashboard_transparency: "FeeL Again Middleware: Комплаєнс та Звітність",
      dashboard_monitoring: "FeeL Again Middleware: AI Виявлення Фроду",
      dashboard_funding: "FeeL Again Middleware: Управління Програмами"
    },
    docs: {
      [DocumentId.CHALLENGE]: {
        navTitle: "Виклик",
        schema: {
          title: "Ріка без Мосту: Глобальні Ресурси vs Локальна Реальність",
          subtitle: "Структурний розрив у наданні допомоги",
          centerNode: {
            title: "Рішення",
            subtitle: "Гуманітарний Фінтех",
            description: PROGRAM_DESCRIPTION_UA,
            targetPage: 5,
            features: [
              { title: "Смарт-контракти", desc: "Відстеження кожного долара до сеансу." },
              { title: "Клінічна Цілісність", desc: "Масштабування стандартів ВООЗ mhGAP." },
              { title: "Ріст Ринку", desc: "Перетворення допомоги на сталий розвиток." }
            ]
          },
          nodes: [
            {
              id: "gap",
              title: "Розрив",
              highlight: "Глобальне vs Локальне",
              icon: "ArrowRightLeft",
              targetPage: 1,
              points: ["Берег А: Глобальні Ресурси", "Берег Б: Локальна Реальність", "Відсутність зв'язку"]
            },
            {
              id: "mismatch",
              title: "Невідповідність",
              highlight: "Стіна проти потреб",
              icon: "ShieldAlert",
              targetPage: 2,
              points: ["89% бюджету на стаціонар", "71% пацієнтів хочуть амбулаторно", "Структурна стіна"]
            },
            {
              id: "stigma",
              title: "Нова Стигма",
              highlight: "83% Потенціал",
              icon: "Users",
              targetPage: 3,
              points: ["38% 'не важливо'", "45% 'занадто дорого'", "Економічні бар'єри"]
            },
            {
              id: "displacement",
              title: "Спроможність",
              highlight: "23% Падіння",
              icon: "TrendingDown",
              targetPage: 4,
              points: ["21.7% працівників переміщено", "Дефіцит психіатрів", "Системне виснаження"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Ріка без Мосту",
              subtitle: "Розрив між Глобальними Ресурсами та Локальною Реальністю.",
              body: "<b>Берег А (Глобальні Ресурси):</b> Станом на кінець 2025 року Health Cluster включає 500 організацій, з яких 340 — це громадські організації та гуманітарні актори, рішення яких не розраховані на сталий розвиток. Вони обмежені аналоговими процесами, що обмежують пряме охоплення (~1.2% локальним ініціативам).<br/><br/><b>Берег Б (Локальна Реальність):</b> 10,000-15,000 приватних психологів. Вони не є 'тіньовими' за наміром; вони просто не підключені.",
              bullets: ["Берег А: 500 Орг (340 НУО).", "Берег Б: Потужність та Масштаб.", "Відсутня Ланка: Цифрова Інфраструктура."],
              chartId: "shadowVsCluster"
            },
            {
              id: 2,
              title: "Фундаментальна стіна невідповідності потребам",
              subtitle: "89% бюджету йде на стаціонарну допомогу (психіатричні лікарні).",
              body: "Існує структурна стіна між фінансуванням та реальністю. Хоча переважна більшість ресурсів заблокована у великих стаціонарних закладах, фактичний попит стрімко зміщується в бік гнучкої підтримки на рівні громад.",
              quote: "ми платим за стіни, а пацієнтів залишаємо зовні",
              signature: "Бюджети течуть в один бік. Українці рухаються в інший.",
              bullets: ["89% Бюджету: Стаціонарна допомога.", "71% Пацієнтів: Бажають амбулаторну допомогу.", "Структурна невідповідність."],
              chartId: "fundingGap"
            },
            {
              id: 3,
              title: "Нова Стигма",
              subtitle: "Економічні та соціальні бар'єри для ментального здоров'я.",
              body: "38% населення вважають ментальне здоров'я 'неважливим', 45% — 'занадто дорогим' (PMC 2024). Це не просто культурні стигми, а економічні. 83% населення могли б стати активними шукачами допомоги, якби витрати були покриті та війна закінчилася.",
              bullets: ["38% 'Не важливо'.", "45% 'Занадто дорого'.", "83% Потенційних шукачів допомоги."],
              chartId: "localizationGap"
            },
            {
              id: 4,
              title: "Відтік Кадрів",
              subtitle: "Криза людського капіталу в охороні здоров'я.",
              body: "21.7% медичних працівників є переміщеними особами, а кількість психіатрів на один заклад впала на 23% (PMC 2024). Система втрачає свій найцінніший актив: самих фахівців.",
              bullets: ["21.7% Працівників переміщено.", "23% Падіння кількості психіатрів.", "Системна криза спроможності."]
            },
            {
               id: 5,
               title: "РІШЕННЯ — ЦЕ ЦИФРОВИЙ МІСТ",
               subtitle: "З'єднуючи Береги А та Б",
               body: PROGRAM_DESCRIPTION_UA,
               bullets: ["Гуманітарний Фінтех.", "Синхронізовані Ресурси.", "Відстежуваний Вплив."]
            }
          ]
        }
      },
      [DocumentId.IMPERATIVE]: {
        navTitle: "Імператив",
        schema: {
          title: "Масштаб Потреб Людського Капіталу",
          subtitle: "50 000 000+ Годин Терапії Щорічно",
          centerNode: {
            title: "Масштаб",
            subtitle: "Нацбезпека",
            description: "Відбудова інфраструктури неможлива без відновлення людей. Ментальне здоров'я — це ключовий стовп національної стійкості.",
            targetPage: 1,
            features: [
              { title: "Людський Капітал", desc: "Збереження робочої сили." },
              { title: "Стійкість", desc: "Побудова суспільства, обізнаного про травму." }
            ]
          },
          nodes: [
            {
              id: "hours",
              title: "Попит",
              highlight: "50M Годин",
              icon: "Activity",
              targetPage: 1,
              points: ["15M українців у потребі", "12-20 сеансів на випадок", "Системний дефіцит"]
            },
            {
              id: "gdp",
              title: "Економіка",
              highlight: "5-15% ВВП",
              icon: "TrendingDown",
              targetPage: 1,
              points: ["Методологія LSE", "Втрата продуктивності", "Ризик реконструкції"]
            },
            {
              id: "capital",
              title: "Людський капітал",
              highlight: "Збереження",
              icon: "Users",
              targetPage: 1,
              points: ["Відновлення робочої сили", "Ментальна стійкість", "Національний актив"]
            },
            {
              id: "resilience",
              title: "Стійкість",
              highlight: "Травма-інформованість",
              icon: "ShieldCheck",
              targetPage: 1,
              points: ["Соціальна згуртованість", "Довгострокова стабільність", "Підтримка громад"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Імператив: 50 000 000+ Годин",
              subtitle: "Масштаб Потреб Людського Капіталу.",
              body: "За оцінками МОЗ, понад 15 мільйонів українців потребуватимуть психологічної підтримки. Для задоволення цього попиту за стандартними протоколами, національна система потребує потужності понад 50 000 000 Годин Терапії щорічно. Невилікувані проблеми ментального здоров'я коштують економіці 5-15% ВВП через втрату продуктивності.",
              bullets: ["15M Людей у Потребі.", "50 000 000 Годин Терапії Щорічно.", "5-15% Вплив на ВВП."]
            }
          ]
        }
      },
      [DocumentId.GOVERNANCE]: {
        navTitle: "Управління",
        schema: {
          title: "Whole Governance - Стратегічна Рамка",
          subtitle: "Чотирьохквадрантна Архітектура для MHPSS",
          centerNode: {
            title: "RESET",
            subtitle: "Стратегічна Ціль",
            description: "Єдина модель управління, що узгоджує глобальні стандарти з локальним наданням допомоги через чотирьохквадрантну стратегічну рамку.",
            targetPage: 1,
            features: [
              { title: "Узгодження", desc: "Глобально-локальна синхронізація." },
              { title: "Управління", desc: "Загальнодержавний підхід." }
            ]
          },
          nodes: [
            {
              id: "quad1",
              title: "Квадрант 1",
              highlight: "Політика",
              icon: "ShieldCheck",
              targetPage: 1,
              points: ["Національні стандарти", "Відповідність ВООЗ", "Законодавчі рейки"]
            },
            {
              id: "quad2",
              title: "Квадрант 2",
              highlight: "Надання",
              icon: "Zap",
              targetPage: 1,
              points: ["Приватний сектор", "Інтеграція НУО", "Державно-приватне партнерство"]
            },
            {
              id: "quad3",
              title: "Квадрант 3",
              highlight: "Дані",
              icon: "Database",
              targetPage: 1,
              points: ["Відкритий деперсоніфікований набір", "Аналітика в реальному часі", "Відстеження результатів"]
            },
            {
              id: "quad4",
              title: "Квадрант 4",
              highlight: "Фінанси",
              icon: "Wallet",
              targetPage: 1,
              points: ["Змішане фінансування", "Смарт-контракти", "Аудиторські сліди"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Whole Governance Framework",
              subtitle: "Стратегічне узгодження для національної стійкості.",
              body: "Модель Whole Governance гарантує, що всі актори — від Міністерства охорони здоров'я до приватних практиків — діють у межах єдиної стратегічної рамки. Це запобігає дублюванню зусиль і гарантує, що кожен витрачений долар узгоджується з національними пріоритетами.",
              bullets: ["Стратегічне узгодження.", "Міжвідомча координація.", "Управління, орієнтоване на результат."]
            }
          ]
        }
      },
      [DocumentId.INFRASTRUCTURE]: {
        navTitle: "Технології",
        schema: {
          title: "Цифровий Хребет: Middleware та API",
          subtitle: "Інтеграція 'Невидимого' Приватного Сектору",
          centerNode: { 
            title: "Цифровий Міст", 
            subtitle: "Middleware Ядро",
            description: "Неконкурентна цифрова інфраструктура, що об'єднує гуманітарних акторів, локальних виконавців та бенефіціарів через деперсоніфікований реєстр.",
            targetPage: 5,
            features: [
              { title: "API Інтеграція", desc: "Зв'язок платформ пошуку з клінічними стандартами." },
              { title: "Прозорість", desc: "Кожна транзакція видима та верифікована в реальному часі." },
              { title: "Інновації", desc: "VR-терапія та EMDR протоколи для фахівців." }
            ]
          },
          nodes: [
            {
              id: "tech",
              title: "Middleware",
              highlight: "API-First",
              icon: "Cpu",
              targetPage: 1,
              points: ["Інтеграція з платформами пошуку", "Клінічні системи обліку", "Державні медичні дані"]
            },
            {
              id: "compliance",
              title: "Де-персоніфікований реєстр",
              highlight: "Реєстр",
              icon: "ShieldCheck",
              targetPage: 2,
              points: ["Незмінний реєстр", "Приватність та KYC", "Прозорий аудит"]
            },
            {
              id: "capability",
              title: "Інновації",
              highlight: "VR та EMDR",
              icon: "Zap",
              targetPage: 3,
              points: ["USC ICT VR-терапія", "Geha Clalit EMDR протоколи", "Тренінг фахівців"]
            },
            {
              id: "data",
              title: "Зв'язність",
              highlight: "Реальний Час",
              icon: "Globe",
              targetPage: 4,
              points: ["Миттєва звітність", "IATI XML стандарти", "mhGAP комплаєнс"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Технологічний Міст",
              subtitle: "Відновлення 30% втраченої вартості.",
              body: "FeeL Again діє як цифровий міст, що з'єднує гуманітарних акторів, локальних виконавців (волонтерів, приватних професіоналів, клініки) та бенефіціарів. Наша API-first архітектура інтегрує платформи пошуку з системами обліку та державними медичними даними, забезпечуючи прозорість кожної транзакції.",
              bullets: ["API-first архітектура.", "Middleware зв'язність.", "Прозорість у реальному часі."],
              chartId: "dashboard_monitoring"
            },
            {
              id: 2,
              title: "Де-персоніфікований реєстр",
              subtitle: "Приватність та незмінна верифікація.",
              body: "Ми використовуємо деперсоніфікований реєстр для забезпечення приватності бенефіціарів при збереженні незмінного аудиторського сліду. Інтеграція з ДІЯ для KYC верифікації гарантує легітимність кожного актора, а смарт-контракти автоматизують процес деризикованого співфінансування.",
              bullets: ["Деперсоніфікований реєстр.", "Інтеграція з ДІЯ.", "Автоматизація смарт-контрактами."],
              chartId: "dashboard_transparency"
            },
            {
               id: 3,
               title: "Інновації та Навчання",
               subtitle: "Передові методології для клінічної досконалості.",
               body: "Наша лінія інновацій надає фахівцям передові інструменти: VR-терапію (партнер USC ICT) та EMDR протоколи (партнер Geha Clalit). Ця програма розбудови спроможності гарантує, що навіть приватні практики можуть надавати допомогу світового рівня за стандартизованими методиками.",
               bullets: ["VR-терапія (USC ICT).", "EMDR (Geha Clalit).", "Тренінг фахівців."],
               chartId: "techStack"
            },
            {
              id: 4,
              title: "Зв'язність у Реальному Часі",
              subtitle: "Миттєва звітність та комплаєнс.",
              body: "Система забезпечує зв'язок у реальному часі між усіма стейкхолдерами. Автоматизуючи потоки даних згідно зі стандартами IATI XML та комплаєнсом mhGAP, ми гарантуємо, що кожен сеанс фіксується та звітується миттєво донорам та державним органам.",
              bullets: ["Миттєва звітність.", "IATI XML стандарти.", "mhGAP комплаєнс."],
              chartId: "donorDashboard"
            },
            {
              id: 5,
              title: "Цифровий Хребет",
              subtitle: "Інтеграція 'невидимого' приватного сектору.",
              body: "Надаючи цифрову інфраструктуру, яка знімає тягар адміністрування, ми дозволяємо приватним практикам вийти зі 'статистичної тіні'. Система автоматизує звітність у відповідності до гуманітарних (IATI) та клінічних (mhGAP) стандартів, роблячи їх надійними партнерами для донорів.",
              bullets: ["Автоматична звітність.", "IATI та mhGAP комплаєнс.", "Легалізація на ринку."],
              chartId: "dashboard_funding"
            }
          ]
        }
      },
      [DocumentId.FINANCE]: {
        navTitle: "Фінанси",
        schema: {
          title: "Фундамент II: Фінансова Цілісність через Стратегічні Закупівлі",
          subtitle: "Де-ризикінг та Фінтех Прозорість",
          centerNode: { 
            title: "FeeL Again", 
            subtitle: "Фінтех Ядро",
            description: "Перехід від пасивного фінансування до Активних Закупівель. Ми пов'язуємо виплати з результатами провайдера, використовуючи модель Де-ризикованого Співфінансування.",
            targetPage: 5,
            features: [
              { title: "Активні Закупівлі", desc: "Оплата за результат (сеанс)." },
              { title: "Пул Ризиків", desc: "Перерозподіл ресурсів; захист бенефіціарів." },
              { title: "Дизайн Бенефітів", desc: "Відповідність послуг реаліям." }
            ]
          },
          nodes: [
            {
              id: "blended",
              title: "Де-ризикінг",
              highlight: "P2P Валідація",
              icon: "Scale",
              targetPage: 1,
              points: ["Співплатежі громади валідують попит", "Донори фінансують верифіковані транзакції", "Ринковий попит як верифікація"]
            },
            {
              id: "risk",
              title: "Сталість",
              highlight: "SaaS для Держави",
              icon: "RefreshCw",
              targetPage: 2,
              points: ["Інфраструктурні комісії від партнерів", "Реінвестування доходу", "Преміум Аналітика"]
            },
            {
              id: "direct",
              title: "Трекінг",
              highlight: "Прозорість",
              icon: "CheckCircle",
              targetPage: 3,
              points: ["Трекінг кожного долара", "Перехід від 'сеансів' до 'відновлених людей'", "Живий Тікер"]
            },
            {
              id: "registry",
              title: "Важіль",
              highlight: "Матчинг",
              icon: "TrendingUp",
              targetPage: 4,
              points: ["Інституційні донори закривають розрив", "Гуманітарний Фінансовий Важіль", "Стала Модель"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Модель Де-ризикованого Співфінансування",
              subtitle: "Донори фінансують транзакції, а не прогнози.",
              body: "Програма впроваджує механізм <b>P2P Валідації</b> (Співплатежі громади) потреби через соціальний договір між найближчим оточенням та бенефіціаром. Це знижує ризики та залучає інші види ресурсів за походженням: корпоративні, ресурси локальних фондів, в свою чергу глобальні бюджети (Інституційні донори) закривають фінансовий розрив для оплати послуг на завершення курсу реабілітації.",
              bullets: ["P2P Валідація Попиту.", "Донори Закривають Розрив.", "Ринкова Верифікація."],
              chartId: "derisking"
            },
            {
              id: 2,
              title: "SaaS для Держави: Сталість та Масштаб",
              subtitle: "Економічно ефективне, масштабоване та базоване на даних управління MHPSS.",
              body: "Інфраструктура працює за моделлю <b>SaaS для Держави</b>, надаючи готовий «цифровий хребет» для національного управління сектором MHPSS. Це усуває потребу в дороговартісній власній розробці, забезпечуючи миттєве <b>масштабування</b> на всі регіони. Державні органи отримують можливість <b>приймати рішення на основі даних</b> завдяки аналітиці в реальному часі, а модель самоокупності гарантує <b>економічну ефективність</b> та життєздатність системи без постійних екстрених вливань.",
              bullets: ["Економічна Ефективність", "Національне Масштабування", "Управління на Основі Даних"],
              chartId: "adminCost"
            },
            {
              id: 3,
              title: "Радикальна Прозорість: Донорський Дашборд",
              subtitle: "Від обліку процесів 'наданих сеансів' до фіксації результатів 'відновлених людей' та їх внеску у ВВП.",
              body: "Фінтех Ядро Програми надає Теплову Карту Активності та Індекс Ефективності використання ресурсів на Ментальне Здоров'я. Наскрізна Відстежуваність трансакцій від 'Джерела до Послуги'. Дашборд автоматично відстежує дотримання умов Grand Bargain та стандартів IATI.",
              bullets: ["Жива Теплова Карта.", "Індекс Ефективності (MHEI).", "Наскрізна Відстежуваність."],
              chartId: "dashboard_transparency"
            },
            {
              id: 4,
              title: "Фінансова Цілісність через Стратегічні Закупівлі",
              subtitle: "Активні Закупівлі, Пул Ризиків, Дизайн Бенефітів.",
              body: "Ми переходимо від пасивної роздачі грантів до <b>Стратегічних Закупівель</b> (Джерело: Настанови ВООЗ IRIS). <br/>1. <b>Активні Закупівлі:</b> Прив'язка виплат до роботи провайдера (погодинно).<br/>2. <b>Пул Ризиків:</b> Захист бенефіціарів від витрат з власної кишені.<br/>3. <b>Дизайн Бенефітів:</b> Відповідність послуг реаліям.",
              bullets: ["Оплата за Результат.", "Пул Ризиків.", "Узгоджено з ВООЗ."]
            },
            {
              id: 5,
              title: "Фінтех Ядро Програми",
              subtitle: "Радикальна Прозорість та Відстежуваність.",
              body: "Фінтех Ядро Програми надає Теплову Карту Активності та Індекс Ефективності використання ресурсів на Ментальне Здоров'я. Наскрізна Відстежуваність трансакцій від 'Джерела до Послуги'. Дашборд автоматично відстежує дотримання умов Grand Bargain та стандартів IATI.",
              bullets: ["Теплова Карта Активності.", "Наскрізна Відстежуваність.", "Комплаєнс Grand Bargain."],
              chartId: "dashboard_funding"
            }
          ]
        }
      },
      [DocumentId.OPERATIONAL]: {
        navTitle: "Консорціум",
        schema: {
          title: "Операційна Стратегія: 6 Ключових Функцій",
          subtitle: "Бачення Глобального Гуманітарного Перезавантаження",
          centerNode: { 
            title: "Глобальний Ресет", 
            subtitle: "Grand Bargain",
            description: "FeeL Again — це національний проект, що прагне до Гуманітарного Перезавантаження в секторі MHPSS, орієнтуючись на 25% прямого локального фінансування згідно з Grand Bargain.",
            targetPage: 5,
            features: [
              { title: "Локалізація", desc: "Ціль: 25% прямого фінансування." },
              { title: "Прозорість", desc: "Моніторинг транзакцій в реальному часі." },
              { title: "Масштаб", desc: "Готовність до експорту в 10+ країн." }
            ],
            consortiumRoles: CONSORTIUM_ROLES_UA
          },
          nodes: [
            {
              id: "data",
              title: "Функції 1-2",
              highlight: "Координація",
              icon: "Layers",
              targetPage: 1,
              points: ["Єдиний набір онлайн-даних", "Цифрова координація акторів", "Верифіковані донорські ініціативи"]
            },
            {
              id: "clinical",
              title: "Функції 3-4",
              highlight: "Комплаєнс",
              icon: "ShieldCheck",
              targetPage: 2,
              points: ["Трекінг протоколів (mhGAP)", "Автоматична звітність IATI", "Контроль якості"]
            },
            {
              id: "tech",
              title: "Функції 5-6",
              highlight: "Мобілізація",
              icon: "Zap",
              targetPage: 3,
              points: ["Центр експертизи", "Центр мобілізації ресурсів", "Моделі WFP/UNHCR"]
            },
            {
              id: "fintech",
              title: "Консорціум",
              highlight: "Партнери",
              icon: "Users",
              targetPage: 4,
              points: ["Open Society (Координація)", "GEHA Clalit (Клініка)", "USC ICT (VR Технології)", "HighCastle (Фінтех)"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Дані та Координація",
              subtitle: "Функції 1 та 2: Фундамент цифрової допомоги.",
              body: "Ми готуємо єдиний набір онлайн-даних (досвід Естонії, 99% цифровізації) та впроваджуємо цифрову координацію між гуманітарними акторами. Програми фінансування стають видимими для верифікованих провайдерів, а проекти допомоги — для донорів, з верифікацією на рівні гуманітарного скорингу.",
              bullets: ["Єдині набори даних.", "Цифрова координація.", "Верифіковані ініціативи."],
              chartId: "donorDashboard"
            },
            {
              id: 2,
              title: "Протоколи та Звітність",
              subtitle: "Функції 3 та 4: Гарантія якості та прозорості.",
              body: "Система відстежує впровадження клінічних протоколів (mhGAP) та автоматизує звітність за стандартом IATI XML. Це знімає адміністративний тягар з психологів, гарантуючи донорам отримання якісних даних про кожен сеанс у реальному часі.",
              bullets: ["Трекінг mhGAP.", "Автоматизація IATI.", "Адміністративне полегшення."],
              chartId: "dashboard_monitoring"
            },
            {
              id: 3,
              title: "Експертиза та Мобілізація",
              subtitle: "Функції 5 та 6: Масштабування ресурсів та знань.",
              body: "Ми створюємо мережевий центр експертизи та центр мобілізації ресурсів. Ця модель підтверджена WFP ($325 млн), Oxfam та UNHCR. Вона гарантує розподіл ресурсів на найбільш ефективні ініціативи, одночасно посилюючи локальний потенціал через навчання.",
              bullets: ["Мережа експертизи.", "Мобілізація ресурсів.", "Перевірені глобальні моделі."],
              chartId: "dashboard_funding"
            },
            {
              id: 4,
              title: "Структура Консорціуму",
              subtitle: "Мультидисциплінарна експертиза для зміни парадигми.",
              body: "<b>Координація:</b> Open Society + FeeL Again.<br/><b>Клінічний стек:</b> GEHA Clalit (Ізраїль) та верифіковані UA фахівці.<br/><b>Технологічний стек:</b> USC ICT (VR Методологія) та Atmaraksi.<br/><b>Фінтех стек:</b> HighCastle (Solana) та P2P.<br/><b>Аналітика:</b> КНУ Шевченка та Мінекономіки.",
              bullets: ["Мультидисциплінарне рішення.", "Глобальні та локальні партнери.", "Зміна парадигми допомоги."]
            },
            {
              id: 5,
              title: "Гуманітарний Ресет",
              subtitle: "Ціль: 25% прямої локалізації.",
              body: "Нашою операційною метою в секторі MHPSS є досягнення статусу національного проекту, узгодженого з Grand Bargain. Ми прагнемо до «Гуманітарного Перезавантаження» в Україні, орієнтуючись на 25% прямого локального фінансування за підтримки міжнародних акторів.",
              bullets: ["Узгодження з Grand Bargain.", "Ціль 25% локалізації.", "Статус національного проекту."]
            }
          ]
        }
      },
      [DocumentId.MONITORING]: {
        navTitle: "Результати",
        schema: {
          title: "Результати та Вплив: Доказова Інвестиція",
          subtitle: "Вимірюємо Відновлені Розуми, а не лише Надані Сеанси",
          centerNode: { 
            title: "Вплив", 
            subtitle: "Людський Капітал",
            description: "Ми прагнемо до 70% локалізації допомоги з першого дня, гарантуючи, що ресурси безпосередньо посилюють місцевих провайдерів та бенефіціарів.",
            targetPage: 5,
            features: [
              { title: "Локалізація", desc: "Ціль: 70% прямого фінансування." },
              { title: "Вплив на ВВП", desc: "Захист $8-28 млрд щорічно." },
              { title: "Експорт", desc: "Комплаєнс ВООЗ та Grand Bargain." }
            ]
          },
          nodes: [
            {
              id: "budget",
              title: "Ефективність",
              highlight: "30% Відновлення",
              icon: "Zap",
              targetPage: 1,
              points: ["Усунення адмін втрат", "Зниження комісій на 98% (модель WFP)", "Пряма доставка"]
            },
            {
              id: "local",
              title: "Локалізація",
              highlight: "Ціль 70%",
              icon: "Globe",
              targetPage: 2,
              points: ["Перевищення Grand Bargain (25%)", "Посилення місцевих провайдерів", "Суспільний договір громади"]
            },
            {
              id: "scale",
              title: "Масштаб",
              highlight: "10+ Країн",
              icon: "Layers",
              targetPage: 3,
              points: ["API-first архітектура", "Експорт у зони конфліктів", "Двигун Цифрового Плану Маршалла"]
            },
            {
              id: "analytics",
              title: "Валідація",
              highlight: "Де-персоніфікований реєстр",
              icon: "BarChart3",
              targetPage: 4,
              points: ["Естонська модель eHealth", "Інтеграція IATI та mhGAP", "Прозорі результати"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Операційна Ефективність",
              subtitle: "Відновлення 30% втраченої вартості.",
              body: "Поточні гуманітарні ланцюги втрачають 30% на адмініструванні. Наш цифровий міст відновлює цю вартість, гарантуючи, що більше фінансування досягає бенефіціара. Наслідуючи модель WFP 'Building Blocks', ми прагнемо знизити транзакційні витрати на 98% через де-персоніфікований реєстр.",
              bullets: ["30% відновлення адмін витрат.", "Зниження комісій на 98%.", "Пряма доставка."],
              chartId: "adminCost"
            },
            {
              id: 2,
              title: "Локалізація: Ціль 70%",
              subtitle: "Перевищення зобов'язань Grand Bargain.",
              body: "Хоча Grand Bargain орієнтується на 25% локалізації, FeeL Again прагне до 70% з першого дня. Забезпечуючи шар комплаєнсу, ми дозволяємо донорам безпечно фінансувати локальних акторів, перетворюючи допомогу з 1.2% локального струмка на 70% потік підтримки.",
              bullets: ["Ціль 70% локалізації.", "Посилення місцевих акторів.", "Узгодження з Grand Bargain."],
              chartId: "globalLocal"
            },
            {
              id: 3,
              title: "Глобальна Масштабованість",
              subtitle: "Готовність до експорту в 10+ країн.",
              body: "Наша API-first архітектура та відповідність стандартам ВООЗ роблять модель готовою до глобального експорту. Вона слугує двигуном «Цифрового Плану Маршалла», адаптованим до будь-якої зони конфлікту, що потребує прозорості та ефективності.",
              bullets: ["Експортована модель.", "API-first архітектура.", "Цифровий План Маршалла."],
              chartId: "techStack"
            },
            {
               id: 4,
               title: "Валідація та Стандарти",
               subtitle: "Побудовано на перевіреному світовому успіху.",
               body: "Технологія валідована WFP, UNHCR та Oxfam. Ми інтегруємо стандарти IATI та mhGAP в ядро, наслідуючи естонську модель eHealth (95% записів через де-персоніфікований реєстр) для забезпечення надійності та прозорості національного масштабу.",
               bullets: ["Валідовано WFP/UNHCR.", "Естонська модель.", "Інтеграція IATI та mhGAP."],
               chartId: "dashboard_transparency"
            },
            {
              id: 5,
              title: "Економічний Вплив: Захист ВВП",
              subtitle: "Захист людського капіталу України.",
              body: "Повертаючи 3-4 мільйони українців до соціального та економічного життя, ми захищаємо $8-28 млн щорічного ВВП. Кожен долар, інвестований у ментальне здоров'я, запобігає втраті $4 майбутньої продуктивності, створюючи сталий цикл відновлення.",
              bullets: ["Вплив на ВВП $8-28 млн.", "Захист людського капіталу.", "Стале відновлення."]
            }
          ]
        }
      },
      [DocumentId.PARTNERS]: {
        navTitle: "Консорціум",
        schema: {
          title: "Консорціум та Стратегічні Партнери",
          subtitle: "Глобальна Співпраця для Локального Впливу",
          centerNode: { 
            title: "Консорціум", 
            subtitle: "Стратегічна Ціль",
            description: "Мультидисциплінарний консорціум глобальних та локальних партнерів, що працюють разом над відбудовою інфраструктури ментального здоров'я України.",
            targetPage: 1,
            features: [
              { title: "Співпраця", desc: "Спільні цілі та ресурси." },
              { title: "Вплив", desc: "Вимірювані результати в масштабі." }
            ],
            consortiumRoles: CONSORTIUM_ROLES_UA
          },
          nodes: [
            {
              id: "clinical",
              title: "Клінічний",
              highlight: "GEHA Clalit",
              icon: "Stethoscope",
              targetPage: 1,
              points: ["Доказова допомога при травмах", "Протоколи EMDR", "Навчання психологів"]
            },
            {
              id: "tech",
              title: "Технології",
              highlight: "USC ICT",
              icon: "Cpu",
              targetPage: 1,
              points: ["Методологія VR-терапії", "Цифрові клінічні інструменти", "Інновації"]
            },
            {
              id: "fintech",
              title: "Фінтех",
              highlight: "HighCastle",
              icon: "Wallet",
              targetPage: 1,
              points: ["Блокчейн-розрахунки", "P2P платформа", "Фінансова прозорість"]
            },
            {
              id: "analytics",
              title: "Аналітика",
              highlight: "КНУ Шевченка",
              icon: "BarChart3",
              targetPage: 1,
              points: ["Методологія впливу на ВВП", "Економічні дослідження", "Валідація даних"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Партнери Консорціуму",
              subtitle: "Мультидисциплінарний підхід до відновлення.",
              body: "Наші партнери об'єднують експертизу світового рівня в клінічній допомозі, технологіях, фінтеху та економічній аналітиці. Разом ми забезпечуємо комплексну інфраструктуру, необхідну для подолання кризи ментального здоров'я в Україні.",
              bullets: ["Глобальна Експертиза.", "Локальна Імплементація.", "Мультидисциплінарне Рішення."]
            }
          ]
        }
      }
    }
  }
};
