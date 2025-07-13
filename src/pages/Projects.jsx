export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A fully functional shopping website built with React, Redux Toolkit, and DummyJSON API.",
      tech: ["React", "Redux", "Tailwind"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/your-repo/ecommerce",
    },
    {
      title: "Portfolio Website",
      desc: "A glowing portfolio built with modern animations and TailwindCSS.",
      tech: ["React", "Tailwind"],
      demo: "https://your-portfolio.com",
      code: "https://github.com/your-repo/portfolio",
    },
    // Add more as needed
  ];

  return (
    <section className="min-h-screen px-6 md:px-20 pt-28 md:pt-36 text-white">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 animate-pulse">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-cyan-400 rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-cyan-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.desc}</p>
            <div className="flex gap-2 flex-wrap text-sm mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold border border-purple-400 rounded-full text-purple-300 hover:bg-purple-500 hover:text-white transition"
              >
                Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold border border-cyan-400 rounded-full text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
