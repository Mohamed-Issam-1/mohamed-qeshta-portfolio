<div align="center">

# Mohamed Issam Qeshta — Portfolio

### Full-Stack Web Developer

A bilingual developer portfolio showcasing selected full-stack, AI, MLOps, desktop, game development, and UI/UX projects.

[Live Portfolio](https://mohamed-qeshta-portfolio.netlify.app) ·
[Projects](https://mohamed-qeshta-portfolio.netlify.app/projects) ·
[Resume](https://mohamed-qeshta-portfolio.netlify.app/resume) ·
[LinkedIn](https://www.linkedin.com/in/mohamed-qeshta/)

</div>

---

## Overview

This repository contains my personal portfolio, designed and built to present my work, technical skills, learning journey, and project case studies in a clear and professional way.

The portfolio is available in both **English and Arabic**, with dedicated RTL support for Arabic, responsive layouts across screen sizes, dark and light themes, and project-focused content.

**Live site:**<br>
https://mohamed-qeshta-portfolio.netlify.app

---

## Highlights

- Bilingual English and Arabic experience
- Full RTL support for Arabic
- Responsive desktop, tablet, and mobile layouts
- Dark and light themes
- Selected work section for high-value projects
- Complete project archive with filtering
- Detailed project case studies
- Real project screenshots and visual galleries
- Services section
- Learning and certifications archive
- ATS-oriented web resume with downloadable PDF
- Accessible navigation and reduced-motion support
- Localized page metadata
- Canonical URLs and language alternates
- Open Graph and Twitter metadata
- Dynamic `sitemap.xml` and `robots.txt`
- Continuous deployment through GitHub and Netlify

---

## Featured Work

### Language Center Management System

A full-stack management platform for language-center operations, including student, teacher, class, attendance, grade, reporting, and administrative workflows.

**Role:** Team Leader / Full-Stack Developer<br>
**Status:** In Development

[View case study](https://mohamed-qeshta-portfolio.netlify.app/projects/language-center-management-system) ·
[GitHub Showcase](https://github.com/Mohamed-Issam-1/language-center-management-system-showcase)

---

### Olist MLOps Pipeline

An end-to-end MLOps project built around the Olist Brazilian e-commerce dataset, covering data-quality validation, reproducible experimentation, model tracking, artifact versioning, inference APIs, containerization, CI/CD, logging, monitoring, and drift-oriented workflows.

**Core technologies:** Python, scikit-learn, MLflow, DVC, FastAPI, Docker, PostgreSQL, Great Expectations, GitHub Actions

[View case study](https://mohamed-qeshta-portfolio.netlify.app/projects/olist-mlops) ·
[View repository](https://github.com/Mohamed-Issam-1/Olist-MLOps)

---

### Arabic AI Travel Assistant

An Arabic-first AI travel assistant combining a local Qwen2.5 model with TF-IDF retrieval and a travel knowledge base to generate grounded travel recommendations and itineraries.

**Core technologies:** Python, Qwen2.5, Hugging Face, PyTorch, Gradio, TF-IDF, scikit-learn

[View case study](https://mohamed-qeshta-portfolio.netlify.app/projects/arabic-ai-travel-assistant) ·
[View repository](https://github.com/Mohamed-Issam-1/ai-travel-assistant)

---

## Other Case Studies

The portfolio also includes detailed case studies for:

- **BookSpace — Library Management System**<br>
  JavaFX desktop library-management application.

- **ALMosafer — AI Travel App UI/UX Case Study**<br>
  Mobile travel application UI/UX case study created in Figma.

Each case study focuses on the project's context, responsibilities, approach, technologies, and outcomes.

---

## Tech Stack

### Core

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### UI & Interaction

- Framer Motion
- GSAP
- Lucide React
- React Icons

### Internationalization

- next-intl
- English / Arabic localization
- RTL and LTR layouts

### Deployment

- Git
- GitHub
- Netlify
- Continuous deployment from `main`

---

## Site Structure

```text
/
├── Home
│   ├── Hero
│   ├── Selected Work
│   ├── About
│   ├── Skills
│   ├── Services
│   ├── Learning
│   └── Contact
│
├── /projects
│   └── Complete project archive
│
├── /projects/[slug]
│   └── Detailed project case studies
│
├── /learning
│   └── Training and certifications
│
├── /resume
│   └── Web resume + downloadable PDF
│
└── /ar/*
    └── Arabic localized experience
```

---

## Project Architecture

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── projects/
│   │   ├── learning/
│   │   └── resume/
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   ├── learning/
│   ├── resume/
│   └── ui/
│
├── data/
│   ├── projects.ts
│   ├── project-case-studies.ts
│   ├── learning.ts
│   ├── skills.ts
│   ├── education.ts
│   └── personal.ts
│
├── i18n/
├── lib/
├── providers/
└── types/

messages/
├── en.json
└── ar.json

public/
├── images/
│   ├── projects/
│   └── certificates/
└── resume/
```

The portfolio is intentionally data-driven: project, learning, personal, and case-study information is separated from presentation components to keep the codebase easier to maintain and extend.

---

## Internationalization

English is the default locale:

```text
/
```

Arabic is available under:

```text
/ar
```

Additional localized routes include:

```text
/projects
/ar/projects

/learning
/ar/learning

/resume
/ar/resume
```

Project case studies use the same localized routing structure.

---

## SEO

The project includes:

- Page-specific localized metadata
- Canonical URLs
- English and Arabic language alternates
- `hreflang` support
- Open Graph metadata
- Twitter card metadata
- Dynamic project metadata
- `robots.txt`
- `sitemap.xml`
- Search-engine-friendly static generation

Live SEO endpoints:

- [robots.txt](https://mohamed-qeshta-portfolio.netlify.app/robots.txt)
- [sitemap.xml](https://mohamed-qeshta-portfolio.netlify.app/sitemap.xml)

---

## Running Locally

### Prerequisites

- Node.js
- npm
- Git

### Clone

```bash
git clone https://github.com/Mohamed-Issam-1/mohamed-qeshta-portfolio.git
cd mohamed-qeshta-portfolio
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## Deployment

The portfolio is deployed on **Netlify** and connected directly to the GitHub repository.

Production branch:

```text
main
```

Each push to `main` automatically triggers a new production deployment.

**Production URL:**<br>
https://mohamed-qeshta-portfolio.netlify.app

---

## Design Direction

The visual identity uses a dark-first technical aesthetic with cyan accents, restrained motion, structured typography, and project imagery.

The interface was designed around a few principles:

- Projects remain the main focus.
- Motion supports interaction rather than distracting from content.
- Arabic feels native rather than adapted from an English layout.
- Desktop and mobile layouts are both intentional.
- Technical depth is visible without overwhelming non-technical visitors.

---

## Contact

**Mohamed Issam Qeshta**<br>
Full-Stack Web Developer

- Email: [mo.es.qe.18.2@gmail.com](mailto:mo.es.qe.18.2@gmail.com)
- LinkedIn: [linkedin.com/in/mohamed-qeshta](https://www.linkedin.com/in/mohamed-qeshta/)
- GitHub: [github.com/Mohamed-Issam-1](https://github.com/Mohamed-Issam-1)
- Portfolio: [mohamed-qeshta-portfolio.netlify.app](https://mohamed-qeshta-portfolio.netlify.app)

---

<div align="center">

Built and maintained by **Mohamed Issam Qeshta**

</div>
