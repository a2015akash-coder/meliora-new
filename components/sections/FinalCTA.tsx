import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-32 bg-brand-charcoal text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-brand-olive/5" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-khaki/5 transform -skew-x-12 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-8 leading-[1.1]">
            Planning approvals are <br /> 
            <span className="italic text-brand-khaki mb-4 mt-2 inline-block">no longer</span> purely technical.
          </h2>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-16 font-light">
            If your project involves risk, complexity, or community sensitivity - it needs to be positioned properly from the start.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-brand-khaki text-brand-charcoal font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full hover:bg-white transition-colors text-center"
            >
              Discuss Your Project
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full hover:border-white transition-colors text-center"
            >
              Book a 15-Minute Strategy Call
            </Link>
          </div>
          <div className="mt-8">
             <Link href="#contact" className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1">
              Request a fee proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
