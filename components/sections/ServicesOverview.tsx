"use client";

import { motion } from "motion/react";

const clients = [
  "Developers",
  "Landowners",
  "Architects and Designers",
  "Consultants",
  "Real Estate Agencies",
  "Legal and Advisory Teams",
  "Councils and Government Clientele",
  "Project Teams on Complex NSW Developments",
];

const services = [
  "Advisory services and early-stage assessments",
  "Planning assessments and statutory reports",
  "Social Impact Assessments (SIA)",
  "Community and stakeholder engagement",
  "Supplementary and specialist planning services",
  "Ongoing advisory and subscription-based support",
];

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-offwhite py-24 md:py-32">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-16">
          {/* Left — Who We Work With */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/50">
              Who We Work With
            </p>

            <h2 className="mb-10 font-serif text-4xl leading-[1.05] tracking-tight text-brand-charcoal sm:text-5xl lg:text-[3.5rem]">
              Integrated advisory{" "}
              <span className="italic text-brand-olive">for complex</span> NSW
              projects.
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {clients.map((client, i) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-brand-charcoal/[0.06] bg-white/60 px-5 py-4 text-sm font-medium text-brand-charcoal transition-all duration-300 hover:border-brand-olive/20 hover:bg-white"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/50">
              Our Services
            </p>

            <p className="mb-10 max-w-lg text-base leading-7 text-brand-charcoal/60">
              We provide planning, social impact and engagement services to
              support projects at all stages — from early feasibility through to
              approvals and strategic advisory.
            </p>

            <div className="flex flex-col gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex items-start gap-4 rounded-xl border border-brand-charcoal/[0.06] bg-white/60 px-5 py-4 transition-all duration-300 hover:border-brand-olive/20 hover:bg-white"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-charcoal/[0.06] text-[10px] font-bold text-brand-charcoal/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium leading-6 text-brand-charcoal">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#services"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-charcoal/50 transition-colors hover:text-brand-olive"
            >
              Learn more →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
