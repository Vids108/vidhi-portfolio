import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Cpu, Mic, Sparkles, Code, Users } from "lucide-react";
import achievementsData from "../data/achievements.json";

const getIconNode = (iconName: string | undefined) => {
  switch (iconName) {
    case "Trophy":
      return <Trophy className="w-5 h-5 text-amber-400" />;
    case "Cpu":
      return <Cpu className="w-5 h-5 text-violet-400" />;
    case "Mic":
      return <Mic className="w-5 h-5 text-cyan-400" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5 text-fuchsia-400" />;
    case "Code":
      return <Code className="w-5 h-5 text-emerald-400" />;
    case "Users":
      return <Users className="w-5 h-5 text-rose-400" />;
    default:
      return <Trophy className="w-5 h-5 text-slate-400" />;
  }
};

export default function Achievements() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-16 relative overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-10">
          <span className="font-mono text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
            Honors
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-white">
            Key <span className="gradient-text-purple-blue">Achievements & Accolades</span>
          </h2>
        </div>

        {/* Achievements Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              style={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30,
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s`,
              }}
              className="group glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between border border-white/5 h-64"
            >
              {/* Top Corner Visual */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-600/5 to-transparent rounded-bl-full blur-md" />

              <div>
                {/* Header with icon and date */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 group-hover:bg-slate-800 transition-colors">
                    {getIconNode(ach.icon)}
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold bg-slate-900 px-2.5 py-1 rounded-full border border-white/5">
                    {ach.date}
                  </span>
                </div>

                {/* Achievement title and organization */}
                <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                  {ach.title}
                </h3>
                <p className="font-mono text-[10px] text-violet-400 font-semibold mt-1">
                  {ach.organization}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-400 font-sans text-xs mt-4 leading-relaxed line-clamp-3">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
