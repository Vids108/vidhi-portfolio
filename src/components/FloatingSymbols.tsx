import { motion } from "motion/react";

export default function PremiumBackground() {
  // Generate coordinates for soft drifting background particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Animated Mesh Gradients (Floating Blurred Blobs) */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-violet-600/10 blur-[100px] sm:blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -120, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, 90, -40, 0],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-1/3 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-fuchsia-500/5 blur-[90px] sm:blur-[110px]"
      />

      {/* 2. Interactive/Animated Radial Spotlight (Soft reflection mask) */}
      <div className="absolute inset-0 bg-radial-gradient from-slate-950/0 via-slate-950/40 to-slate-950/95 pointer-events-none" />

      {/* 3. Subtle Animated Grid Line Structure */}
      <motion.div 
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]"
      />

      {/* 4. Elegant Glowing Particles Drifting upwards */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: `${particle.y}%` }}
            animate={{
              opacity: [0, 0.4, 0.4, 0],
              y: [`${particle.y}%`, `${particle.y - 20}%`],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
            style={{
              position: "absolute",
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              backgroundColor: particle.id % 2 === 0 ? "#a78bfa" : "#22d3ee",
              boxShadow: particle.id % 2 === 0 ? "0 0 8px #7c3aed" : "0 0 8px #06b6d4",
            }}
          />
        ))}
      </div>
    </div>
  );
}
