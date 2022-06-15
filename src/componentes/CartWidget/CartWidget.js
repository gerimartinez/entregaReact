import "./CartWidget.css"

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {

  const {totalCart} = useCartContext()

  return (
    <Link to={"/cart"} className="linkCarrito">
       <AiOutlineShoppingCart/>
       <span className="mx-1">{totalCart()}</span>
    </Link>
  )
}