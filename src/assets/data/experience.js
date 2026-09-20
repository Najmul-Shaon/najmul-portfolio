export const experiences = [
  {
    id: 1,
    title: "IT Operator",
    company: "Beacon Pharmaceuticals Limited.",
    duration: "(Dec 2020 - May 2022)",
    ongoing: false,
    rank: 1,
    active: true,
    location: "Hemayetpur, Savar, Dhaka, Bangladesh",
    companyLogo: "/company-logos/beacon-pharmaceuticals.jpg",
    experienceYears: "1.5 Years",
    description: [
      "Diagnosed and troubleshot computer hardware issues, ensuring timely repairs and minimal downtime.",
      "Installed, configured, and maintained printers, including routine maintenance and troubleshooting.",
      "Distributed products to regional depots based on approved requisitions while maintaining inventory accuracy.",
      "Received products, verified deliveries, and prepared invoices.",
      "Processed Goods Received Notes (GRNs) and maintained accurate inventory records.",
      "Operated ERP software to manage inventory, stock movements, and daily operational activities.",
      "Prepared reports on expired, damaged, and non-conforming products to support inventory control and decision-making.",
    ],
    keyLearnings: [
      "Hardware diagnostics under time pressure",
      "ERP-based inventory management",
      "Data accuracy & compliance reporting",
    ],
    softSkills: [
      "Problem Solving",
      "Attention to Detail",
      "Time Management",
      "Troubleshooting",
    ],
    outcome:
      "Became the go-to person for hardware and printer issues at the depot, helping minimize equipment downtime through proactive maintenance and quick troubleshooting.",
    // completedProjects intentionally omitted here to demonstrate optional chaining
  },
  {
    id: 2,
    title: "Assistant Engineer",
    company: "OnnoRokom Software Limited.",
    duration: "(May 2022 - Dec 2024)",
    ongoing: false,
    rank: 2,
    active: true,
    location: "Karwan Bazar, Dhaka, Bangladesh",
    companyLogo: "/company-logos/onnorokom.png",
    experienceYears: "2.5 Years",
    description: [
      "Led the School and College Management Software Support Team.",
      "Analyzed client requirements for School and College Management Software and collaborated with the development team to implement and improve solutions.",
      "Evaluated Public University Admission, MBBS Admission, Recruitment, and Election Results using OCR and OMR software.",
      "Conducted software demonstrations and product presentations for clients.",
      "Installed, configured, and maintained operating systems and application software.",
      "Assembled computer hardware, diagnosed hardware issues, and performed troubleshooting and repairs.",
      "Provided technical support to in-house users and clients through on-site assistance, phone support, and remote desktop tools.",
    ],
    keyLearnings: [
      "Leading a support team and prioritizing client issues",
      "Translating client requirements into actionable dev tasks",
      "OCR/OMR-based large-scale result evaluation systems",
    ],
    softSkills: [
      "Leadership","Time Management",
      "Client Communication",
      "Requirement Analysis",
      "Troubleshooting",
      "Team Collaboration",
    ],
    completedProjects: ["Completed Projects: 50+"],
    outcome:
      "Led the School & College Management Software support team, bridging client needs and the development team to deliver faster, clearer solutions.",
  },
  {
    id: 3,
    title: "Front-end Developer",
    company: "Softvence Agency.",
    duration: "(May 2025 - June 2025)",
    ongoing: false,
    rank: 3,
    active: true,
    location: "Mohakhali, Dhaka, Bangladesh",
    companyLogo: "/company-logos/softvence.png",
    description: [
      "Developed and customized Shopify themes and storefronts based on client requirements.",
      "Configured and integrated Shopify apps to extend store functionality.",
      "Built responsive, mobile-friendly user interfaces using HTML, CSS, JavaScript, and Liquid.",
      "Customized layouts, sections, and templates while following Shopify best practices.",
      "Collaborated with designers and clients to deliver high-quality e-commerce solutions.",
    ],
    keyLearnings: [
      "Shopify theme architecture & Liquid templating",
      "Balancing client customization with platform best practices",
      "Fast-paced agency workflow and client collaboration",
    ],
    softSkills: [
      "Client Communication",
      "Adaptability",
      "Attention to Detail",
      "Team Collaboration",
    ],
    completedProjects: ["Live Site: 5"],
    outcome:
      "Delivered multiple client Shopify storefronts within a short engagement, sharpening e-commerce frontend and Liquid development skills.",
  },
  {
    id: 4,
    title: "Web Developer",
    company: "Elmate Stationery",
    duration: "(June 2025 - Ongoing)",
    ongoing: true,
    rank: 4,
    active: true,
    location: "Dhanmondi, Dhaka, Bangladesh",
    companyLogo: "/company-logos/Elmate.jpg",
  description: [
  "Build, manage, and maintain multiple brand websites using WordPress CMS, Elementor, and custom theme development.",
  "Customize WordPress themes, layouts, and functionality to meet business requirements.",
  "Manage end-to-end SEO activities, including keyword research, on-page SEO, technical SEO, content optimization, internal linking, SEO architecture, and Google Search Console.",
  "Develop and implement SEO strategies to improve organic visibility, keyword rankings, traffic, CTR, and overall search performance.",
  "Implement and manage website tracking and analytics, including Google Tag Manager (GTM), Google Analytics 4 (GA4), Meta Pixel, Microsoft Clarity, and other marketing tags.",
  "Optimize Core Web Vitals, technical SEO, website performance, and overall user experience to improve search visibility and site performance.",
  "Monitor, troubleshoot, and improve website speed, uptime, responsiveness, and cross-browser compatibility.",
  "Manage web hosting environments, domain configurations, SSL certificates, DNS records, backups, and website deployments.",
  "Support and maintain Shopify websites, including theme customization, Liquid, HTML, CSS, JavaScript, SEO, and performance optimization.",
],
    keyLearnings: [
  "End-to-end WordPress & Shopify website management",
  "End-to-end SEO strategy, technical SEO & search performance optimization",
  "Analytics & tracking setup (GTM, GA4, Meta Pixel, Clarity)",
  "Core Web Vitals, website speed & overall performance optimization",
  "Hosting, DNS, SSL, backups & deployment infrastructure",
],
    softSkills: [
"Teamwork", "Time Management","Communication",
      "Problem Solving",
      "Continuous Learning",
      "Analytical Thinking",
      "Growth Mindset",
    ],
    completedProjects: ["Live Site: 5"],
    outcome:
      "Currently driving performance, SEO, and reliability improvements across multiple brand websites while owning the full hosting-to-deployment pipeline.",
  },

  // ─────────────────────────────────────────────────────────────
  // DEMO / TEMPLATE ENTRY — shows every possible attribute this
  // data shape supports. active: false, so it never renders on the
  // live site. Copy this block for new entries, then delete unused
  // optional fields (everything except id, title, company, duration,
  // rank, active is optional and safely handled via optional chaining).
  // ─────────────────────────────────────────────────────────────
  {
    id: 99,
    title: "Job Title Here",
    company: "Company Name Here",
    duration: "(Month Year - Month Year)",
    ongoing: false, // true = shows the pulsing "Ongoing" badge
    rank: 99, // controls display order (lower rank not required to be first — sort logic in Experience.jsx determines order)
    active: false, // false = hidden from the section entirely
    location: "City, Country", // optional — omit to hide the location line
    companyLogo: "/company-logos/example.png", // optional — omit to show default icon instead
    experienceYears: "X Years", // optional — omit to hide the top-right duration badge
    description: [
      "Responsibility or task one.",
      "Responsibility or task two.",
    ], // optional — omit to hide "View details" entirely if nothing else is set
    keyLearnings: [
      "Skill or knowledge gained one",
      "Skill or knowledge gained two",
    ], // optional — omit to hide the "What I Learned" tags
    softSkills: [
      "Problem Solving",
      "Communication",
    ], // optional — omit to hide the "Skills Demonstrated" tags
    completedProjects: ["Live Site: 0"], // optional — omit to hide the completed projects stat row
    outcome: "One clear sentence describing the result or impact of this role.", // optional — omit to hide the outcome callout
  },
];