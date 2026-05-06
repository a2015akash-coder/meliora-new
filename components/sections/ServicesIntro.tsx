import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesIntro() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-beige overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Intro */}
        <div className="max-w-3xl mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight">
            Strategic Path to <span className="italic text-brand-olive">Transformation</span>
          </h2>
          <p className="text-lg text-brand-charcoal-light leading-relaxed max-w-2xl">
            We offer planning, social impact and engagement services as standalone support where required. 
            However, our strongest value is in bringing these elements together as part of a coordinated approval strategy.
          </p>
        </div>

        <div className="space-y-32">
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
              <Image 
                src="https://picsum.photos/seed/aerial-site-planning/1000/1200" 
                alt="Aerial site planning imagery"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-brand-charcoal/10 rounded-[2rem]" />
              {/* Optional decor overlay */}
              <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/20 rounded-[1rem] pointer-events-none" />
            </div>
            
            <div className="order-1 lg:order-2 lg:pl-12">
              <div className="text-brand-olive text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-olive"></span>
                Service 01
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-6">
                Early Advice & Planning Risk Mitigation
              </h3>
              <p className="text-brand-charcoal-light mb-6 leading-relaxed">
                We assess planning controls, constraints and approval pathways - including exempt, CDC, local DA, RSD and SSD - to provide a clear, evidence-based understanding of what is achievable.
              </p>
              <p className="text-brand-charcoal-light mb-8 leading-relaxed">
                Social and stakeholder risks are identified early, enabling informed and cost-effective decisions before significant time or capital is committed.
              </p>
              <Link href="#contact" className="inline-flex items-center gap-3 text-brand-charcoal font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors group">
                Know what can be approved - before you commit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-1 lg:order-1 lg:pr-12">
              <div className="text-brand-olive text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-olive"></span>
                Service 02
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-6">
                Approvals Strategy & Advisory
              </h3>
              <p className="text-brand-charcoal-light mb-6 leading-relaxed">
                We provide ongoing strategic advice throughout the approvals process - interpreting requirements, responding to authority feedback, and ensuring the project remains aligned with a realistic, defensible and achievable outcome.
              </p>
              <p className="text-brand-charcoal-light mb-8 leading-relaxed">
                Our approach is tailored to the project’s scale, location and planning context - reducing delays and strengthening the pathway to approval.
              </p>
              <Link href="#contact" className="inline-flex items-center gap-3 text-brand-charcoal font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors group">
                Navigate complex approval pathways
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="order-2 lg:order-2 relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
              <Image 
                src="https://picsum.photos/seed/planning-documentation-architecture/1000/1200" 
                alt="Planning documentation and architectural context"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-brand-charcoal/10 rounded-[2rem]" />
              <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/20 rounded-[1rem] pointer-events-none" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
              <Image 
                src="https://picsum.photos/seed/social-impact-communities/1000/1200" 
                alt="Communities and public spaces"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-brand-charcoal/10 rounded-[2rem]" />
              <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/20 rounded-[1rem] pointer-events-none" />
            </div>
            
            <div className="order-1 lg:order-2 lg:pl-12">
              <div className="text-brand-olive text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-olive"></span>
                Service 03
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-6">
                Social Impact & Engagement
              </h3>
              <p className="text-brand-charcoal-light mb-6 leading-relaxed">
                Social and stakeholder risks can determine the outcome of an application.
              </p>
              <p className="text-brand-charcoal-light mb-8 leading-relaxed">
                We integrate SIA and engagement into the strategy where relevant to the project - helping manage expectations, reduce resistance, and support a smoother pathway to approval.
              </p>
              <Link href="#contact" className="inline-flex items-center gap-3 text-brand-charcoal font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors group">
                Address stakeholder risks early
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
