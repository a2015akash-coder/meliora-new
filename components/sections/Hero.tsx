import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full flex items-center justify-start overflow-hidden bg-brand-charcoal">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/sydney-urban-architecture/1920/1080" 
          alt="Aerial urban architecture"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover object-center opacity-60"
        />
        {/* Soft Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }} />
      </div>

      {/* Structured line elements */}
      <div className="absolute top-0 bottom-0 left-8 md:left-16 w-[1px] bg-white/10 z-0" />
      <div className="absolute top-0 bottom-0 right-8 md:right-16 w-[1px] bg-white/10 z-0" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl pt-24">
        <div className="max-w-3xl">
         
          
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] leading-[1.1] text-white mb-8">
            Position your <span className="text-brand-khaki italic">project</span> for approval <span className="opacity-60">—</span> with clarity, strategy and confidence.
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 font-light leading-relaxed">
            From exempt and CDC through to local DA, RSD and SSD, we provide the clarity needed to move forward with confidence. 
            Focusing on strategic planning and development advice across both the private and public sectors.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-12">
            <Link 
              href="#contact" 
              className="bg-brand-khaki text-brand-charcoal font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full border border-brand-khaki hover:bg-transparent hover:text-brand-khaki transition-all text-center w-full sm:w-auto"
            >
              Discuss Your Project
            </Link>
            <Link 
              href="#contact" 
              className="bg-transparent text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full border border-white/30 hover:border-white transition-all text-center w-full sm:w-auto"
            >
              Book a 15-minute Strategy Call
            </Link>
          </div>
          <div className="mt-6 flex items-center">
            <div className="w-8 h-[1px] bg-white/30 mr-4"></div>
            <Link href="#contact" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">
              or request a fee proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
