import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export const metadata = { title: "About — Luxe Realty" };

const team = [
  { name: "Marcus Elliot", role: "Founder & CEO", image: "https://picsum.photos/seed/team1/400/400" },
  { name: "Serena Walsh", role: "Head of Acquisitions", image: "https://picsum.photos/seed/team2/400/400" },
  { name: "Daniel Park", role: "Senior Property Advisor", image: "https://picsum.photos/seed/team3/400/400" },
  { name: "Aisha Fontaine", role: "Client Relations Director", image: "https://picsum.photos/seed/team4/400/400" },
];

export default function AboutPage() {
  return (
    <main style={{ background: "#0A1628", minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.4em] uppercase mb-3"
          style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
        >
          ✦ &nbsp; Our Story
        </p>
        <h1
          className="text-5xl md:text-6xl font-black leading-none tracking-tight text-white mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          About <span style={{ color: "#C4A882" }}>Luxe</span>
        </h1>
        <p
          className="text-sm font-light max-w-lg"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
        >
          Founded in 2009, Luxe Realty has become the benchmark for luxury real estate advisory — trusted by clients across four continents.
        </p>
        <div className="mt-8 h-px" style={{ background: "linear-gradient(to right, #8B6347, transparent)" }} />
      </section>

      {/* Mission */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We don't just sell homes. <br />
              <span style={{ color: "#C4A882" }}>We craft legacies.</span>
            </h2>
            <p
              className="text-sm font-light leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Poppins', sans-serif" }}
            >
              Luxe Realty was born from a simple belief: that every client deserves an experience as exceptional as the property they seek. We combine deep market intelligence with white-glove service to deliver outcomes that exceed expectations.
            </p>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Poppins', sans-serif" }}
            >
              With over $4.2 billion in transactions and a network spanning 30+ markets, our advisors bring unrivaled expertise to every engagement — whether you're buying your first luxury residence or expanding a global portfolio.
            </p>
          </div>
          <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/about/800/600"
              alt="Luxe Realty Office"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,22,40,0.3)" }} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2
          className="text-3xl font-black text-white mb-10"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Meet the <span style={{ color: "#C4A882" }}>Team</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 border"
                style={{ borderColor: "rgba(196,168,130,0.15)" }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
              </div>
              <p
                className="text-sm font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {member.name}
              </p>
              <p
                className="text-xs font-light"
                style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2
          className="text-3xl font-black text-white mb-10"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Client <span style={{ color: "#C4A882" }}>Stories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 border"
              style={{ background: "rgba(15,30,56,0.6)", borderColor: "rgba(196,168,130,0.15)" }}
            >
              <p
                className="text-sm font-light leading-relaxed mb-6 italic"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Poppins', sans-serif" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border"
                  style={{ borderColor: "#8B6347" }}>
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <p className="text-xs font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</p>
                  <p className="text-xs font-light" style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
