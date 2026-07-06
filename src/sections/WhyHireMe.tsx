import { ReactNode, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Brain, Zap, Users, ShieldAlert, Award, MessageSquare, Handshake, Network } from "lucide-react";

interface ReasonCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  bgGlow: string;
  borderColor: string;
  textColor: string;
}

const reasons: ReasonCard[] = [
  {
    id: "problem-solver",
    title: "Analytical Problem Solver",
    tagline: "DSA & Algorithmic Grit",
    description: "Strong foundation in data structures, algorithms, and complexity. Solved many complex algorithmic challenges with an efficient, optimal-first approach.",
    icon: <Brain className="w-6 h-6 text-violet-400" />,
    bgGlow: "group-hover:bg-violet-500/10",
    borderColor: "group-hover:border-violet-500/30",
    textColor: "text-violet-400",
  },
  {
    id: "quick-learner",
    title: "Voracious & Fast Learner",
    tagline: "Rank Holder Scholar",
    description: "University Rank Holder and MCA student at IGDTUW with flawless academic records. Adaptable and fast in adopting new frameworks, APIs, and stacks.",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    bgGlow: "group-hover:bg-cyan-500/10",
    borderColor: "group-hover:border-cyan-500/30",
    textColor: "text-cyan-400",
  },
  {
    id: "leadership",
    title: "Proven Leadership Profile",
    tagline: "Mentored & Guided Peers",
    description: "DigiDeity's 'Most Innovative Intern' and mentor at Brain Masters. Managed campus tech campaigns and student forums.",
    icon: <Award className="w-6 h-6 text-emerald-400" />,
    bgGlow: "group-hover:bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/30",
    textColor: "text-emerald-400",
  },
  {
    id: "team-player",
    title: "Collaborative Team Player",
    tagline: "Agile Sync & Delivery",
    description: "Excellent collaborative track record with cross-functional project leads, developers, and designers to launch high-performance production sites.",
    icon: <Handshake className="w-6 h-6 text-rose-400" />,
    bgGlow: "group-hover:bg-rose-500/10",
    borderColor: "group-hover:border-rose-500/30",
    textColor: "text-rose-400",
  },
  {
    id: "communication",
    title: "Stellar Communication",
    tagline: "State-Level Speaker",
    description: "University public speaking champion and prize-winning orator. Skilled at translating complex tech constraints into humanized business insights.",
    icon: <MessageSquare className="w-6 h-6 text-amber-400" />,
    bgGlow: "group-hover:bg-amber-500/10",
    borderColor: "group-hover:border-amber-500/30",
    textColor: "text-amber-400",
  },
];

export default function WhyHireMe() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} id="why-hire-me" className="py-16 relative overflow-hidden">
      {/* Background decoration radial glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
            Professional Values
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-white">
            Why <span className="gradient-text-purple-blue">Hire Me</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm mt-4">
            A combination of rigid technical fundamentals, rapid delivery metrics, and high-quality leadership traits.
          </p>
        </div>

        {/* Bento/Grid style representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              style={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 40,
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
              }}
              className={`group relative glass-panel rounded-2xl p-6 border border-white/5 transition-all duration-300 flex flex-col justify-between h-72 overflow-hidden cursor-default ${reason.borderColor}`}
            >
              {/* Soft background glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${reason.bgGlow}`} />

              <div className="relative z-10 space-y-4 text-left">
                {/* Icon block */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5 w-fit group-hover:bg-slate-900 transition-colors duration-300">
                  {reason.icon}
                </div>

                {/* Typography */}
                <div className="space-y-1">
                  <span className={`block font-mono text-[9px] font-black uppercase tracking-widest ${reason.textColor}`}>
                    {reason.tagline}
                  </span>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {reason.title}
                  </h3>
                </div>

                <p className="text-slate-400 font-sans text-xs leading-relaxed line-clamp-4">
                  {reason.description}
                </p>
              </div>

              {/* Decorative detail line */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-600 to-cyan-500 transition-all duration-500 ease-out" />
            </motion.div>
          ))}

          {/* Call-to-action Card */}
          <motion.div
            style={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 40,
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${reasons.length * 0.1}s`,
            }}
            className="group relative rounded-2xl p-6 bg-gradient-to-tr from-violet-950 to-slate-950 border border-violet-500/20 shadow-lg shadow-violet-950/20 flex flex-col justify-between h-72 text-left"
          >
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-violet-500/10 border border-violet-500/20 w-fit text-violet-400">
                <Network className="w-6 h-6 animate-pulse" />
              </div>

              <div className="space-y-1">
                <span className="block font-mono text-[9px] font-black uppercase tracking-widest text-violet-300">
                  Ready to deploy
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  Let's craft the future of tech.
                </h3>
              </div>

              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Looking for an ambitious software engineer who understands databases, APIs, and frontend visual perfection? Reach out today to schedule an interview!
              </p>
            </div>

            <a
              href="#contact"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wider uppercase text-center transition-all duration-300 shadow-md shadow-violet-500/10"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
