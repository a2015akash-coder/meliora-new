"use client";

export function ServicesOverview() {
  const audiences = [
    "Developers",
    "Landowners",
    "Architects & Designers",
    "Consultants",
    "Real Estate Agencies",
    "Legal & Advisory Teams",
    "Councils & Government Clientele",
    "Project teams on complex NSW developments"
  ];

  const services = [
    "Advisory services and early-stage assessments",
    "Planning assessments and statutory reports",
    "Social Impact Assessments (SIA)",
    "Community and stakeholder engagement",
    "Supplementary and specialist planning services",
    "Ongoing advisory and subscription-based support"
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-beige border-t border-brand-charcoal/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left: Who We Work With */}
          <div>
            <div className="inline-block border border-brand-charcoal/20 rounded-full px-4 py-1.5 mb-8 text-brand-charcoal uppercase tracking-widest text-xs font-semibold">
              Who We Work With
            </div>
            
            <ul className="space-y-6">
              {audiences.map((audience, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-olive opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="font-serif text-xl sm:text-2xl text-brand-charcoal group-hover:text-brand-olive transition-colors">{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Our Services */}
          <div>
            <div className="inline-block border border-brand-charcoal/20 rounded-full px-4 py-1.5 mb-8 text-brand-charcoal uppercase tracking-widest text-xs font-semibold">
              Our Services
            </div>
            <p className="text-brand-charcoal-light mb-12 max-w-md leading-relaxed">
              We provide planning, social impact and engagement services to support projects at all stages - from early feasibility through to approvals and strategic advisory.
            </p>
            <ul className="space-y-6">
              {services.map((service, i) => (
                <li key={i} className="flex items-start gap-4 group pb-6 border-b border-brand-charcoal/10 last:border-0">
                  <div className="font-serif text-sm w-6 pt-1 text-brand-charcoal/40 group-hover:text-brand-olive transition-colors">{String(i + 1).padStart(2, '0')}</div>
                  <span className="text-lg text-brand-charcoal group-hover:text-brand-olive transition-colors leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
