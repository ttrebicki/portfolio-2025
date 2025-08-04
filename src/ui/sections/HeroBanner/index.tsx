import { Button } from "@/ui/reusable/Button";

export const HeroBanner = () => {
  return (
    <div className={"flex flex-1 min-h-full flex-col justify-between"}>
      <div className={"flex flex-col gap-8"}>
        <h1>{"Crafting scalable TypeScript solutions for tomorrow"}</h1>
        <h2>
          {
            "I’m a Next.js & React developer with 5 years of experience at a leading ticketing and e‑commerce platform. Let’s build fast, maintainable apps that delight users."
          }
        </h2>
      </div>
      <div className={"flex gap-4"}>
        <Button className="w-fit">{"Explore my work"}</Button>
        <Button variant={"outlined"} className={"w-fit"}>
          {"Download resume"}
        </Button>
      </div>
    </div>
  );
};
