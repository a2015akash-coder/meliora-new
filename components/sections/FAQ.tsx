"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What approval pathway is right for my project in NSW?",
    answer: "The appropriate pathway depends on the site, zoning and proposal. Projects may qualify as exempt development, Complying Development (CDC), Development Application (DA), Regionally Significant Development (RSD) or State Significant Development (SSD). We assess all available options to identify the most effective and realistic pathway."
  },
  {
    question: "What is the difference between CDC and DA?",
    answer: "A CDC (Complying Development Certificate) is a fast-tracked approval for developments that meet strict criteria, while a DA (Development Application) involves a more detailed assessment by the consent authority. The appropriate pathway depends on site constraints, design and planning controls."
  },
  {
    question: "Do all developments require Council approval?",
    answer: "No. Some developments can be approved as exempt or complying development without a full DA. In other cases, approvals may involve private certifiers, regional panels or state authorities, depending on the scale and nature of the project."
  },
  {
    question: "When should I seek planning advice?",
    answer: "Planning advice is most valuable at the earliest stage - before committing to a site or progressing design. Early advice helps identify constraints, risks and viable approval pathways, reducing the likelihood of delays, redesigns or unexpected costs."
  },
  {
    question: "Can you advise before I purchase a site?",
    answer: "Yes. Early-stage feasibility and due diligence are a core part of our service. We assess planning controls, approval pathways and key risks so you can make informed decisions before committing."
  },
  {
    question: "When is a Social Impact Assessment (SIA) required?",
    answer: "SIA requirements vary depending on the project scale, location and approval pathway. Larger or more complex developments, particularly those with community impacts, may require formal SIA as part of the assessment process."
  },
  {
    question: "Why is stakeholder engagement important in planning approvals?",
    answer: "Stakeholder and community responses can influence the outcome of an application. Early engagement helps identify concerns, manage expectations and reduce the risk of objections or delays during assessment."
  },
  {
    question: "Do you work across NSW?",
    answer: "Yes. We operate across metropolitan and regional NSW and regularly advise on projects involving multiple authorities and approval pathways."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-brand-beige border-b border-brand-charcoal/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
           <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-6">
              <span className="italic text-brand-olive">Clear Answers</span> to Drive <br />Strategic Decisions
            </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-brand-charcoal/10 rounded-2xl overflow-hidden transition-colors ${isOpen ? 'bg-white shadow-sm' : 'bg-transparent hover:bg-white/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-brand-charcoal pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-charcoal/50 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-brand-charcoal-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
