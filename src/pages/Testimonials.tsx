
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 pb-24">
      <div className="container mx-auto">
        <SectionTitle
          title="Testimonials"
          subtitle="What colleagues, students, and clients say about working with me"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
