import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Github, ExternalLink, Calendar, CheckCircle, Tag, AlertTriangle, BookOpen, Lightbulb, Compass, GitMerge } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [imgError, setImgError] = useState(false);

  // Reset imgError whenever the project changes
  useEffect(() => {
    setImgError(false);
  }, [project]);

  // Listen for Escape key to close the modal for high accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
          />

          {/* Modal Card Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl shadow-violet-950/20 z-10 max-h-[90vh] flex flex-col text-left"
          >
            {/* Header / Banner Image */}
            <div className="relative h-48 sm:h-64 w-full shrink-0 bg-slate-950">
              {project.image && !imgError ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-50"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-violet-950/20 to-cyan-950/20 flex flex-col items-center justify-center p-6 relative">
                  <span className="font-display text-4xl font-black text-white/10 select-none">
                    {project.name}
                  </span>
                  <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase mt-1">
                    Upload Screenshot: {project.image}
                  </span>
                </div>
              )}
              {/* Top gradient shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 border border-white/10 text-slate-400 hover:text-white transition-colors backdrop-blur-md cursor-pointer z-20"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Details Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
              {/* Status and title row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 font-mono text-[10px] text-slate-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-md border border-green-500/20">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 font-mono text-xs font-semibold transition-all duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-mono text-xs font-bold shadow-md shadow-violet-500/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Description & Problem Statement in Split layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <span className="font-mono text-[9px] font-bold text-violet-400 uppercase tracking-widest block">
                    Core Overview
                  </span>
                  <p className="text-slate-300 font-sans text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {project.problemStatement && (
                  <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/10 space-y-2.5">
                    <span className="font-mono text-[9px] font-bold text-red-400 uppercase tracking-widest flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" /> The Problem
                    </span>
                    <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>
                )}
              </div>

              {/* Architecture Section */}
              {project.architecture && (
                <div className="space-y-3">
                  <h4 className="font-display text-xs uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
                    <GitMerge className="w-4 h-4 text-cyan-400" /> Architecture & Implementation
                  </h4>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                    {project.architecture}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="font-display text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, index) => (
                    <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-cyan-400 font-bold text-xs shrink-0 mt-0.5">✓</span>
                      <span className="text-slate-300 text-xs font-sans leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges and Learning Outcomes in split layout */}
              {(project.challenges || project.learningOutcomes) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.challenges && (
                    <div className="space-y-3">
                      <h4 className="font-display text-xs uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-500" /> Engineering Challenges
                      </h4>
                      <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                        {project.challenges}
                      </p>
                    </div>
                  )}

                  {project.learningOutcomes && (
                    <div className="space-y-3">
                      <h4 className="font-display text-xs uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-emerald-400" /> Learning Outcomes
                      </h4>
                      <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                        {project.learningOutcomes}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Future Scope */}
              {project.futureScope && (
                <div className="space-y-3">
                  <h4 className="font-display text-xs uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-violet-400" /> Future Scope & Extensions
                  </h4>
                  <div className="p-5 rounded-2xl bg-violet-500/5 border border-violet-500/10 text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                    {project.futureScope}
                  </div>
                </div>
              )}

              {/* Technologies Utilized */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display text-xs uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-slate-500" /> Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/5 text-xs font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
