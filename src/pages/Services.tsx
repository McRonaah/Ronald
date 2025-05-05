
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 pb-24">
      <div className="container mx-auto">
        <SectionTitle
          title="Services"
          subtitle="Expert solutions and professional expertise I offer"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            I'm open to discussing your unique project requirements. Let's collaborate to create something amazing.
          </p>
          <Button 
            asChild 
            className="bg-ron-blue hover:bg-ron-dark-blue"
          >
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
