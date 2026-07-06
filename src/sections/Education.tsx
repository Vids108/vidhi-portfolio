import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import educationData from "../data/education.json";
import { Education } from "../types";

interface EducationCardProps {
  key?: string | number;
  edu: Education;
  index: number;
}

function EducationCard({ edu, index }: EducationCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
      className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden group border border-white/5"
    >
      {/* Decorative top-right corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 rounded-bl-3xl blur-xl" />

      {/* Grade ribbon */}
      {edu.grade && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold tracking-wider">
          {edu.grade}
        </div>
      )}

      {/* Header info */}
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div className="max-w-[70%]">
          <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
            {edu.degree}
          </h3>
          <p className="font-sans text-xs text-slate-400 font-medium mt-1">
            {edu.institution}
          </p>
        </div>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mb-6">
        <Calendar className="w-3.5 h-3.5 text-slate-600" />
        {edu.duration}
      </div>

      {/* Relevant Coursework */}
      {edu.coursework && edu.coursework.length > 0 && (
        <div className="mb-6">
          <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1 mb-2.5">
            <BookOpen className="w-3 h-3 text-slate-500" /> Relevant Coursework:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {edu.coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-400"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Academic Highlights */}
      {edu.highlights && edu.highlights.length > 0 && (
        <div className="p-3.5 rounded-xl bg-violet-500/5 border border-violet-500/10">
          <span className="font-mono text-[9px] font-bold text-violet-300 uppercase tracking-widest flex items-center gap-1 mb-2">
            <Award className="w-3 h-3 text-violet-400" /> Academic Highlights
          </span>
          <ul className="space-y-1.5 text-slate-400 text-xs font-sans">
            {edu.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 text-sm leading-none mt-0.5">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-16 relative overflow-hidden">
      {/* Background decoration glow */}
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
            Education
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-white">
            Academic <span className="gradient-text-purple-blue">Credentials</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm mt-4">
            A solid academic foundation backing up my technical expertise and problem-solving methodologies.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {(educationData as Education[]).map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
