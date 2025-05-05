
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { type Experience, type Education } from "@/data/experiences";

interface ExperienceTimelineProps {
  experiences: Experience[];
  education: Education[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ 
  experiences, 
  education 
}) => {
  // Combine experiences and education into a single timeline
  type TimelineItem = {
    id: number;
    type: 'experience' | 'education';
    title: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    details: string[] | string | undefined;
    technologies?: string[];
  };

  const timelineItems: TimelineItem[] = [
    ...experiences.map(exp => ({
      id: exp.id,
      type: 'experience' as const,
      title: exp.role,
      organization: exp.company,
      location: exp.location,
      startDate: exp.startDate,
      endDate: exp.endDate,
      details: exp.description,
      technologies: exp.technologies
    })),
    ...education.map(edu => ({
      id: edu.id + 100, // Add offset to avoid ID conflicts
      type: 'education' as const,
      title: edu.degree,
      organization: edu.institution,
      location: edu.location,
      startDate: edu.startDate,
      endDate: edu.endDate,
      details: edu.description
    }))
  ].sort((a, b) => {
    // Sort by end date (most recent first)
    const dateA = a.endDate === 'Present' ? new Date() : new Date(a.endDate);
    const dateB = b.endDate === 'Present' ? new Date() : new Date(b.endDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`relative flex flex-col sm:flex-row ${
              index % 2 === 0 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ron-orange border-4 border-white dark:border-gray-900 z-10"></div>
            
            {/* Timeline Card */}
            <div className="ml-6 sm:ml-0 sm:w-1/2 sm:px-6">
              <Card className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === 'experience' ? (
                      <Briefcase className="w-5 h-5 text-ron-orange" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-ron-orange" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="font-medium text-ron-blue dark:text-ron-light-blue">
                    {item.organization} - {item.location}
                  </p>
                  
                  {item.type === 'experience' && Array.isArray(item.details) && (
                    <ul className="mt-3 space-y-1 list-disc list-inside text-muted-foreground">
                      {item.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                  
                  {item.type === 'education' && typeof item.details === 'string' && (
                    <p className="mt-3 text-muted-foreground">{item.details}</p>
                  )}
                  
                  {item.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-ron-blue/10 text-ron-blue dark:bg-ron-blue/20 dark:text-ron-light-blue rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
