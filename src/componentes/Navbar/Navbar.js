import "./Navbar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const Navbar = () => {

    return ( 
       <header className="header">
          <div className="divContainer">
              <h1 className="headerLogo">ARMON STUDIO</h1>
             
              <nav className="headerNav">
                    <p className="navLink">HOME</p>
                    <p className="navLink">PRODUCTOS</p>
                    <p className="navLink">GIFTCARD</p>
                    <p className="navLink">CONTACTO</p>
                    <CartWidget/>
               </nav>
         </div>
     </header>
    )
}