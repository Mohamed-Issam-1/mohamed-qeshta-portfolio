export type Locale = "en" | "ar";

export type ProjectStatus = "completed" | "in-progress";

export type ProjectFilter =
  | "web"
  | "ai-data"
  | "desktop"
  | "mobile"
  | "design"
  | "planning";

export type ProjectPriority =
  | "featured"
  | "strong-supporting"
  | "supporting"
  | "academic";

export type LearningStatus = "completed" | "in-progress";

export type LearningType = "training" | "certificate";

export interface Language {
  name: string;
  nameAr: string;
  proficiency: string;
  proficiencyAr: string;
}

export interface PersonalInfo {
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  linkedin: string;
  languages: Language[];
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeAr: string;
  institution: string;
  institutionAr: string;
  location: string;
  locationAr: string;
  currentYear?: string;
  currentYearAr?: string;
  startYear?: string;
  expectedGraduation?: string;
  gpa?: string;
}

export interface Project {
  slug: string;

  title: string;
  titleAr: string;

  category: string;
  categoryAr: string;

  filter: ProjectFilter;

  type: string;
  typeAr: string;

  role: string;
  roleAr: string;

  status: ProjectStatus;
  priority: ProjectPriority;

  description: string;
  descriptionAr: string;

  technologies: string[];

  github?: string;
  liveDemo?: string;
  caseStudy?: string;
  externalUrl?: string;

  image?: string;
}

export interface SkillGroup {
  id: string;

  title: string;
  titleAr: string;

  description: string;
  descriptionAr: string;

  skills: string[];
}

export interface LearningItem {
  id: string;

  title: string;
  titleAr: string;

  provider: string;
  providerAr: string;

  type: LearningType;
  status: LearningStatus;

  startDate?: string;
  endDate?: string;

  duration?: string;
  durationAr?: string;

  description?: string;
  descriptionAr?: string;

  skills?: string[];

  certificateImage?: string;
  verificationUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  startDate?: string;
  endDate?: string;
  description: string[];
}