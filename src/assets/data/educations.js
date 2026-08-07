export const educations = [
  {
    id: 1,
    title: "Bachelor of Science - CSE",
    institution: "Dhaka International University",
    duration: "2021 - 2025",
    location: "Dhaka, Bangladesh",
    active: true,
    rank: 1,
  },
  {
    id: 2,
    title: "Diploma in Engineering",
    institution: "Barishal Polytechnic Institute",
    duration: "2015 - 2019",
    location: "Barishal, Bangladesh",
    active: true,
    rank: 2,
  },

  // ---------------------------------------------------------------------------
  // EXAMPLE / TEMPLATE (active: false so it stays hidden).
  // Copy this block to add an entry. Every field except id/title is optional —
  // the timeline card only renders the parts you actually provide.
  // ---------------------------------------------------------------------------
  {
    id: 3,
    title: "Example Degree / Program", // required
    institution: "Institution Name", // school / university
    duration: "2019 - 2021", // "... - Present" auto-shows an "Ongoing" badge
    location: "City, Country", // shown with a location pin
    description: "One or two lines about your focus, major, or highlights.",
    result: "CGPA 3.90 / 4.00", // grade / distinction -> award highlight
    certificate: "https://example.com/certificate", // adds a "View Certificate" button
    logo: "/company-logos/example.png", // institution logo shown in the timeline node
    active: false, // false = hidden from the section
    rank: 99, // lower number = shown first
  },
];
