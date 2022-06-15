import "./ItemVendidos.css"
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom"


export const ItemVendidos = () => {
    return(
       <section>
           <h6>// COOLEST SUNGLASSES IN TOWN // COOLEST SUNGLASSES IN TOWN // COOLEST SUNGLASSES IN TOWN  // COOLEST SUNGLASSES IN TOWN  // COOLEST SUNGLASSES // </h6>
         <Carousel className="contCarousel"> 
                <Carousel.Item>
                    <Link to={`/item/9`}>
                        <img
                            className="d-block w-100 imgCarousel"
                            src="./imagenes/morecar1.png"
                            alt="grow"
                        
                         />
                    </Link>
                    
                  <Carousel.Caption>
                       <h3>STAY TUNNED</h3>
                       <p>Explora nuestro catalogo de productos - Modelo Grow.</p>
                  </Carousel.Caption>
              </Carousel.Item>
             <Carousel.Item>
                    <Link to={`/item/10`}>
                        <img
                            className="d-block w-100 imgCarousel"
                            src="./imagenes/emicar.png"
                            alt="estocolmo"
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>STAY TUNNED</h3>
                        <p>Explora nuestro catalogo de productos - Modelo Estocolmo.</p>
                    </Carousel.Caption>
              </Carousel.Item>
                <Carousel.Item>
                    <Link to={`/item/13`}>
                        <img
                            className="d-block w-100 imgCarousel"
                            src="./imagenes/morecar3.png"
                            alt="carra"
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>STAY TUNNED</h3>
                        <p>Explora nuestro catalogo de productos - Modelo Carra.</p>
                    </Carousel.Caption>
                </Carousel.Item> 
         </Carousel>
           <h1>NUESTROS PRODUCTOS MAS VENDIDOS</h1>
           <div className="vendidoContainer">
             <div className="prodCard">
                    <Link to={`/item/3`}>
                        <img src="./imagenes/mila.png" className="imgVendidos"></img>
                    </Link>
                    
                    <h2>Mila</h2>
                    <hr/>
                    <p className="precioProd">$3500</p>
                    <Link to={`/productos`} className="contBoton">
                        <Button variant="primary" className="btnShop">Shop now</Button>
                    </Link>
                    
              </div>
                <div className="prodCard">
                    <Link to={`/item/4`}>
                        <img src="./imagenes/dolle.png" className="imgVendidos"></img>
                    </Link>
                    <h2>Dolle</h2>
                    <hr/>
                    <p className="precioProd">$3200</p>
                    <Link to={`/productos`} className="contBoton">
                        <Button variant="primary" className="btnShop">Shop now</Button>
                    </Link>
                    
                </div>
                <div className="prodCard">
                    <Link to={`/item/5`}>
                        <img src="./imagenes/estocolmo.png" className="imgVendidos"></img>
                    </Link>
                    <h2>Estocolmo</h2>
                    <hr/>
                    <p className="precioProd">$2800</p>
                    <Link to={`/productos`} className="contBoton">
                        <Button className="mx-3 btnShop">Shop now</Button>
                    </Link>
                    
                </div>
         </div>
       </section> 
        
    )
}
export default ItemVendidos