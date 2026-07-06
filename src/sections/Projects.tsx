import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ZoomIn, Calendar, Image, Sparkles, SlidersHorizontal } from "lucide-react";
import projectsData from "../data/projects.json";
import ProjectModal from "../components/ProjectModal";
import { Project } from "../types";

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}

function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 40,
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`,
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative flex flex-col h-full rounded-3xl bg-slate-900/40 border border-white/5 overflow-hidden backdrop-blur-md shadow-2xl hover:border-violet-500/30 hover:shadow-violet-950/15 transition-all duration-500 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Premium Glass Hover Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-violet-600/0 to-cyan-500/0 group-hover:from-violet-600/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none z-0" />

      {/* Screenshot / Visual Area */}
      <div className="relative h-52 md:h-60 overflow-hidden bg-slate-950 shrink-0 z-10">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-slate-500 mb-2 group-hover:scale-110 group-hover:text-violet-400 group-hover:border-violet-500/20 transition-all duration-300">
              <Image className="w-5 h-5" />
            </div>
            <span className="font-display text-xs font-bold text-slate-300 tracking-wide">
              Upload Screenshot
            </span>
            <span className="font-mono text-[9px] text-slate-500 mt-1 uppercase tracking-wider">
              {project.name}
            </span>
          </div>
        )}

        {/* Fancy Hover Backdrop overlay */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <div className="px-4 py-2 rounded-full bg-slate-900/95 border border-white/10 text-cyan-400 font-mono text-[10px] uppercase font-bold tracking-widest transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5 animate-pulse" />
            Expand Case Study
          </div>
        </div>

        {/* Project Status Badge & Duration */}
        <div className="absolute top-4 left-4 flex gap-1.5">
          <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-white/10 text-[9px] font-mono font-bold text-slate-300 tracking-wider">
            {project.duration}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono font-bold text-emerald-400 tracking-wider">
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow relative z-10">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-950 border border-white/5 text-[9px] font-mono text-slate-400 group-hover:text-violet-300 group-hover:border-violet-500/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded-md bg-slate-950 border border-white/5 text-[9px] font-mono text-slate-500">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Heading */}
          <h3 className="font-display text-xl md:text-2xl font-black text-white group-hover:text-violet-400 transition-colors duration-300">
            {project.name}
          </h3>

          {/* Short description */}
          <p className="text-slate-400 font-sans text-xs md:text-sm mt-3 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Bottom links and details trigger */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
          {/* Action trigger button */}
          <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-cyan-300 transition-colors uppercase tracking-widest flex items-center gap-1">
            View Details
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>

          {/* External links shortcut */}
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-950/80 border border-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-950/80 border border-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300"
              title="Launch Live App"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500/0 to-transparent group-hover:via-violet-500/40 transition-all duration-700" />
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const filters = ["All", "Full Stack", "AI", "React", "Python", "Java"];

  // Filter projects based on rules
  const filteredProjects = useMemo(() => {
    const list = projectsData as Project[];
    if (activeFilter === "All") return list;

    return list.filter((p) => {
      const lowerStack = p.techStack.map((t) => t.toLowerCase());
      const query = activeFilter.toLowerCase();

      if (query === "full stack") {
        // Broadly covers MERN/FastAPI stacks or projects containing database systems
        return (
          lowerStack.includes("node.js") ||
          lowerStack.includes("express") ||
          lowerStack.includes("mongodb") ||
          lowerStack.includes("postgresql") ||
          p.longDescription.toLowerCase().includes("full stack") ||
          p.longDescription.toLowerCase().includes("full-stack")
        );
      }

      if (query === "ai") {
        return (
          lowerStack.includes("ai") ||
          lowerStack.includes("translation apis") ||
          lowerStack.includes("text-to-speech") ||
          p.description.toLowerCase().includes("ai") ||
          p.longDescription.toLowerCase().includes("ai-driven")
        );
      }

      // Exact match for React, Python, Java
      return lowerStack.some((tech) => tech.includes(query));
    });
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 relative overflow-hidden bg-slate-950">
      {/* Subtle background blob glow */}
      <div className="absolute bottom-[5%] left-[5%] w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-violet-300">
              Selected Works
            </span>
          </motion.div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mt-2 leading-none">
            Featured <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base mt-4 leading-relaxed">
            A curated portfolio of software architectures, AI verification utilities, full-stack hubs, and collaboration buffers.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter Systems:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-900/60 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty state if nothing matches */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-slate-500 font-mono text-xs"
            >
              No projects match the Selected filter. Custom projects coming soon.
            </motion.div>
          ) : (
            /* Projects Grid */
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={handleSelectProject}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
