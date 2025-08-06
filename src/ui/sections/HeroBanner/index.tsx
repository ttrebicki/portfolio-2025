import { Button } from "@/ui/reusable/Button";
import Link from "next/link";

export const HeroBanner = () => {
  return (
    <div className={"flex flex-1 min-h-full flex-col justify-center gap-8"}>
      <div className={"flex flex-col gap-8"}>
        <h1>Crafting scalable TypeScript solutions for tomorrow</h1>
        <h2>
          I’m a Next.js & React developer with years of experience at a leading
          event ticketing and e‑commerce platform.
        </h2>
        <h3>Let’s build fast, maintainable apps that delight users.</h3>
      </div>
      <div className={"flex gap-4"}>
        <Link href={"#projects"}>
          <Button className="w-fit">Explore my work</Button>
        </Link>
        <Link href="/Trebicki_Tomasz_CV.pdf" download>
          <Button variant={"outlined"} className={"w-fit"}>
            Download resume
          </Button>
        </Link>
      </div>
    </div>
  );
};
