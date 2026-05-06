import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Insights() {
  const articles = [
    {
      type: "Case Study",
      title: "Expanding Into New Markets With Confidence and Clarity",
      excerpt: "Discover practical strategies for identifying opportunities, mitigating risks, and entering new markets with a well-structured expansion roadmap.",
      image: "https://picsum.photos/seed/case-study-boardroom/600/400"
    },
    {
      type: "Industry Update",
      title: "Financial Strategies for Growth and Long-Term Stability",
      excerpt: "Explore smart approaches to managing capital, securing investments, and optimizing performance to achieve sustainable business success.",
      image: "https://picsum.photos/seed/industry-meeting/600/400"
    },
    {
      type: "Technical Insight",
      title: "Enhancing Operational Efficiency in a Rapidly Changing Market",
      excerpt: "Learn proven methods to streamline processes, improve productivity, and reduce costs while maintaining flexibility to adapt.",
      image: "https://picsum.photos/seed/technical-planning/600/400"
    }
  ];

  return (
    <section id="resources" className="py-24 md:py-32 bg-brand-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
              Insights & <br />Project <span className="italic text-brand-olive">Outcomes</span>
            </h2>
            <p className="text-brand-charcoal-light leading-relaxed max-w-md">
              Insights on planning approvals, social impact and stakeholder engagement across NSW - including project outcomes and regulatory updates.
            </p>
          </div>
          <Link href="#resources" className="inline-flex items-center gap-3 text-brand-charcoal font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors group pb-4 border-b border-brand-charcoal/20 hover:border-brand-olive">
            View all resources
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-8">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-4">
                {article.type}
              </div>
              <h3 className="font-serif text-2xl text-brand-charcoal mb-4 group-hover:text-brand-olive transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
