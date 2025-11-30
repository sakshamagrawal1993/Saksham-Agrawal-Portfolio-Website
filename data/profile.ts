import { Project, Experience, Skill, SocialLink, Education, Award } from '../types';

export const PROFILE_DATA = {
  name: "Saksham Agrawal",
  title: "Senior Product Manager | AI & Fintech",
  tagline: "Product Leader with 7+ years exp. | MBA (Strategy) | B.Tech (Electrical)",
  about: "A product leader with 7+ years of experience defining product vision and executing strategy in high-growth Fintech and cutting-edge AI sectors. Proven track record of leading cross-functional teams to launch and scale complex products, including co-branded credit cards, consumer lending platforms, and agentic AI healthcare solutions. Passionate about solving customer problems and driving impact.",
  location: "Gurugram, Haryana, India",
  email: "sakshamagrawal1993@gmail.com",
  linkedin: "https://www.linkedin.com/in/saksham-agrawal",
  resumeUrl: "#", // Update with actual resume link if hosted
};

export const SKILLS: Skill[] = [
  {
    category: "Core Competencies",
    items: [
      "Product Vision & Strategy", 
      "Roadmap Development", 
      "Go-to-Market (GTM) Strategy", 
      "User-Centric Design", 
      "Data-Driven Decision Making", 
      "Stakeholder Management", 
      "Agile & Scrum", 
      "0-to-1 Product Innovation"
    ]
  },
  {
    category: "Tools & Analytics",
    items: [
      "Jira", 
      "Figma", 
      "SQL", 
      "Confluence", 
      "Mixpanel", 
      "CleverTap", 
      "Plotline"
    ]
  },
  {
    category: "Domain Expertise",
    items: [
      "Fintech (Lending/Cards)", 
      "Healthcare AI (Agentic RAG)", 
      "Consumer Electronics", 
      "Payments (UPI/BNPL)", 
      "Supply Chain & Logistics"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Jivi AI",
    role: "Senior Product Manager",
    period: "Dec '24 - Present",
    description: [
      "Leading product for 'Health Twin', a centralized platform unifying data across biomarkers to give users a holistic health view. Standardized parameters for EHR integration.",
      "Launched 'Jivi Mind Coach', a mental health care platform with real-time conversational capabilities in 100+ languages.",
      "Conceptualised and implemented emergency monitoring catching emergencies with F1 score of 0.99.",
      "Scaled Jivi Mind Coach to ~800 therapies/day and 4% conversion rate via PLG strategies.",
      "Led improvement of 'Dr. Jivi', a multi-agent triaging workflow providing differential diagnosis with top-3 accuracy of 94%+ in USMLE.",
      "Built agent-orchestration platform letting non-dev teams compose AI agents, reducing time to market by ~50%.",
      "Drove user acquisition achieving over 1.6 million downloads; integrated freemium models resulting in 75% reduction in CAC."
    ]
  },
  {
    id: "2",
    company: "BharatPe",
    role: "Senior Product Manager, Consumer Lending",
    period: "Jun '22 – Dec '24",
    description: [
      "End-to-end product owner of consumer lending (Credit Cards, Personal Loans, BNPL, DSA).",
      "Co-led launch of BharatPe Unity Bank co-branded credit card (0-1 launch). Scaled to ~1000 cards monthly with avg transaction value of Rs. 20,000/card.",
      "Spearheaded Personal Loans from concept to launch with E-Nach validation and real-time disbursals. Scaled to ~2.5 Cr/day, ~700 loans/day.",
      "Managed 'postpe' cards (3rd largest BNPL player, 1.2M cards). Increased transaction success rate from 72% to 84%.",
      "Pioneered industry-first 'EMI on QR' feature, opening a new ₹1 Cr/day loan portfolio.",
      "Managed Credit line/CCMS platform with AUM ~Rs 680 Cr and disbursals of Rs. 420 Cr/m.",
      "Executed product roadmap for compliance with RBI's Digital Lending Guidelines."
    ]
  },
  {
    id: "3",
    company: "Xiaomi India",
    role: "Product Strategy, Xiaomi Financial Services",
    period: "Jul '20 – May '22",
    description: [
      "Launched 'Device Financing' (Mi Credit Lite) with Home Credit, onboarding 500+ retail outlets.",
      "Led development of Prepaid cards, NFC-based wearable payments, and BNPL.",
      "Boosted Mi Pay Total Payment Value by 42% to 94 crore/month and improved 7-day retention rate by 18%."
    ]
  },
  {
    id: "4",
    company: "ZS Associates",
    role: "Decision Analytics Associate",
    period: "Feb '18 - May '18",
    description: [
      "Orchestrated strategic realignment of a 1,000-person sales force across 7 brand portfolios following Johnson & Johnson-Actelion merger."
    ]
  },
  {
    id: "5",
    company: "Stellium Consulting",
    role: "Associate Consultant (SAP Functional)",
    period: "Jul '16 - Sep '17",
    description: [
      "Led India's first RFID-integrated SAP EWM implementation for a major textile client, increasing throughput by 18%.",
      "Implemented SAP EWM solution at Automobile Spares warehouse, increasing throughput by 23%."
    ]
  },
  {
    id: "6",
    company: "McKinsey & Company",
    role: "Product Owner (Intern), Digital McKinsey",
    period: "Apr '19 - May '19",
    description: [
      "Led development and launch of client-facing Learning Management app (McK Academy) on mobile platforms.",
      "Created Product Roadmap and implemented using SCRUM methodology."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "mba",
    institution: "Management Development Institute, Gurgaon",
    degree: "MBA (Strategy, Finance)",
    period: "2020",
    score: "CGPA 7.35/10"
  },
  {
    id: "btech",
    institution: "Delhi Technological University, Delhi",
    degree: "B. Tech (Electrical)",
    period: "2016",
    score: "CGPA 7.95/10"
  }
];

export const AWARDS: Award[] = [
  {
    id: "a1",
    title: "BharatPe Annual Oscar Award",
    description: "Awarded for leading the critical Digital Lending Guidelines compliance implementation."
  },
  {
    id: "a2",
    title: "BharatPe Quarterly Oscar",
    description: "Received for the successful and high-impact launch of the Personal Loan product."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Jivi Mind Coach & Health Twin",
    description: "Mental health AI platform with real-time conversation in 100+ languages (F1 score 0.99 for emergencies) and a centralized Health Twin platform for biomarker unification.",
    techStack: ["Agentic AI", "RAG", "Knowledge Graphs", "Healthcare"],
    imageUrl: "https://picsum.photos/600/400?random=1"
  },
  {
    id: "p2",
    title: "BharatPe Consumer Lending Stack",
    description: "Built end-to-end lending stack: Personal Loans (~2.5 Cr/day disbursal), Unity Bank Co-branded Card, and EMI on QR features.",
    techStack: ["Fintech", "LMS", "LOS", "Regulatory Compliance"],
    imageUrl: "https://picsum.photos/600/400?random=2"
  },
  {
    id: "p3",
    title: "Mi Pay & Device Financing",
    description: "Device financing platform onboarding 500+ retail outlets and Mi Pay strategy boosting TPV by 42% to 94 Cr/month.",
    techStack: ["Payments", "NFC", "Retail Tech", "Strategy"],
    imageUrl: "https://picsum.photos/600/400?random=3"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: PROFILE_DATA.linkedin, icon: "Linkedin" },
  { platform: "Email", url: `mailto:${PROFILE_DATA.email}`, icon: "Mail" }
];