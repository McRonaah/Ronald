
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "SQL"]
    },
    {
      category: "DevOps & Tools",
      technologies: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"]
    },
    {
      category: "AI & ML",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Natural Language Processing"]
    }
  ];

  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 pb-24">
      <div className="container mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background, skills, and what drives me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <div className="space-y-4 text-lg">
              <p>
                I'm Ronald Kipchirchir, a passionate Software Engineer, Coding Instructor, AI Enthusiast, and Technical Writer from Kenya. My journey in tech began with a curiosity about how digital solutions could address challenges in my community.
              </p>
              <p>
                Over the years, I've grown into a versatile developer with expertise in modern web technologies. I'm deeply committed to education and mentorship, having taught numerous students who have gone on to successful careers in tech.
              </p>
              <p>
                My work spans from building scalable web applications to contributing to open-source projects. I'm particularly interested in the intersection of artificial intelligence and education, exploring how AI can enhance learning experiences.
              </p>
              <p>
                When I'm not coding or teaching, I'm actively engaged in the tech community, organizing events and workshops to foster collaboration and innovation among developers in East Africa.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">My Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 hover:shadow-md transition-all">
                  <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
                  <p>Embracing new technologies and approaches to stay at the forefront of innovation.</p>
                </Card>
                <Card className="p-6 hover:shadow-md transition-all">
                  <h4 className="text-xl font-semibold mb-2">Knowledge Sharing</h4>
                  <p>Believing in the power of education to transform lives and communities.</p>
                </Card>
                <Card className="p-6 hover:shadow-md transition-all">
                  <h4 className="text-xl font-semibold mb-2">Community Building</h4>
                  <p>Creating spaces for collaboration, support, and growth within the tech ecosystem.</p>
                </Card>
                <Card className="p-6 hover:shadow-md transition-all">
                  <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
                  <p>Using technology to address real-world challenges with innovative solutions.</p>
                </Card>
              </div>
            </div>

            <div className="mt-8">
              <Button className="flex items-center gap-2 bg-ron-blue hover:bg-ron-dark-blue">
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
                <Download className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-ron-blue/10 text-ron-blue dark:bg-ron-blue/20 dark:text-ron-light-blue rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
