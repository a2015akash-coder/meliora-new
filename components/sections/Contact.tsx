"use client";

import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Office Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block border border-brand-charcoal/20 rounded-full px-4 py-1.5 mb-8 text-brand-charcoal uppercase tracking-widest text-xs font-semibold self-start">
              Get in touch
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight">
              Get in <span className="italic text-brand-olive">Touch</span>
            </h2>
            <p className="text-lg text-brand-charcoal-light leading-relaxed mb-12 max-w-md">
              Book a 15-minute strategy call, request a fee proposal, or discuss
              your project with our team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-white p-8 rounded-2xl border border-brand-charcoal/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.03]"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-4">
                  Sydney Office
                </div>
                <div className="text-brand-charcoal leading-relaxed font-medium">
                  2 Locomotive St,
                  <br />
                  Eveleigh NSW 2015
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="bg-white p-8 rounded-2xl border border-brand-charcoal/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.03]"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-4">
                  Hunter Region Office
                </div>
                <div className="text-brand-charcoal leading-relaxed font-medium">
                  12B Teramby Rd,
                  <br />
                  Nelson Bay NSW 2315
                  <br />
                  <span className="text-xs font-normal text-brand-charcoal/60 mt-2 block">
                    (By Appointment Only)
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mt-8 flex flex-col sm:flex-row gap-8"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-2">
                  Email Us
                </div>
                <a
                  href="mailto:hello@meliora-projects.com.au"
                  className="text-brand-charcoal font-medium hover:text-brand-olive transition-colors duration-300 underline underline-offset-4 decoration-brand-charcoal/20"
                >
                  hello@meliora-projects.com.au
                </a>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-2">
                  Call Us
                </div>
                <a
                  href="tel:1300713581"
                  className="text-brand-charcoal font-medium hover:text-brand-olive transition-colors duration-300 underline underline-offset-4 decoration-brand-charcoal/20"
                >
                  1300 713 581
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-brand-charcoal/5 border border-brand-charcoal/5"
          >
            <h3 className="font-serif text-3xl text-brand-charcoal mb-4">
              Request a call back
            </h3>
            <p className="text-brand-charcoal-light mb-8">
              Have questions? Let us guide you through the process — request a
              callback at your preferred time.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-xl px-4 py-4 transition-all duration-300 focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-xl px-4 py-4 transition-all duration-300 focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive/20"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-xl px-4 py-4 transition-all duration-300 focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-xl px-4 py-4 transition-all duration-300 focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-xl px-4 py-4 transition-all duration-300 focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive/20 resize-none"
                ></textarea>
              </div>

              <div>
                <p className="text-sm text-brand-charcoal mb-4 font-medium">
                  What time would you prefer to be contacted?
                </p>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-brand-charcoal/20 text-brand-olive focus:ring-brand-olive"
                    />
                    <span className="text-sm text-brand-charcoal-light">
                      9 AM - 12 PM
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-brand-charcoal/20 text-brand-olive focus:ring-brand-olive"
                    />
                    <span className="text-sm text-brand-charcoal-light">
                      12 PM - 3 PM
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-brand-charcoal/20 text-brand-olive focus:ring-brand-olive"
                    />
                    <span className="text-sm text-brand-charcoal-light">
                      3 PM - 5 PM
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="bg-brand-olive text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-all duration-300 hover:bg-brand-charcoal hover:shadow-lg w-full sm:w-auto"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
