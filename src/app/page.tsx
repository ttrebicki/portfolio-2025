import { Section } from "@/ui/reusable/Section";
import { AboutMe } from "@/ui/sections/AboutMe";
import { FeaturedProjects } from "@/ui/sections/FeaturedProjects";
import { HeroBanner } from "@/ui/sections/HeroBanner";
import { SkillsAndTechs } from "@/ui/sections/SkillsAndTechs";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Section className={"h-screen"}>
        <HeroBanner />
      </Section>
      <Section className={"lg:h-screen"}>
        <AboutMe />
      </Section>
      <Section>
        <SkillsAndTechs />
      </Section>
      <Section>
        <FeaturedProjects />
      </Section>
    </div>
  );
}
