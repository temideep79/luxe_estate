"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden scroll-mt-20" style={{ background: "#0A1628" }}>
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/cta/1600/700"
          alt="Luxury interior"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0A1628 0%, rgba(10,22,40,0.85) 100%)",
          }}
        />
      </div>

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "#8B6347" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.4em] uppercase mb-6"
          style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
        >
          ✦ &nbsp; Begin Your Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-none tracking-tight text-white mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Your Dream Home
          <br />
          <span style={{ color: "#C4A882" }}>Awaits</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg font-light max-w-xl mx-auto mb-12"
          style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Poppins', sans-serif" }}
        >
          Let our world-class advisors match you with the property that defines
          your next chapter. Schedule a private consultation today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#"
            className="relative px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden group transition-all duration-300 hover:scale-105"
            style={{
              background: "#8B6347",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0 0 0 0 rgba(139,99,71,0.5)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px 8px rgba(139,99,71,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(139,99,71,0.5)";
            }}
          >
            Schedule a Consultation
          </a>
          <a
            href="tel:+18005550100"
            className="px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase border transition-all duration-300 hover:scale-105 hover:border-[#C4A882]"
            style={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            +1 (800) 555-0100
          </a>
        </motion.div>
      </div>
    </section>
  );
}
