import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, stats } from "@/data/services";

export const metadata = { title: "Services — Luxe Realty" };

export default function ServicesPage() {
  return (
    <main style={{ background: "#0A1628", minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.4em] uppercase mb-3"
          style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
        >
          ✦ &nbsp; What We Offer
        </p>
        <h1
          className="text-5xl md:text-6xl font-black leading-none tracking-tight text-white mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Our <span style={{ color: "#C4A882" }}>Services</span>
        </h1>
        <p
          className="text-sm font-light max-w-lg"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
        >
          End-to-end real estate expertise — from discovery to closing — tailored to your lifestyle and goals.
        </p>
        <div className="mt-8 h-px" style={{ background: "linear-gradient(to right, #8B6347, transparent)" }} />
      </section>

      {/* Services list */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="space-y-0">
          {services.map((service) => (
            <div
              key={service.id}
              className="group py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16 border-t"
              style={{ borderColor: "rgba(196,168,130,0.15)" }}
            >
              <span
                className="text-7xl font-black leading-none shrink-0 transition-colors duration-300 group-hover:text-[#8B6347]"
                style={{ color: "rgba(196,168,130,0.15)", fontFamily: "'Poppins', sans-serif" }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 md:pt-3 flex-1">
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed max-w-xl"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: "rgba(196,168,130,0.15)" }} />
        </div>
      </section>

      {/* Stats */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-8 border rounded-2xl"
              style={{ borderColor: "rgba(196,168,130,0.15)", background: "rgba(15,30,56,0.5)" }}>
              <p
                className="text-4xl font-black mb-2"
                style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
              >
                {stat.value.toLocaleString()}{stat.suffix}
              </p>
              <p
                className="text-xs font-light tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
