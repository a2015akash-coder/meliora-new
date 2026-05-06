"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function ProjectTypes() {
  const projects = [
    {
      title: "Commercial & Industrial",
      image: "https://picsum.photos/seed/commercial-industrial/800/1000",
      className: "md:col-span-8 md:row-span-2 h-[400px] md:h-[600px]",
    },
    {
      title: "Residential",
      image: "https://picsum.photos/seed/residential-architecture/800/600",
      className: "md:col-span-4 h-[300px] md:h-[288px]",
    },
    {
      title: "Rural",
      image: "https://picsum.photos/seed/rural-landscape/800/600",
      className: "md:col-span-4 h-[300px] md:h-[288px]",
    },
    {
      title: "Mixed Use",
      image: "https://picsum.photos/seed/mixed-use-urban/800/600",
      className: "md:col-span-4 h-[300px] md:h-[400px]",
    },
    {
      title: "Tourism",
      image: "https://picsum.photos/seed/tourism-development/1200/800",
      className: "md:col-span-8 h-[300px] md:h-[400px]",
    },
    {
      title: "Rezoning",
      image: "https://picsum.photos/seed/rezoning-urban/800/600",
      className: "md:col-span-6 h-[300px] md:h-[400px]",
    },
    {
      title: "Regional & State Significant Development",
      image: "https://picsum.photos/seed/state-significant/800/600",
      className: "md:col-span-6 h-[300px] md:h-[400px]",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Project{" "}
              <span className="italic text-brand-khaki">Diversity</span>
            </h2>
            <p className="text-white/70 leading-relaxed max-w-md">
              We deliver planning expertise across a broad range of projects
              throughout multiple council areas across NSW.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`relative group overflow-hidden rounded-2xl ${project.className}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
                <h3 className="font-serif text-2xl lg:text-3xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.title}
                </h3>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white/10 backdrop-blur-sm">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
