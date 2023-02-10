import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export const ShoppingListForm = ({
  onAddItem,
}: ShoppingListFormProps): JSX.Element => {
  // useRef takes the actual element for its type
  // null because the ref is not set until after the function is returned and the content is rendered
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Submitted");
    // optional chaining - inputRef.current is null to start
    const newProduct = productInputRef.current!.value;
    const newQuantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, newQuantity);
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input type="number" min={0} ref={quantityInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
};
