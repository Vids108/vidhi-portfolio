import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  Sparkles, 
  ArrowRight,
  Upload,
  Briefcase
} from "lucide-react";
import socialsData from "../data/socials.json";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [resumeExists, setResumeExists] = useState(false);

  // Probe the server to check if resume.pdf is genuinely present
  useEffect(() => {
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          setResumeExists(true);
        } else {
          setResumeExists(false);
        }
      })
      .catch(() => {
        setResumeExists(false);
      });
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialsData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const opportunities = [
    "Software Engineering Internships",
    "Full Stack Development",
    "Backend Development",
    "AI Engineering",
    "Data Analyst"
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden bg-slate-950">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Badge Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-xs font-semibold text-violet-400 mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>LET'S CONNECT</span>
        </motion.div>

        {/* Heading & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-none mb-6"
        >
          Let's Build <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Something Amazing</span> Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I'm always open to discussing software engineering opportunities, internships, collaborations, and exciting projects. Feel free to connect with me through any of the platforms below.
        </motion.p>

        {/* 4 Premium Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          
          {/* Card 1: Email */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 flex flex-col justify-between h-72 text-left backdrop-blur-md shadow-2xl hover:border-violet-500/30 hover:shadow-violet-950/10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-500/0 group-hover:from-violet-600/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400 mb-6 group-hover:bg-violet-500/20 group-hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                Email Address
              </h3>
              <p className="text-slate-400 font-sans text-xs mt-2 break-all truncate">
                {socialsData.email}
              </p>
            </div>

            <div className="relative mt-6">
              <button
                onClick={handleCopyEmail}
                className="relative w-full py-3 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider hover:bg-violet-600 hover:text-white hover:border-violet-500 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Email
                  </>
                )}
              </button>

              {/* Tooltip */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold shadow-xl flex items-center gap-1.5 z-20 whitespace-nowrap"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Card 2: LinkedIn */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 flex flex-col justify-between h-72 text-left backdrop-blur-md shadow-2xl hover:border-sky-500/30 hover:shadow-sky-950/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600/0 to-cyan-500/0 group-hover:from-sky-600/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 mb-6 group-hover:bg-sky-500/20 group-hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                LinkedIn Profile
              </h3>
              <p className="text-slate-400 font-sans text-xs mt-2 truncate">
               https://www.linkedin.com/in/vidhi-sachdeva-ba1081274/
              </p>
            </div>

            <a
              href={socialsData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider hover:bg-sky-600 hover:text-white hover:border-sky-500 transition-all duration-300 flex items-center justify-center gap-2 text-center"
            >
              Visit LinkedIn
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 3: GitHub */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 flex flex-col justify-between h-72 text-left backdrop-blur-md shadow-2xl hover:border-violet-500/30 hover:shadow-violet-950/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-500/0 group-hover:from-violet-600/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400 mb-6 group-hover:bg-violet-500/20 group-hover:text-white transition-all duration-300">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                GitHub Profile
              </h3>
              <p className="font-mono text-[11px] text-violet-400 mt-0.5">
                https://github.com/Vids108
              </p>
              <p className="text-slate-400 font-sans text-xs mt-2 leading-relaxed">
                Explore my open-source projects and personal development work.
              </p>
            </div>

            <a
              href={socialsData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider hover:bg-violet-600 hover:text-white hover:border-violet-500 transition-all duration-300 flex items-center justify-center gap-2 text-center"
            >
              Visit GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 4: Resume */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 flex flex-col justify-between h-72 text-left backdrop-blur-md shadow-2xl hover:border-cyan-500/30 hover:shadow-cyan-950/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-violet-500/0 group-hover:from-cyan-600/5 group-hover:to-violet-500/5 transition-all duration-500 pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 group-hover:text-white transition-all duration-300">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                Professional Resume
              </h3>
              <p className="text-slate-400 font-sans text-xs mt-2">
                {resumeExists ? "PDF Document Ready" : "Upload Pending"}
              </p>
            </div>

            {resumeExists ? (
              <div className="grid grid-cols-2 gap-2 mt-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  View
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="/resume.pdf"
                  download="Vidhi_Sachdeva_Resume.pdf"
                  className="py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-violet-500/10 hover:shadow-violet-500/25 hover:from-violet-500 hover:to-cyan-400 transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  Get
                  <Download className="w-3 h-3" />
                </a>
              </div>
            ) : (
              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                <Upload className="w-5 h-5 text-slate-600 mb-1" />
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Upload Resume
                </span>
              </div>
            )}
          </motion.div>

        </div>

        {/* Opportunity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto rounded-3xl bg-slate-900/30 border border-white/5 p-8 md:p-10 backdrop-blur-md relative overflow-hidden"
        >
          {/* Background highlight */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-left relative z-10">
            <div>
              {/* Green status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Open to Opportunities</span>
              </div>
              <h4 className="font-display text-xl md:text-2xl font-bold text-white">
                Currently Available For
              </h4>
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-2 md:max-w-xl">
              {opportunities.map((opp, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/5 hover:border-violet-500/30 text-xs font-mono text-slate-300 hover:text-violet-300 transition-all duration-300 flex items-center gap-1.5"
                >
                  <Briefcase className="w-3 h-3 text-cyan-400" />
                  {opp}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
