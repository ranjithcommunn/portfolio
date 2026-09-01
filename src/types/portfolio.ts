export type IconKey =
  | 'smartphone'
  | 'code'
  | 'pen-tool'
  | 'server'
  | 'cloud'
  | 'wrench'
  | 'mail'
  | 'map-pin'
  | 'phone'
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'external-link'
  | 'download'
  | 'briefcase'
  | 'graduation-cap'
  | 'send'
  | 'calendar'
  | 'layers'
  | 'database'
  | 'globe'
  | 'credit-card'

export interface SocialLink {
  label: string
  href: string
  icon: IconKey
}

export interface ContactDetail {
  label: string
  value: string
  href?: string
  icon: IconKey
}

export interface Profile {
  name: string
  role: string
  tagline: string
  avatar: string
  email: string
  phone: string
  location: string
  availability: string
  resumeUrl: string
  socialLinks: SocialLink[]
}

export interface AboutContent {
  eyebrow: string
  title: string
  paragraphs: string[]
  stats: { label: string; value: string }[]
}

export interface ServiceItem {
  icon: IconKey
  title: string
  description: string
}

export interface SkillItem {
  name: string
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Mobile' | 'Tools'
  icon: IconKey
  level: number
}

export interface ExperienceItem {
  role: string
  company: string
  duration: string
  location: string
  description: string
  technologies: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  duration: string
  location: string
  description?: string
}

export interface ProjectItem {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  live?: string
  featured?: boolean
}

export interface SeoConfig {
  title: string
  description: string
  ogImage: string
}

export interface PortfolioData {
  seo: SeoConfig
  profile: Profile
  about: AboutContent
  services: ServiceItem[]
  skills: SkillItem[]
  experience: ExperienceItem[]
  education: EducationItem[]
  certifications: string[]
  projects: ProjectItem[]
  contactDetails: ContactDetail[]
}
