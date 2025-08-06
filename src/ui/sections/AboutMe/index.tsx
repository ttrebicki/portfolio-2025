import { Box } from "@/ui/reusable/Box";
import { List } from "@/ui/reusable/List";
import Image from "next/image";
import { values } from "./values";

export const AboutMe = () => {
  return (
    <div className={"flex flex-col gap-8 min-h-full"}>
      <h2>About me</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div
          className={
            "relative shadow-lg lg:flex-1 rounded-xl overflow-hidden h-[calc(50vh-(48px))] lg:h-100% lg:w-[calc(50%-(16px))]"
          }
        >
          <Image
            src={"/aboutme.png"}
            alt={"Tomasz Trębicki"}
            fill
            className={"flex-1"}
            objectFit={"cover"}
          />
        </div>
        <div className={"flex flex-col gap-4 lg:gap-8 lg:flex-2"}>
          <Box contentClassName={"flex flex-col gap-4"}>
            <p>
              With a foundation in cultural anthropology and UX research, I
              transitioned from design into full‑stack engineering at one of
              Poland’s top ticketing and event marketing firms.
            </p>
            <p>
              Over six years I’ve worn many hats—from CMS management and QA to
              UX/UI design and full‑stack development—ultimately specializing in
              TypeScript, Next.js, and React to deliver scalable, user‑centric
              applications.
            </p>
          </Box>
        </div>
      </div>
      <div>
        <List items={values} name={"Core values"} lgCols={3} />
      </div>
    </div>
  );
};
