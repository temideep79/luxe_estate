"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden scroll-mt-20"
      style={{ background: "#0b1a2e" }}
    >
      {/* Giant quotation mark */}
      <div
        className="absolute top-0 left-8 md:left-16 text-[20rem] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(139,99,71,0.08)", fontFamily: "'Poppins', sans-serif", lineHeight: 1 }}
      >
        "
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p
            className="text-xs font-semibold tracking-[0.4em] uppercase mb-4"
            style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
          >
            ✦ &nbsp; Client Stories
          </p>
          <h2
            className="text-[clamp(1.8rem,3.5vw,3rem)] font-black leading-none tracking-tight"
            style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
          >
            Voices of
            <span style={{ color: "#8B6347" }}> Excellence</span>
          </h2>
        </motion.div>

        {/* Testimonial content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <blockquote
              className="text-base md:text-lg font-light leading-relaxed mb-10 max-w-3xl mx-auto"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
            >
              "{current.quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2" style={{ borderColor: "#8B6347" }}>
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="text-left">
                <p
                  className="font-bold text-base"
                  style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
                >
                  {current.name}
                </p>
                <p
                  className="text-sm font-light"
                  style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
                >
                  {current.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? "2.5rem" : "0.5rem",
                height: "0.5rem",
                background: i === active ? "#8B6347" : "rgba(139,99,71,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
