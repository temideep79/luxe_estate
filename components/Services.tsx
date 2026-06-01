"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { services, stats } from "@/data/services";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden scroll-mt-20" style={{ background: "#0A1628" }}>
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-5"
        style={{
          background: "radial-gradient(ellipse at left, #8B6347, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.4em] uppercase mb-4"
            style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
          >
            ✦ &nbsp; Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            The Luxe
            <br />
            <span style={{ color: "#C4A882" }}>Difference</span>
          </motion.h2>
        </div>

        {/* Services list — asymmetric */}
        <div className="space-y-0 mb-28">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16 border-t"
              style={{ borderColor: "rgba(196,168,130,0.15)" }}
            >
              {/* Oversized number */}
              <span
                className="text-7xl md:text-8xl font-black leading-none shrink-0 transition-colors duration-300 group-hover:text-[#8B6347]"
                style={{ color: "rgba(196,168,130,0.2)", fontFamily: "'Poppins', sans-serif" }}
              >
                {service.number}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3 md:pt-3 flex-1">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-base font-light leading-relaxed max-w-xl"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border shrink-0 mt-3 transition-all duration-300 group-hover:bg-[#8B6347] group-hover:border-[#8B6347]"
                style={{ borderColor: "rgba(196,168,130,0.3)" }}
              >
                <span className="text-white text-lg">→</span>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: "rgba(196,168,130,0.15)" }} />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="text-4xl md:text-5xl font-black mb-2"
                style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="text-sm font-light tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
