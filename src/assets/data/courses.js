export const courses = [
  {
    id: 1,
    title: "Next Level Web Development",
    institution: "Programming Hero",
    duration: "Apr 2025 - Present",
    description:
      "Advanced full-stack track focused on scalable architecture, type-safe APIs, and production-grade tooling.",
    skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Node.js"],
    active: false,
    rank: 1,
  },
{
  id: 4,
  title: "Complete Web Development Course",
  institution: "Programming Hero",
 duration: "Jun 2024 - Jan 2025",
  description:
    "Successfully completed the Complete Web Development Course with rigorous training in JavaScript, HTML, CSS, and React, applying these skills to build several projects.",
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Web Development"
  ],
     reward: `Awarded "Black Belt" for top performance.`,
  credentialUrl: "https://drive.google.com/file/d/1E1IRK6Frb8HMjpJOosBeru5I4_j9-UMl/view?usp=sharing",
  // credentialId: "RESET7-0271",
  active: true,
  rank: 4,
},
  {
  id: 3,
  title: "Search Engine Optimization (SEO)",
  institution: "10 Minute School",
  // duration: "30 hrs",
  description:
    "Successfully completed an online course on Search Engine Optimization (SEO), covering SEO fundamentals, keyword research, on-page and off-page SEO, local and technical SEO, AI-assisted content writing, and Google Search Console.",
  skills: [
    "Search Engine Optimization (SEO)",
    "Keyword Research",
    "On-Page SEO",
    "Off-Page SEO",
    "Local SEO",
    "Technical SEO",
    "Content Writing",
    "Google Search Console",
    "SEO Auditing",
    "SEO Reporting"
  ],
  reward: "Successfully completed the SEO course and earned a certificate of completion.",
  credentialUrl: "https://drive.google.com/file/d/1EcK4fXjBu1LphRYrru0A_iz3xoSIy-VN/view?usp=sharing",
  // credentialId: "68a059aef1fff",
  // logo: "/company-logos/10-minute-school.png",
  active: true,
  rank: 3,
},


  // ---------------------------------------------------------------------------
  // EXAMPLE / TEMPLATE (active: false so it stays hidden).
  // Copy this block to add a course. Every field except id/title is optional —
  // the card only renders the sections you actually provide.
  // --------ltw126XZ
  // *-------------------------------------------------------------------
  {
    id: 3,
    title: "Example Course Title", // required
    institution: "Provider / Platform", // e.g. "Udemy", "Coursera"
    duration: "Jan 2024 - Mar 2024", // "... - Present" auto-shows an "Ongoing" badge
    description: "One or two lines describing what the course covered.",
    skills: ["Skill A", "Skill B", "Skill C"], // rendered as chips (logos auto-matched when available)
    reward: "Any highlight, distinction, or grade worth featuring.", // trophy highlight
    credentialUrl: "https://example.com/certificate", // adds a "View Certificate" button
    credentialId: "CERT-0000-XXXX", // shown as a small credential id
    logo: "/company-logos/example.png", // provider logo shown in the badge (falls back to an award icon)
    active: false, // false = hidden from the section
    rank: 99, // lower number = shown first
  },
];
