import type { ExperienceItem } from "../types";

export const EXPERIENCE_WORK: ExperienceItem[] = [
  {
    company: "Hiveginx",
    role: "Co-Founder & Founding Engineer",
    period: "Apr 2024 - Present",
    location: "",
    summary:
      "Co-founded an AI/ML product company and took its technical foundation from zero to a go-live-ready multi-tenant platform built for medical, banking, and bidding markets.",
    highlights: [
      "Personally built the frontend, API layer, initial backend, and multi-tenant database architecture, then recruited an Azure specialist to port the backend to serverless and build the ML/AI layer on Microsoft services, completing a full AWS-to-Azure migration.",
      "Designed and shipped the core product surface: identity confirmation, customer qualification, and risk detection, plus reporting, an onboarding workflow builder, customer management, inventory, and dashboard-driven claim initiation.",
      "Founded as a concurrent venture in 2024 while working full-time at Swish Analytics, and took it on as my primary focus in 2026.",
    ],
    tags: ["React.js", "TypeScript"],
  },
  {
    company: "Swish Analytics",
    role: "Full Stack Engineer",
    period: "Feb 2024 - Mar 2026",
    location: "",
    summary:
      "Pitched and built the org's codebase-health dashboard: queue-driven Node and Python scanners rolling 40+ static-analysis metrics into composite 0-100 health, maintainability, and architecture scores, charted as 12-month trends backfilled from git history so leadership sees direction, not a snapshot. Built for the org's 50+ repos across a dozen teams; 14 repos and 4 teams onboarded before I left.",
    highlights: [
      "Made architectural drift measurable on a ground-up rebuild staffed by four engineers, a manager, QA, and a part-time PM: traced a circular-dependency cluster around a single 800-line hub module growing from 12 files to 109, with composite health falling from 67 to 28 over 9 months against 80-100 for the rest of the org. The trend showed the rebuild's code health crossing below the legacy system it was replacing at month 7, with over a year already invested and 6-12 months still projected before reaching parity. Presented to the director of engineering, CEO, and principal architect, who moved it into evaluation for org-wide adoption.",
      "Built the visualization and query layer, where every figure is a compound aggregate of dozens of metrics users group, filter, and stack freely, forcing filtering before aggregation so views recompute from source.",
      "Cut query times from 30+ seconds to 3-6 seconds, a 5-10x improvement, by indexing, partitioning, and pre-aggregating the lowest-common-denominator chunks the compound metrics build from, then splitting remaining aggregation between SQL and the client.",
      "Designed three custom chart types: a three-variable plot (two axes plus color intensity), a cell-sized version turning dense tables into scannable heat grids, and an accordion table whose rows collapse to their children's aggregate at arbitrary depth.",
      "Worked with data scientists and platform engineers on the systems serving predictive models for major sportsbook operators, and provided architecture review and mentoring beyond my team.",
    ],
    tags: ["Software Architecture", "TypeScript"],
  },
  {
    company: "Knack",
    role: "Staff Engineer — Architecture & Modernization",
    period: "Mar 2023 - Jan 2024",
    location: "United States · Remote",
    summary:
      "Brought in to evaluate and define the modernization path for multiple systems moving from Vue and Backbone to React, and produced the strategic implementation options — tradeoffs, risks, time estimates, and expected benefits — that leadership chose from.",
    highlights: [
      "Partnered with Product, Design, and Engineering to shape the target concept and execution plan for interactive application-building experiences.",
      "Contributed to early AI work on the platform, then researched and prototyped options for building versus integrating an IPaaS solution.",
    ],
    tags: ["Software Architecture", "React.js"],
  },
  {
    company: "Lower",
    role: "Full Stack Engineer",
    period: "Jun 2022 - Mar 2023",
    location: "Remote",
    summary:
      "Prototyped and built a customer and partner dashboard with automation flows to streamline mortgage application and management.",
    highlights: [
      "Led the framework evaluation that selected Blazor on the company's existing C# stack, and delivered production-ready applications on an accelerated timeline.",
    ],
    tags: ["C#", "TypeScript"],
  },
  {
    company: "SpotOn",
    role: "Full Stack Engineer",
    period: "Apr 2021 - Jun 2022",
    location: "",
    summary:
      "Cut Largest Contentful Paint by 75% through server-side rendering and dependency optimization, measured against Lighthouse.",
    highlights: [
      "Re-engineered the company's mobile web ordering platform, building responsive, real-time client-facing experiences in React and Next.js against APIs and services implemented in Go, Node, and NATS.",
    ],
    tags: ["Next.js", "React.js"],
  },
  {
    company: "Oracle NetSuite",
    role: "Senior Software Engineer",
    period: "Jun 2018 - Apr 2021",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Served in an R&D-focused role exploring technologies and architectural options related to eCommerce and CMS systems. Evaluated and prototyped across multiple frontend frameworks and internal platform technologies, helping assess fit, viability, and tradeoffs for different product directions. Regularly moved between new stacks and concepts in rapid succession, balancing research depth with practical implementation.",
    highlights: [],
    tags: ["TypeScript", "Back-End Web Development"],
  },
  {
    company: "Oracle NetSuite",
    role: "Manager",
    period: "Jun 2017 - Jun 2018",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Managed a team of software engineers, primarily JavaScript and React developers, building and enhancing web-based e-commerce and CMS products.",
    highlights: [],
    tags: ["Web Design", "Responsive Web Design"],
  },
  {
    company: "Oracle NetSuite",
    role: "Team Lead & Sr Engineer - E-Commerce",
    period: "Jan 2017 - Jun 2017",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Took over a stalled six-month cross-functional project in its second month, with the project manager absent and architecture, design, and engineering working from conflicting assumptions.",
    highlights: [
      "Rebuilt alignment across all three groups within two weeks, establishing that the architecture was sound and the design had to change, and got design to buy in and rework their approach.",
      "Renegotiated scope and deadlines after surfacing major gaps in the original plan, and sourced an additional frontend developer from another team to close a staffing shortfall.",
      "Delivered the foundational release on the revised schedule, followed by a fully redesigned product backed by customer research.",
    ],
    tags: ["Back-End Web Development", "Web Design"],
  },
  {
    company: "Oracle NetSuite",
    role: "Sr. Software Engineer",
    period: "Jan 2016 - Jan 2017",
    location: "Oklahoma",
    summary:
      "Continued development of the eCommerce and content management platform following the Oracle acquisition.",
    highlights: [
      "Built browser-based applications and backend layers using JavaScript, React, SASS, Java, and SQL, and expanded the versioning and rules engine underpinning the platform.",
      "Created technical and conceptual designs for catalog management, dynamic page creation, content tooling, and extensibility features for third-party developers.",
    ],
    tags: ["Back-End Web Development", "Web Design"],
  },
  {
    company: "NetSuite",
    role: "Senior Software Engineer",
    period: "Mar 2013 - Jan 2016",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Joined through acquisition to help build a new enterprise eCommerce platform.",
    highlights: [
      "Designed the rules and versioning architecture that became foundational to the platform for years afterward, solving data architecture problems across database design, code structure, and end-user impact.",
      "Worked extensively with Java, SCSS, and BackboneJS, and took on a second role bridging engineering and design by owning the SCSS and JavaScript implementation of the UI/UX layer.",
      "Company was acquired by Oracle in 2016.",
    ],
    tags: ["Back-End Web Development", "Web Design"],
  },
  {
    company: "Cassil Investments",
    role: "Owner",
    period: "2001 - 2015",
    location: "",
    summary: "",
    highlights: [],
    tags: [],
  },
  {
    company: "Element Fusion",
    role: "Software Developer",
    period: "Sep 2011 - Mar 2013",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Built data conversion systems for LightCMS, an ASP.NET web content management platform, importing database, XML, CSV, and blog-format exports from competing systems and programmatically cloning large portions of our database.",
    highlights: [
      "Conceptualized and implemented several UI/UX components, including a website copy tool and digital downloads and eCommerce components.",
    ],
    tags: ["Back-End Web Development", "Web Design"],
  },
  {
    company: "Drabek and Hill",
    role: "Technician - Everything IT",
    period: "Apr 2009 - Sep 2011",
    location: "OKC",
    summary:
      "Began work here as an install tech and was quickly promoted.",
    highlights: [
      "Designed advertisements for new hire campaign.",
      "Created custom web and excel/.net job costing system.",
      "Designed custom Adobe LifeCycle based interactive form for use with yearly contract service agreement programs.",
      "Redesigned inventory structure and product number / naming system to preform more efficiently.",
      "Manage inventory, equipment, and warehouse.",
    ],
    tags: [],
  },
];
