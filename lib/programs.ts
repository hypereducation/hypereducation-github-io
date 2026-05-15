import { ProgramCardProps } from "@/components/ProgramCard";

export const programs: ProgramCardProps[] = [
  {
    id: "fabric-fundamentals",
    name: "Fabric Fundamentals",
    level: "Beginner",
    duration: "8 weeks",
    tagline:
      "Your on-ramp to the Microsoft Fabric ecosystem. No prior data engineering experience required — just curiosity and commitment.",
    modules: [
      "Introduction to Microsoft Fabric & the Unified Data Platform",
      "Lakehouses: Architecture, Delta Tables & OneLake",
      "Data Pipelines: Ingestion & Orchestration",
      "Dataflows Gen2 & Power Query in Fabric",
      "Semantic Models & DirectLake Mode",
      "Power BI Reports & Dashboards",
      "Data Governance & Workspace Management",
      "Capstone Project: End-to-end Lakehouse build",
    ],
    certification: "Microsoft Fabric Analytics Engineer Associate (DP-600) — exam voucher included",
    cta: "Apply for this track",
  },
  {
    id: "power-bi-analysts",
    name: "Power BI for Analysts",
    level: "Intermediate",
    duration: "10 weeks",
    tagline:
      "Go from spreadsheets to production-grade dashboards. Learn DAX, data modelling, and storytelling with data.",
    modules: [
      "Power BI Desktop deep-dive & data sources",
      "Data Modelling: Star schemas & relationships",
      "DAX Fundamentals: Measures, calculated columns",
      "Advanced DAX: Time intelligence, CALCULATE",
      "Report Design & UX best practices",
      "Power BI Service, workspaces & row-level security",
      "Real-Time Analytics with streaming datasets",
      "Power BI integration with Microsoft Fabric",
      "Stakeholder communication & data storytelling",
      "Capstone: End-to-end analytics solution",
    ],
    certification: "Microsoft Power BI Data Analyst Associate (PL-300) — exam voucher included",
    cta: "Apply for this track",
  },
  {
    id: "career-launchpad",
    name: "Data Career Launchpad",
    level: "Advanced",
    duration: "12 weeks",
    tagline:
      "Full-stack data engineering meets career coaching. Build a production portfolio, ace technical interviews, and land your first data role.",
    modules: [
      "Advanced Lakehouse patterns & medallion architecture",
      "Data Pipelines at scale: complex transformations",
      "Dataflows Gen2: advanced M & Power Query",
      "Real-Time Analytics: KQL, Eventstreams & Eventhouse",
      "Data Activator: Alerts & automated actions",
      "Analytics Engineering with dbt & Fabric",
      "Portfolio project: Real-world business scenario",
      "CV & LinkedIn optimisation for data roles",
      "Technical interview preparation & mock interviews",
      "Networking with hiring partner companies",
      "Salary negotiation & offer evaluation",
      "Mentorship with industry data professionals",
    ],
    certification:
      "Microsoft Fabric Analytics Engineer Associate (DP-600) + PL-300 — both exam vouchers included",
    cta: "Apply for this track",
  },
];
