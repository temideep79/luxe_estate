"use client";

import { motion } from "framer-motion";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-32 relative" style={{ background: "#0d1f35" }}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.4em] uppercase mb-4"
              style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
            >
              ✦ &nbsp; Curated Selection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
            >
              Featured
              <br />
              <span style={{ color: "#C4A882" }}>Properties</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            href="#"
            className="group relative inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase pb-1 self-end"
            style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
          >
            View All Properties
            <span className="text-lg" style={{ color: "#8B6347" }}>→</span>
            <span
              className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ background: "#8B6347" }}
            />
          </motion.a>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 h-px origin-left"
          style={{ background: "linear-gradient(to right, #8B6347, transparent)" }}
        />
      </div>

      {/* Properties grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative oversized number */}
      <div
        className="absolute top-8 right-8 text-[20vw] font-black leading-none select-none pointer-events-none"
        style={{
          color: "rgba(139,99,71,0.06)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        06
      </div>
    </section>
  );
}
