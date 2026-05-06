"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, Linkedin, Instagram, Mail, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b border-brand-charcoal/[0.06] bg-white/80 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between py-2 text-[11px] text-brand-charcoal/60">
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@meliora-projects.com.au"
                className="flex items-center gap-1.5 hover:text-brand-olive transition-colors"
              >
                <Mail className="w-3 h-3" />
                hello@meliora-projects.com.au
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                NSW, Australia
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                Mon–Fri: 9:00am–5:00pm
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-brand-olive transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-brand-olive transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white/90 backdrop-blur-md text-brand-charcoal shadow-md py-4"
            : "top-[36px] bg-transparent text-brand-charcoal py-4"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-serif text-2xl tracking-wide uppercase font-bold flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full border border-brand-charcoal/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-brand-charcoal"></div>
              </div>
              Meliora
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#home"
                className="text-sm font-medium tracking-wide uppercase hover:text-brand-olive transition-colors"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium tracking-wide uppercase hover:text-brand-olive transition-colors"
              >
                Services
              </Link>
              <Link
                href="#expertise"
                className="text-sm font-medium tracking-wide uppercase hover:text-brand-olive transition-colors"
              >
                Expertise
              </Link>
              <Link
                href="#resources"
                className="text-sm font-medium tracking-wide uppercase hover:text-brand-olive transition-colors"
              >
                Resources
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium tracking-wide uppercase hover:text-brand-olive transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-6">
              <button className="hover:text-brand-olive transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="#contact"
                className="text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all border border-brand-charcoal bg-brand-charcoal text-brand-beige hover:bg-transparent hover:text-brand-charcoal"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 z-50 bg-brand-beige text-brand-charcoal p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif text-2xl tracking-wide uppercase font-bold">
                  Meliora
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex flex-col gap-8 flex-1">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#home"
                  className="text-2xl font-serif tracking-widest uppercase hover:text-brand-olive transition-colors"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#services"
                  className="text-2xl font-serif tracking-widest uppercase hover:text-brand-olive transition-colors"
                >
                  Services
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#expertise"
                  className="text-2xl font-serif tracking-widest uppercase hover:text-brand-olive transition-colors"
                >
                  Expertise
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#resources"
                  className="text-2xl font-serif tracking-widest uppercase hover:text-brand-olive transition-colors"
                >
                  Resources
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#contact"
                  className="text-2xl font-serif tracking-widest uppercase hover:text-brand-olive transition-colors"
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-auto mb-8 flex flex-col items-center gap-6">
                <a
                  href="mailto:hello@meliora-projects.com.au"
                  className="text-sm text-brand-charcoal/60 hover:text-brand-olive transition-colors"
                >
                  hello@meliora-projects.com.au
                </a>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#contact"
                  className="w-full text-center text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-full border border-brand-charcoal bg-brand-charcoal text-brand-beige hover:bg-transparent hover:text-brand-charcoal transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
