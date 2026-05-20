import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Loader2 } from 'lucide-react';

export default function Contact() {
  // Toggle this boolean to true to activate the Web3Forms automated API email sending, 
  // or false to use the direct secure mailto: fallback that launches the visitor's mail client.
  const isFormAvailable = false;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    if (!isFormAvailable) {
      // Direct mailto fallback: open local mail client pre-filled with name, email, and message
      try {
        const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        
        // Launch mail client by programmatically clicking a temporary link
        const mailtoUrl = `mailto:iamakshy81@gmail.com?subject=${subject}&body=${body}`;
        const tempLink = document.createElement('a');
        tempLink.href = mailtoUrl;
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        
        // Defer state updates slightly to allow the browser to register the protocol navigation
        setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        }, 300);
      } catch (err) {
        console.error('FAILED...', err);
        setErrorMessage('Failed to launch email application. Please email directly at iamakshy81@gmail.com.');
        setStatus('error');
      }
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      const errorStr = "Web3Forms Access Key is missing. Please configure VITE_WEB3FORMS_ACCESS_KEY in your .env file.";
      console.warn(errorStr);
      setErrorMessage(errorStr);
      setStatus('error');
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('SUCCESS!', result);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('FAILED...', result);
        setErrorMessage(result.message || 'Failed to send message. Please verify your Web3Forms access key.');
        setStatus('error');
      }
    } catch (err) {
      console.error('FAILED...', err);
      setErrorMessage(err?.message || 'An error occurred while sending the message.');
      setStatus('error');
    }
  };

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
              href="https://www.linkedin.com/in/akshay-k-062553352/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="relative w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          >
            {!isFormAvailable && (
              <div className="text-xs bg-rose-500/20 border border-rose-400/40 text-rose-300 rounded-lg px-3 py-2 text-center animate-pulse">
                📧 Direct Email Mode Active (opens your mail client)
              </div>
            )}
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border border-cyan-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border border-cyan-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent border border-cyan-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-fit px-6 py-3 rounded-full border border-purple-400 text-purple-300 font-semibold hover:bg-purple-500 hover:text-white transition flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                isFormAvailable ? 'Send Message' : 'Open Email App'
              )}
            </button>
          </form>

          {/* Success Banner */}
          {status === 'success' && (
            <div className="mt-4 p-4 bg-emerald-500/20 border border-emerald-400 rounded-xl text-emerald-200 text-center shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse">
              {isFormAvailable 
                ? "🎉 Message sent successfully! I will get back to you soon."
                : "📬 Email client launched! Please review and send your pre-filled email."
              }
            </div>
          )}

          {/* Error Banner */}
          {status === 'error' && (
            <div className="mt-4 p-4 bg-rose-500/20 border border-rose-400 rounded-xl text-rose-200 text-center shadow-[0_0_15px_rgba(244,63,94,0.3)]">
              ⚠️ {errorMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
