"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Property } from "@/data/properties";

interface Props {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovered ? 1.03 : 1})`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.5s ease",
      }}
      className="relative rounded-3xl overflow-hidden group"
      data-cursor
    >
      {/* Image */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.3) 60%, transparent 100%)",
          }}
        />

        {/* Tag badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{ background: "#8B6347", color: "#fff", fontFamily: "'Poppins', sans-serif" }}
        >
          {property.tag}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4 right-4">
          <p
            className="text-2xl font-bold text-white mb-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {property.price}
          </p>
          <p
            className="text-base font-semibold text-white leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {property.name}
          </p>
          <p
            className="text-xs font-light tracking-wider text-white/60 mt-0.5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {property.location}
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="flex"
        style={{
          background: "rgba(15,30,56,0.95)",
          borderTop: "1px solid rgba(196,168,130,0.15)",
        }}
      >
        {[
          { label: "Beds", value: property.beds },
          { label: "Baths", value: property.baths },
          { label: "Sq Ft", value: property.sqft },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex-1 py-3 text-center"
            style={{ borderRight: "1px solid rgba(196,168,130,0.15)" }}
          >
            <p
              className="text-base font-bold text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {stat.value}
            </p>
            <p
              className="text-[10px] font-light tracking-widest uppercase"
              style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(196,168,130,0.5)" }}
      />
    </motion.div>
  );
}
