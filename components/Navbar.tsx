"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10, 22, 40, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,168,130,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span
            className="text-xl font-black tracking-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            LUXE<span style={{ color: "#C4A882" }}>.</span>
          </span>
          <span
            className="text-[10px] font-light tracking-[0.3em] text-white/50 uppercase"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Realty
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300 group"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "#C4A882" }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
          style={{ background: "#8B6347", color: "#fff", fontFamily: "'Poppins', sans-serif" }}
        >
          Book a Tour
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-5"
          style={{ background: "rgba(10,22,40,0.97)" }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-widest uppercase text-white/80"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: "#8B6347", color: "#fff" }}
            onClick={() => setMenuOpen(false)}
          >
            Book a Tour
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
