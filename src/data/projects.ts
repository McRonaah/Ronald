import healthsync from "./images/healthsync.png";
import yumdrop from "./images/yumdrop.png";
import java from "./images/java.png";
import onlinefitflex from "./images/onlinefitflex.png";
import calculator from "./images/calculator.png";
import tropical from "./images/tropical.png";

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
    title: "YumDrop - Food Delivery App",
    description: "YumDrop -> This is a food delivery I developed using ReactJs and Firebase, where I focused on allowing google authentication on avatar onClick, storing contact form data on Realtime database(firebase), implementing add to cart functionality and storing authenticated googles on firebase authentication.",
    image: yumdrop,
    tags: ["React.Js", "Firebase", "Google Authentication", "Tailwind CSS"],
    demoUrl: "https://yumdrop-food.netlify.app/",
    githubUrl: "https://github.com/McRonaah/YumDrop",
  },
  {
    id: 2,
    title: "Console-based  Online Shopping Cart System",
    description: "The Online Shopping Cart System is a Java-based console application designed to mimic the functionalities of a real-world e-commerce platform. It allows users to add items to a cart, apply discounts, calculate totals, and generate order confirmations.",
    image: java,
    tags: ["Java 100%", "Git", "Agile"],
    demoUrl: "https://github.com/McRonaah/ShoppingCartSystem/blob/main/documentations/Online_Shopping_Cart_User_Manual.md",
    githubUrl: "https://github.com/McRonaah/ShoppingCartSystem",
  },
  {
    id: 3,
    title: "OnlineFitFlex",
    description: "OnlineFitFlex ia cutting edge gym app developed using vite react and typescript. It offers highly optimized and responsive experience.",
    image: onlinefitflex,
    tags: ["React", "vite", "Git"],
    demoUrl: "https://23352a73.onlinefitflex.pages.dev/",
    githubUrl: "https://github.com/McRonaah/OnlineFitFlex",
  },
  {
    id: 4,
    title: "SmartStudy",
    description: "A comprehensive dashboard for e-learning platforms with analytics, course management, and student progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000",
    tags: ["React", "TypeScript", "Git"],
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/McRonaah/YumDrop",
  },
  {
    id: 5,
    title: "Elewa Website",
    description: "A comprehensive web-based system for healthcare providers to manage client information, program enrollment, and health outcomes tracking.",
    image: healthsync,
    tags: ["React", "Tailwind CSS", "TypeScript", "Agile", "Git"],
    demoUrl: "https://github.com/McRonaah/HealthSync/blob/main/Documentations/UserManual.md",
    githubUrl: "https://github.com/McRonaah/elewa-website",
  },
  {
    id: 6,
    title: "Simple Calculator",
    description: "A simple web-based calculator that performs simple calculations additions, subtraction, multiplication and Division.",
    image: calculator,
    tags: ["HTML5", "CSS", "JavaScript"],
    demoUrl: "https://mcronaah.github.io/A-Simple-Calculator/",
    githubUrl: "https://github.com/McRonaah/A-Simple-Calculator",
  },
  {
    id: 7,
    title: "Kindergarten",
    description: "This project is a full stack application for managing a kindergarten. It includes two dashboards: an admin dashboard and a parent dashboard. The application allows for the management of students, teachers, and parents, as well as tracking attendance.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    tags: ["Collaborative Project", "React", "Ruby on Rails", "JavaScript", "Tailwind CSS", "Redux", "Jira", "Agile"],
    demoUrl: "http://35.172.230.181:4000/",
    githubUrl: "https://github.com/Gracelaura/kindergarten-management-system-frontend",
  },
 
 
  {
    id: 8,
    title: "Tropical Thrill Adventurers",
    description: "Tropical Thrill Adventurers is a repository that contains the code for a fictitious travel agency website, designed to serve as a travel destination guide and booking platform. The website incorporates various HTML elements to enhance user experience and provide essential information about the destination.",
    image: tropical,
    tags: ["HTML5", "CSS", "JavaScript"],
    demoUrl: "https://tropical-thrill-adventurer.vercel.app/",
    githubUrl: "https://github.com/McRonaah/tropical-thrill-adventurers",
  },
  {
    id: 9,
    title: "Kenya Commute Services",
    description: "A platform for practicing coding challenges with real-time feedback, code execution, and performance metrics.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    tags: ["TypeScript", "Docker", "MongoDB", "Express"],
    demoUrl: "https://example.com/demo6",
    githubUrl: "https://github.com/ronaldkipngetich/code-challenges",
  },
  
  {
    id: 10,
    title: "SmartSpend",
    description: "A tool that helps developers track their open source contributions and presents statistics in a visually appealing way.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000",
    tags: ["React", "GitHub API", "D3.js"],
    demoUrl: "https://example.com/demo5",
    githubUrl: "https://github.com/ronaldkipngetich/contribution-tracker",
  },
  {
    id: 11,
    title: "HealthCare Information System",
    description: "A comprehensive web-based system for healthcare providers to manage client information, program enrollment, and health outcomes tracking.",
    image: healthsync,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://github.com/McRonaah/HealthSync/blob/main/Documentations/UserManual.md",
    githubUrl: "https://github.com/McRonaah/HealthSync",
  },
  {
    id: 12,
    title: "Palindrome Checker",
    description: "A comprehensive web-based system for healthcare providers to manage client information, program enrollment, and health outcomes tracking.",
    image: healthsync,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://github.com/McRonaah/HealthSync/blob/main/Documentations/UserManual.md",
    githubUrl: "https://github.com/McRonaah/HealthSync",
  },
  {
    id: 13,
    title: "Trip thread",
    description: "Trip Tread airline is a collaborative project we developed as a team of 5. It is a review website is an independent clients forum, which has become a leading review platform. After travelling using a certain airline, the user/client is able to come back and give feedback based on thier experiences during their travel.",
    image: healthsync,
    tags: ["Collaborative Project", "JavaScript", "JSX", "React", "Rails for Backend", "Ruby on Rails", "Redux", "Jira", "Agile"],
    demoUrl: "/",
    githubUrl: "https://github.com/Jane-Wandia/Trip-Tread-Front-End",
  },
];

