import { Box } from "@/ui/reusable/Box";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className={"flex flex-col gap-8 min-h-full"}>
      <h2>{"About me"}</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div
          className={
            "relative rounded-xl overflow-hidden h-[calc(50vh-(48px))] md:h-100% md:w-[calc(50%-(16px))]"
          }
        >
          <Image
            src={"/aboutme.jpeg"}
            alt={"Tomasz Trębicki"}
            fill
            className={"flex-1"}
            objectFit={"cover"}
          />
        </div>
        <div className={"flex flex-col gap-4 md:gap-8 flex-1"}>
          <Box>
            <p className={"text-sm md:text-base"}>
              {
                "With a foundation in cultural anthropology and UX research, I transitioned from design into full‑stack engineering at one of Poland’s top ticketing and event marketing firms. Over six years I’ve worn many hats—from CMS management and QA to UX/UI design and full‑stack development—ultimately specializing in TypeScript, Next.js, and React to deliver scalable, user‑centric applications."
              }
            </p>
          </Box>
          <ul className={"flex flex-col gap-1 md:gap-4 text-xs md:text-base"}>
            <li>
              <p>
                <strong>User‑First Thinking</strong>: I ground every feature in
                real human needs.
              </p>
            </li>
            <li>
              <p>
                <strong>Clean, Maintainable Code</strong>: I adhere to best
                practices and SOLID principles.
              </p>
            </li>
            <li>
              <p>
                <strong>Continuous Improvement</strong>: I never stop learning
                new tools and techniques.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
