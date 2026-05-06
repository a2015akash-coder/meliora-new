"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-24 pb-8 border-t border-white/10 text-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"
        >
          <div className="md:col-span-5 pr-8">
            <div className="mb-6">
              <Image
                src="/logos/meliora.webp"
                alt="Meliora Projects"
                width={200}
                height={74}
                className="h-10 w-auto"
                style={{ imageRendering: "auto" }}
              />
            </div>
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
              Established in 2019, Meliora Projects provides strategic and
              statutory planning, social impact and engagement advice across NSW.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-4 text-sm font-medium">
              <li>
                <Link
                  href="#home"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#expertise"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="#resources"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Stay Updated
            </h4>
            <p className="text-sm mb-4 text-white/60">
              Receive our newest insights, industry updates, and exclusive
              resources straight to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:border-brand-khaki focus:ring-1 focus:ring-brand-khaki/20"
              />
              <button className="bg-brand-olive text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-lg transition-all duration-300 hover:bg-brand-khaki hover:text-brand-charcoal">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/40">
          <p>
            Copyright © {new Date().getFullYear()} Meliora Projects. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
