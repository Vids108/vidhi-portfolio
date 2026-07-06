import { motion } from "motion/react";

export default function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Moving Grid Pattern */}
      <div className="absolute inset-0 grid-background opacity-70" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30" />

      {/* Floating Aurora Blob 1 (Purple - Top Left) */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7C3AED] aurora-blob"
      />

      {/* Floating Aurora Blob 2 (Blue - Bottom Right) */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#38BDF8] aurora-blob"
      />

      {/* Floating Aurora Blob 3 (Cyan - Center Right) */}
      <motion.div
        animate={{
          x: [0, -30, -70, 0],
          y: [0, -80, 50, 0],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-cyan-500 aurora-blob"
      />

      {/* Ambient Gradient Highlights */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030712]/50 to-[#030712] opacity-80" />
    </div>
  );
}
