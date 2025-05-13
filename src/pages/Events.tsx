
import React, { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";
import { Button } from "@/components/ui/button";

const Events: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const eventTypes = ['workshop', 'conference', 'hackathon', 'meetup', 'impact', 'judge'];
  
  // Filter events based on selected type
  const filteredEvents = selectedType
    ? events.filter((event) => event.type === selectedType)
    : events;

  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 pb-24">
      <div className="container mx-auto">
        <SectionTitle
          title="Speaking & Events"
          subtitle="Workshops, Conferences, Community events, and Charitable Activities I've participated"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <Button
            variant={selectedType === null ? "default" : "outline"}
            className={selectedType === null ? "bg-ron-blue hover:bg-ron-dark-blue" : ""}
            onClick={() => setSelectedType(null)}
          >
            All Events
          </Button>
          {eventTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className={selectedType === type ? "bg-ron-blue hover:bg-ron-dark-blue" : ""}
              onClick={() => setSelectedType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No events found with the selected filter.
            </p>
            <Button
              variant="link"
              className="mt-2 text-ron-blue"
              onClick={() => setSelectedType(null)}
            >
              Clear filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
