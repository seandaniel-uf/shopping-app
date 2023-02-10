import { Item } from "../models/item";

interface ShoppingListProps {
  items: Item[];
}

export const ShoppingList = ({ items }: ShoppingListProps): JSX.Element => {
  return (
    <div>
      <ul>
        {items.map(({ id, product, quantity }) => {
          return (
            <li key={id}>
              {product} - {quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
