"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const words = ["Find", "Your", "Perfect", "Place"];

function WordReveal({ word, delay, accent }: { word: string; delay: number; accent?: boolean }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={accent ? { color: "#C4A882" } : {}}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 120]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.55, 0.85]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="https://picsum.photos/seed/hero/1600/900"
          alt="Luxury property hero"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: overlayOpacity,
            background: "linear-gradient(135deg, #0A1628 0%, rgba(10,22,40,0.7) 50%, rgba(10,22,40,0.9) 100%)",
          }}
        />
      </motion.div>

      {/* Floating stat badges */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute top-1/3 right-8 md:right-16 z-10 flex flex-col gap-4"
      >
        {[
          { value: "2,400+", label: "Properties" },
          { value: "98%", label: "Satisfaction" },
          { value: "$4.2B", label: "Volume Sold" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="backdrop-blur-md rounded-2xl px-5 py-4 text-center border"
            style={{
              background: "rgba(10,22,40,0.6)",
              borderColor: "rgba(196,168,130,0.25)",
            }}
          >
            <p
              className="text-2xl font-bold"
              style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
            >
              {stat.value}
            </p>
            <p
              className="text-xs font-light tracking-widest uppercase text-white/60"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.4em] uppercase mb-8"
          style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
        >
          ✦ &nbsp; Award-Winning Real Estate &nbsp; ✦
        </motion.p>

        {/* Giant headline */}
        <h1
          className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.9] tracking-tight mb-8"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <div className="flex gap-[0.2em] flex-wrap">
            <WordReveal word="Find" delay={0.5} />
            <WordReveal word="Your" delay={0.65} />
          </div>
          <div className="flex gap-[0.2em] flex-wrap mt-1">
            <WordReveal word="Perfect" delay={0.8} accent />
            <WordReveal word="Place" delay={0.95} />
          </div>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-lg text-sm font-light leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Poppins', sans-serif" }}
        >
          We curate extraordinary properties for extraordinary people.
          Discover your next chapter with unparalleled expertise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#properties"
            className="px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "#8B6347",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0 8px 40px rgba(139,99,71,0.4)",
            }}
          >
            Explore Properties
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <p
          className="text-xs font-light tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Poppins', sans-serif" }}
        >
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(196,168,130,0.8), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
