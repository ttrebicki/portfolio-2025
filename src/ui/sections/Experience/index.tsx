import { List } from "@/ui/reusable/List";
import { IListItem } from "@/ui/reusable/List/types";

const experience: IListItem[] = [
  {
    name: "2022 - 2025: Full-stack developer",
    description: "Going / Empik Bilety",
  },
  {
    name: "2021 - 2022: Front-end developer",
    description: "Going / Empik Bilety",
  },
  {
    name: "2020 - 2021: IT Project Manager / UI Designer / QA Engineer",
    description: "Going / Empik Bilety",
  },
  {
    name: "2020 - ...: Freelance front-end / full stack developer",
    description: "Self employed",
  },
  {
    name: "2019 - 2020: CMS Administrator",
    description: "Going / Empik Bilety",
  },
  {
    name: "2018 - 2019: UX Researcher",
    description: "radicalzz.studio",
  },
];

const education: IListItem[] = [
  {
    name: "2019: JavaScript Algorithms and Data Structures",
    description: "freeCodeCamp.org",
  },
  {
    name: "2019: Responsive Web Design",
    description: "freeCodeCamp.org",
  },
  {
    description: "University of Warsaw",
    name: "2014 - 2017: Bachelor in Ethnology and Cultural Anthropology",
  },
];

export const Experience = () => {
  return (
    <div className={"flex flex-col gap-8 min-h-full"}>
      <h2>Experience and education</h2>
      <List name={"Experience"} items={experience} lgCols={1} />
      <List name={"Education"} items={education} lgCols={1} />
    </div>
  );
};
