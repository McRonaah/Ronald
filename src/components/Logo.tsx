
import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link to="/" className={`font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-ron-blue dark:text-ron-light-blue">R</span>
      <span className="text-ron-orange">.</span>
    </Link>
  );
};

export default Logo;
