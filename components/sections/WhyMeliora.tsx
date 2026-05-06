import { CheckCircle2 } from "lucide-react";

export function WhyMeliora() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-brand-charcoal text-white relative flex items-center min-h-[90svh] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-olive/10 hidden lg:block" />
      <div className="absolute left-0 top-1/2 right-0 h-[1px] bg-white/5" />
      <div className="absolute top-0 bottom-0 left-24 w-[1px] bg-white/5 hidden xl:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-block border border-white/20 rounded-full px-4 py-1.5 mb-8 text-brand-beige uppercase tracking-widest text-xs font-semibold self-start">
              Why Meliora
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1]">
              Expertise, <br />
              Insight <span className="text-brand-khaki italic">& Impact.</span>
            </h2>
            <div className="text-lg text-white/80 leading-relaxed max-w-md">
              Established in 2019, every project at Meliora Projects is led by senior planners with deep experience in the NSW planning system.
            </div>
            <div className="mt-8 text-white/60 leading-relaxed max-w-md">
              Our approach is structured, strategic and outcome-focused - identifying risks early, aligning proposals with planning controls, and positioning projects for clear, defensible outcomes.
            </div>
          </div>

          {/* Right Column: Values / Points */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-12">
            
            <div className="flex gap-6 group">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border border-brand-khaki/30 flex items-center justify-center text-brand-khaki group-hover:bg-brand-khaki group-hover:text-brand-charcoal transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-3">A coordinated, multi-disciplinary perspective</h4>
                <p className="text-white/70 leading-relaxed text-sm">
                  Projects are not assessed through a single lens. We integrate statutory, strategic and social planning considerations to form a balanced and comprehensive view from the outset.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border border-brand-khaki/30 flex items-center justify-center text-brand-khaki group-hover:bg-brand-khaki group-hover:text-brand-charcoal transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-3">Early risk identification and pathway alignment</h4>
                <p className="text-white/70 leading-relaxed text-sm">
                  We identify constraints, approval pathways and stakeholder risks early - before they impact design, cost or programme. This enables decisions to be made with clarity, not assumption.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border border-brand-khaki/30 flex items-center justify-center text-brand-khaki group-hover:bg-brand-khaki group-hover:text-brand-charcoal transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-3">Designed for complex and sensitive projects</h4>
                <p className="text-white/70 leading-relaxed text-sm">
                  For larger or more complex developments, our approach incorporates a detailed understanding of community and stakeholder dynamics - ensuring proposals are not only compliant, but responsive to their broader context.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border border-brand-khaki/30 flex items-center justify-center text-brand-khaki group-hover:bg-brand-khaki group-hover:text-brand-charcoal transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-3">We focus on what works in practice</h4>
                <p className="text-white/70 leading-relaxed text-sm">
                  Our advice reflects real-world assessment processes, not just theoretical compliance.
                </p>
              </div>
            </div>

          </div>

          {/* Outcome */}
          <div className="lg:col-span-12 mt-12 border-t border-white/10 pt-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">Outcome</p>
            <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto font-light">
              Projects that are clearly positioned, strategically aligned and defensible across planning, regulatory and stakeholder contexts.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
