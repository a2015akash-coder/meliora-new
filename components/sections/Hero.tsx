import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "2019", label: "Established" },
  { value: "1000+", label: "Successful Projects" },
  { value: "128", label: "NSW Council Areas Covered" },
  { value: "3000+", label: "Expert Consultations" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-brand-beige pt-28 text-brand-charcoal md:pt-32"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,29,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(28,29,31,0.6) 1px, transparent 1px)",
          backgroundSize: "4.75rem 4.75rem",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-khaki/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Main Content Card */}
          <div className="flex min-h-[420px] flex-col justify-between rounded-[1.35rem] border border-brand-charcoal/[0.06] bg-white/70 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10 lg:col-span-7 lg:min-h-[520px] lg:p-12">
            <div>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-charcoal/70">
                Strategic Planning & Development Approvals
              </p>

              <h1 className="max-w-3xl font-serif text-[2.55rem] leading-[1.03] tracking-tight text-brand-charcoal sm:text-5xl md:text-6xl lg:text-[4.65rem]">
                Position your project for approval{" "}
                <span className="block italic text-brand-olive">
                  with clarity.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-brand-charcoal/55 sm:text-lg">
                From exempt and CDC through to local DA, RSD and SSD, we provide
                the clarity needed to move forward with confidence.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-brand-charcoal/45">
                Focusing on strategic planning and development advice across both
                the private and public sectors.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-4 border border-brand-charcoal bg-brand-charcoal px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-beige transition-all duration-300 hover:bg-transparent hover:text-brand-charcoal"
              >
                Discuss Your Project

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center text-[11px] font-bold uppercase tracking-[0.18em] text-brand-charcoal/70 transition-colors duration-300 hover:text-brand-olive"
              >
                Book a 15-Minute Strategy Call
              </Link>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-brand-charcoal/[0.06] bg-brand-offwhite shadow-[0_25px_80px_rgba(0,0,0,0.06)] transition-transform duration-700 hover:-translate-y-1 lg:col-span-5 lg:min-h-[560px]">
            <Image
              src="https://res.cloudinary.com/dvtbbuxon/image/upload/v1778074779/ChatGPT_Image_May_6_2026_07_08_20_PM_iq5x45.png"
              alt="Aerial view of NSW urban development and planning context"
              fill
              priority
              quality={92}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center scale-[1.02]"
            />

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/35 to-transparent" />

            {/* Card Content */}
            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-beige">
                NSW Planning Context
              </p>

              <p className="mt-2 max-w-[18rem] text-sm leading-6 text-white/75">
                Regional constraints, approvals pathways and site feasibility.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.15rem] border border-brand-charcoal/[0.06] bg-white/70 p-6 shadow-md shadow-black/[0.03] backdrop-blur-sm sm:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-charcoal/40">
                  {stat.label}
                </p>

                <p className="mt-2 font-serif text-3xl leading-none text-brand-charcoal sm:text-4xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
