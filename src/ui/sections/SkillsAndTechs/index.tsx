import { List } from "@/ui/reusable/List";
import {
  backend,
  frontend,
  devops,
  design,
  projectManagement,
  testing,
} from "./skills";

export const SkillsAndTechs = () => {
  return (
    <div className={"flex flex-col gap-8 min-h-full"}>
      <h2>Skills & Technologies</h2>
      <p>
        With several years of hands-on experience across diverse programming
        languages, frameworks, and tools, I excel in both front-end and back-end
        development, enabling me to drive end-to-end solutions throughout the
        entire software lifecycle.
      </p>
      <List items={frontend} name={"Front-end"} />
      <List items={backend} name={"Back-end"} />
      <List items={testing} name={"QA"} />
      <List items={design} name={"UX/UI Design"} />
      <List items={projectManagement} name={"Project management"} />
      <List items={devops} name={"Dev-ops"} />
    </div>
  );
};
