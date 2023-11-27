import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const addItem = (item, quantity) => {
    const isAlredyAdded = isInCart(item)

    if (isAlredyAdded) {
      const productToModify = items.find(
        (items) => items.id === item.id
      );

      const productModified = {
        ...productToModify,
        quantity: productToModify.quantity + quantity,
      };

      setItems((prev) =>
        prev.map((items) =>
          items.id === item.id ? productModified : items
        )
      );

    } else {
      setItems((prev) => {return prev.concat({...item, quantity})}) 
    }
  }

  const isInCart = (item) => {
    return items.some((items) => items.id === item.id);
  }


  return <CartContext.Provider value={{items, clear, addItem}}>{children}</CartContext.Provider>

}