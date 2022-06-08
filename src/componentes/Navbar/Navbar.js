import "./Navbar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

export const Navbar = () => {

    return ( 
       <header className="header">
          <div className="divContainer">
             <img src="/imagenes/armonstudio.png" className="headerLogo"></img>
             
              <nav className="headerNav">
                    <Link to={"/"}className="navLink">HOME</Link>
                    <Link to={"/productos"} className="navLink">PRODUCTOS</Link>
                    <Link to={"/giftcard"} className="navLink">GIFTCARD</Link>
                    <Link to={"/contacto"} className="navLink">CONTACTO</Link>
                    <Link to={"/carrito"} className="navLink"><CartWidget/></Link>
                    
               </nav> 
         </div>
     </header>
    )
}