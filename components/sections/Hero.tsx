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
      className="relative w-full overflow-hidden bg-brand-charcoal pt-28 text-white md:pt-32"
    >
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,250,250,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.9) 1px, transparent 1px)",
          backgroundSize: "4.75rem 4.75rem",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="flex min-h-[420px] flex-col justify-between rounded-[1.35rem] border border-white/[0.06] bg-brand-charcoal-light/75 p-7 shadow-2xl shadow-black/25 backdrop-blur-sm sm:p-10 lg:col-span-8 lg:min-h-[500px] lg:p-12">
            <div>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-beige/90">
                Strategic Planning & Development Approvals
              </p>
              <h1 className="max-w-3xl font-serif text-[2.55rem] leading-[1.06] tracking-tight text-brand-beige sm:text-5xl md:text-6xl lg:text-[4.65rem]">
                Position your project for approval{" "}
                <span className="block italic text-brand-khaki">
                  with clarity.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/58 sm:text-lg">
                From exempt and CDC through to local DA, RSD and SSD, we provide
                the clarity needed to move forward with confidence.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-4 border border-brand-beige bg-brand-beige px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-charcoal transition-all duration-300 hover:bg-transparent hover:text-brand-beige"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center text-[11px] font-bold uppercase tracking-[0.18em] text-brand-beige transition-colors duration-300 hover:text-brand-khaki"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-brand-charcoal-light shadow-2xl shadow-black/25 lg:col-span-4 lg:min-h-[500px]">
            <Image
              src="https://picsum.photos/seed/sydney-cbd-waterfront-planning/900/1200"
              alt="Aerial view of a dense waterfront city district"
              fill
              priority
              referrerPolicy="no-referrer"
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/18 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-beige">
                NSW Planning Context
              </p>
              <p className="mt-1 text-sm text-white/60">
                Regional constraints, approvals pathways and site feasibility.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.15rem] border border-white/[0.06] bg-brand-charcoal-light/80 p-6 shadow-xl shadow-black/20 sm:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">
                  {stat.label}
                </p>
                <p className="mt-2 font-serif text-3xl leading-none text-brand-beige sm:text-4xl">
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
