import { ReactNode } from "react";

const navLinks = {
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Services: ["Buy Property", "Sell Property", "Rental", "Investment"],
  Contact: ["Book a Tour", "Schedule Consultation", "Media Inquiries", "Support"],
};

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all duration-300 hover:border-[#C4A882] hover:text-[#C4A882]"
      style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)" }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#060e1c" }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top border accent */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(to right, transparent, rgba(196,168,130,0.4), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span
                className="text-3xl font-black tracking-tight text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                LUXE<span style={{ color: "#C4A882" }}>.</span>
              </span>
              <span
                className="text-xs font-light tracking-[0.3em] text-white/40 uppercase"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Realty
              </span>
            </div>
            <p
              className="text-sm font-light leading-relaxed mb-8 max-w-xs"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Poppins', sans-serif" }}
            >
              Curating extraordinary properties for discerning clients since 2009.
              Award-winning service, unmatched results.
            </p>
            <div className="flex gap-3">
              <SocialIcon>ig</SocialIcon>
              <SocialIcon>tw</SocialIcon>
              <SocialIcon>li</SocialIcon>
              <SocialIcon>yt</SocialIcon>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
                style={{ color: "#C4A882", fontFamily: "'Poppins', sans-serif" }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs font-light"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Poppins', sans-serif" }}
          >
            © 2024 Luxe Realty. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs font-light hover:text-white/60 transition-colors"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Poppins', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
