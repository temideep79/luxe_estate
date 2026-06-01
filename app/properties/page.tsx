import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export const metadata = { title: "Properties — Luxe Realty" };

export default function PropertiesPage() {
  return (
    <main style={{ background: "#0A1628", minHeight: "100vh" }}>
      <Navbar />

      <PageHeader
        eyebrow="Our Listings"
        title={<>All <span style={{ color: "#C4A882" }}>Properties</span></>}
        description="Browse our curated collection of extraordinary homes, estates, and investment properties worldwide."
      />

      {/* Grid */}
      <section className="pb-24 sm:pb-32 px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto">
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
