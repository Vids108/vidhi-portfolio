import { useEffect, useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, MessageSquare, Terminal } from "lucide-react";
import socialsData from "../data/socials.json";


const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "AI Enthusiast",
  "Building Scalable Applications",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // Custom high-performance 3D Tilt effect using Framer Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 150 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 150 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // High-fidelity Typing Cycle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => currentFullText.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before deletion
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const yPos = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
    

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        {/* Left column - Information */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-violet-300">
              Welcome to my space
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight mb-2 text-white"
          >
            Hi, I'm
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent hover:scale-[1.01] transition-transform duration-300 select-none"
          >
            VIDHI SACHDEVA
          </motion.h1>

          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-10 sm:h-12 flex items-center gap-3 mb-6"
          >
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-lg sm:text-2xl font-bold text-slate-300">
              {displayText}
              <span className="animate-pulse text-cyan-400 font-extrabold">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 font-sans text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          >
            Building scalable web applications with React, FastAPI, Node.js and AI while solving real-world problems. Currently pursuing my Master of Computer Applications (MCA) at IGDTUW.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold text-sm tracking-wide shadow-lg shadow-violet-500/20 hover:shadow-cyan-400/25 transition-all duration-300"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/50 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm tracking-wide transition-all duration-300"
            >
              Let's Connect
              <MessageSquare className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
            </button>

            <a
              href={socialsData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 font-semibold text-sm tracking-wide transition-all duration-300"
            >
              <Download className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              {[
                { icon: <Github className="w-4 h-4" />, url: socialsData.github, label: "GitHub", hoverColor: "hover:text-white hover:border-white/40 hover:bg-white/5" },
                { icon: <Linkedin className="w-4 h-4" />, url: socialsData.linkedin, label: "LinkedIn", hoverColor: "hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/5" },
                {
                  icon: (
                    <span className="font-mono text-[10px] font-bold">GFG</span>
                  ),
                  url: socialsData.gfg,
                  label: "GeeksforGeeks",
                  hoverColor: "hover:text-green-500 hover:border-green-500/40 hover:bg-green-500/5",
                },
                { icon: <Mail className="w-4 h-4" />, url: `mailto:${socialsData.email}`, label: "Email", hoverColor: "hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-xl bg-slate-950 border border-white/5 text-slate-400 flex items-center justify-center transition-all duration-300 shadow-md ${social.hoverColor}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column - Profile Image / Visual */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
          >
            {/* Ambient Background Glow ring */}
            <div className="absolute inset-[-10px] rounded-3xl bg-white/5 blur-xl" />
            {/* Glowing Border Rings */}
            <div className="absolute inset-[-6px] rounded-3xl border border-white/10 shadow-lg shadow-black/20" />

            {/* Main Interactive Picture Container with 3D effect */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="absolute inset-[12px] rounded-full bg-slate-950 border-2 border-white/10 shadow-2xl overflow-hidden cursor-pointer"
            >
              {imgError ? (
                // Super Premium Fallback SVG Visual if profile picture is not loaded yet
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative p-6">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:16px_16px]" />
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-20 h-20 rounded-full border border-dashed border-cyan-400/50 flex items-center justify-center mb-4"
                  >
                    <Terminal className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <span className="font-display text-sm font-bold text-white tracking-wide text-center">
                  </span>
                  <span className="font-mono text-[9px] text-cyan-400 tracking-wider uppercase mt-1">
                    /profile.jpg
                  </span>
                </div>
              ) : (
                
                <img
                  src="/Profile.jpeg"
                  alt="Vidhi Sachdeva"
                  className="w-full h-full object-cover object-center translate-y-0 transition-transform duration-700 hover:scale-105"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>

            {/* Small hovering accent badge (Google / Top-tech inspired) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/10 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 pointer-events-none"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-mono text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                Open for roles
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
