import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import socialsData from "../data/socials.json";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observers = navItems.map((item) => {
      const element = document.getElementById(item.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px", // Trigger active when element is near center of viewport
          threshold: 0,
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-slate-950/70 border-b border-white/5 backdrop-blur-xl shadow-lg shadow-violet-950/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 font-display font-bold text-lg text-white shadow-md shadow-violet-500/20 hover:shadow-cyan-400/20 transition-all duration-300"
        >
          <span className="absolute inset-0.5 rounded-[10px] bg-slate-950 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
            <span className="bg-gradient-to-tr from-violet-400 to-cyan-300 bg-clip-text text-transparent group-hover:text-white font-extrabold transition-colors duration-300">
              VS
            </span>
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1 p-1 bg-slate-900/40 border border-white/5 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full font-sans text-xs font-medium tracking-wide transition-all duration-300 ${
                activeSection === item.id
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-violet-500/30 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Action (Resume shortcut) */}
        <div className="hidden lg:block">
          <a
            href={socialsData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-violet-600 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500 font-sans text-xs font-medium tracking-wide transition-all duration-300 shadow-sm"
          >
            Resume
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[65px] h-[calc(100vh-65px)] bg-slate-950/95 backdrop-blur-2xl border-t border-white/5 flex flex-col justify-between px-8 py-10 z-30"
          >
            <div className="flex flex-col gap-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                Navigation
              </span>
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-display text-2xl font-semibold flex items-center justify-between ${
                      activeSection === item.id
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300"
                        : "text-slate-400"
                    }`}
                  >
                    {item.label}
                    <span className="text-xs font-mono text-slate-600">
                      0{index + 1}
                    </span>
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                Direct Contact
              </span>
              <div className="flex flex-col gap-2 font-mono text-sm text-slate-400">
                <a href={`mailto:${socialsData.email}`} className="hover:text-cyan-400">
                  {socialsData.email}
                </a>
                <span>{socialsData.location}</span>
              </div>
              <a
                href={socialsData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl text-white font-sans text-sm font-semibold tracking-wide shadow-lg shadow-violet-500/20"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
