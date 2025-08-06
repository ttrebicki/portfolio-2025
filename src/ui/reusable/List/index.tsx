import { ListElement } from "./components/ListElement";
import { IListProps } from "./types";

const colMap: { [key: number]: string } = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
} as const;

export const List = ({ items, name, lgCols = 6 }: IListProps) => {
  const gridClasses = [
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    colMap[lgCols] || "lg:grid-cols-6",
    `gap-y-4`,
    `gap-x-4`,
  ].join(" ");

  return (
    <div className={"flex flex-col gap-4"}>
      {!!name?.length && <h3>{name}</h3>}
      <ul className={gridClasses}>
        {items.map((item, index) => (
          <ListElement key={`product-${item.name}-${index}`} item={item} />
        ))}
      </ul>
    </div>
  );
};
