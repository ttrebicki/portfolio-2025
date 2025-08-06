export interface IListProps {
  items: IListItem[];
  name?: string;
  lgCols?: number;
}

export interface IListItem {
  name: string;
  description: string;
  imageUrl?: string;
  skillLevel?: number;
}
