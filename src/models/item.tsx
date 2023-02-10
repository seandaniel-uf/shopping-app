export interface Item {
  id: string;
  product: string;
  quantity: number;
}

export interface ShoppingListProps {
  items: Item[];
}
