// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 bg-gray-950 text-white overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background (same as Hero) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      {/* <div className="absolute top-40 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div> */}
      {/* <div className="absolute bottom-10 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div> */}

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src="/about.webp"
            alt="About Me"
            className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-emerald-400"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            I am a <span className="font-semibold text-emerald-300">Full Stack Developer </span> 
            with a strong passion for creating interactive, dynamic, and scalable web applications.  
            My focus is always on writing clean, efficient, and maintainable code.  
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
            With expertise in <span className="font-semibold text-emerald-300">React, JavaScript, Node.js, and modern UI/UX design</span>, 
            I strive to build products that not only work flawlessly but also deliver an outstanding user experience.  
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
            I believe in continuous learning, solving complex problems, and bringing ideas to life with creativity and innovation.
          </p>

          {/* Skills Badges */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            {["React", "JavaScript", "Node.js", "TailwindCSS", "MongoDB", "Git"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-medium shadow-sm hover:bg-emerald-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
