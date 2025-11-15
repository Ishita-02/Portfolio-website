"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Code, Award, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "projects", label: "Projects", icon: Briefcase, href: "/projects" },
  { id: "skills", label: "Skills", icon: Code, href: "/skills" },
  { id: "experience", label: "Experience", icon: Award, href: "/experience" },
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] bg-card border-r border-gray-800 p-6 flex flex-col">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-accent mb-2">Your Name</h2>
        <p className="text-sm text-muted">Blockchain Developer</p>
      </div>

      <nav className="flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 mb-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-accent text-background"
                  : "text-white hover:bg-gray-800"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-gray-800">
        <p className="text-xs text-gray-600 text-center">© 2024 Your Name</p>
      </div>
    </aside>
  );
}