"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Code, Award, Mail } from "lucide-react";

// Nav items remain the same
const navItems = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "projects", label: "Projects", icon: Briefcase, href: "/projects" },
  { id: "skills", label: "Skills", icon: Code, href: "/skills" },
  { id: "experience", label: "Experience", icon: Award, href: "/experience" },
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    // Fixed bottom bar, hidden on large screens (lg:)
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-gray-800 z-50">
      <div className="flex justify-around items-center h-16 max-w-full mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center p-1 flex-1 transition-colors ${
                isActive
                  ? "text-accent" // Use accent color for active link
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {/* Hide the label text on mobile to save space */}
              {/* <span className="text-xs mt-1">{item.label}</span> */} 
            </Link>
          );
        })}
      </div>
    </nav>
  );
}