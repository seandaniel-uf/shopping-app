import { useState } from "react";
import { Greeter } from "./components/Greeter";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingListForm } from "./components/ShoppingListForm";
import { Item } from "./models/item";
import { v4 } from "uuid";

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  const onAddItem = (product: string, quantity: number): void => {
    console.log("Made it to the app component");
    console.log(product);
    // spread original items, add on new item
    setItems([...items, { id: v4(), product: product, quantity: quantity }]);
  };

  return (
    <div>
      <Greeter message="Welcome to our Shopping List" />
      <ShoppingListForm onAddItem={onAddItem} />
      <ShoppingList items={items} />
    </div>
  );
};

export default App;
