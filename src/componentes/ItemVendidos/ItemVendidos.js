import "./ItemVendidos.css"
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'


export const ItemVendidos = () => {
    return(
       <section>
           <h6>// ARMON STUDIO // ARMON STUDIO // ARMON STUDIO // ARMON STUDIO // ARMON STUDIO // ARMON STUDIO // ARMON STUDIO // ARMON STUDIO // ARMON STU</h6>
         <Carousel className="contCarousel"> 
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="./imagenes/morecar1.png"
                        alt="grow"
                        
                    />
                  <Carousel.Caption>
                       <h3>STAY TUNNED</h3>
                       <p>Explora nuestro catalogo de productos - Modelo Grow.</p>
                  </Carousel.Caption>
              </Carousel.Item>
             <Carousel.Item>
                  <img
                      className="d-block w-100 imgCarousel"
                      src="./imagenes/emicar.png"
                      alt="estocolmo"
                    />
                    <Carousel.Caption>
                        <h3>STAY TUNNED</h3>
                        <p>Explora nuestro catalogo de productos - Modelo Estocolmo.</p>
                    </Carousel.Caption>
              </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="./imagenes/morecar3.png"
                        alt="carra"
                    />
                    <Carousel.Caption>
                        <h3>STAY TUNNED</h3>
                        <p>Explora nuestro catalogo de productos - Modelo Carra.</p>
                    </Carousel.Caption>
                </Carousel.Item> 
         </Carousel>
           <h1>NUESTROS PRODUCTOS MAS VENDIDOS</h1>
           <div className="vendidoContainer">
             <div className="prodCard">
                    <img src="./imagenes/mila.png" className="imgVendidos"></img>
                    <h2>Mila</h2>
                    <hr/>
                    <p className="precioProd">$3500</p>
                    <Button variant="primary" className="btnShop">Shop now</Button>
              </div>
                <div className="prodCard">
                    <img src="./imagenes/dolle.png" className="imgVendidos"></img>
                    <h2>Dolle</h2>
                    <hr/>
                    <p className="precioProd">$3200</p>
                    <Button variant="primary" className="btnShop">Shop now</Button>
                </div>
                <div className="prodCard">
                    <img src="./imagenes/estocolmo.png" className="imgVendidos"></img>
                    <h2>Estocolmo</h2>
                    <hr/>
                    <p className="precioProd">$2800</p>
                    <Button variant="primary" className="btnShop">Shop now</Button>
                </div>
         </div>
       </section> 
        
    )
}
export default ItemVendidos