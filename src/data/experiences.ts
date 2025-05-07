
export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "🌍 Assistant Ecosystem Coordinator",
    company: "Moringa School",
    location: "Nairobi, Kenya",
    startDate: "April 2024",
    endDate: "Present",
    description: [
      "Coordinating high school tech engagements and outreach programs",
      "Organizing and hosting innovation events including webinars and ecosystem forums",
      "Supporting Campus ambassador recruitment and engagement activities",
      "Built partnerships and co-created event strategies with local tech communities and organizations",
      "Communicate program updates and event outcomes to senior management and other stakeholders",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    id: 2,
    role: "🌐 Campus Ambassador",
    company: "Moringa School",
    location: "Nairobi, Kenya",
    startDate: "May 2024",
    endDate: "March 2025",
    description: [
      "Representing Moringa School across university and online platforms, serving as a liaison between the institution and students.",
      "Led outreach efforts to promote bootcamps and coding courses to fellow students, resulting in increased enrollment and interest in tech education.",
      "Engaged with student communities through interactive demos, social media campaigns, and peer-to-peer mentorship.",
      "Collaborated with other ambassadors and tech clubs to build a strong community of aspiring developers and digital innovators."
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 3,
    role: "🌍 Software Developer Intern (Open Source)",
    company: "iTalanta",
    location: "Nairobi, Kenya",
    startDate: "February 2023",
    endDate: "July 2023",
    description: [
      "Contributed to open-source projects specifically iTalanta LMS, focusing on web application development.",
      "Working collaboratively with experienced developers to ensure project alignment and successful implementation.",
      "Angular, Tailwind CSS, and collaboration on community projects (elewa website)",
      "Participated in Agile development processes"
    ],
    technologies: ["JavaScript", "React", "CSS/SASS", "HTML5", "Git"]
  },
  {
    id: 4,
    role: "🧾 Industrial Attachment – IT Department",
    company: "Kenya Revenue Authority (KRA)",
    location: "Nairobi, Kenya",
    startDate: "May 2025",
    endDate: "August 2025",
    description: [
      "Exposure to enterprise IT systems and public sector data handling",
      "Supporting hardware/software troubleshooting and user assistance",
      "Assisting in system documentation and asset tagging",
      "Learned professional workplace conduct and reporting structures"
    ],
    technologies: ["Technical Writing", "Markdown", "Web Development", "Documentation"]
  },
  {
    id: 5,
    role: "💻 Software Engineer",
    company: "Nairobi DevOpss Community",
    location: "Remote",
    startDate: "October 2023",
    endDate: "October 2024",
    description: [
      "Led the technical team responsible for the community’s digital assets",
      "Developed, and maintain the official Nairobi DevOps website",
      "Leveraging my role as a software engineer to enhance the technological aspects of our community, contributing to its growth and impact in the world of DevOps.",
    ],
    technologies: ["Technical Writing", "Markdown", "Web Development", "Documentation"]
  },
  {
    id: 6,
    role: "🎤 Moringa Schoool Career Ambassador",
    company: "Moringa School",
    location: "Hybrid Nairobi, Kenya",
    startDate: "May 2024",
    endDate: "July 2025",
    description: [
      "Student Mentorship and Guidance: Provided one-on-one career guidance to Moringa students, mentoring them on resume building, LinkedIn optimization, personal branding, and interview preparation.",
      "Career Workshops Facilitation: Assisted in organizing and facilitating career-focused workshops and events to improve students' employability and job readiness.",
    ],
    technologies: ["Technical Writing", "Markdown", "Web Development", "Documentation"]
  },
  {
    id: 7,
    role: "🎓 Event Coordinator",
    company: "Nairobi DevOps Community",
    location: "Nairobi, Kenya",
    startDate: "October 2024",
    endDate: "Present",
    description: [
      "Led planning and execution of DevOps Campus Tours at top universities including TUK, MKU, KCA, and KU, fostering tech engagement among students",
      "Coordinated logistics, schedules, and speaker lineups for our events.",
      "Actively gathered feedback and insights to continuously improve event structure and impact."
    ],
    technologies: ["Technical Writing", "Markdown", "Web Development", "Documentation"]
  },
  {
    id: 8,
    role: "👨‍💻 Coding Coach",
    company: "Shamiri Junior School",
    location: "Paradise Park, Athi River, Kenya",
    startDate: "January 2024",
    endDate: "August 2024",
    description: [
      "Exposing young minds to the world of coding and technology.",
      "Teaching Scratch programming to young children, introducing foundational coding concepts through interactive and engaging activities.",
      "Cultivated curiosity and confidence in young coders.",
      "Facilitated hands-on learning and project-based exercises"
    ],
    technologies: ["Technical Writing", "Markdown", "Web Development", "Documentation"]
  }
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Nairobi",
    location: "Nairobi, Kenya",
    startDate: "September 2014",
    endDate: "July 2018",
    description: "Graduated with First Class Honors. Focused on software engineering and artificial intelligence."
  },
  {
    id: 2,
    degree: "Certification in Cloud Computing",
    institution: "AWS Academy",
    location: "Online",
    startDate: "January 2021",
    endDate: "April 2021",
    description: "Completed AWS certification covering cloud architecture, deployment, and management."
  },
  {
    id: 3,
    degree: "Advanced JavaScript Specialization",
    institution: "Coursera",
    location: "Online",
    startDate: "March 2019",
    endDate: "August 2019",
    description: "Completed 5-course specialization focusing on modern JavaScript patterns and practices."
  }
];
