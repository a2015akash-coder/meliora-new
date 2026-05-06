"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Early Advice & Planning Risk Mitigation",
    image:
      "https://res.cloudinary.com/dvtbbuxon/image/upload/v1778077736/ChatGPT_Image_May_6_2026_07_58_45_PM_sqff6p.png",
    description:
      "We assess planning controls, constraints and approval pathways — including exempt, CDC, local DA, RSD and SSD — to provide a clear, evidence-based understanding of what is achievable.",
    secondary:
      "Social and stakeholder risks are identified early, enabling informed and cost-effective decisions before significant time or capital is committed.",
    cta: "Know what can be approved — before you commit",
  },
  {
    id: "02",
    title: "Approvals Strategy & Advisory",
    image:
      "https://res.cloudinary.com/dvtbbuxon/image/upload/v1778078185/ChatGPT_Image_May_6_2026_08_03_25_PM_mrgdmj.png",
    description:
      "We provide ongoing strategic advice throughout the approvals process — interpreting requirements, responding to authority feedback, and ensuring the project remains aligned with a realistic, defensible and achievable outcome.",
    secondary:
      "Our approach is tailored to the project’s scale, location and planning context — reducing delays and strengthening the pathway to approval.",
    cta: "Navigate complex approval pathways",
  },
  {
    id: "03",
    title: "Social Impact & Engagement",
    image:
      "https://res.cloudinary.com/dvtbbuxon/image/upload/v1778078176/ChatGPT_Image_May_6_2026_08_06_08_PM_edq9fc.png",
    description:
      "Social and stakeholder risks can determine the outcome of an application.",
    secondary:
      "We integrate SIA and engagement into the strategy where relevant to the project — helping manage expectations, reduce resistance, and support a smoother pathway to approval.",
    cta: "Address stakeholder risks early",
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-[#f6f3ee] py-24 md:py-32">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,20,0.22) 1px, transparent 1px)",
          backgroundSize: "7rem 7rem",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-charcoal">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-charcoal" />
            Strategic Services
          </div>

          <h2 className="font-serif text-[3rem] leading-[0.98] tracking-tight text-brand-charcoal sm:text-[4.8rem]">
            Coordinated planning{" "}
            <span className="italic text-brand-olive">
              and advisory
            </span>{" "}
            across NSW.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-brand-charcoal-soft">
            We provide planning, social impact and stakeholder engagement
            services designed to position projects clearly, strategically and
            confidently for approval.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:col-span-6">
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/[0.06] bg-[#fbfaf7]">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      quality={92}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.03]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-transparent" />

                    {/* Inner Frame */}
                    <div className="absolute inset-6 rounded-[2rem] border border-white/10" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                {/* Service Label */}
                <div className="mb-8 flex items-center gap-5">
                  <div className="h-px w-12 bg-brand-olive/40" />

                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-olive">
                    Service {service.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="max-w-2xl font-serif text-[2.8rem] leading-[1.02] tracking-tight text-brand-charcoal sm:text-[4rem]">
                  {service.title}
                </h3>

                {/* Description */}
                <div className="mt-10 space-y-8">
                  <p className="max-w-xl text-lg leading-9 text-brand-charcoal-soft">
                    {service.description}
                  </p>

                  <p className="max-w-xl text-lg leading-9 text-brand-charcoal-soft">
                    {service.secondary}
                  </p>
                </div>

                {/* CTA */}
                <button className="group mt-12 inline-flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-charcoal transition-colors duration-300 hover:text-brand-olive">
                  {service.cta}

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}