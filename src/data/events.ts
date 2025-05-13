
export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  url?: string;
  type: 'workshop' | 'conference' | 'hackathon' | 'meetup' | 'impact' | 'judge';
}

export const events: Event[] = [
  {
    id: 1,
    title: "Introduction to AI and Machine Learning Workshop",
    date: "March 15, 2024",
    location: "Nairobi, Kenya",
    description: "A hands-on workshop introducing participants to the fundamentals of AI and machine learning with practical examples.",
    image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1000",
    url: "https://example.com/ai-workshop",
    type: "workshop"
  },
  {
    id: 2,
    title: "East Africa Developer Conference",
    date: "June 8-10, 2024",
    location: "Kigali, Rwanda",
    description: "Speaking on 'Building Responsive Applications with Modern Web Technologies' at East Africa's largest developer conference.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000",
    url: "https://example.com/ea-devconf",
    type: "conference"
  },
  {
    id: 3,
    title: "Code for Change Hackathon",
    date: "September 22-24, 2024",
    location: "Nairobi, Kenya",
    description: "Organizing a hackathon focused on developing solutions for local community challenges using technology.",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1000",
    url: "https://example.com/code-for-change",
    type: "hackathon"
  },
  {
    id: 4,
    title: "React & TypeScript Masterclass",
    date: "November 5, 2024",
    location: "Online",
    description: "A comprehensive masterclass on building scalable applications with React and TypeScript, with focus on best practices.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1000",
    url: "https://example.com/react-typescript",
    type: "workshop"
  },
  {
    id: 5,
    title: "Nairobi Tech Meetup",
    date: "Monthly",
    location: "Nairobi, Kenya",
    description: "Co-organizing a monthly meetup for Nairobi's tech community, featuring lightning talks, networking, and collaborative coding sessions.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000",
    url: "https://example.com/nairobi-tech-meetup",
    type: "meetup"
  },
  {
    id: 6,
    title: "Jacaranda children’s Home",
    date: "Monthly",
    location: "Muranga, Kenya",
    description: "As part of my mission to empower lives beyond code, I organized and participated in a visit to Joy Children’s Home, where we spent a day engaging with children through games, storytelling, mentorship, and motivational talks. I led a short “Intro to Tech” session tailored for teens, introducing them to how technology can be a tool for learning and opportunity. We also donated essential supplies including food, clothing, books, and stationery — a gesture aimed at sparking hope and showing compassion. This initiative reminded me why I code: to build a better future not just digitally, but humanely.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000",
    url: "https://example.com/nairobi-tech-meetup",
    type: "impact"
  },
  {
    id: 7,
    title: "Tech for Good Summit",
    date: "December 12-14, 2024",
    location: "Nairobi, Kenya",
    description: "Participating as a judge in a summit focused on leveraging technology for social impact and community development.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000",
    url: "https://example.com/tech-for-good-summit",
    type: "judge"
  },
];
