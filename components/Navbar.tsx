"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string, onDone?: () => void) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onDone?.();
}

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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo — scrolls to top */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2 group"
        >
          <span
            className="text-2xl font-black tracking-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            LUXE<span style={{ color: "#C4A882" }}>.</span>
          </span>
          <span
            className="text-xs font-light tracking-[0.3em] text-white/50 uppercase"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Realty
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => smoothScroll(e, href)}
              className="relative text-sm font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300 group"
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
          href="#contact"
          onClick={(e) => smoothScroll(e, "#contact")}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
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
          <span className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
          <span className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-6"
          style={{ background: "rgba(10,22,40,0.97)" }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => smoothScroll(e, href, () => setMenuOpen(false))}
              className="text-lg font-semibold tracking-widest uppercase text-white/80"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, "#contact", () => setMenuOpen(false))}
            className="mt-2 w-full text-center py-3 rounded-full text-sm font-bold uppercase tracking-widest"
            style={{ background: "#8B6347", color: "#fff" }}
          >
            Book a Tour
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
