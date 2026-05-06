import React from 'react';

export function Stats() {
  return (
    <section className="relative z-20 w-full px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-16 sm:max-w-7xl mx-auto">
      <div className="bg-brand-charcoal border border-white/10 shadow-2xl rounded-2xl md:rounded-full flex flex-col md:flex-row items-center overflow-hidden">
        
        {/* Left Side branding */}
        <div className="bg-brand-olive text-white w-full md:w-auto px-8 py-8 md:py-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-white/10 shrink-0">
          <h3 className="font-serif text-2xl leading-tight">
            Clear Strategy, <br />
            <span className="italic text-brand-beige">Stronger Applications.</span>
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full divide-x divide-y md:divide-y-0 divide-white/10">
          <div className="p-6 md:p-4 text-center flex flex-col justify-center">
            <span className="text-3xl lg:text-4xl font-serif text-white mb-2">2019</span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Established</span>
          </div>
          <div className="p-6 md:p-4 text-center flex flex-col justify-center">
            <span className="text-3xl lg:text-4xl font-serif text-white mb-2">128</span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">NSW Council Areas Covered</span>
          </div>
          <div className="p-6 md:p-4 text-center flex flex-col justify-center border-t border-white/10 md:border-t-0">
            <span className="text-3xl lg:text-4xl font-serif text-white mb-2">1000+</span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Successful Projects</span>
          </div>
          <div className="p-6 md:p-4 text-center flex flex-col justify-center border-t border-white/10 md:border-t-0">
            <span className="text-3xl lg:text-4xl font-serif text-white mb-2">3000+</span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Expert Consultations</span>
          </div>
        </div>

      </div>
    </section>
  );
}
