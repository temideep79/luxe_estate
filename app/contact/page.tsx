import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Contact — Luxe Realty" };

const offices = [
  { city: "New York", address: "432 Park Avenue, Suite 5100", phone: "+1 (212) 555-0100", email: "ny@luxerealty.com" },
  { city: "Los Angeles", address: "9255 Sunset Blvd, Suite 820", phone: "+1 (310) 555-0200", email: "la@luxerealty.com" },
  { city: "Miami", address: "1111 Brickell Ave, Floor 28", phone: "+1 (305) 555-0300", email: "miami@luxerealty.com" },
];

export default function ContactPage() {
  return (
    <main style={{ background: "#0A1628", minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.4em] uppercase mb-3"
          style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
        >
          ✦ &nbsp; Get In Touch
        </p>
        <h1
          className="text-5xl md:text-6xl font-black leading-none tracking-tight text-white mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Contact <span style={{ color: "#C4A882" }}>Us</span>
        </h1>
        <p
          className="text-sm font-light max-w-lg"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
        >
          Our advisors are available to answer any questions and schedule your private consultation.
        </p>
        <div className="mt-8 h-px" style={{ background: "linear-gradient(to right, #8B6347, transparent)" }} />
      </section>

      {/* Form + Info */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact form */}
          <div
            className="rounded-3xl p-8 border"
            style={{ background: "rgba(15,30,56,0.6)", borderColor: "rgba(196,168,130,0.15)" }}
          >
            <h2
              className="text-xl font-bold text-white mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Send a Message
            </h2>
            <form className="flex flex-col gap-4">
              {[
                { label: "Full Name", type: "text", placeholder: "Your full name" },
                { label: "Email Address", type: "email", placeholder: "you@example.com" },
                { label: "Phone Number", type: "tel", placeholder: "+1 (000) 000-0000" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none border transition-colors duration-200 focus:border-[#8B6347] placeholder:text-white/20"
                    style={{
                      background: "rgba(10,22,40,0.8)",
                      borderColor: "rgba(196,168,130,0.2)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
                >
                  I'm interested in
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none border"
                  style={{
                    background: "rgba(10,22,40,0.8)",
                    borderColor: "rgba(196,168,130,0.2)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Property Investment</option>
                  <option>Rental</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your ideal property..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none border resize-none transition-colors duration-200 focus:border-[#8B6347] placeholder:text-white/20"
                  style={{
                    background: "rgba(10,22,40,0.8)",
                    borderColor: "rgba(196,168,130,0.2)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
                style={{
                  background: "#8B6347",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  boxShadow: "0 8px 30px rgba(139,99,71,0.3)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Our Offices
              </h2>
              <p
                className="text-sm font-light"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
              >
                Visit us at any of our locations or reach out digitally.
              </p>
            </div>

            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl p-6 border"
                style={{ background: "rgba(15,30,56,0.5)", borderColor: "rgba(196,168,130,0.15)" }}
              >
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
                >
                  {office.city}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {[
                    { icon: "📍", text: office.address },
                    { icon: "📞", text: office.phone },
                    { icon: "✉️", text: office.email },
                  ].map(({ icon, text }) => (
                    <p
                      key={text}
                      className="text-sm font-light flex items-center gap-2"
                      style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span>{icon}</span> {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
