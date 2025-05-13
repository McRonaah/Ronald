
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { type Event } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventTypeColors = {
    workshop: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    conference: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    hackathon: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    meetup: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    impact: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    judge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge className={eventTypeColors[event.type]}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        
        <div className="flex items-center text-muted-foreground mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
        
        <p className="mb-4">{event.description}</p>
        
        {event.url && (
          <Button
            variant="outline"
            className="flex items-center gap-1 text-ron-blue hover:text-ron-orange"
            asChild
          >
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn More</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;
