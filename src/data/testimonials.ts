
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Software Engineer",
    company: "Tech Innovators",
    text: "Ronald's teaching approach made complex programming concepts accessible. His patience and clarity helped me grow as a developer.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    role: "CTO",
    company: "StartUp Solutions",
    text: "Working with Ronald on our project was a game-changer. His technical expertise and commitment to excellence delivered outstanding results.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Product Manager",
    company: "Digital Ventures",
    text: "Ronald's ability to explain technical challenges in simple terms made our collaboration smooth and productive. A true professional.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Student",
    company: "Moringa School",
    text: "Ronald's mentorship transformed my programming journey. His guidance and support helped me land my first developer job.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "DevOps Engineer",
    company: "Cloud Systems",
    text: "Ronald's technical writing is exceptional. His articles are clear, insightful, and have been invaluable resources for our team.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];
