export const projectsData = [
  {
    id: 1,
    name: "BookBridge – Book Rental and Exchange platform",
    description:
      "As the full stack developer in a 4-member team, I built the book listing and individual detail pages with well-structured filters for easy browsing. Users can rent or borrow books through secure SSLCommerz payments. I also developed the user dashboard, allowing users to post their own books for rental or swap. The app uses TanStack Query and Axios for optimized fetching and caching, ensuring a smooth user experience.",
    tools: [
      "TypeScript",
      "ReactJS",
      "Tailwind CSS",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "Axios",
      "Tanstack Query",
      "Aos",
      "SSL Commerz",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/Najmul-Shaon/BookBridge",
    demo: "https://bookbridge-rentalweb.web.app",
    image: "/project-screenshots/bookbridge/bookbridge-1.png",
    images: [], // optional — add multiple screenshot paths here to enable the slider; falls back to `image` if empty
    active: true,
    rank: 1,
    highlights: [
      "Built book listing & detail pages with advanced filtering",
      "Integrated secure SSLCommerz payments for rent/borrow",
      "Developed user dashboard for posting books to rent or swap",
      "Optimized data fetching & caching with TanStack Query",
    ],
    keyLearnings: [
      "Implementing secure payment gateways (SSLCommerz)",
      "Building performant, filterable list/detail pages",
      "Working effectively within a 4-member dev team",
    ],
    softSkills: ["Team Collaboration", "Ownership", "Problem Solving"],
    outcome:
      "Collaborated in a 4-member team to ship a full-featured book rental platform with secure payments and a smooth, cache-optimized experience.",
  },
  {
    id: 2,
    name: "Match Mate – A Smart Marriage Media Platform",
    description:
      "Developed using React.js, TypeScript, and Firebase for authentication (Google). Styled with Tailwind CSS, and integrated Stripe for secure payments. Utilized React Router v7, React Hook Form, TanStack Query, and Axios for efficient routing, form handling, and data fetching. Enhanced UI with Swiper, Lottie, React Icons, Recharts, and SweetAlert2.",
    tools: [
      "ReacJS",
      "Tailwind CSS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Axios",
      "Tanstack Query",
      "Firebase",
      "Framer Motion",
      "React Hook Form",
      "Aos",
      "Stripe",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/Najmul-Shaon/Match-Mate-Client",
    demo: "https://matchmate-de063.firebaseapp.com",
    image: "/project-screenshots/matchmate.png",
    images: [],
    active: true,
    rank: 2,
    highlights: [
      "Google authentication via Firebase",
      "Secure payments integrated with Stripe",
      "Efficient routing & form handling with React Router v7 + React Hook Form",
      "Rich UI with Swiper, Lottie animations & Recharts",
    ],
    keyLearnings: [
      "Firebase-based social authentication",
      "Stripe payment integration",
      "Composing complex forms with React Hook Form",
    ],
    softSkills: ["Attention to Detail", "Critical Thinking", "Continuous Learning"],
    outcome:
      "Built a full-featured marriage media platform combining secure auth, payments, and a polished, animation-rich UI.",
  },
  {
    id: 3,
    name: "Learn Lounge – Collaborative Learning & Peer Evaluation Platform",
    description:
      "Learn Lounge is a global platform that allows students to engage in group studies, create assignments, and evaluate each other's work. The platform encourages peer learning and knowledge sharing among students, ensuring an interactive and productive educational experience.",
    tools: [
      "ReacJS",
      "Tailwind CSS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Axios",
      "Framer Motion",
    ],
    code: "https://github.com/Najmul-Shaon/Learn-Lounge-Client",
    role: "Full Stack Developer",
    demo: "https://learn--lounge.web.app",
    image: "/project-screenshots/learn-lounge/learn-lounge-1.png",
    images: [],
    active: true,
    rank: 3,
    highlights: [
      "Group study & collaborative assignment creation",
      "Peer-to-peer assignment evaluation system",
      "Designed for global student collaboration",
    ],
    keyLearnings: [
      "Designing peer-evaluation workflows",
      "Structuring collaborative group-study features",
    ],
    softSkills: ["Communication", "Team Collaboration"],
    outcome:
      "Delivered a peer-learning platform that lets students study, create, and evaluate assignments together.",
  },
  {
    id: 4,
    name: "Assessly – Online Courses & Exam Management Platform",
    description:
      "Assessly is an online exam management platform designed to streamline the creation, participation, and evaluation of exams. It supports two types of exams: Single Exams, which require a fee and are accessible to verified students, and Group Exams, which mentors can create and secure with passwords for group participation.",
    tools: [
      "ReacJS",
      "Tailwind CSS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Axios",
      "Tanstack Query",
      "Firebase",
      "Framer Motion",
      "React Hook Form",
      "Aos",
      "SSL Commerz",
      "xlsx",
    ],
    code: "https://github.com/Najmul-Shaon/assessly-client",
    demo: "https://assey-9d4a0.firebaseapp.com",
    role: "Full Stack Developer",
    image: "/project-screenshots/assessly.png",
    images: [],
    active: true,
    rank: 4,
    highlights: [
      "Single (paid, verified-student) & Group (password-protected) exam modes",
      "End-to-end exam creation, participation & evaluation flow",
      "Secure payments via SSLCommerz for single exams",
      "Result export handled with xlsx",
    ],
    keyLearnings: [
      "Building dual-mode (paid/group) exam systems",
      "Exporting structured data with xlsx",
      "Securing group access with password protection",
    ],
    softSkills: ["Analytical Thinking", "Requirement Analysis", "Ownership"],
    outcome:
      "Built a dual-mode exam management platform supporting both paid individual exams and mentor-led group exams.",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: '',           // optional — single screenshot; omit/blank to show placeholder
//     images: [],           // optional — multiple screenshot paths enable an in-card slider; overrides `image` when non-empty
//     active: true,          // false = hidden from the section entirely
//     rank: 1,                // controls display order
//     highlights: [],        // optional — shown as "Features"; omit to hide this block
//     keyLearnings: [],      // optional — shown as "Key Takeaways"; omit to hide this block
//     softSkills: [],         // optional — shown as "Skills Demonstrated"; omit to hide this block
//     outcome: '',             // optional — one-line impact summary; omit to hide this block
// },