export interface IListProps {
  items: IListItem[];
  name: string;
}

export interface IListItem {
  name: string;
  description: string;
  imageUrl?: string;
  skillLevel: number;
}
