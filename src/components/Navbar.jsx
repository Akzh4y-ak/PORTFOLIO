import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl px-6 py-3
        flex items-center justify-between
        border border-cyan-400 rounded-full backdrop-blur-md
        shadow-[0_0_30px_rgba(34,211,238,0.4)]
        bg-transparent text-white"
      >
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-wide px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md">
          Akshay.dev
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 uppercase text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`transition duration-300 ${
                  location.pathname === link.path
                    ? 'text-cyan-400'
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
              {/* Underline animation */}
              <span className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full ${
                location.pathname === link.path ? 'w-full' : ''
              }`} />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-20 right-6 bg-black/90 backdrop-blur-xl rounded-xl p-6 space-y-4 text-white text-sm uppercase z-40 shadow-md md:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block hover:text-cyan-300 transition duration-200 ${
                  location.pathname === link.path ? 'text-cyan-400' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
