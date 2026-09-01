import avatar from '@/assets/profile.jpg'
import communn from '@/assets/projects/communn.svg'
import daisyMindsLms from '@/assets/projects/daisy-minds-lms.svg'
import lifesaveMedicals from '@/assets/projects/lifesave-medicals.svg'
import taskManagementCrm from '@/assets/projects/task-management-crm.svg'
import type { PortfolioData } from '@/types/portfolio'

/**
 * Single source of truth for every piece of editable content on the site.
 * Swap the values below to make this portfolio your own — components never
 * hardcode copy, they just render whatever lives here.
 */
export const portfolio: PortfolioData = {
  seo: {
    title: 'Ranjith — Senior Software Developer',
    description:
      'Portfolio of Ranjith, a Senior Software Developer specializing in React, TypeScript and Node.js — building production SaaS, marketplace and enterprise platforms.',
    ogImage: '/og-image.svg',
  },

  profile: {
    name: 'Ranjith',
    role: 'Senior Software Developer',
    tagline: 'Full-stack developer building production React, Node.js & TypeScript platforms — from payments to mobile apps.',
    avatar,
    email: 'ranjith.57neela@gmail.com',
    phone: '+91 79041 25027',
    location: 'Bengaluru, India',
    availability: 'Open to new opportunities',
    resumeUrl: '/resume.pdf',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/ranjith', icon: 'linkedin' },
      { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' },
    ],
  },

  about: {
    eyebrow: 'About Me',
    title: "Here's a little introduction about myself",
    paragraphs: [
      "I'm a Senior Software Developer with over 5 years of experience architecting and shipping production full-stack web and mobile applications. I specialize in React, TypeScript and Node.js, with end-to-end ownership spanning backend APIs, payment and messaging integrations, admin dashboards, and DevOps pipelines.",
      "Over the years I've delivered 80+ applications across SaaS, marketplace and enterprise platforms — including a B2B SaaS product used by more than 50,000 users and a live B2B marketplace serving real pharmacy customers across Karnataka. I care about clean architecture, secure-by-default APIs, and interfaces that hold up at scale.",
      'Beyond writing code, I lead engineers through architecture decisions and code review, mentor junior developers, and lean on AI-assisted tooling — GitHub Copilot, Claude Code, Cursor — to raise delivery speed without cutting corners on quality.',
    ],
    stats: [
      { label: 'Years of experience', value: '5+' },
      { label: 'Applications delivered', value: '80+' },
      { label: 'Users served', value: '50K+' },
      { label: 'Client satisfaction', value: '95%' },
    ],
  },

  services: [
    {
      icon: 'code',
      title: 'Web Development',
      description:
        'End-to-end web applications with React, Next.js and TypeScript — from admin dashboards to customer-facing platforms, built for scale and maintainability.',
    },
    {
      icon: 'server',
      title: 'Backend & APIs',
      description:
        'Secure, well-tested REST and GraphQL APIs with Node.js, Express and MongoDB — the kind of backend that holds up under real production traffic.',
    },
    {
      icon: 'smartphone',
      title: 'Mobile Apps',
      description:
        'Cross-platform Android applications with React Native and Expo, shipped end-to-end to the Google Play Store.',
    },
    {
      icon: 'credit-card',
      title: 'Payments & Integrations',
      description:
        'Payment gateway integrations (Razorpay, Easebuzz), WhatsApp Business API automation, and third-party platform integrations across Shopify and WordPress.',
    },
  ],

  skills: [
    { name: 'React', category: 'Frontend', icon: 'code', level: 96 },
    { name: 'TypeScript', category: 'Frontend', icon: 'code', level: 92 },
    { name: 'JavaScript', category: 'Frontend', icon: 'code', level: 95 },
    { name: 'Next.js', category: 'Frontend', icon: 'code', level: 85 },
    { name: 'Redux Toolkit', category: 'Frontend', icon: 'code', level: 84 },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'code', level: 88 },
    { name: 'HTML5 & CSS3', category: 'Frontend', icon: 'code', level: 94 },

    { name: 'Node.js', category: 'Backend', icon: 'server', level: 95 },
    { name: 'Express.js', category: 'Backend', icon: 'server', level: 90 },
    { name: 'REST APIs', category: 'Backend', icon: 'server', level: 94 },
    { name: 'GraphQL', category: 'Backend', icon: 'server', level: 82 },
    { name: 'MongoDB', category: 'Backend', icon: 'database', level: 90 },
    { name: 'MySQL', category: 'Backend', icon: 'database', level: 78 },
    { name: 'Redis', category: 'Backend', icon: 'database', level: 80 },

    { name: 'AWS', category: 'Cloud & DevOps', icon: 'cloud', level: 80 },
    { name: 'Docker', category: 'Cloud & DevOps', icon: 'cloud', level: 82 },
    { name: 'Jenkins', category: 'Cloud & DevOps', icon: 'cloud', level: 78 },
    { name: 'CI/CD Pipelines', category: 'Cloud & DevOps', icon: 'cloud', level: 85 },
    { name: 'Firebase', category: 'Cloud & DevOps', icon: 'cloud', level: 75 },

    { name: 'React Native', category: 'Mobile', icon: 'smartphone', level: 85 },
    { name: 'Expo', category: 'Mobile', icon: 'smartphone', level: 82 },

    { name: 'Git', category: 'Tools', icon: 'wrench', level: 95 },
    { name: 'GitHub', category: 'Tools', icon: 'wrench', level: 95 },
    { name: 'Postman', category: 'Tools', icon: 'wrench', level: 90 },
    { name: 'Cursor', category: 'Tools', icon: 'wrench', level: 85 },
  ],

  experience: [
    {
      role: 'Senior Web Developer',
      company: 'Webxinfinity IT Solutions',
      duration: 'Oct 2021 — Present',
      location: 'Bengaluru, India',
      description:
        'Leading frontend development for Communn.io, a B2B SaaS platform serving 50,000+ active users, with React and TypeScript, while contributing to backend APIs in Node.js and MongoDB for payments, WhatsApp integration, and analytics. Built and shipped a Chrome extension for network traffic analysis that reached 10,000+ users with a 4+ star rating, cutting API-testing time by 60%. Delivered and supported 80+ client applications across healthcare, education, retail and finance, maintaining 95% client satisfaction. Mentor a team of 5 developers, lead code reviews and sprint planning, and set up Jenkins/Docker CI/CD pipelines that cut release cycles by 40%.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Engineering — Computer Science & Engineering',
      institution: 'Karpagam Academy of Higher Education',
      duration: '2016 — 2020',
      location: 'Coimbatore, India',
      description: 'CGPA: 7.90',
    },
  ],

  certifications: [
    'Modern React with Redux',
    'HTML5 & CSS3 (Advanced)',
    'Programming in HTML5 with JavaScript & CSS3',
    'WordPress (Beginner to Advanced)',
  ],

  projects: [
    {
      title: 'Communn.io',
      description: 'Multi-tenant SaaS platform for community & commerce, serving 50,000+ B2B users.',
      image: communn,
      technologies: ['React', 'Node.js', 'Razorpay'],
      live: 'https://communn.io',
      featured: true,
    },
    {
      title: 'LifeSave Medicals',
      description: 'B2B pharmaceutical marketplace with a companion Android app, live across Karnataka.',
      image: lifesaveMedicals,
      technologies: ['React Native', 'TypeScript', 'MongoDB'],
      live: 'https://lifesavemedicals.com',
    },
    {
      title: 'Daisy Minds LMS',
      description: 'Enterprise LMS with course authoring, live classes, and QR-verified certificates.',
      image: daisyMindsLms,
      technologies: ['React', 'Node.js', 'Redis'],
    },
    {
      title: 'Task Management CRM',
      description: 'Full-stack CRM with kanban pipelines, invoicing, and WhatsApp notifications.',
      image: taskManagementCrm,
      technologies: ['React', 'Express', 'MongoDB'],
    },
  ],

  contactDetails: [
    {
      label: 'Email',
      value: 'ranjith.57neela@gmail.com',
      href: 'mailto:ranjith.57neela@gmail.com',
      icon: 'mail',
    },
    { label: 'Phone', value: '+91 79041 25027', href: 'tel:+917904125027', icon: 'phone' },
    { label: 'Location', value: 'Bengaluru, India', icon: 'map-pin' },
  ],
}
