
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences, education } from "@/data/experiences";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 pb-24">
      <div className="container mx-auto">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="mb-10 text-center">
          <Button 
            className="flex items-center gap-2 bg-ron-blue hover:bg-ron-dark-blue"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
            <Download className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <ExperienceTimeline 
          experiences={experiences} 
          education={education} 
        />
      </div>
    </div>
  );
};

export default Experience;
