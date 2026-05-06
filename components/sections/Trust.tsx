"use client";

import { Star } from "lucide-react";

export function Trust() {
  const testimonials = [
    {
      quote: "We trusted them to guide us through a critical expansion. Their insights and actionable plans made the transition smooth, highly successful, and surprisingly faster than we expected.",
      author: "James Whitaker",
      role: "CEO, Finex Solutions",
      image: "https://picsum.photos/seed/person1/100/100"
    },
    {
      quote: "Their consulting team reshaped our strategy with clarity and precision. Within months, we saw measurable growth, stronger market positioning, and increased team confidence in execution.",
      author: "Emma Chen",
      role: "COO, NovaTech Global",
      image: "https://picsum.photos/seed/person2/100/100"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-offwhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Association Strip */}
        <div className="mb-32 flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold font-serif uppercase tracking-widest text-brand-charcoal">NSW Government</div>
          <div className="text-xl font-bold font-serif uppercase tracking-widest text-brand-charcoal">Planning Institute</div>
          <div className="text-xl font-bold font-serif uppercase tracking-widest text-brand-charcoal">AIA</div>
          <div className="text-xl font-bold font-serif uppercase tracking-widest text-brand-charcoal">UDIA</div>
          <div className="text-xl font-bold font-serif uppercase tracking-widest text-brand-charcoal">Property Council</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <div className="inline-block border border-brand-charcoal/20 rounded-full px-4 py-1.5 mb-8 text-brand-charcoal uppercase tracking-widest text-xs font-semibold">
              Voices of Trust
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight">
              Voices of Trust <br /> <span className="italic text-brand-olive">& Success.</span>
            </h2>
            <p className="text-lg text-brand-charcoal-light leading-relaxed max-w-md">
              See how our expertise drives meaningful strategic change and lasting business success across diverse developments.
            </p>
          </div>

          <div className="grid gap-8 relative">
            {/* Minimal architectural decoration behind testimonials */}
            <div className="absolute -left-12 -top-12 w-32 h-32 border-l border-t border-brand-olive/20" />
            
            {testimonials.map((t, i) => (
              <div key={i} className={`bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${i === 1 ? 'lg:translate-x-12' : ''}`}>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-olive text-brand-olive" />
                  ))}
                </div>
                <p className="text-brand-charcoal leading-relaxed mb-8 italic text-lg">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="font-serif font-bold text-brand-charcoal">{t.author}</h4>
                    <p className="text-sm text-brand-charcoal-light uppercase tracking-wider text-xs mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
