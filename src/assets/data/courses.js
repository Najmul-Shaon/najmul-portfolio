export const courses = [
  {
    id: 1,
    title: "Next Level Web Development",
    institution: "Programming Hero",
    duration: "Apr 2025 - Present",
    description:
      "Advanced full-stack track focused on scalable architecture, type-safe APIs, and production-grade tooling.",
    skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Node.js"],
    active: true,
    rank: 1,
  },
  {
    id: 2,
    title: "Complete Web Development",
    institution: "Programming Hero",
    duration: "Jun 2024 - Jan 2025",
    description:
      "Comprehensive MERN-stack program covering frontend, backend, authentication, and deployment.",
    skills: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    reward: `Awarded "Black Belt" for top performance.`,
    active: true,
    rank: 2,
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
