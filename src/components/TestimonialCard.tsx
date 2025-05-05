
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import { type Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all hover-scale">
      <CardContent className="p-6 flex flex-col h-full">
        <QuoteIcon className="w-10 h-10 text-ron-orange/50 mb-4" />
        
        <p className="text-lg mb-6 flex-grow italic">"{testimonial.text}"</p>
        
        <div className="flex items-center mt-auto">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
