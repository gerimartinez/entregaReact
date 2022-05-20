import "./Navbar.css"


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
               </nav>
         </div>
     </header>
    )
}