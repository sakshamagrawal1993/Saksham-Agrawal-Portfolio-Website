import { Project, Experience, Skill, SocialLink, Education, Award } from '../types';

export const PROFILE_DATA = {
  name: "Saksham Agrawal",
  title: "Senior Product Manager | AI & Fintech",
  tagline: "Product Leader with 7+ years exp. | MBA (Strategy) | B.Tech (Electrical)",
  about: "A product leader with 7+ years of experience defining product vision and executing strategy in high-growth Fintech and cutting-edge AI sectors. Proven track record of leading cross-functional teams to launch and scale complex products, including co-branded credit cards, consumer lending platforms, and agentic AI healthcare solutions. Passionate about solving customer problems and driving impact.",
  location: "Gurugram, Haryana, India",
  email: "sakshamagrawal1993@gmail.com",
  linkedin: "https://www.linkedin.com/in/saksham-agrawal",
  resumeUrl: "#", 
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
    location: "Gurugram, Haryana",
    description: [
      "Leading product for 'Health Twin', a centralized platform unifying data across biomarkers to give users a holistic health view.",
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
    location: "Gurugram, Haryana",
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
    location: "Bengaluru, Karnataka",
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
    location: "Gurugram, Haryana",
    description: [
      "Orchestrated strategic realignment of a 1,000-person sales force across 7 brand portfolios following Johnson & Johnson-Actelion merger."
    ]
  },
  {
    id: "5",
    company: "Stellium Consulting",
    role: "Associate Consultant (SAP Functional)",
    period: "Jul '16 - Sep '17",
    location: "Jaipur, Rajasthan",
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
    location: "Bengaluru, Karnataka",
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
    company: "Jivi AI",
    role: "Senior Product Manager",
    timeline: "Dec '24 - Present",
    description: "Spearheaded the development of Jivi Mind Coach and Health Twin, leveraging Agentic AI to revolutionize mental health support and biomarker unification.",
    techStack: ["Agentic AI", "RAG", "Knowledge Graphs", "Healthcare"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    bullets: [
      "Leading product for 'Health Twin', a centralized platform that unifies data across biomarkers, giving users holistic view of their health.",
      "Standardised parameters across biomarkers to allow for future integration with EHRs, making Jivi a connected care platform.",
      "Implementing Health Assistant which provides accurate insights using Agentic Rag and Knowledge Graphs.",
      "Launched Jivi Mind Coach, a mental health care platform with real-time conversational capabilities in 100+ languages.",
      "Conceptualised and implemented emergency monitoring which catches emergencies with f1 score of 0.99.",
      "Implemented LLM evaluations across 11 rubrics and allow for continuous monitoring and improvement of AI therapists.",
      "Scaled Jivi Mind Coach to ~800 therapies/day and 4% conversion rate in coordination with marketing and PLG strategies.",
      "Led improvement of Dr. Jivi, a multi agent, triaging workflow, providing differential diagnosis with top-3 accuracy of 94%+ in USMLE.",
      "Built agent-orchestration platform that lets non-dev teams compose AI agents, reducing time to market by ~50%.",
      "Drove user acquisition for Jivi, achieving over 1.6 million downloads through performance marketing."
    ]
  },
  {
    id: "p2",
    title: "Consumer Lending Stack",
    company: "BharatPe",
    role: "Senior Product Manager",
    timeline: "Jun '22 - Dec '24",
    description: "End-to-end ownership of BharatPe's lending suite including Cards, Loans, and BNPL, scaling to over 1M users and significant daily disbursals.",
    techStack: ["Fintech", "LMS", "LOS", "Compliance"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    bullets: [
      "Co-led launch of Bharatpe Unity Bank co-branded credit card. Scaled to ~1000 cards monthly with avg monthly transaction value of Rs. 20,000/card.",
      "Spearheaded Personal Loans product from concept to launch with E-Nach validation and real-time disbursals.",
      "Scaled disbursals to ~2.5 Cr/day, ~700 loans/day, ATS ~Rs. 35,500, funnel conversion rate of 53% from approval to disbursal.",
      "Managed postpe cards – 3rd largest BNPL cards player with 1.2 million cards in partnership with SBM & Zeta.",
      "Increased transaction success rate from 72% to 84% resulting in additional disbursal of Rs.30 Cr/month.",
      "Pioneered industry-first 'EMI on QR' feature, opening a new ₹1 Cr/day loan portfolio.",
      "Managed Credit line/CCMS platform, integration with bank, risk and NBFC partners, disbursing Rs.420 Cr/m | AUM ~Rs 680 Cr.",
      "Defined and executed the product roadmap for compliance with RBI's Digital Lending Guidelines."
    ]
  },
  {
    id: "p3",
    title: "Mi Pay & Device Financing",
    company: "Xiaomi India",
    role: "Product Strategy Manager",
    timeline: "Jul '20 - May '22",
    description: "Strategized and launched financial products for Xiaomi, including Device Financing and Wearable Payments, significantly boosting TPV.",
    techStack: ["Payments", "NFC", "Retail Tech", "Strategy"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    bullets: [
      "Developed strategy and roadmap for Xiaomi’s payment platform Mi Pay and defined the KPIs.",
      "Increased Total Payment Value by 42% to 94Cr/month by integrating Payment Gateway with Mi.com.",
      "Launched Device Financing platform 'Mi Credit Lite' in partnership with Home Credit.",
      "Onboarded 800+ retail partners, disbursing Rs 50 lakh+ loans monthly, growing at 50% MoM.",
      "End to end ownership of the P&L and Product Roadmap for Prepaid Cards and Wearable Payments.",
      "Led development of Prepaid cards along with NFC Based wearable payments and BNPL synchronising Xiaomi band with XFS.",
      "Boosted 7-day Retention rate by 18%."
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: PROFILE_DATA.linkedin, icon: "Linkedin" },
  { platform: "Email", url: `mailto:${PROFILE_DATA.email}`, icon: "Mail" }
];