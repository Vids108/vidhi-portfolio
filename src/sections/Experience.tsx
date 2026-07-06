import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Briefcase, Calendar, Award, Tag } from "lucide-react";
import experiencesData from "../data/experience.json";
import { Experience } from "../types";

interface TimelineCardProps {
  key?: string | number;
  exp: Experience;
  index: number;
}

function TimelineCard({ exp, index }: TimelineCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row gap-8 items-stretch w-full mb-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Anchor Dot Node */}
      <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-950 border-4 border-violet-500 z-10 flex items-center justify-center timeline-line-glow">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      </div>

      {/* Date Block (Desktop side) */}
      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : isEven ? -30 : 30,
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
        }}
        className={`w-full md:w-1/2 flex items-center px-12 ${
          isEven ? "md:justify-end text-right" : "md:justify-start text-left"
        } pl-12 md:pl-0`}
      >
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono w-fit mx-0 md:mx-auto lg:mx-0">
            <Calendar className="w-3 h-3 text-violet-400" />
            {exp.duration}
          </div>
          <span className="font-mono text-xs text-slate-500 tracking-wider font-semibold mt-1">
            {exp.company}
          </span>
        </div>
      </motion.div>

      {/* Card Block */}
      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : isEven ? 30 : -30,
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}
        className="w-full md:w-1/2 pl-12 md:pl-0"
      >
        <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 rounded-bl-3xl blur-xl" />

          {/* Heading */}
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {exp.role}
              </h3>
              <p className="font-mono text-xs text-slate-400 font-semibold">
                {exp.company}
              </p>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-2.5 text-slate-300 text-xs font-sans leading-relaxed mb-6 pl-1 list-none">
            {exp.responsibilities.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Achievements Highlight */}
          {exp.achievements && exp.achievements.length > 0 && (
            <div className="mb-6 p-3 rounded-xl bg-violet-500/5 border border-violet-500/10">
              <span className="font-mono text-[10px] font-bold text-violet-300 uppercase tracking-widest flex items-center gap-1 mb-2">
                <Award className="w-3.5 h-3.5 text-violet-400" /> Key Outcomes
              </span>
              <ul className="space-y-1.5 text-slate-400 text-xs font-sans">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400 text-sm">✓</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech/Skills Tags */}
          <div className="flex flex-wrap gap-1.5">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 flex items-center gap-1 w-full mb-1">
              <Tag className="w-2.5 h-2.5 text-slate-500" /> Tech Utilized:
            </span>
            {exp.skillsUsed.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-[10px] font-mono font-medium text-slate-400 hover:text-white hover:border-violet-500/30 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const timelineRef = useRef(null);

  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
            Journey
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-white">
            Professional <span className="gradient-text-purple-blue">Experience</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm mt-4">
            A chronological timeline of my engineering roles, technical milestones, and student leadership contributions.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div ref={timelineRef} className="relative w-full max-w-5xl mx-auto mt-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-violet-600 via-fuchsia-500 to-cyan-400 -translate-x-1/2 opacity-30" />

          {/* Timeline Cards */}
          <div className="flex flex-col w-full relative">
            {(experiencesData as Experience[]).map((exp, index) => (
              <TimelineCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
