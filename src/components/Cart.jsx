import { useContext } from "react"

import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const {items} = useContext(CartContext);
    return(
        console.log(items)
    );
}