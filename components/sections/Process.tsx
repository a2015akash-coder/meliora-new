"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Assess",
      desc: "Planning controls, constraints, and stakeholder risks are identified early - providing a clear understanding of feasibility and approval pathways.",
    },
    {
      num: "02",
      title: "Position",
      desc: "The project is aligned with the most effective approval pathway, with strategy, documentation inputs and engagement considerations coordinated from the outset.",
    },
    {
      num: "03",
      title: "Advise",
      desc: "Ongoing strategic advice is provided throughout the approvals process - guiding responses, interpreting requirements, and supporting informed decision-making.",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-offwhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
              How We Position <br />
              Projects For <span className="italic text-brand-olive">Approval</span>
            </h2>
            <div className="text-brand-charcoal-light mb-6">
              <span className="font-bold tracking-widest uppercase">MELIORA</span> <span className="italic text-sm">(meh-lee-OR-ah)</span><br />
              <span className="text-sm">Derived from Latin, meaning “towards better things.”</span>
            </div>
            <p className="text-brand-charcoal-light leading-relaxed max-w-xl">
              It reflects our approach - refining strategy and pursuing better outcomes, particularly for complex projects with broader social, economic and community impacts.
              Rather than treating each service in isolation, we consider how planning controls, social impacts, stakeholder expectations and approval risks interact from the outset.
            </p>
          </div>
        </div>

        {/* Process Diagram */}
        <div className="relative">
          {/* Horizontal Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-brand-charcoal/10" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Node */}
                <div className="flex items-center gap-6 mb-8 lg:mb-12 relative">
                  <div className="w-24 h-24 rounded-full border border-brand-charcoal/20 bg-brand-offwhite flex items-center justify-center font-serif text-3xl text-brand-charcoal relative z-10 group-hover:border-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-all duration-500">
                    {step.num}
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="lg:hidden text-brand-charcoal/20 w-8 h-8" />
                  )}
                </div>

                {/* Content */}
                <div className="pr-8">
                  <h3 className="text-2xl font-serif text-brand-charcoal mb-4 group-hover:text-brand-olive transition-colors">{step.title}</h3>
                  <p className="text-brand-charcoal-light leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
