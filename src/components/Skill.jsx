export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gray-950 text-white py-16 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      {/* <div className="absolute top-40 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob"></div> */}
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-blob"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        My <span className="text-emerald-400">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl relative z-10 w-full">
        {/* Web Development */}
        <div className="bg-gray-900 border border-emerald-400/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Web Development</h3>
          <ul className="space-y-2 text-gray-300">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* Programming */}
        <div className="bg-gray-900 border border-emerald-400/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Programming Languages</h3>
          <ul className="space-y-2 text-gray-300">
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-gray-900 border border-emerald-400/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Databases</h3>
          <ul className="space-y-2 text-gray-300">
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-900 border border-emerald-400/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Frameworks</h3>
          <ul className="space-y-2 text-gray-300">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
