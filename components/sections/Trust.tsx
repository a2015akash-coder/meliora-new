"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const associations = [
  "NSW Government",
  "Planning Institute",
  "AIA",
  "UDIA",
  "Property Council",
];

export function Trust() {
  return (
    <section className="py-24 md:py-32 bg-brand-offwhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Association Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500"
        >
          {associations.map((name) => (
            <div
              key={name}
              className="text-lg font-bold font-serif uppercase tracking-widest text-brand-charcoal"
            >
              {name}
            </div>
          ))}
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/50">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-brand-charcoal leading-tight">
            Client <span className="italic text-brand-olive">Reviews</span>
          </h2>
        </motion.div>

        {/* Google Reviews Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-brand-charcoal/[0.06] bg-white/60 p-10 text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-brand-olive text-brand-olive"
              />
            ))}
          </div>
          <p className="text-sm text-brand-charcoal/50 uppercase tracking-widest font-semibold mb-2">
            Google Reviews Integration
          </p>
          <p className="text-sm text-brand-charcoal/40">
            Client testimonials and Google Business Profile reviews will be
            displayed here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
