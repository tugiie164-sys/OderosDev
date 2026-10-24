import { Project, CertificationItem } from '../data/portfolioData';

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(input: ContactFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  const trimmedName = input.name?.trim() || '';
  if (!trimmedName) {
    errors.name = 'Full name is required.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = input.email?.trim() || '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email address.';
  }

  const trimmedSubject = input.subject?.trim() || '';
  if (!trimmedSubject) {
    errors.subject = 'Subject is required.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  const trimmedMessage = input.message?.trim() || '';
  if (!trimmedMessage) {
    errors.message = 'Message content is required.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function generateMailtoUrl(recipientEmail: string, subject: string, body: string): string {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  const queryString = params.toString();
  return `mailto:${recipientEmail}${queryString ? `?${queryString}` : ''}`;
}

export function sanitizePhoneForTel(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}

export function filterProjects(
  projects: Project[],
  activeCategory: string,
  searchQuery: string = ''
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'all' ||
      project.category === activeCategory;

    const matchesQuery =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.tagline.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });
}

export function filterCertifications(
  certifications: CertificationItem[],
  activeCategory: 'all' | 'networking-it' | 'ai-data'
): CertificationItem[] {
  if (activeCategory === 'all') return certifications;
  return certifications.filter((cert) => cert.category === activeCategory);
}

export function validateCertificateUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    // Relative paths like /assets/certificates/... are also allowed
    return trimmed.startsWith('/') || trimmed.startsWith('./');
  }
}

export function validateImageUpload(file: { type: string; size: number }): { valid: boolean; error?: string } {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
  const maxSizeBytes = 5 * 1024 * 1024; // 5 MB

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Unsupported format. Please upload a JPG, PNG, WEBP, or AVIF image.'
    };
  }

  if (file.size > maxSizeBytes) {
    return {
      valid: false,
      error: 'File size exceeds 5MB limit. Please choose a smaller image.'
    };
  }

  return { valid: true };
}

export function generatePlainTextCV(): string {
  return `WYCLIFFE ODHIAMBO ODERO
Brand: Odero'sTechDev
Location: Kakamega, Kenya
Email: oderowickliffe1@gmail.com
Phone: +254 794 900 546

==================================================
CAREER OBJECTIVE
==================================================
Motivated Information Technology undergraduate at Masinde Muliro University of Science and Technology (MMUST) with practical foundations in software development, computer networking, systems administration, and database management. Dedicated to building reliable, accessible technology solutions and seeking internship or entry-level technical opportunities to apply rigorous problem-solving skills.

==================================================
EDUCATION & ACADEMIC CREDENTIALS
==================================================
1. Bachelor of Science in Information Technology
   Masinde Muliro University of Science and Technology (MMUST), Kakamega, Kenya
   Period: 2023 - Present (Expected Graduation: December 2027)
   Focus: Software Engineering, Data Structures, Algorithms, Relational Databases, Operating Systems.

2. Kenya Certificate of Secondary Education (KCSE)
   Wangapala High School, Homa Bay County, Kenya (2019 - 2022)
   Mean Grade: B Plain

3. Kenya Certificate of Primary Education (KCPE)
   Cherwa Primary School (2010 - 2018)
   Score: 303 Marks

==================================================
CERTIFICATIONS & TECHNICAL TRAINING
==================================================
CISCO NETWORKING ACADEMY (Completed Certifications):
- Networking Basics: OSI & TCP/IP models, Ethernet architecture, MAC addressing, network devices.
- Cybersecurity: Threat landscapes, defense-in-depth, data confidentiality, security hygiene.
- Hardware and Upgrade Support: PC component upgrades, workstation diagnostics, ESD safety.

SOLOLEARN LEARNING ACADEMY (AI & Digital Literacy Achievements):
- Prompt Engineering: Contextual prompt steering, zero/few-shot prompting, schema constraints.
- Large Language Models (LLMs): Transformer architectures, tokenization, inference limits.
- Ethical AI Foundations: Human-in-the-loop oversight, transparency, responsible AI deployment.
- Bias Mitigation and Detection in AI Systems: Algorithmic bias identification, dataset representation.
- Data Literacy with AI: Evaluating data quality, distributions, and statistical interpretation.
- Write with AI: Technical drafting, documentation synthesis with human editorial oversight.

==================================================
TECHNICAL SKILLS
==================================================
- Software Development: C Programming, Java, JavaScript (ES6+), TypeScript, Android Fundamentals, Git & GitHub.
- Web Technologies: HTML5 Semantic Markup, CSS3, Tailwind CSS, Responsive Web Design, React Fundamentals.
- Networking & Infrastructure: Networking Fundamentals (Cisco), OSI & TCP/IP, Ethernet IEEE 802.3, Layer 2 Switching, Subnetting.
- Cybersecurity: Foundational Cybersecurity Concepts (Cisco), Defense-in-Depth, Security Hygiene, Ethical AI Safety.
- Computer Hardware & IT Support: Hardware Identification & Upgrades (Cisco), Hardware Diagnostics, OS/Driver Setup, PC Maintenance.
- Artificial Intelligence: Prompt Engineering (SoloLearn), LLMs, Ethical AI, Bias Mitigation, AI-Assisted Workflows.
- Systems Administration: Linux Fundamentals, Windows Administration, Command Line (ipconfig, ping, tracert, sfc, chkdsk).
- Databases & Cloud: Relational Schema Design, SQL Querying, PostgreSQL Exploration, Cloud Fundamentals.

==================================================
LANGUAGES
==================================================
- English: Fluent / Professional
- Kiswahili: Fluent / Native
- Luo: Native
- Spanish: Beginner (Self-study)
- Japanese: Beginner (Self-study)

==================================================
REPRESENTATIVE PROJECTS & CASE STUDIES
==================================================
- EduBridge Kenya (In Development): Central guidance portal concept uniting KUCCPS, HELB, hostels, and academic resources.
- Rental House Management System (RHMS) (Academic Prototype): Digital tenancy, rent payment tracking, and ledger management.
- co.rank (Concept): Competitive eFootball community platform and county ranking ladder.
- BlueLine Shuttle Booking System (In Development): Modern passenger reservation and seat allocation workflow.
- IT Support & Sysadmin Showcase: Documented computer maintenance and diagnostic procedures.
`;
}
