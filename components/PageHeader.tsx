import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <p
        className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-3"
        style={{ color: "#8B6347", fontFamily: "'Poppins', sans-serif" }}
      >
        ✦&nbsp; {eyebrow}
      </p>
      <h1
        className="text-[clamp(2.25rem,8vw,4rem)] font-black leading-[1.05] tracking-tight text-white mb-4 break-words"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {title}
      </h1>
      <p
        className="text-sm sm:text-base font-light max-w-lg"
        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
      >
        {description}
      </p>
      <div
        className="mt-7 sm:mt-8 h-px"
        style={{ background: "linear-gradient(to right, #8B6347, transparent)" }}
      />
    </section>
  );
}
