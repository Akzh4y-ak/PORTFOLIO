import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import bootstrapLogo from "../assets/bootstrap.png";

const skills = [
  { name: "HTML5", logo: htmlLogo },
  { name: "CSS3", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React JS", logo: reactLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
];

export default function Skills() {
  return (
    <section className="min-h-screen px-4 sm:px-8 md:px-20 pt-28 md:pt-36 pb-16 text-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 animate-pulse">
          My Skills
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center text-center bg-white/10 border border-cyan-400 rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition duration-300 transform hover:scale-105"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-lg font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
