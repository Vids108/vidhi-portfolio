import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronLeft, ChevronRight, Award, ExternalLink } from "lucide-react";
import certificatesData from "../data/certificates.json";

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificatesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificatesData.length) % certificatesData.length
    );
  };

  return (
    <section ref={sectionRef} id="certifications" className="py-16 relative overflow-hidden">
      {/* Background decoration glow */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header and navigation controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <span className="font-mono text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
              Credentials
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-white">
              Professional <span className="gradient-text-purple-blue">Certifications</span>
            </h2>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/25 transition-all"
              aria-label="Previous Certification"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/25 transition-all"
              aria-label="Next Certification"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto min-h-[380px] flex items-center justify-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Slide left side - Visual card */}
            <motion.div
              key={`img-${currentIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-slate-950"
            >
              <img
                src={certificatesData[currentIndex].image}
                alt={certificatesData[currentIndex].title}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center gap-3">
                <div className="p-2 rounded-lg bg-violet-600 text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-widest block">
                    Verified Issuer
                  </span>
                  <span className="font-sans text-xs font-semibold text-white">
                    {certificatesData[currentIndex].organization}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Slide right side - Description details */}
            <motion.div
              key={`detail-${currentIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col text-left justify-center h-full space-y-4"
            >
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/25 w-fit">
                {certificatesData[currentIndex].date}
              </span>

              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {certificatesData[currentIndex].title}
              </h3>

              <p className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">
                Issued By: {certificatesData[currentIndex].organization}
              </p>

              <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed">
                Demonstrates advanced competence in technical domains, continuous upskilling, and practical application of standards in production environments.
              </p>

              {certificatesData[currentIndex].credentialLink && (
                <a
                  href={certificatesData[currentIndex].credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white/5 hover:bg-violet-600 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500 font-mono text-xs font-semibold tracking-wide transition-all duration-300 w-fit"
                >
                  Verify Credentials
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
          </div>
        </div>

        {/* Navigation Indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {certificatesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-violet-500" : "w-2 bg-slate-800"
              }`}
              aria-label={`Go to certificate slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
