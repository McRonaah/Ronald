
import React, { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const Portfolio: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 pb-24">
      <div className="container mx-auto">
        <SectionTitle
          title="Portfolio"
          subtitle="Explore my recent projects and technical work"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            className={selectedTag === null ? "bg-ron-blue hover:bg-ron-dark-blue" : ""}
            onClick={() => setSelectedTag(null)}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className={selectedTag === tag ? "bg-ron-blue hover:bg-ron-dark-blue" : ""}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No projects found with the selected filter.
            </p>
            <Button
              variant="link"
              className="mt-2 text-ron-blue"
              onClick={() => setSelectedTag(null)}
            >
              Clear filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
