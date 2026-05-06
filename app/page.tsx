import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";

 
import { WhyMeliora } from "@/components/sections/WhyMeliora";
import { Process } from "@/components/sections/Process";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProjectTypes } from "@/components/sections/ProjectTypes";
import { Trust } from "@/components/sections/Trust";
import { Insights } from "@/components/sections/Insights";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Services } from "@/components/sections/ServicesIntro";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <Stats /> */}
      <Services/>
      <WhyMeliora />
      <Process />
      <ServicesOverview />
      <ProjectTypes />
      <Trust />
      <Insights />
      <FinalCTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
