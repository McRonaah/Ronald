
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About: React.FC = () => {
  const skills = [
    {
      category: "🖥️ Frontend Development",
      technologies: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML/CSS", "vite"]
    },
    {
      category: "🛠️ Backend and Databases",
      technologies: ["Firebase", "Supabase", "MongoDB", "SQL", "RESTful APIs"]
    },
    {
      category: "✍️  Technical Writing & Documentation",
      technologies: ["Markdown & GitHub Docs", "Software Documentation", "Blogging", "Bug Reports & QA Documentation"]
    },
    {
      category: "👨‍🏫 Mentorship & Community Leadership",
      technologies: ["Coding Instructor", "Workshop Facilitator", "Event Coordinator", "Hackathon Contributor", "Community Builder" , "Event Innovation"]
    },
    {
      category: "💻 Tools & Workflow",
      technologies: ["Git & GitHub", "Linux & Git Bash", "Visual Studio Code", "Google Workspace"]
    },
    {
      category: "🗣️ Soft Skills",
      technologies: ["LeaderShip", "Time Management", "Communication", "Team Collaboration", "Pair Programming", "Problem Solving", "Adaptability", "Creativity", "Mentorship"]
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
              I'm Ronald Kipchirchir, a passionate Software Engineer from Kenya, dedicated to using technology as a tool for empowerment, learning, and connection.
              </p>
              <p>
              My journey began with curiosity—breaking things, fixing them, and eventually writing my first lines of code. What started as tinkering turned into purpose: building solutions, educating others, and contributing to open-source projects.
              </p>
              <p>
              Over time, I’ve worn many hats— Developer, technical writer, coding instructor, Nairobi DevOps community events coordinator, and Moringa School ambassador. I’ve mentored young minds, documented software for global teams, organized developer events, and taught children how to code in local schools.
              </p>
              <p>
                When I'm not coding or teaching, I'm actively engaged in the tech community, organizing events and workshops to foster collaboration and innovation among developers in East Africa.
              </p>
              <p>
              But beyond code, I believe in service. I visit children's homes, support the needy, and volunteer in ways that reflect my belief in tech for good. Each line of code, event, or article is rooted in one purpose: <strong> to build, teach, and uplift.</strong>
              </p>
              <p>
              This site is a reflection of my journey—projects I’ve built, people I’ve helped, and the mission I’m still pursuing.
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
              <a href="/Ronald_Kipchirchir_CV.pdf" download={true}>
              <Button className="flex items-center gap-2 bg-ron-blue hover:bg-ron-dark-blue">
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
                <Download className="w-4 h-4 ml-1" />
              </Button></a>
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
