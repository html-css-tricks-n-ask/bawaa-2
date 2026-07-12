import { Hero } from "@/components/home/Hero";
import { AboutSection, FeaturedRoomsSection, CafeSection, EventsSection } from "@/components/home/HomeSections";
import { LifestyleSection, FAQSection, FinalCTA } from "@/components/home/HomeSections2";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <FeaturedRoomsSection />
      <CafeSection />
      <EventsSection />
      <LifestyleSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
