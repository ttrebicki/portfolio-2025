import { Project } from "./components/Project";
import { projects } from "./projects";

export const FeaturedProjects = () => {
  return (
    <div id={"projects"} className={"flex flex-col gap-8 min-h-full"}>
      <h2>Featured projects & case studies</h2>
      <div className={"flex flex-col gap-32"}>
        <Project {...projects.goingapp} />
        <Project {...projects.simpleEcommerce} inverted />
        <Project {...projects.partnerProfile} />
        <Project {...projects.artificialNewsAnchor} inverted />
      </div>
    </div>
  );
};
