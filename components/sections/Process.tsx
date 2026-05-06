"use client";

import { motion } from "motion/react";
import { Search, Route, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Assess",
    icon: Search,
    desc: "Planning controls, constraints and stakeholder risks are identified early — providing a clear understanding of feasibility and approval pathways.",
  },
  {
    num: "02",
    title: "Position",
    icon: Route,
    desc: "The project is aligned with the most effective approval pathway, with strategy, documentation inputs and engagement considerations coordinated from the outset.",
  },
  {
    num: "03",
    title: "Advise",
    icon: ShieldCheck,
    desc: "Ongoing strategic advice is provided throughout the approvals process — guiding responses, interpreting requirements, and supporting informed decision-making.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-brand-biege py-24 md:py-32">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/50">
            Coordinated Approval Strategy
          </p>

          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-brand-charcoal sm:text-5xl lg:text-[3.5rem]">
            How we position projects{" "}
            <span className="italic text-brand-olive">for approval</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-charcoal/60 sm:text-lg">
            We offer planning, social impact and engagement services as
            standalone support where required. However, our strongest value is in
            bringing these elements together as part of a coordinated approval
            strategy.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-brand-charcoal/45">
            Rather than treating each service in isolation, we consider how
            planning controls, social impacts, stakeholder expectations and
            approval risks interact from the outset. This creates a structured,
            strategy-led approach to positioning projects for approval.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative rounded-2xl border border-brand-charcoal/[0.06] bg-white/60 p-8 transition-all duration-300 hover:border-brand-olive/20 hover:bg-white hover:shadow-lg hover:shadow-black/[0.03] sm:p-10"
              >
                {/* Number + Icon row */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-serif text-5xl text-brand-charcoal/10 transition-colors duration-300 group-hover:text-brand-olive/20">
                    {step.num}
                  </span>
                  <Icon className="h-6 w-6 stroke-[1.5] text-brand-charcoal/30 transition-colors duration-300 group-hover:text-brand-olive" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl tracking-tight text-brand-charcoal">
                  {step.title}
                </h3>

                {/* Divider */}
                <div className="mt-5 h-px w-10 bg-brand-charcoal/10 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-olive/30" />

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-brand-charcoal/55">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom — Meliora meaning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <p className="text-brand-charcoal">
            <span className="text-sm font-bold uppercase tracking-[0.2em]">
              Meliora
            </span>{" "}
            <span className="text-sm italic text-brand-charcoal/50">
              (meh-lee-OR-ah)
            </span>
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-brand-charcoal/50">
            Derived from Latin, meaning &ldquo;towards better things.&rdquo; It
            reflects our approach — refining strategy and pursuing better
            outcomes for complex projects with broader social, economic and
            community impacts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
