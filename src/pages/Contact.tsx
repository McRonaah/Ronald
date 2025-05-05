
import React, { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 pb-24">
      <div className="container mx-auto">
        <SectionTitle
          title="Contact Me"
          subtitle="Have a question or want to work together? Reach out to me!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always interested in hearing about new projects, opportunities, or just connecting with fellow tech enthusiasts. Fill out the form or reach out through any of my channels!
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="p-3 rounded-full bg-ron-blue/10 mr-4">
                    <Mail className="w-5 h-5 text-ron-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
                    <a 
                      href="mailto:ronald.mololu@gmail.com" 
                      className="text-lg hover:text-ron-orange transition-colors"
                    >
                      ronald.mololu@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="p-3 rounded-full bg-ron-blue/10 mr-4">
                    <Phone className="w-5 h-5 text-ron-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Phone</h4>
                    <a 
                      href="tel:+254702233145" 
                      className="text-lg hover:text-ron-orange transition-colors"
                    >
                      +254 702 233145
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="p-3 rounded-full bg-ron-blue/10 mr-4">
                    <MapPin className="w-5 h-5 text-ron-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Location</h4>
                    <p className="text-lg">Nairobi, Kenya</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/McRonaah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-ron-blue hover:text-white dark:hover:bg-ron-blue transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ronald-kipchirchir-034983246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-ron-blue hover:text-white dark:hover:bg-ron-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Ronaah_254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-ron-blue hover:text-white dark:hover:bg-ron-blue transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ronald Kipchirchir"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ronald.mololu@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'd like to discuss a potential project..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-ron-blue hover:bg-ron-dark-blue"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
