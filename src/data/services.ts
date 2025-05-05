
export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    icon: "code",
    description: "Creating responsive, modern websites and web applications using the latest technologies like React, TypeScript, and Tailwind CSS."
  },
  {
    id: 2,
    title: "Technical Writing",
    icon: "file-text",
    description: "Crafting clear, engaging technical content including blog posts, documentation, and tutorials on programming and technology topics."
  },
  {
    id: 3,
    title: "Coding Instruction",
    icon: "graduation-cap",
    description: "Teaching programming fundamentals and advanced concepts through workshops, courses, and one-on-one mentoring sessions."
  },
  {
    id: 4,
    title: "AI Integration",
    icon: "brain",
    description: "Implementing AI and machine learning solutions to enhance applications with intelligent features and automation."
  },
  {
    id: 5,
    title: "Open Source Contribution",
    icon: "github",
    description: "Contributing to and maintaining open source projects, focusing on developer tools and educational resources."
  },
  {
    id: 6,
    title: "Tech Community Building",
    icon: "users",
    description: "Organizing and facilitating tech events, hackathons, and community initiatives to foster collaboration and learning."
  }
];
