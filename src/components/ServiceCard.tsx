
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, FileText, GraduationCap, Brain, Github, Users } from "lucide-react";
import { type Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Map icon names to Lucide icon components
  const iconMap: Record<string, React.ReactNode> = {
    code: <Code className="w-10 h-10 text-ron-orange" />,
    "file-text": <FileText className="w-10 h-10 text-ron-orange" />,
    "graduation-cap": <GraduationCap className="w-10 h-10 text-ron-orange" />,
    brain: <Brain className="w-10 h-10 text-ron-orange" />,
    github: <Github className="w-10 h-10 text-ron-orange" />,
    users: <Users className="w-10 h-10 text-ron-orange" />
  };

  return (
    <Card className="hover:shadow-lg transition-all hover-scale">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-ron-orange/10">
          {iconMap[service.icon] || <Code className="w-10 h-10 text-ron-orange" />}
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
