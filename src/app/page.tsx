import { Section } from "@/ui/reusable/Section";
import { AboutMe } from "@/ui/sections/AboutMe";
import { HeroBanner } from "@/ui/sections/HeroBanner";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Section className={"h-screen"}>
        <HeroBanner />
      </Section>
      <Section className={"md:h-screen"}>
        <AboutMe />
      </Section>
    </div>
  );
}
