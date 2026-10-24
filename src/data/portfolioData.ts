export interface Project {
  id: string;
  title: string;
  category: 'web-software' | 'academic' | 'concept' | 'practical-it';
  categoryLabel: string;
  status: 'In Development' | 'Academic Prototype' | 'Concept' | 'Skills Showcase';
  tagline: string;
  shortDescription: string;
  tags: string[];
  caseStudy: {
    problem: string;
    intendedUsers: string;
    requirements: string[];
    architecture: string;
    techStack: string[];
    databaseDesign?: string;
    implementationNotes: string;
    testingApproach: string;
    securityConsiderations: string[];
    limitations: string[];
    futureRoadmap: string[];
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Basic Knowledge' | 'Currently Learning' | 'Academic Knowledge' | 'Project Experience';
    note?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  inquirySubject: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  category: 'networking-it' | 'ai-data';
  categoryLabel: string;
  status: 'Completed Certification' | 'Coursework & Learning Achievement';
  description: string;
  completionDate?: string;
  credentialId?: string;
  certificateUrl?: string;
  documentPath?: string;
  skillsAcquired: string[];
}

export interface EducationItem {
  institution: string;
  credential: string;
  period: string;
  status: 'Current Study' | 'Completed' | 'Ongoing Coursework' | 'Completed Certification';
  details: string;
  highlights: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
}

export const OWNER_PROFILE = {
  name: "Wycliffe Odhiambo Odero",
  brandName: "Odero'sTechDev",
  headline: "Building Practical Technology. Solving Real Problems.",
  subheadline: "Information Technology student at Masinde Muliro University of Science and Technology. Exploring software development, web applications, IT infrastructure, networking, databases, cloud technologies, and AI-assisted engineering.",
  location: "Kakamega, Kenya",
  email: "oderowickliffe1@gmail.com",
  phoneRaw: "0794900546",
  phoneFormatted: "+254 794 900 546",
  initials: "WO",
  defaultPhotoUrl: "/assets/aistudio/Snapchat-1130208360_72e4f7a3.jpg",
  languages: [
    { language: "English", proficiency: "Professional / Fluent" },
    { language: "Kiswahili", proficiency: "Native / Fluent" },
    { language: "Luo", proficiency: "Native" },
    { language: "Spanish", proficiency: "Beginner (Self-study)" },
    { language: "Japanese", proficiency: "Beginner (Self-study)" },
  ],
  bioParagraphs: [
    "I am an Information Technology student at Masinde Muliro University of Science and Technology (MMUST) in Kakamega, Kenya, with an expected graduation in December 2027. My journey in technology is driven by a deep curiosity about how systems communicate, how clean code executes, and how software solves concrete, day-to-day challenges in African communities.",
    "Rather than treating technology as abstract theory, my philosophy centers on learning by building, rigorous troubleshooting, hands-on experimentation, and thorough technical documentation. I bridge the gap between software engineering and systems infrastructure—understanding not just how to build an application interface, but how data packets traverse switches, how relational databases maintain integrity, and how systems are maintained and secured.",
    "My current focus combines academic foundations with hands-on practice in C, Java, JavaScript, web development, Linux system administration, Cisco networking coursework, and disciplined AI-assisted development workflows."
  ]
};

export const SOCIAL_LINKS_DEFAULTS = {
  github: "",
  linkedin: "",
  x: "",
  whatsapp: "https://wa.me/254794900546"
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  // Cisco Networking & IT Certifications
  {
    id: "cisco-networking-basics",
    title: "Networking Basics",
    provider: "Cisco Networking Academy",
    category: "networking-it",
    categoryLabel: "Networking & Infrastructure",
    status: "Completed Certification",
    description: "Foundational computer network architectures, protocol encapsulation across OSI and TCP/IP reference models, Ethernet transmission, MAC addressing, and basic network device connectivity.",
    skillsAcquired: ["OSI & TCP/IP Models", "Ethernet Architecture", "MAC Addressing", "Network Devices", "Basic Connectivity Diagnostics"]
  },
  {
    id: "cisco-cybersecurity",
    title: "Cybersecurity",
    provider: "Cisco Networking Academy",
    category: "networking-it",
    categoryLabel: "Cybersecurity & Defense",
    status: "Completed Certification",
    description: "Core cybersecurity principles, threat actor landscapes, defense-in-depth strategies, network security fundamentals, data privacy standards, and baseline protective countermeasures.",
    skillsAcquired: ["Cyber Threat Landscapes", "Defense-in-Depth", "Data Confidentiality & Integrity", "Basic Security Hygiene", "Network Vulnerability Awareness"]
  },
  {
    id: "cisco-hardware-upgrade-support",
    title: "Hardware and Upgrade Support",
    provider: "Cisco Networking Academy",
    category: "networking-it",
    categoryLabel: "Computer Hardware & IT Support",
    status: "Completed Certification",
    description: "Identification, diagnostic troubleshooting, component upgrade procedures, safety protocols, and operational maintenance for personal computers and internal subsystem hardware.",
    skillsAcquired: ["Hardware Identification", "Component Upgrades (RAM/Storage/GPU)", "Workstation Diagnostics", "Electrostatic Discharge (ESD) Safety", "System Maintenance"]
  },

  // SoloLearn AI & Digital Literacy Learning Achievements
  {
    id: "sololearn-prompt-engineering",
    title: "Prompt Engineering",
    provider: "SoloLearn",
    category: "ai-data",
    categoryLabel: "Artificial Intelligence",
    status: "Coursework & Learning Achievement",
    description: "Techniques for crafting precise, contextual prompts, zero-shot and few-shot reasoning, persona steering, output formatting, and iterative query refinement with generative AI systems.",
    skillsAcquired: ["Contextual Prompt Design", "Few-Shot Prompting", "System Persona Instruction", "Output Constraints & Schema Enforcement"]
  },
  {
    id: "sololearn-llms",
    title: "Large Language Models (LLMs)",
    provider: "SoloLearn",
    category: "ai-data",
    categoryLabel: "Artificial Intelligence",
    status: "Coursework & Learning Achievement",
    description: "Architectural foundations of modern large language models, transformer mechanisms, tokenization, training pipelines, inference latency, and contextual window parameters.",
    skillsAcquired: ["Transformer Basics", "Tokenization & Context Windows", "Inference Mechanics", "Model Capabilities & Boundaries"]
  },
  {
    id: "sololearn-ethical-ai",
    title: "Ethical AI Foundations",
    provider: "SoloLearn",
    category: "ai-data",
    categoryLabel: "AI Ethics & Governance",
    status: "Coursework & Learning Achievement",
    description: "Principles of responsible AI deployment, human-in-the-loop oversight, intellectual property considerations, safety alignment, transparency, and accountability in algorithmic solutions.",
    skillsAcquired: ["Human-in-the-Loop Oversight", "Transparency & Explainability", "Responsible AI Principles", "Intellectual Property & Attribution"]
  },
  {
    id: "sololearn-data-literacy-ai",
    title: "Data Literacy with AI",
    provider: "SoloLearn",
    category: "ai-data",
    categoryLabel: "Data & Artificial Intelligence",
    status: "Coursework & Learning Achievement",
    description: "Fundamental data literacy for AI workflows, understanding dataset distribution, data cleansing, correlation versus causation, and evaluating data quality for model inputs.",
    skillsAcquired: ["Data Quality Assessment", "Data Hygiene & Preprocessing", "Interpreting Statistical Outputs", "Evidence-Based AI Interaction"]
  },
  {
    id: "sololearn-bias-mitigation",
    title: "Bias Mitigation and Detection in AI Systems",
    provider: "SoloLearn",
    category: "ai-data",
    categoryLabel: "AI Ethics & Fairness",
    status: "Coursework & Learning Achievement",
    description: "Techniques for identifying algorithmic bias, demographic representation gaps in training datasets, fairness metrics, and methods for mitigating unintended discriminatory outputs.",
    skillsAcquired: ["Algorithmic Bias Identification", "Dataset Representation Auditing", "Fairness Considerations", "Mitigation Strategies"]
  },
  {
    id: "sololearn-write-with-ai",
    title: "Write with AI",
    provider: "SoloLearn",
    category: "ai-data",
    categoryLabel: "Applied AI Productivity",
    status: "Coursework & Learning Achievement",
    description: "Applying generative AI models to accelerate technical documentation, code annotation, structured communication, and editorial synthesis while preserving critical human judgment.",
    skillsAcquired: ["Technical Documentation Synthesis", "Draft Refinement & Structuring", "Tone Adaptation", "Human Editorial Oversight"]
  }
];

export const ETHICAL_AI_STATEMENT = {
  title: "Responsible AI Development & Human-in-the-Loop Engineering",
  headline: "Understanding the Technology Behind AI Workflows, Not Just Generating Code.",
  description: "As an Information Technology undergraduate at MMUST, my approach to artificial intelligence centers on rigorous technical comprehension, ethical awareness, and human responsibility rather than uncritical automation.",
  paragraphs: [
    "Artificial intelligence is transforming software engineering, infrastructure monitoring, and data analysis. However, true technical competence requires understanding how these systems work under the hood: tokenization dynamics, transformer architectures, dataset biases, and probabilistic inference boundaries.",
    "Through completed certifications and learning modules in Prompt Engineering, Large Language Models (LLMs), Ethical AI Foundations, and Bias Mitigation, I treat AI as a cognitive multiplier and diagnostic aid. I enforce a strict human-in-the-loop discipline: every suggested function, SQL query, or architecture pattern must be mentally parsed, verified against official documentation, and rigorously tested before deployment.",
    "Ethical technology also demands vigilance regarding data privacy, avoiding the exposure of private credentials, identifying demographic skews in training sets, and upholding intellectual property integrity. By bridging foundational networking, cybersecurity, and responsible AI workflows, I strive to build digital solutions that are robust, equitable, and transparent."
  ],
  pillars: [
    {
      title: "Technical Comprehension Over Blind Generation",
      desc: "Dissecting how LLMs generate output, evaluating contextual constraints, and avoiding copy-paste fragility."
    },
    {
      title: "Bias Detection & Mitigation",
      desc: "Auditing datasets and model outputs for demographic underrepresentation, historical bias, and unfair skew."
    },
    {
      title: "Cybersecurity & Data Privacy",
      desc: "Safeguarding user privacy, sanitizing data pipelines, and never submitting private keys or credentials to third-party endpoints."
    },
    {
      title: "Human-Centric Critical Oversight",
      desc: "Maintaining human accountability for software correctness, system reliability, and ethical impact."
    }
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Masinde Muliro University of Science and Technology (MMUST)",
    credential: "Bachelor of Science in Information Technology",
    period: "2023 — Present (Expected Dec 2027)",
    status: "Current Study",
    details: "Kakamega, Kenya. Comprehensive academic program covering software engineering, data structures, algorithms, computer architecture, database management, and network infrastructure.",
    highlights: [
      "Rigorous foundations in procedural and object-oriented programming (C, Java)",
      "Database architecture, relational schema design, and SQL querying",
      "Systems administration, operating systems theory, and digital logic"
    ]
  },
  {
    institution: "Cisco Networking Academy",
    credential: "Cisco IT & Networking Certifications",
    period: "Completed Certifications",
    status: "Completed Certification",
    details: "Certified technical training covering Networking Basics, Cybersecurity, and Hardware and Upgrade Support.",
    highlights: [
      "Networking Basics: OSI 7-Layer, TCP/IP, Ethernet architecture, and MAC addressing",
      "Cybersecurity: Threat landscape analysis, defense-in-depth, and security hygiene",
      "Hardware and Upgrade Support: PC component upgrades, diagnostics, and ESD safety"
    ]
  },
  {
    institution: "SoloLearn Learning Academy",
    credential: "Artificial Intelligence & Digital Literacy Program",
    period: "Completed Coursework & Learning",
    status: "Completed",
    details: "Structured curriculum in Prompt Engineering, Large Language Models (LLMs), Ethical AI Foundations, Data Literacy with AI, Bias Mitigation, and Write with AI.",
    highlights: [
      "Prompt engineering mechanics, zero/few-shot prompting, and schema enforcement",
      "Understanding LLM transformers, context windows, and inference characteristics",
      "Algorithmic bias detection, fairness considerations, and responsible AI deployment"
    ]
  },
  {
    institution: "Wangapala High School",
    credential: "Kenya Certificate of Secondary Education (KCSE)",
    period: "2019 — 2022",
    status: "Completed",
    details: "Homa Bay County, Kenya. Completed secondary school education with strong marks in sciences and mathematics.",
    highlights: [
      "Attained KCSE Mean Grade: B Plain (2022)",
      "Active participation in science congress and technology clubs"
    ]
  },
  {
    institution: "Cherwa Primary School",
    credential: "Kenya Certificate of Primary Education (KCPE)",
    period: "2010 — 2018",
    status: "Completed",
    details: "Primary foundational education completed in 2018.",
    highlights: [
      "Attained KCPE: 303 Marks"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "edubridge-kenya",
    title: "EduBridge Kenya",
    category: "concept",
    categoryLabel: "National Student Portal Concept",
    status: "In Development",
    tagline: "Unifying university placement, HELB loans, accommodation, and public student services.",
    shortDescription: "A proposed central digital student navigation platform designed to help Kenyan tertiary students navigate KUCCPS placement, HELB/HEF funding, university portals, scholarships, hostel accommodation, eCitizen, KRA PIN, SHA registration, academic timetables, and industrial attachments.",
    tags: ["Systems Architecture", "GovTech Concept", "React/TypeScript", "PostgreSQL Spec", "Student Services"],
    caseStudy: {
      problem: "Kenyan secondary school graduates and continuing university students face an overwhelmingly fragmented digital landscape. Crucial student services are scattered across KUCCPS, Higher Education Financing (HEF/HELB), multiple university portals, eCitizen, Kenya Revenue Authority (KRA), Social Health Authority (SHA), and private hostel boards. This causes missed deadlines, missed funding opportunities, and massive administrative friction.",
      intendedUsers: "Incoming university and college freshmen, continuing undergraduate students across Kenyan public and private universities, parents, and academic advisors.",
      requirements: [
        "Consolidated single-view dashboard linking verified educational milestones.",
        "Step-by-step guidance pipelines for KUCCPS revision, HELB loan applications, and SHA onboarding.",
        "Verified accommodation finder for university-adjacent hostels in Kakamega and beyond.",
        "Notice board for verified industrial attachments, internship openings, and bursaries.",
        "Offline-capable document checklist for admission clearance."
      ],
      architecture: "Client-side Progressive Web App (PWA) with lightweight mobile rendering, connected via RESTful API gateway to a relational PostgreSQL database. Micro-service style scrapers and official API connectors for institutional announcements with strict caching.",
      techStack: ["TypeScript", "React", "Tailwind CSS", "Node.js / Express (Planned)", "PostgreSQL", "PWA Service Worker"],
      databaseDesign: "Relational schema incorporating Users (students), Institutions (MMUST, UoN, KU, etc.), FinancialAidPrograms, ApplicationDeadlines, Hostels, and AttachmentListings with indexed foreign keys for fast regional filtering.",
      implementationNotes: "Currently in the user-flow wireframing and data schema modeling phase. Prototyping responsive navigation patterns tailored for mobile smartphones with constrained bandwidth.",
      testingApproach: "Validation of responsive breakpoints (320px to 1440px), form validation test suites, and simulated offline service worker cache tests.",
      securityConsiderations: [
        "Zero storage of raw national ID or KRA PIN credentials on client device.",
        "TLS encrypted transport for all API transmissions.",
        "Content Security Policy (CSP) and input sanitization against XSS."
      ],
      limitations: [
        "Direct API integrations with governmental portals (HEF, KUCCPS) depend on public API availability and official clearance.",
        "Initial release operates as an authenticated guidance, tracking, and directory system."
      ],
      futureRoadmap: [
        "Integration of SMS notifications for urgent university admission and funding updates.",
        "Peer-reviewed hostel rating system for student safety and rental transparency.",
        "Automated resume generator formatted for Kenyan industrial attachment requirements."
      ]
    }
  },
  {
    id: "rental-house-management",
    title: "Rental House Management System (RHMS)",
    category: "academic",
    categoryLabel: "Academic Prototype",
    status: "In Development",
    tagline: "Digitizing rental records, payment tracking, and landlord-tenant transparency.",
    shortDescription: "A rental property management concept developed within a collaborative academic context at MMUST. Designed to eliminate manual ledger books through structured unit tracking, tenant records, rent payment receipts, automated SMS/email reminders, and maintenance issue tracking.",
    tags: ["Academic Collaboration", "Database Architecture", "Java / Node Spec", "Full-Stack Concept", "FinTech Integration"],
    caseStudy: {
      problem: "In Kenyan university towns like Kakamega and peri-urban centers, property managers and private landlords rely on handwritten paper notebooks and disorganized WhatsApp messages for rent tracking. This leads to disputed payment claims, lost utility balances, unrecorded maintenance requests, and delayed vacancy filling.",
      intendedUsers: "Property owners, resident caretakers, and student/family tenants.",
      requirements: [
        "Property and room unit hierarchy (plots, blocks, unit numbers, monthly rent, deposits).",
        "Tenant onboarding with move-in dates, emergency contacts, and active lease records.",
        "Payment logging supporting M-Pesa transaction reference capture and payment reconciliation.",
        "Automated rent reminder notifications before month-end due dates.",
        "Maintenance request ticketing with status tracking (Pending, In Progress, Resolved)."
      ],
      architecture: "Layered MVC architecture separating client UI, business logic service layer, and relational data persistence layer. Planned integration with Daraja (M-Pesa) STK Push API for automated receipt generation.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js / Express", "PostgreSQL", "M-Pesa Daraja API (Planned)"],
      databaseDesign: "Entities: Landlord, Property, Unit (status: vacant/occupied), Tenant, LeaseAgreement, RentTransaction (amount, date, method, reference_code), MaintenanceRequest.",
      implementationNotes: "Developed collaboratively as an academic prototype exploring relational database integrity and transaction handling.",
      testingApproach: "Unit tests on rent calculation logic, late-fee algorithms, and database referential integrity checks (cascade deletes vs soft deletes).",
      securityConsiderations: [
        "Role-Based Access Control (RBAC) separating Landlord, Caretaker, and Tenant views.",
        "Password hashing with bcrypt and secure session token management.",
        "Audit log recording all manual rent adjustments."
      ],
      limitations: [
        "Currently an academic prototype without live banking authorization credentials.",
        "Offline synchronization is limited in the initial build."
      ],
      futureRoadmap: [
        "IoT smart sub-metering integration for water and electricity tokens.",
        "Direct Daraja C2B/B2C automated transaction reconciliation.",
        "Digital lease agreement signing with timestamped verification."
      ]
    }
  },
  {
    id: "co-rank",
    title: "co.rank",
    category: "concept",
    categoryLabel: "Gaming & Esports Platform Concept",
    status: "Concept",
    tagline: "Competitive eFootball community, county tournaments, and player rankings.",
    shortDescription: "A dedicated competitive gaming and ranking platform for Kenyan grassroots eFootball gamers. Envisioned to introduce structured matchmaking, verified match results, county-level ladders, tournament brackets, and player career statistics.",
    tags: ["Esports Tech", "Ranking Algorithms", "Community Platform", "UI/UX Design", "WebSockets Concept"],
    caseStudy: {
      problem: "eFootball and console gaming are massive youth pastimes across Kenyan universities and urban gaming lounges. However, competitive gaming remains informal, disorganized, and hyper-local, with no standardized way to verify player rankings, track match records across counties, or discover grassroots talent for national or international esports competitions.",
      intendedUsers: "Kenyan eFootball console/mobile players, esports tournament organizers, gaming lounge proprietors, and esports fans.",
      requirements: [
        "Player profiles showcasing preferred clubs, platform (PlayStation/Xbox/Mobile), and match history.",
        "Elo-based competitive ranking ladder categorized by Kenyan counties (Kakamega, Nairobi, Kisumu, etc.).",
        "Match recording workflow with dual-player confirmation and screenshot score verification.",
        "Automated single and double-elimination tournament bracket generator.",
        "Lounge/venue directory for local LAN tournaments."
      ],
      architecture: "Event-driven web application with real-time score feeds using WebSockets, backed by a high-read throughput database and Redis caching for leaderboard queries.",
      techStack: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Redis (Planned)", "PostgreSQL"],
      databaseDesign: "Players, Matches (player_one_id, player_two_id, score_one, score_two, verified_by), Tournaments, Brackets, CountyLeaderboards.",
      implementationNotes: "UI wireframing completed for the player dashboard, county division tables, and match submission modal. Elo calculation logic modeled and tested.",
      testingApproach: "Mathematical unit tests verifying Elo rating adjustments after match outcomes across varying rating gaps.",
      securityConsiderations: [
        "Anti-fraud match reporting requiring opponent digital countersignature.",
        "Rate limiting on match submissions to prevent rating manipulation.",
        "Report and dispute resolution workflow with admin review."
      ],
      limitations: [
        "Requires active gaming lounge partnerships for physical match verification.",
        "Initial phase is a concept and UI prototype without automated console telemetry."
      ],
      futureRoadmap: [
        "Automated OCR for post-match scoreboard screenshot verification.",
        "Prizepool escrow integration via verified mobile money for registered tournaments.",
        "Integration of live Twitch and YouTube stream embeds for county finals."
      ]
    }
  },
  {
    id: "blueline-shuttle",
    title: "BlueLine Shuttle Booking System",
    category: "concept",
    categoryLabel: "Transit Booking Concept",
    status: "In Development",
    tagline: "Streamlined long-distance shuttle reservations and passenger logistics.",
    shortDescription: "A proposed web-based shuttle reservation platform designed for Kenyan inter-county transport saccos. Features route selection, departure scheduling, visual seat selection, passenger manifests, and planned Google authentication.",
    tags: ["Transport Tech", "Booking Engine", "Seat Selection UI", "Google Auth Spec", "Mobile-First"],
    caseStudy: {
      problem: "Long-distance travelers in Western Kenya frequently experience long terminal queues, uncertain seat availability, double-booked seats, and lost physical paper receipts when booking public service shuttles and vans.",
      intendedUsers: "Inter-county commuters, university students traveling between campuses and hometowns, and transport sacco booking clerks.",
      requirements: [
        "Interactive route selector (e.g. Kakamega — Nairobi, Kisumu — Eldoret).",
        "Visual bus/shuttle seat map displaying available, reserved, and booked seats in real time.",
        "Passenger details collection adhering to National Transport and Safety Authority (NTSA) regulations.",
        "Seamless Google Authentication for fast 1-tap customer login.",
        "SMS and email digital ticket delivery with QR code check-in."
      ],
      architecture: "Responsive Single Page Application with optimized mobile touch interaction, connecting to an Express booking engine that enforces row-level seat lock concurrency.",
      techStack: ["TypeScript", "React", "Tailwind CSS", "Express.js", "PostgreSQL", "Google OAuth 2.0 (Planned)"],
      databaseDesign: "Routes, Trips, Vehicles (capacity, layout_type), Seats (seat_number, status, lock_timestamp), Bookings, Passengers.",
      implementationNotes: "Built the responsive visual seat selection UI and reservation flow state machine. Designed to operate reliably on budget Android smartphones.",
      testingApproach: "Concurrency simulation testing ensuring two simultaneous users cannot reserve the same seat simultaneously.",
      securityConsiderations: [
        "Cryptographically signed ticket QR codes preventing duplicate boarding.",
        "Temporary 10-minute seat lock expiry to release abandoned checkouts.",
        "HTTPS enforcement and CSRF protection on booking endpoints."
      ],
      limitations: [
        "Sacco fleet management integration requires custom hardware or tablet at dispatch desks.",
        "Project is currently an independent prototype concept."
      ],
      futureRoadmap: [
        "Real-time GPS vehicle tracking for waiting terminal passengers.",
        "Automated luggage tag printing and parcel tracking module.",
        "Multi-lingual interface supporting Swahili and English."
      ]
    }
  },
  {
    id: "final11-streetwear",
    title: "Final11 Streetwear E-Commerce",
    category: "concept",
    categoryLabel: "Digital Commerce Concept",
    status: "Concept",
    tagline: "Youth-oriented apparel concept with the slogan 'BUILT FOR THE FINAL'.",
    shortDescription: "A proposed modern e-commerce storefront and digital brand showcase for 'Final11', an emerging streetwear line specializing in premium heavyweight hoodies, graphic sweatpants, football-inspired jerseys, and urban footwear.",
    tags: ["E-Commerce UI", "Brand Identity", "Product Showcase", "Cart State Machine", "Fashion Tech"],
    caseStudy: {
      problem: "Emerging independent Kenyan streetwear designers struggle to present collections professionally. Most rely solely on Instagram DMs, resulting in missed customer orders, untracked size inventory, and a lack of brand prestige.",
      intendedUsers: "Kenyan youth, university students, streetwear enthusiasts, and international diaspora customers seeking African urban fashion.",
      requirements: [
        "High-contrast, minimal editorial product catalog matching streetwear aesthetics.",
        "Size selector with sizing dimensions guide (S, M, L, XL, XXL).",
        "Client-side shopping bag state machine with local persistence.",
        "Lookbook gallery emphasizing collection stories and design inspirations.",
        "WhatsApp / direct checkout integration for fast local ordering."
      ],
      architecture: "Jamstack frontend with static product metadata, headless cart management, and responsive image optimizations for high-resolution garment imagery.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "LocalStorage API"],
      implementationNotes: "Created responsive editorial product cards, interactive size selection states, and brand typography hierarchy centered on the brand ethos 'BUILT FOR THE FINAL'.",
      testingApproach: "Cart state persistence tests across browser refresh, responsive image loading audits on 3G bandwidth.",
      securityConsiderations: [
        "Client-side cart validation verified against server pricing upon final checkout.",
        "No customer financial data handled directly on client."
      ],
      limitations: [
        "Apparel inventory is currently in the conceptual brand-identity stage.",
        "Payment gateway is prepared for future M-Pesa / card processor integration."
      ],
      futureRoadmap: [
        "Limited 'Drop' countdown timers for exclusive batch releases.",
        "Augmented Reality 3D garment inspection preview.",
        "Customer community style gallery with user-uploaded fit pics."
      ]
    }
  },
  {
    id: "it-support-sysadmin",
    title: "IT Support & Systems Administration",
    category: "practical-it",
    categoryLabel: "Practical Skills Showcase",
    status: "Skills Showcase",
    tagline: "Hands-on workstation maintenance, troubleshooting, and hardware support.",
    shortDescription: "A documented showcase of practical technical support capabilities covering hardware diagnostic procedures, physical PC internal cleaning, thermal management, software & driver installations, Windows CMD command line operations, and introductory networking setup.",
    tags: ["Hardware Diagnostics", "PC Maintenance", "Driver Configuration", "Windows CMD", "Troubleshooting"],
    caseStudy: {
      problem: "Small businesses, academic labs, and individuals regularly suffer productivity collapse from preventable hardware overheating, corrupted driver conflicts, malware infections, and poorly configured local network shares.",
      intendedUsers: "University department labs, cyber cafes, small local businesses, and private workstation users.",
      requirements: [
        "Systematic diagnostic flowcharts for hardware POST failures and boot crashes.",
        "Safe thermal maintenance (dust elimination, heatsink inspection, airflow optimization).",
        "Driver rollback and clean reinstallation for display and network interfaces.",
        "Command-line troubleshooting using chkdsk, sfc /scannow, ipconfig, and netstat.",
        "Data backup verification and safe operating system reinstallation."
      ],
      architecture: "Standardized procedural ITIL-aligned checklist framework documented for reproducible computer maintenance and client reporting.",
      techStack: ["Windows 10/11 Sysadmin", "Linux CLI", "Hardware Tools", "Cable Testers", "Diagnostic Utilities"],
      implementationNotes: "Regularly practiced through personal workstation upkeep, peer technical support, and campus laboratory environments.",
      testingApproach: "Pre- and post-maintenance thermal benchmarks, boot time comparisons, and network latency ping sweeps.",
      securityConsiderations: [
        "Handling customer data with strict privacy ethics and zero unauthorized access.",
        "Creation of isolated restore points prior to registry or driver modifications.",
        "Safe physical grounding (ESD precautions) during component handling."
      ],
      limitations: [
        "Specialized board-level micro-soldering requires dedicated cleanroom equipment.",
        "Focus is primarily on workstation, peripheral, and local office infrastructure."
      ],
      futureRoadmap: [
        "CompTIA A+ and Network+ certification alignment.",
        "Automated Powershell maintenance scripts for multi-PC lab deployments.",
        "Network-Attached Storage (NAS) implementation for automated small-office backups."
      ]
    }
  },
  {
    id: "ai-assisted-engineering",
    title: "AI-Assisted Software Engineering",
    category: "web-software",
    categoryLabel: "Technical Learning Showcase",
    status: "Skills Showcase",
    tagline: "Disciplined engineering workflow leveraging modern AI for accelerated learning.",
    shortDescription: "A transparent technical methodology showcasing how AI programming assistants are utilized not to generate opaque boilerplate, but as rapid feedback loops to study algorithms, dissect unfamiliar APIs, write comprehensive unit tests, and debug complex syntax.",
    tags: ["Engineering Methodology", "AI Workflows", "Code Verification", "Prompt Architecture", "Continuous Learning"],
    caseStudy: {
      problem: "Many learners use generative AI to blindly copy-paste unvetted code, leading to fragile applications, security vulnerabilities, and stunted conceptual growth. A structured, transparent engineering methodology is required.",
      intendedUsers: "Prospective employers, engineering mentors, and fellow technology students.",
      requirements: [
        "Strict 'Code Inspection First' rule: every AI-suggested line must be mentally parsed and understood before integration.",
        "Independent verification through TypeScript compiler checks and unit tests.",
        "Iterative prompt engineering focused on architecture and edge-case discovery.",
        "Documenting architectural trade-offs rather than accepting default suggestions."
      ],
      architecture: "Iterative Engineering Loop: Human Architectural Plan → Targeted AI Synthesis → Line-by-Line Code Review → Local Compilation & Test Runner → Refactoring & Polish.",
      techStack: ["TypeScript", "Node Test Runner", "Gemini API Tools", "Git Version Control"],
      implementationNotes: "Applied systematically across coursework and portfolio development to accelerate learning without compromising software craftsmanship.",
      testingApproach: "Writing automated unit test assertions against helper functions and edge cases to verify output correctness.",
      securityConsiderations: [
        "Never sharing private API tokens, sensitive credentials, or personal keys in prompts.",
        "Verifying all AI-generated database queries against SQL injection vulnerabilities."
      ],
      limitations: [
        "AI output can introduce subtle hallucinations in lesser-known library updates.",
        "Requires constant human vigilance and verification."
      ],
      futureRoadmap: [
        "Building custom command-line developer tools powered by the Gemini 2.5 API.",
        "Creating an automated code-review GitHub Action for academic student submissions."
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Development",
    description: "Core programming languages, algorithmic problem solving, and version control.",
    skills: [
      { name: "C Programming", level: "Academic Knowledge", note: "Memory concepts, pointers, structs, and systems fundamentals" },
      { name: "Java", level: "Academic Knowledge", note: "Object-oriented design, classes, inheritance, and data structures" },
      { name: "JavaScript (ES6+)", level: "Project Experience", note: "Modern asynchronous syntax, DOM manipulation, modular code" },
      { name: "TypeScript", level: "Currently Learning", note: "Type safety, interfaces, union types, and modern tooling" },
      { name: "Android Development", level: "Currently Learning", note: "Foundational Android lifecycle, activities, XML layouts" },
      { name: "Git & GitHub", level: "Project Experience", note: "Branching, commits, pull requests, and repository management" }
    ]
  },
  {
    title: "Web Technologies",
    description: "Building responsive, accessible, standards-compliant user interfaces.",
    skills: [
      { name: "HTML5 Semantic Structure", level: "Project Experience", note: "Accessible markup, screen-reader semantics, SEO" },
      { name: "CSS3 & Modern Layouts", level: "Project Experience", note: "Flexbox, CSS Grid, custom properties, animations" },
      { name: "Tailwind CSS", level: "Project Experience", note: "Utility-first design tokens, responsive breakpoints, dark mode" },
      { name: "React Fundamentals", level: "Currently Learning", note: "Component composition, state hooks, props, effects" },
      { name: "Responsive Web Design", level: "Project Experience", note: "Mobile-first testing from 320px to multi-monitor setups" }
    ]
  },
  {
    title: "Networking & Infrastructure",
    description: "Cisco Certified training in Networking Basics and MMUST academic curriculum.",
    skills: [
      { name: "Networking Fundamentals", level: "Project Experience", note: "Certified: Cisco Networking Basics credential" },
      { name: "OSI & TCP/IP Reference Models", level: "Academic Knowledge", note: "Protocol stacks, encapsulation, and packet transmission" },
      { name: "Ethernet & IEEE 802.3", level: "Academic Knowledge", note: "Frame structure, preamble, and FCS error checking" },
      { name: "MAC Addressing & Layer 2 Switching", level: "Academic Knowledge", note: "CAM tables, frame filtering, and forwarding mechanics" },
      { name: "IPv4 Addressing & Subnetting", level: "Academic Knowledge", note: "VLSM, subnet masking, network/broadcast calculation" },
      { name: "Basic Network Troubleshooting", level: "Project Experience", note: "Diagnostic commands: ping, tracert, ipconfig, interface status" }
    ]
  },
  {
    title: "Cybersecurity & Defense",
    description: "Cisco Certified Cybersecurity training, defense concepts, and ethical AI safety.",
    skills: [
      { name: "Foundational Cybersecurity Concepts", level: "Project Experience", note: "Certified: Cisco Cybersecurity credential" },
      { name: "Threat Landscapes & Attack Vectors", level: "Academic Knowledge", note: "Malware, phishing, social engineering, and vulnerability analysis" },
      { name: "Defense-in-Depth & Security Hygiene", level: "Academic Knowledge", note: "Least privilege, multi-factor authentication, network segmentation" },
      { name: "Data Confidentiality & Privacy", level: "Academic Knowledge", note: "Data protection standards and safe credential handling" },
      { name: "Ethical AI Safety Principles", level: "Currently Learning", note: "Aligning AI workflows with security and privacy boundaries" }
    ]
  },
  {
    title: "Computer Hardware & IT Support",
    description: "Cisco Certified Hardware & Upgrade Support training and hands-on maintenance.",
    skills: [
      { name: "Hardware Identification & Upgrade Support", level: "Project Experience", note: "Certified: Cisco Hardware and Upgrade Support credential" },
      { name: "Computer Hardware Diagnostics", level: "Project Experience", note: "POST troubleshooting, RAM/storage checks, thermal care" },
      { name: "Software & Driver Installation", level: "Project Experience", note: "Clean OS deployment, official motherboard and GPU drivers" },
      { name: "PC Cleaning & Maintenance", level: "Project Experience", note: "Physical dust clearing, thermal paste renewal, fan inspection" },
      { name: "Electrostatic Discharge (ESD) Safety", level: "Academic Knowledge", note: "Grounding protocols and safe component handling" },
      { name: "Office Operations & Excel Basics", level: "Basic Knowledge", note: "Typing, scanning, photocopying, spreadsheet data entry" }
    ]
  },
  {
    title: "Artificial Intelligence & Prompt Engineering",
    description: "SoloLearn certified learning achievements and responsible AI engineering.",
    skills: [
      { name: "Prompt Engineering", level: "Project Experience", note: "SoloLearn Coursework: contextual steering, zero/few-shot prompts" },
      { name: "Large Language Models (LLMs)", level: "Academic Knowledge", note: "SoloLearn Coursework: transformers, tokenization, inference limits" },
      { name: "Ethical AI Foundations", level: "Academic Knowledge", note: "SoloLearn Coursework: human oversight, transparency, attribution" },
      { name: "Bias Mitigation & Detection in AI", level: "Currently Learning", note: "SoloLearn Coursework: dataset auditing, representation, fairness" },
      { name: "Data Literacy with AI", level: "Academic Knowledge", note: "SoloLearn Coursework: evaluating data quality, distributions, hygiene" },
      { name: "Write with AI", level: "Project Experience", note: "SoloLearn Coursework: technical drafting with human editorial control" },
      { name: "AI-Assisted Development Workflow", level: "Project Experience", note: "Engineering feedback loops, unit test generation, code auditing" }
    ]
  },
  {
    title: "Systems Administration & OS",
    description: "Managing operating system environments, command line tools, and host operations.",
    skills: [
      { name: "Linux Fundamentals", level: "Currently Learning", note: "File system hierarchy, permissions (chmod/chown), bash commands" },
      { name: "Windows System Administration", level: "Project Experience", note: "Device Manager, Services, Task Manager, Event Viewer" },
      { name: "Windows CMD & CLI Tools", level: "Project Experience", note: "ipconfig, ping, tracert, netstat, sfc, chkdsk, taskkill" },
      { name: "OS Installation & Migration", level: "Project Experience", note: "Clean installations, bootable USB media, partition management" }
    ]
  },
  {
    title: "Databases & Cloud Concepts",
    description: "Relational data structuring, normalization, query formulation, and cloud basics.",
    skills: [
      { name: "Relational Database Concepts", level: "Academic Knowledge", note: "Primary/foreign keys, entity relationship diagrams (ERD)" },
      { name: "SQL Querying", level: "Academic Knowledge", note: "SELECT, JOIN, WHERE, GROUP BY, aggregations, data constraints" },
      { name: "PostgreSQL Exploration", level: "Currently Learning", note: "Relational setup, schema definitions, data integrity" },
      { name: "Cloud Computing Fundamentals", level: "Currently Learning", note: "IaaS/PaaS/SaaS models, storage buckets, cloud hosting basics" }
    ]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "pc-troubleshooting",
    title: "Computer Troubleshooting & PC Maintenance",
    description: "Diagnostic assessment of slow, freezing, or non-booting desktop and laptop computers. Includes physical cleaning, thermal paste renewal, dust removal, and hardware component checks.",
    deliverables: [
      "Diagnostic boot and hardware assessment",
      "Internal dust removal and thermal inspection",
      "Performance optimization and startup cleanup",
      "Clear summary report of system condition"
    ],
    idealFor: "Students, small offices, and home workstation owners in Kakamega.",
    inquirySubject: "Computer Troubleshooting & Maintenance"
  },
  {
    id: "software-installation",
    title: "Software & Driver Configuration",
    description: "Clean installation of operating systems, official hardware drivers, developer runtimes, and essential software packages without bundled bloatware or malware.",
    deliverables: [
      "Clean OS reinstallation / upgrade",
      "Official motherboard, GPU, and peripheral driver setup",
      "Essential productivity tools and development toolchains",
      "System restore point creation for safety"
    ],
    idealFor: "Newly purchased computers or machines recovering from corrupt system files.",
    inquirySubject: "Software & Driver Setup"
  },
  {
    id: "basic-networking",
    title: "Basic Office & Home Networking Setup",
    description: "Physical and logical setup for small local area networks, including Ethernet cable termination, Wi-Fi router setup, network printer sharing, and basic LAN troubleshooting.",
    deliverables: [
      "Wi-Fi router configuration and secure WPA3/WPA2 passphrases",
      "Cat6 Ethernet patch cable crimping and continuity testing",
      "Local network printer and shared folder setup",
      "Troubleshooting slow or dropping network connections"
    ],
    idealFor: "Small businesses, cyber cafes, and residential network users.",
    inquirySubject: "Basic Networking Assistance"
  },
  {
    id: "web-development",
    title: "Static Website & Portfolio Development",
    description: "Building responsive, modern, mobile-friendly landing pages and personal websites using clean semantic HTML, Tailwind CSS, and TypeScript/React within demonstrated scope.",
    deliverables: [
      "Fully responsive design tested on phones, tablets, and laptops",
      "Fast page load times with zero bloated dependencies",
      "Contact forms linked directly to email",
      "Deployment setup on modern hosting platforms"
    ],
    idealFor: "Local businesses, personal brands, and student organizations.",
    inquirySubject: "Website Development"
  },
  {
    id: "digital-documentation",
    title: "Digital Documentation & Office Support",
    description: "Accurate document typing, scanning, PDF collation, and basic Microsoft Excel spreadsheet organization for academic, business, or administrative records.",
    deliverables: [
      "Accurate technical and general text typing",
      "High-resolution document scanning and organized PDF archiving",
      "Data entry and basic formula computation in Excel",
      "Professional document formatting and printing assistance"
    ],
    idealFor: "Academic reports, administrative filing, and local retail records.",
    inquirySubject: "Digital Documentation & Office Support"
  }
];

export const TECHNICAL_ARTICLES: Article[] = [
  {
    id: "layer-2-switching",
    title: "Understanding Layer 2 Switching: MAC Address Tables & Ethernet Frames",
    category: "Networking Fundamentals",
    readTime: "4 min read",
    date: "Draft Study Note",
    excerpt: "A deep dive into how an unmanaged or managed switch builds its Content Addressable Memory (CAM) table and verifies incoming frames with Frame Check Sequences.",
    content: [
      "In my Cisco networking coursework at MMUST, one of the most foundational concepts is understanding how a Layer 2 switch operates fundamentally differently from a legacy hub.",
      "When an Ethernet frame arrives at a switch port, the switch inspects the source MAC address. If that MAC address is not currently in its MAC address table (CAM table), the switch adds it alongside the ingress port number and resets the aging timer.",
      "Next, it inspects the destination MAC address. If the destination MAC address is already mapped in the CAM table, the switch forwards the frame exclusively out of that mapped port. If the destination is unknown (Unknown Unicast) or a broadcast address (FF:FF:FF:FF:FF:FF), the switch floods the frame out of all ports except the incoming port.",
      "Furthermore, the Ethernet frame footer contains a 4-byte Frame Check Sequence (FCS). The receiving switch recalculates the Cyclic Redundancy Check (CRC). If the calculated value does not match the FCS, the frame is immediately dropped, ensuring corrupted data is never propagated."
    ]
  },
  {
    id: "linux-cli-guide",
    title: "Essential Linux Terminal Commands for IT Students",
    category: "Systems Administration",
    readTime: "3 min read",
    date: "Draft Study Note",
    excerpt: "A practical reference of the command-line utilities I use daily for file navigation, process inspection, and network diagnostics on Linux.",
    content: [
      "Moving beyond graphical user interfaces into the terminal is an essential rite of passage for every Information Technology student. The CLI gives direct, scriptable control over the operating system.",
      "Essential file operations include `ls -la` (listing all files including hidden with permissions), `mkdir -p` (creating nested directory paths safely), and `chmod` / `chown` for adjusting file security modes.",
      "For system and process inspection, `top` or `htop` gives instant visibility into CPU and RAM consumption, while `ps aux | grep <process>` allows pinpointing runaway tasks.",
      "For networking diagnostics, tools like `ip addr show`, `ping -c 4`, `ss -tulpn` (showing listening sockets and ports), and `traceroute` allow rapid localization of network bottlenecks."
    ]
  },
  {
    id: "ai-assisted-engineering-student",
    title: "How I Approach AI-Assisted Development as an IT Student",
    category: "Software Engineering",
    readTime: "5 min read",
    date: "Draft Study Note",
    excerpt: "Why treating AI as a peer reviewer and documentation explainer builds real engineering competence, while copying without reading destroys it.",
    content: [
      "Artificial intelligence models are transforming how code is written, but as a university student, using AI requires strict intellectual discipline. The goal of university is not merely to produce code, but to understand the fundamental mechanics behind that code.",
      "My rule is straightforward: I never commit a line of code generated by an AI assistant unless I can trace its execution, explain every parameter, and write an automated test verifying its behavior.",
      "I use AI primarily to explore edge cases, understand cryptic error traces, compare architectural trade-offs (such as SQL schema normalization versus denormalization), and generate realistic mock test fixtures.",
      "By maintaining this boundary, AI becomes a powerful catalyst for genuine technical learning rather than a crutch that creates fragile, unmaintainable software."
    ]
  }
];
