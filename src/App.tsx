import { useEffect } from "react";
import { motion } from "motion/react";

// Hooks
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useMousePosition } from "./hooks/useMousePosition";

// Core Layout Components
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import BackgroundDecoration from "./components/BackgroundDecoration";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import ExperienceSection from "./sections/Experience";
import Skills from "./sections/Skills";
import EducationSection from "./sections/Education";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import WhyHireMe from "./sections/WhyHireMe";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const scrollProgress = useScrollProgress();
  
  // High-performance CSS cursor tracking initialization
  useMousePosition();

  // Gentle fade-in for the whole web app on initial load
  useEffect(() => {
    // Scroll progress bar indicator safety
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-violet-600/30 selection:text-white">
      {/* High-Performance Cursor Ambient Glow Tracker */}
      <div className="fixed inset-0 pointer-events-none z-30 cursor-glow" />

      {/* Modern, Dual-Ring Custom Cursor */}
      <CustomCursor />

      {/* Floating Auroras, Moving Grids, and Noise Overlays */}
      <BackgroundDecoration />

      {/* Scroll Progress Indicator Bar */}
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 z-50 shadow-md shadow-violet-500/20"
      />

      {/* Sticky, Glassmorphic, Auto-Active Navbar */}
      <Navbar />

      {/* Core Portfolio Flow Sections */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT ME SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <About />

        {/* EXPERIENCE TIMELINE SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <ExperienceSection />

        {/* TECHNICAL SKILLS SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <Skills />

        {/* EDUCATION CREDENTIALS SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <EducationSection />

        {/* SHOWCASE PROJECTS SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <Projects />

        {/* ACCOLADES & HONORS SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <Achievements />

        {/* CERTIFICATIONS CAROUSEL SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <Certifications />

        {/* WHY HIRE ME SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <WhyHireMe />

        {/* CONTACT COLLABORATION SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <Contact />
      </main>

      {/* FOOTER & ACCELERATED SCROLL UTILITIES */}
      <Footer />
    </div>
  );
}
