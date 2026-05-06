"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const articles = [
  {
    type: "Case Study",
    title: "Project Outcome Preview",
    excerpt:
      "A case study showcasing planning approval outcomes, strategy and stakeholder coordination across NSW.",
    image: "https://picsum.photos/seed/case-study-planning/600/400",
  },
  {
    type: "Industry Update",
    title: "Regulatory Update Preview",
    excerpt:
      "An industry update on recent changes to planning regulations, approval pathways or policy affecting NSW developments.",
    image: "https://picsum.photos/seed/industry-planning-nsw/600/400",
  },
  {
    type: "Technical Insight",
    title: "Technical Insight Preview",
    excerpt:
      "A technical insight on planning controls, social impact assessment or stakeholder engagement methodology.",
    image: "https://picsum.photos/seed/technical-planning-insight/600/400",
  },
];

export function Insights() {
  return (
    <section id="resources" className="py-24 md:py-32 bg-brand-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
              Insights &{" "}
              <br className="hidden sm:block" />
              Project <span className="italic text-brand-olive">Outcomes</span>
            </h2>
            <p className="text-brand-charcoal-light leading-relaxed max-w-md">
              Insights on planning approvals, social impact and stakeholder
              engagement across NSW — including project outcomes and regulatory
              updates.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href="#resources"
              className="inline-flex items-center gap-3 text-brand-charcoal font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors group pb-4 border-b border-brand-charcoal/20 hover:border-brand-olive"
            >
              View all resources
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-4">
                {article.type}
              </div>
              <h3 className="font-serif text-2xl text-brand-charcoal mb-4 group-hover:text-brand-olive transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
