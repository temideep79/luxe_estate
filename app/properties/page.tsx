import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export const metadata = { title: "Properties — Luxe Realty" };

export default function PropertiesPage() {
  return (
    <main style={{ background: "#0A1628", minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.4em] uppercase mb-3"
          style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
        >
          ✦ &nbsp; Our Listings
        </p>
        <h1
          className="text-5xl md:text-6xl font-black leading-none tracking-tight text-white mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          All <span style={{ color: "#C4A882" }}>Properties</span>
        </h1>
        <p
          className="text-sm font-light max-w-lg"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
        >
          Browse our curated collection of extraordinary homes, estates, and investment properties worldwide.
        </p>

        {/* Divider */}
        <div
          className="mt-8 h-px"
          style={{ background: "linear-gradient(to right, #8B6347, transparent)" }}
        />
      </section>

      {/* Grid */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
