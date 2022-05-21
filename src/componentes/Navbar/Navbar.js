import "./Navbar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const Navbar = () => {

    return ( 
       <header className="header">
          <div className="divContainer">
              <h1 className="headerLogo">Armon Studio</h1>
             
              <nav className="headerNav">
                    <p className="navLink">Inicio</p>
                    <p className="navLink">Productos</p>
                    <p className="navLink">GiftCard</p>
                    <p className="navLink">Contacto</p>
                    <CartWidget/>
               </nav>
         </div>
     </header>
    )
}