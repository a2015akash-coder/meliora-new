"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-charcoal text-white shadow-xl py-4"
          : "bg-transparent text-white py-6"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-wide uppercase font-bold flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            Meliora
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium tracking-wide uppercase hover:text-brand-khaki transition-colors">Home</Link>
            <Link href="#services" className="text-sm font-medium tracking-wide uppercase hover:text-brand-khaki transition-colors">Services</Link>
            <Link href="#expertise" className="text-sm font-medium tracking-wide uppercase hover:text-brand-khaki transition-colors">Expertise</Link>
            <Link href="#resources" className="text-sm font-medium tracking-wide uppercase hover:text-brand-khaki transition-colors">Resources</Link>
            <Link href="#contact" className="text-sm font-medium tracking-wide uppercase hover:text-brand-khaki transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button className="hover:text-brand-khaki transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="text-sm font-medium tracking-wide">
              (02) 1234 5678
            </div>
            <Link 
              href="#contact" 
              className={`text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all border ${
                isScrolled ? "border-brand-khaki bg-brand-khaki text-brand-charcoal hover:bg-transparent hover:text-brand-khaki" : "border-white hover:bg-white hover:text-brand-charcoal"
              }`}
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
            className="fixed inset-0 z-50 bg-brand-charcoal text-white p-6 flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl tracking-wide uppercase font-bold">Meliora</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 flex-1">
              <Link onClick={() => setMobileMenuOpen(false)} href="#home" className="text-2xl font-serif tracking-widest uppercase hover:text-brand-khaki transition-colors">Home</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#services" className="text-2xl font-serif tracking-widest uppercase hover:text-brand-khaki transition-colors">Services</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#expertise" className="text-2xl font-serif tracking-widest uppercase hover:text-brand-khaki transition-colors">Expertise</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#resources" className="text-2xl font-serif tracking-widest uppercase hover:text-brand-khaki transition-colors">Resources</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#contact" className="text-2xl font-serif tracking-widest uppercase hover:text-brand-khaki transition-colors">Contact</Link>
            </nav>

            <div className="mt-auto mb-8 flex flex-col items-center gap-6">
              <div className="text-lg font-medium tracking-wide">
                (02) 1234 5678
              </div>
              <Link 
                onClick={() => setMobileMenuOpen(false)}
                href="#contact" 
                className="w-full text-center text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-full border border-brand-khaki bg-brand-khaki text-brand-charcoal hover:bg-transparent hover:text-brand-khaki transition-colors"
               >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
