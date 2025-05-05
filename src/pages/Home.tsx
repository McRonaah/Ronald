
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ronald1 from "../assets/630A6376.jpg";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-start justify-center pt-10 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${ronald1})`,
          filter: "brightness(0.6)"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-ron-orange">Ronald Kipchirchir</span>
        </h1>
        <div className="h-1 w-20 bg-ron-orange mx-auto mb-6"></div>
        <h2 className="text-xl md:text-3xl mb-8">
          Software Engineer | Coding Instructor | AI Enthusiast | 
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Building innovative solutions and nurturing Africa's tech talent.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            size="lg" 
            className="bg-ron-blue hover:bg-ron-dark-blue text-white"
          >
            <Link to="/portfolio">View My Work</Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
          >
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Home;
