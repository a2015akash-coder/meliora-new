import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "2019", label: "Established" },
  { value: "128", label: "NSW Council Areas Covered" },
  { value: "1000+", label: "Successful Projects" },
  { value: "3000+", label: "Expert Consultations" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-brand-charcoal"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "5rem 5rem",
        }}
      />

      {/* Decorative dots */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-khaki/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-khaki/20" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-khaki/40" />
      </div>

      {/* Main content area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl pt-28 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-12">
          {/* Left — Headline */}
          <div className="text-center lg:text-right">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.1] text-white">
              Position your{" "}
              <span className="text-brand-khaki italic">project</span> for
              approval <span className="opacity-50">—</span> with clarity,
              strategy and confidence.
            </h1>
          </div>

          {/* Center — Image with decorative rings */}
          <div className="relative mx-auto flex items-center justify-center">
            <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full border border-white/[0.07]" />
            <div className="absolute w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] lg:w-[340px] lg:h-[340px] rounded-full border border-white/[0.12]" />
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-khaki/60" />
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/professional-portrait/600/600"
                alt="Planning professional"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-khaki/30" />
            <div className="absolute bottom-8 left-4 w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>

          {/* Right — H2, Support line + CTA */}
          <div className="text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <h2 className="text-base sm:text-lg text-white/80 leading-relaxed mb-4 font-light">
              From exempt and CDC through to local DA, RSD and SSD, we provide
              the clarity needed to move forward with confidence.
            </h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-8 font-light">
              Focusing on strategic planning and development advice across both
              the private and public sectors.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-brand-khaki text-brand-charcoal font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded-full border border-brand-khaki hover:bg-transparent hover:text-brand-khaki transition-all"
            >
              Get Started
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pb-10">
          <div className="bg-brand-beige/95 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] divide-y sm:divide-y-0 sm:divide-x divide-brand-charcoal/10">
              {/* Tagline cell */}
              <div className="px-8 py-6 flex items-center">
                <p className="font-serif text-lg sm:text-xl text-brand-charcoal leading-snug">
                  Clear Strategy,
                  <br />
                  <span className="italic text-brand-olive">
                    Stronger Applications
                  </span>
                </p>
              </div>
              {/* Stat cells */}
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-6 py-6 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-brand-charcoal/60 mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
