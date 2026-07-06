import { useEffect, useState, useRef, ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { 
  Trophy, 
  Code, 
  Award, 
  GraduationCap, 
  Mic, 
  Terminal, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  BookOpen
} from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon: ReactNode;
}

function StatCounter({ value, suffix = "", label, icon }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // 1.5 seconds
      const incrementTime = Math.max(Math.floor(duration / value), 15);
      const timer = setInterval(() => {
        start += 1;
        setCount(Math.min(start, value));
        if (start >= value) {
          clearInterval(timer);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="relative group overflow-hidden rounded-2xl bg-slate-900/40 border border-white/5 p-6 backdrop-blur-md hover:border-violet-500/30 transition-all duration-500 flex flex-col justify-between h-36"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-xl group-hover:bg-violet-600/15 transition-all duration-500 pointer-events-none" />
      
      <div className="flex justify-between items-center">
        <div className="text-violet-400 p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 group-hover:bg-violet-500/20 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      <div>
        <div className="font-display text-3xl font-black text-white tracking-tight">
          {count}
          {suffix}
        </div>
        <div className="font-sans text-xs text-slate-400 tracking-wide mt-1 group-hover:text-slate-300 transition-colors">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });

  const techHighlights = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
    { category: "Frontend", items: ["React", "Tailwind CSS", "Vite"] },
    { category: "Backend & DB", items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"] },
    { category: "Core CS", items: ["Data Structures", "Algorithms", "OOP"] },
  ];

  const coreStrengths = [
    { title: "DSA & Algorithmic Grit", desc: "Expertise in complexity analysis, system optimization, and writing efficient, robust code." },
    { title: "State-Level Orator", desc: "Award-winning public speaker representing at state level. Exceptional communicator." },
    { title: "Creative Leader", desc: "University Ist Rank Holder and 'Most Innovative Intern' known for team mentoring and adaptability." },
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-violet-300">
              About Me
            </span>
          </motion.div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mt-2 leading-none">
            Driven by Code, <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Defined by Execution</span>
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8"
        >
          {/* Card 1: Professional Narrative & Vision (Col-span-8) */}
          <motion.div
            style={{
              opacity: isContainerInView ? 1 : 0,
              y: isContainerInView ? 0 : 30,
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
            className="lg:col-span-8 group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 md:p-10 backdrop-blur-md hover:border-violet-500/20 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                  Professional Narrative & Vision
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate <span className="text-violet-400 font-semibold">Software Engineer</span>, Full Stack Developer, and Master of Computer Applications (MCA) student at <span className="text-cyan-400 font-semibold">IGDTUW</span>, Delhi. My journey is defined by a relentless drive to construct high-integrity code, translate complex algorithmic models, and engineer digital experiences that scale.
                </p>
                <p>
                  With a solid academic foundation in Computer Science, I thrive in the intersection of robust backend system architecture and fluid frontend interfaces. I specialize in building end-to-end full stack web applications, configuring fast REST APIs with Node/FastAPI, and designing robust database layers.
                </p>
                <p>
                  As an AI and backend enthusiast, I’m deeply committed to exploring system architectures and artificial intelligence integrations. Having won the prestigious <span className="text-violet-400 font-semibold">"Most Innovative Intern"</span> title and graduated as a <span className="text-cyan-400 font-semibold">University Rank Holder</span>, I approach every engineering challenge with an analytical, optimal-first mindset.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Analytical Problem Solving</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <span>Scalable System Design</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-400" />
                <span>AI Engineering</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Academic & Education Highlights (Col-span-4) */}
          <motion.div
            style={{
              opacity: isContainerInView ? 1 : 0,
              y: isContainerInView ? 0 : 30,
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
            className="lg:col-span-4 group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 backdrop-blur-md hover:border-cyan-500/20 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Academic Foundation
                </h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-4 border-l border-violet-500/30">
                  <span className="font-mono text-[10px] font-bold text-violet-400 uppercase tracking-widest block mb-1">
                    Present
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-200">
                    Master of Computer Applications
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    IGDTUW • University Scholar 
                  </p>
                </div>

                <div className="relative pl-4 border-l border-cyan-500/30">
                  <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                    Graduated
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-200">
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    Guru Jambheshwar University of Science and Technology • First Class Degree
                  </p>
                </div>

                <div className="relative pl-4 border-l border-fuchsia-500/30">
                  <span className="font-mono text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">
                    Distinction
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-200">
                    Senior Secondary Board
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    Non Medical Student
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Academic Excellence Certified
              </span>
            </div>
          </motion.div>

          {/* Card 3: Core Pillars & Strengths (Col-span-4) */}
          <motion.div
            style={{
              opacity: isContainerInView ? 1 : 0,
              y: isContainerInView ? 0 : 30,
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
            className="lg:col-span-4 group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 backdrop-blur-md hover:border-cyan-500/20 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Core Pillars
                </h3>
              </div>

              <div className="space-y-4">
                {coreStrengths.map((strength, index) => (
                  <div key={index} className="space-y-1 text-left">
                    <h4 className="font-sans text-sm font-bold text-slate-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {strength.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center gap-2">
              <Mic className="w-4 h-4 text-violet-400" />
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                State-Level Speaker
              </span>
            </div>
          </motion.div>

          {/* Card 4: Key Technologies & Categorized Stack (Col-span-8) */}
          <motion.div
            style={{
              opacity: isContainerInView ? 1 : 0,
              y: isContainerInView ? 0 : 30,
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
            className="lg:col-span-8 group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 md:p-10 backdrop-blur-md hover:border-violet-500/20 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                  Core Tech Stack
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {techHighlights.map((tech, idx) => (
                  <div key={idx} className="space-y-2.5 text-left">
                    <span className="font-mono text-[10px] font-bold text-violet-400 uppercase tracking-widest block">
                      {tech.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.items.map((item) => (
                        <span 
                          key={item}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/5 text-xs text-slate-300 font-mono hover:border-violet-500/30 hover:text-white transition-all duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center gap-2 border-t border-white/5">
              <ShieldCheck className="w-4 h-4 text-violet-400" />
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Fast Learner • Production Standard Best Practices
              </span>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Block */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pt-6">
          <StatCounter
            value={30}
            suffix="+"
            label="Websites and Landing Pages Developed"
            icon={<Code className="w-5 h-5" />}
          />
          <StatCounter
            value={7}
            suffix="+"
            label="Tech Frameworks"
            icon={<Cpu className="w-5 h-5" />}
          />
          <StatCounter
            value={2}
            suffix="+"
            label="Internships / Roles"
            icon={<Trophy className="w-5 h-5" />}
          />
          <StatCounter
            value={6}
            suffix="+"
            label="Honors & Achievements"
            icon={<Mic className="w-5 h-5" />}
          />
        </div>

      </div>
    </section>
  );
}
