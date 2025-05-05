
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = true,
  className,
}) => {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-ron-orange rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
