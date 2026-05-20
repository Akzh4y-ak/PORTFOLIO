export default function Projects() {
  const projects = [
    {
      title: "Univerzo - Music Streaming App",
      desc: "A music app focused on smooth browsing, playback, playlists, and clean user flows. Worked across the frontend experience and backend API structure to keep the product fast, organized, and easy to extend.",
      tech: ["React", "JavaScript", "Python", "Django", "MySQL"],
      status: "Product project",
    },
    {
      title: "Sayonara - Random Video Chat Platform",
      desc: "An Omegle-style application for connecting users into random live conversations. Built the core matching flow, real-time communication layer, and responsive interface for a simple peer-to-peer chat experience.",
      tech: ["React", "WebRTC", "WebSockets", "Django", "REST APIs"],
      status: "Real-time app",
    },
    {
      title: "IPTV Backend Systems",
      desc: "Currently working on backend systems for an IPTV company, including API development, database design, stream/package management, authentication flows, and admin-side tools for daily operations.",
      tech: ["Python", "Django", "DRF", "MySQL", "API Integration"],
      status: "Current company work",
    },
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
            <p className="text-sm font-semibold text-purple-300 mb-3">
              {project.status}
            </p>
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
            {(project.demo || project.code) && (
              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold border border-purple-400 rounded-full text-purple-300 hover:bg-purple-500 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold border border-cyan-400 rounded-full text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
                  >
                    Source Code
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
