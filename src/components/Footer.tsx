import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-muted-foreground mb-4">
              Passionate Software Engineer, Coding Instructor, AI Enthusiast from Kenya.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/McRonaah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ronald-kipchirchir-034983246/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Ronaah_254/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:ronald.mololu@gmail.com"
                className="text-gray-600 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="text-gray-600 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">Nairobi, Kenya</p>
            <p className="text-muted-foreground mb-2">ronald.mololu@gmail.com</p>
            <p className="text-muted-foreground mb-4">+254 702 233145</p>
            <Link
              to="/contact"
              className="text-ron-blue hover:text-ron-orange dark:text-ron-light-blue dark:hover:text-ron-orange font-medium transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Ronald Kipchirchir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
