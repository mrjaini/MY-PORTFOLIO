// src/components/Profile.jsx
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Profile() {
  return (
    <section
      id="profile"
      className="relative min-h-screen bg-gray-950 text-white py-20 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      {/* <div className="absolute top-60 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div> */}
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-16 z-10"
      >
        My <span className="text-emerald-400">Profile</span>
      </motion.h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full relative z-10">
        {/* Left Side - Profile Image & Intro */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <img
            src="/Profile.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-40 md:h-40 object-cover rounded-full shadow-xl border-4 border-emerald-400 backdrop-blur-lg"
          />
          <h3 className="text-2xl font-semibold pt-2">Abhishek Jain</h3>
          <p className="text-gray-300 mt-3 max-w-md">
            Passionate{" "}
            <span className="text-emerald-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            skilled in React, Node.js, and problem solving. Always eager to
            learn and build impactful projects.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/mrjaini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 transition"
            >
              <FaGithub className="text-2xl text-emerald-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/mr-jaini/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 transition"
            >
              <FaLinkedin className="text-2xl text-emerald-400" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="p-4 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 transition"
              >
              <FaTwitter className="text-2xl text-emerald-400" />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Coding Platforms & Certificates */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/60 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-800"
        >
          {/* Coding Platforms */}
          <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
            Coding Platforms
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { name: "LeetCode", url: "https://leetcode.com/u/mr_jaini/" },
              { name: "GFG", url: "https://www.geeksforgeeks.org/user/mrjainii/" },
            ].map((platform, i) => (
              <a
                key={i}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-emerald-500/10 border border-emerald-400/20 p-4 rounded-lg text-center hover:bg-emerald-500/20 transition"
              >
                <span className="font-semibold text-emerald-300">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>

          {/* Certificates */}
          <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
            Certificates
          </h3>
          <ul className="space-y-4">
            {[
              { name: "React Developer Certification", link: "/certificates/react.pdf" },
              { name: "Node.js Certification", link: "/certificates/node.pdf" },
              { name: "DSA Mastery Certificate", link: "/certificates/dsa.pdf" },
            ].map((cert, i) => (
              <li key={i} className="flex items-center gap-3">
                <Award className="w-5 h-5 text-emerald-400" />
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:underline"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
