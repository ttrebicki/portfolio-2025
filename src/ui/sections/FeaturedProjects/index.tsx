import { Project } from "./components/Project";
import { projects } from "./projects";

export const FeaturedProjects = () => {
  return (
    <div id={"projects"} className={"flex flex-col gap-8 min-h-full"}>
      <h2>Featured projects</h2>
      <Project {...projects.goingapp} />
      <Project {...projects.simpleEcommerce} inverted />
    </div>
  );
};
