
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Code Assistant",
    description: "A VS Code extension that uses AI to help developers write better code faster. Implements suggestions, refactoring, and documentation generation.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000",
    tags: ["TypeScript", "React", "Node.js", "OpenAI"],
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/ronaldkipngetich/ai-code-assistant",
  },
  {
    id: 2,
    title: "Tech Community Platform",
    description: "A platform for tech communities to organize events, share resources, and connect members. Features event management, resource library, and community forums.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000",
    tags: ["React", "Firebase", "Tailwind CSS"],
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/ronaldkipngetich/tech-community",
  },
  {
    id: 3,
    title: "E-Learning Dashboard",
    description: "A comprehensive dashboard for e-learning platforms with analytics, course management, and student progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000",
    tags: ["React", "TypeScript", "Redux", "Chart.js"],
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/ronaldkipngetich/learning-dashboard",
  },
  {
    id: 4,
    title: "Developer Portfolio Generator",
    description: "A tool that helps developers create professional portfolios without writing code. Customizable templates and real-time preview.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1000",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/ronaldkipngetich/portfolio-generator",
  },
  {
    id: 5,
    title: "Open Source Contribution Tracker",
    description: "A tool that helps developers track their open source contributions and presents statistics in a visually appealing way.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000",
    tags: ["React", "GitHub API", "D3.js"],
    demoUrl: "https://example.com/demo5",
    githubUrl: "https://github.com/ronaldkipngetich/contribution-tracker",
  },
  {
    id: 6,
    title: "Coding Challenge Platform",
    description: "A platform for practicing coding challenges with real-time feedback, code execution, and performance metrics.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    tags: ["TypeScript", "Docker", "MongoDB", "Express"],
    demoUrl: "https://example.com/demo6",
    githubUrl: "https://github.com/ronaldkipngetich/code-challenges",
  },
];
