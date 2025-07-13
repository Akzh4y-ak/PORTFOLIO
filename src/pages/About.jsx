export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-12">
      <div className="max-w-5xl w-full bg-white/10 border border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.3)] rounded-2xl backdrop-blur-md p-8 md:p-12 text-white space-y-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          About Me
        </h2>

        <p className="text-gray-200 leading-relaxed text-base md:text-lg">
          I’m Akshay, a passionate Frontend Developer focused on creating modern, responsive, and interactive web experiences. I specialize in React, Tailwind CSS, and building sleek UIs that are both functional and visually stunning.
        </p>

        <p className="text-gray-300 leading-relaxed">
          My journey started with a love for clean design and code, and has grown into full-fledged frontend engineering. I believe in blending performance with aesthetics — making websites that load fast and leave an impression.
        </p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">Technologies I work with:</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-200">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>Redux Toolkit</li>
            <li>Git & GitHub</li>
            <li>HTML5 & CSS3</li>
            <li>Figma to Code</li>
            <li>API Integration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
