import { Section } from "@/ui/reusable/Section";
import { AboutMe } from "@/ui/sections/AboutMe";
import { HeroBanner } from "@/ui/sections/HeroBanner";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Section>
        <HeroBanner />
      </Section>
      <Section>
        <AboutMe />
      </Section>
    </div>
  );
}
