// src/components/Navbar.jsx
import { useState } from "react";
import {
  Home,
  User,
  Code2,
  FolderKanban,
  UserCircle,
  Mail,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home size={18} />, link: "#home" },
    { name: "About", icon: <User size={18} />, link: "#about" },
    { name: "Skills", icon: <Code2 size={18} />, link: "#skills" },
    { name: "Projects", icon: <FolderKanban size={18} />, link: "#projects" },
    { name: "Profile", icon: <UserCircle size={18} />, link: "#profile" },
    { name: "Contact", icon: <Mail size={18} />, link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          My<span className="text-emerald-400">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (top se slide hoga) */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-md border-t border-gray-800 shadow-lg overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-4 text-gray-300 font-medium px-6 py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="flex items-center gap-3 text-lg hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
