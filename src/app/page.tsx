import { Section } from "@/ui/reusable/Section";
import { HeroBanner } from "@/ui/sections/HeroBanner";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Section className={"pt-16"}>
        <HeroBanner />
      </Section>
    </div>
  );
}
