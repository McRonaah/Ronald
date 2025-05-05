
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, 
  User, 
  Briefcase, 
  FileText, 
  Mail, 
  Users, 
  Calendar, 
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/portfolio", label: "Portfolio", icon: Briefcase },
  { path: "/experience", label: "Experience", icon: FileText },
  { path: "/services", label: "Services", icon: Settings },
  { path: "/testimonials", label: "Testimonials", icon: Users },
  { path: "/events", label: "Events", icon: Calendar },
  { path: "/contact", label: "Contact", icon: Mail },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-white dark:bg-slate-900 shadow-md flex flex-col items-center py-8 z-40">
      <div className="flex flex-col space-y-8 mt-16">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "relative group flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                isActive
                  ? "text-ron-orange bg-ron-orange/10"
                  : "text-gray-500 hover:text-ron-orange dark:text-gray-400 dark:hover:text-ron-orange"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute left-full ml-2 px-2 py-1 rounded bg-ron-blue text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
