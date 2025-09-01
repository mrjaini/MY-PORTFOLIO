// src/components/Hero.jsx
import { motion } from "framer-motion";
import {useState}from "react";

export default function Hero() 
{
  const [open, setOpen] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 overflow-hidden bg-gray-950 text-white"
    >
      {/* 🔹 Floating Blobs Background */}
      <div 
      className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div 
      className="absolute bottom-40 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Left: Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0 mb-8 md:mb-0 relative z-10"
      >
        <img
          src="/Profile.jpg"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-emerald-400 backdrop-blur-lg"
        />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:ml-12 text-center md:text-left relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Hi, I'm <span className="text-emerald-400">Abhishek Jain</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          I’m a passionate{" "}
          <span className="font-semibold text-emerald-300">
            Full Stack Developer
          </span>{" "}
          crafting modern, responsive, and user-friendly web applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
        <div className="relative inline-block ">
      {/* Main button */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium shadow-lg hover:bg-emerald-600 transition"
      >
        Resume
      </button>

      {/* Hover menu */}
      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="flex justify-center absolute top-full mt-2 left-0 w-auto bg-black rounded-xl shadow-lg border border-gray-200 z-50"
        >
          <a
            href="/Resume with photo.pdf"
            target="_blank"
            className="block px-4 py-2 m-1  hover:border hover:border-emerald-400 hover:text-emerald-400 rounded-xl font-medium hover:bg-emerald-400/20 transition"
          >
            Show Resume
          </a>
          <a
            href="/Resume with photo.pdf"
            download
            className="block px-4 py-2 m-1 hover:border hover:border-emerald-400 hover:text-emerald-400 rounded-xl font-medium hover:bg-emerald-400/20 transition"
          >
            Download Resume
          </a>
        </div>
      )}
    </div>
          <a
            href="#projects"
            onMouseEnter={() => setOpen(false)}
            className="px-6 py-3 border border-emerald-400 text-emerald-400 rounded-xl font-medium hover:bg-emerald-400/20 transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
