import "./Home.css"
import Carousel from 'react-bootstrap/Carousel'
import ItemVendidos from "../ItemVendidos/ItemVendidos"

export const Home = () => {
    return (
        <Carousel className="contCarousel">
          <ItemVendidos/>  
          <Carousel.Item>
             <img
                 className="d-block w-100 imgCarousel"
                 src="./imagenes/piliprint2.png"
                 alt="HOLA"
                 
                />
                <Carousel.Caption>
                    <h3>HOLA</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imgCarousel"
                    src="./imagenes/1.png"
                    alt="Second slide"
                />
               <Carousel.Caption>
                   <h3>Second slide label</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imgCarousel"
                    src="./imagenes/piliprint.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <hr></hr>
            
        </Carousel>
    )
}