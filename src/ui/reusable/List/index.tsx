import { ListElement } from "./components/ListElement";
import { IListProps } from "./types";

export const List = ({ items, name }: IListProps) => {
  const gridClasses = [
    "grid",
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-6",
    `gap-y-4`,
    `gap-x-4`,
  ].join(" ");

  return (
    <div className={"flex flex-col gap-4"}>
      <h3>{name}</h3>
      <ul className={gridClasses}>
        {items.map((item, index) => (
          <ListElement key={`product-${item.name}-${index}`} item={item} />
        ))}
      </ul>
    </div>
  );
};
