
import React from 'react';
import { Experience, Certification, Skill, Achievement, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Independent Consultant",
    role: "Client Success & Operations",
    location: "Calgary",
    period: "July 2025 – Present",
    description: [
      "Manage independent software implementation and onboarding cycles for diverse clients.",
      "Conduct needs-assessments and gap analysis to recommend digital tools.",
      "Build client trust through consistent follow-ups and transparent communication."
    ]
  },
  {
    company: "Tech To U",
    role: "Onboarding & Support Specialist",
    location: "Calgary",
    period: "July 2025 – Sept 2025",
    description: [
      "Led end-to-end technical onboarding and system configurations.",
      "Defined product roadmaps for hardware and software integration."
    ]
  },
  {
    company: "Netcompany",
    role: "Senior Consultant (Technical Product Liaison)",
    location: "London/Copenhagen",
    period: "April 2022 – May 2025",
    description: [
      "Primary conduit between technical engineering teams and business stakeholders.",
      "Requirements Engineering: Translated complex business goals into technical specifications.",
      "Systems Lifecycle: Owned full software lifecycle from discovery to deployment.",
      "Data Strategy: Managed integration of diverse datasets into centralized platforms."
    ]
  },
  {
    company: "Tata Consultancy Services",
    role: ".NET Engineer & Systems Support",
    location: "London, UK",
    period: "Sept 2021 – March 2022",
    description: [
      "Delivered scalable cloud-based solutions using Microsoft Azure.",
      "Managed technical documentation and compliance protocols in enterprise environments."
    ]
  },
  {
    company: "Elanco",
    role: "Technical Business Analyst",
    location: "UK",
    period: "July 2019 – July 2020",
    description: [
      "Process Optimization: Analyzed industrial workflows and implemented automation.",
      "Data Pipelines: Developed frameworks for automated reporting and tracking.",
      "System Design: Partnered with cross-functional departments for auditable data tracking."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "StockBabble: Published Research & AI Development",
    organization: "3rd ACM Conference on Conversational User Interfaces (CUI 2021)",
    date: "Aug 2021",
    description: "Co-developed an AI-driven financial chatbot ('StockBabble') designed to empower retail investors. The project involved building real-time data pipelines for stock prices, news, and technical indicators. Our research on its impact on investor confidence was published by ACM.",
    link: "https://doi.org/10.1145/3469595.3469620",
    tags: ["Artificial Intelligence", "FinTech", "Research Publication", "ACM"]
  },
  {
    title: "Highest Academic Performance (Level 3)",
    organization: "Derby College",
    date: "2018",
    description: "Achieved AAA* across Software Development modules, maintaining a consistent 4.0 GPA throughout the program.",
    tags: ["Academic Excellence", "Software Development"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "SimpleSignPDF",
    description: "A privacy-focused, zero-barrier PDF document signer. Built to allow users to sign documents without the friction of account creation or subscriptions.",
    status: 'Deployed',
    link: "https://simplesignpdf.com/",
    tags: ["Product Design", "Privacy", "PDF Engine", "Web App"],
    features: ["No Sign-up required", "100% Client-side processing", "Mobile friendly"]
  },
  {
    title: "Agile Flow Optimizer",
    description: "A predictive analytics tool in the pipeline designed to identify bottlenecks in Scrum cycles using historical velocity data.",
    status: 'Pipeline',
    tags: ["SaaS", "Data Analytics", "Agile", "Azure"],
    features: ["Bottleneck detection", "Velocity forecasting", "Team health metrics"]
  },
  {
    title: "Context-Aware Research Assistant",
    description: "An AI-powered interface for organizing academic research papers with semantic search and auto-summarization.",
    status: 'Pipeline',
    tags: ["LLM", "Research", "Vector DB"],
    features: ["Semantic search", "Knowledge mapping", "Citations manager"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Professional Scrum Master I", date: "Feb 2025" },
  { name: "Azure Fundamentals", date: "Feb 2025" },
  { name: "AWS Partner: Technical Accreditation", date: "Feb 2025" },
  { name: "AWS Partner: Cloud Economics", date: "Feb 2025" },
  { name: "Scrum for Operations & DevOps Fundamentals", date: "Jan 2025" },
  { name: "Scrum Fundamentals Certified (SFC)", date: "2023-2024" }
];

export const SKILLS: Skill[] = [
  { category: "Cloud & Infrastructure", items: ["Microsoft Azure", "AWS", "Cloud Architecture"] },
  { category: "Frameworks & Methodology", items: ["Agile", "Scrum", "SDLC Management"] },
  { category: "Technical & Analysis", items: [".NET", "Data Pipelines", "Systems Integration", "Requirement Engineering"] },
  { category: "Business Operations", items: ["Stakeholder Management", "Gap Analysis", "Product Roadmap", "Process Optimization"] }
];
