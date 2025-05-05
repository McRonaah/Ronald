
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-ron-blue/10 text-ron-blue dark:bg-ron-blue/20 dark:text-ron-light-blue rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          asChild
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        </Button>
        <Button
          size="sm"
          className="flex items-center gap-1 bg-ron-blue hover:bg-ron-dark-blue"
          asChild
        >
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
