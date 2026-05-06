"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-brand-olive/5" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-khaki/5 transform -skew-x-12 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-8 leading-[1.1]">
            Planning approvals are <br />
            <span className="italic text-brand-khaki mb-4 mt-2 inline-block">
              no longer
            </span>{" "}
            purely technical.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed max-w-2xl mb-16 font-light"
          >
            If your project involves risk, complexity, or community sensitivity -
            it needs to be positioned properly from the start.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-brand-khaki text-brand-charcoal font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-all duration-300 hover:bg-white text-center"
            >
              Discuss Your Project
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-all duration-300 hover:border-white text-center"
            >
              Book a 15-Minute Strategy Call
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-8"
          >
            <Link
              href="#contact"
              className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300 border-b border-white/20 pb-1"
            >
              Request a fee proposal
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
