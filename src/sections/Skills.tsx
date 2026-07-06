import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Cpu, Layout, Server, Database, Brain, Settings, Sparkles } from "lucide-react";
import skillsData from "../data/skills.json";

// Map category string to a suitable Lucide icon and glow border
const getCategoryDetails = (category: string) => {
  switch (category) {
    case "Programming Languages":
      return {
        icon: <Cpu className="w-5 h-5 text-violet-400" />,
        glowClass: "group-hover:border-violet-500/30 group-hover:shadow-violet-500/10",
        badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
      };
    case "Frontend Development":
      return {
        icon: <Layout className="w-5 h-5 text-cyan-400" />,
        glowClass: "group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/10",
        badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      };
    case "Backend Development":
      return {
        icon: <Server className="w-5 h-5 text-emerald-400" />,
        glowClass: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10",
        badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      };
    case "Database Systems":
      return {
        icon: <Database className="w-5 h-5 text-amber-400" />,
        glowClass: "group-hover:border-amber-500/30 group-hover:shadow-amber-500/10",
        badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      };
    case "Core Computer Science":
      return {
        icon: <Brain className="w-5 h-5 text-fuchsia-400" />,
        glowClass: "group-hover:border-fuchsia-500/30 group-hover:shadow-fuchsia-500/10",
        badgeColor: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
      };
    default:
      return {
        icon: <Settings className="w-5 h-5 text-rose-400" />,
        glowClass: "group-hover:border-rose-500/30 group-hover:shadow-rose-500/10",
        badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
      };
  }
};

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const extraRef = useRef(null);
  const extraInView = useInView(extraRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-10">
          <span className="font-mono text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
            Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-white">
            Technical & <span className="gradient-text-purple-blue">Core Skills</span>
          </h2>
        </div>

        {/* Technical Skills Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillsData.technical.map((cat, catIdx) => {
            const { icon, glowClass, badgeColor } = getCategoryDetails(cat.category);

            return (
              <motion.div
                key={cat.category}
                style={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 40,
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${catIdx * 0.08}s`,
                }}
                className={`group glass-panel rounded-2xl p-6 border border-white/5 transition-all duration-300 ${glowClass}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 group-hover:bg-slate-800 transition-colors">
                    {icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all duration-300 hover:scale-[1.04] bg-slate-950/80 hover:bg-slate-900 text-slate-300 border-white/5 hover:border-violet-500/30 hover:text-white`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extracurricular Skills Sub-section */}
        <div ref={extraRef} className="mt-10 border-t border-white/5 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column Description */}
            <div className="lg:col-span-5 text-left">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
                Extracurriculars
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mt-4 text-white">
                Leadership & <span className="text-cyan-400">Soft Talents</span>
              </h3>
              <p className="text-slate-400 font-sans text-sm mt-4 leading-relaxed">
                Coding is only half the battle. In my roles as state-level public speaker, academic rank holder, and mentor, I've refined a versatile soft toolkit enabling robust team integration and impact-oriented problem-solving.
              </p>
            </div>

            {/* Right Column Skills tags bento box */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-3">
                {skillsData.extracurricular.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    style={{
                      opacity: extraInView ? 1 : 0,
                      scale: extraInView ? 1 : 0.9,
                      transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${skillIdx * 0.05}s`,
                    }}
                    className="flex items-center gap-2.5 px-4.5 py-3 rounded-2xl glass-panel hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300 cursor-default group"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform duration-300" />
                    <span className="font-sans text-xs font-semibold text-slate-200 group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Currently Learning Sub-section */}
        <div className="mt-16 border-t border-white/5 pt-16">
          <div className="text-left mb-10">
            <span className="font-mono text-xs font-bold text-fuchsia-400 uppercase tracking-widest bg-fuchsia-500/10 px-3 py-1.5 rounded-full border border-fuchsia-500/20">
              Future Horizons
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mt-4 text-white">
              Currently <span className="gradient-text-purple-blue">Learning & Expanding</span>
            </h3>
            <p className="text-slate-400 font-sans text-sm mt-4">
              Constantly pushing bounds. Here are the core architectures and technologies I am currently mastering to scale my software engineering capacity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Docker", status: "In Progress" },
              { name: "AWS", status: "In Progress" },
              { name: "System Design", status: "Advanced Studies" },
              { name: "Kubernetes", status: "Foundations" },
              { name: "Advanced React", status: "Deep Dive" },
              { name: "AI Engineering", status: "Models & Agentics" }
            ].map((item, idx) => (
              <motion.div
                key={item.name}
                style={{
                  opacity: extraInView ? 1 : 0,
                  y: extraInView ? 0 : 20,
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s`,
                }}
                className="glass-panel p-4 rounded-2xl border border-white/5 text-left hover:border-fuchsia-500/30 hover:shadow-fuchsia-500/5 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Micro purple flash inside cards */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-fuchsia-500/5 rounded-bl-full blur-sm" />
                
                <span className="font-display text-sm font-bold text-white group-hover:text-fuchsia-400 transition-colors block">
                  {item.name}
                </span>
                
                <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest block mt-2">
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
