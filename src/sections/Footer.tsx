import { ArrowUp, Heart, Github, Linkedin, Mail } from "lucide-react";
import socialsData from "../data/socials.json";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 py-12 md:py-16 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-12">
        
        {/* Top footer row: Logo, quick navigation, and Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo brand */}
          <div className="flex flex-col text-left gap-1.5">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 font-display font-black text-lg text-white flex items-center justify-center shadow-lg shadow-violet-500/10 cursor-pointer"
            >
              VS
            </button>
            <span className="font-sans text-xs text-slate-400 font-medium">
              Vidhi Sachdeva — Software Engineer Portfolio
            </span>
          </div>

          {/* Controls: Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-violet-600 border border-white/10 hover:border-violet-500 text-slate-400 hover:text-white font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Middle row: Quick links list */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 pb-8 border-b border-white/5">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-sans text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Bottom footer row: Social icons and licensing */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          {/* Custom licensing signature */}
          <div className="flex items-center gap-1 text-slate-500 normal-case font-sans text-xs font-normal">
            <span>Made with React</span>
            <Heart className="w-3 h-3 text-red-500 animate-pulse fill-red-500" />
            <span>by</span>
            <a
              href={socialsData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-violet-400 font-semibold transition-colors"
            >
              Vidhi Sachdeva
            </a>
            <span>© 2026</span>
          </div>

          {/* Social connections shortcuts */}
          <div className="flex items-center gap-4">
            <a
              href={socialsData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socialsData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${socialsData.email}`}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              title="Email ID"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
