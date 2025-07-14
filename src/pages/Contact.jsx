import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="px-6 md:px-20 py-24 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 animate-pulse">
                Let’s Connect
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Have a project, opportunity, or just want to say hi?  
              I’d love to hear from you!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-cyan-300">
              <Mail size={22} />
              <span className="text-lg">iamakshy81@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-cyan-300">
              <MapPin size={22} />
              <span className="text-lg">Kerala, India</span>
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/Akzh4y-ak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/akshay-k"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          action="https://formspree.io/f/xjkobyjv"
          method="POST"
          className="flex flex-col gap-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.3)]"
        >
          <input
            type="hidden"
            name="_next"
            value="/"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-transparent border border-cyan-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-transparent border border-cyan-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-transparent border border-cyan-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="w-fit px-6 py-3 rounded-full border border-purple-400 text-purple-300 font-semibold hover:bg-purple-500 hover:text-white transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
