import { Link } from 'react-router-dom';
import heroImg from '/avatar.jpeg'; // Make sure this path is correct and the image exists

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 md:pt-36 bg-transparent text-white">
      
      {/* LEFT TEXT */}
      <div className="text-center md:text-left max-w-xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
            Akshay
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-cyan-300 drop-shadow">
          Frontend Developer & UI Engineer
        </h2>

        <p className="text-cyan-100/90 leading-relaxed drop-shadow-md">
          I craft beautiful, functional, and performance-driven websites using modern web technologies.
          Passionate about clean code and immersive UI experiences.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            to="/contact"
            className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400 hover:text-black transition shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          >
            Contact Me
          </Link>
          <a
            href="/Akshay_Resume.pdf"
            download
            className="px-6 py-2 rounded-full border border-purple-400 text-purple-300 font-semibold hover:bg-purple-400 hover:text-black transition shadow-[0_0_10px_rgba(168,85,247,0.6)]"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-10 md:mt-0 md:ml-16">
        <img
          src={heroImg}
          alt="Akshay Developer"
          className="w-[300px] md:w-[400px] rounded-xl shadow-[0_0_40px_rgba(34,211,238,0.5)]"
        />
      </div>
    </section>
  );
}
