
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
    role: "Senior Software Engineer",
    company: "Tech Innovations Ltd",
    location: "Nairobi, Kenya",
    startDate: "January 2022",
    endDate: "Present",
    description: [
      "Lead developer for client-facing web applications using React, TypeScript, and Tailwind CSS",
      "Architected and implemented scalable backend solutions with Node.js and PostgreSQL",
      "Mentored junior developers and conducted code reviews to ensure quality standards",
      "Implemented CI/CD pipelines that reduced deployment time by 40%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    id: 2,
    role: "Coding Instructor",
    company: "Moringa School",
    location: "Nairobi, Kenya",
    startDate: "March 2020",
    endDate: "December 2021",
    description: [
      "Taught full-stack web development curriculum to cohorts of 20-30 students",
      "Developed practical projects to reinforce learning concepts",
      "Provided one-on-one mentoring and career guidance to students",
      "Maintained a 92% job placement rate for graduating students"
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Solutions Kenya",
    location: "Nairobi, Kenya",
    startDate: "June 2018",
    endDate: "February 2020",
    description: [
      "Developed responsive web interfaces for corporate clients",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Optimized application performance, improving load times by 35%",
      "Participated in Agile development processes"
    ],
    technologies: ["JavaScript", "React", "CSS/SASS", "HTML5", "Git"]
  },
  {
    id: 4,
    role: "Technical Writer",
    company: "DevCommunity",
    location: "Remote",
    startDate: "January 2019",
    endDate: "Present",
    description: [
      "Author technical articles and tutorials on web development topics",
      "Create comprehensive guides for emerging technologies",
      "Developed a following of over 10,000 monthly readers",
      "Collaborate with editors to ensure content quality and accuracy"
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
