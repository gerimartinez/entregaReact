import "./GiftCard.css"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


export const GiftCard = () => {
    
    return (
        <section className="contenedor">
          <h1>¡Un regalo especial!</h1>
          <img src="/imagenes/GiftCard.png" className="imgGiftcard"></img>
            <div className="container my-5 containerGif">
            
                <hr/>
                <h3 className="h3Gif">Detalles del producto</h3>
                <hr/>
                <p className="detalleGif">
                    La Gift Card Online es una buena opción para un regalo especial!
                    Está disponible en montos desde $3.000 y puede ser usada tanto para compras online
                    como también en nuestro showroom. Se envían por email a la que persona que elijas
                    con toda la información necesaria para canjearla (Número y Monto) con una validez de 3 meses.
                    El pago puede efectuarse a través de Mercado Pago, efectivo y/o transferencia.
                </p>    

                <Link to={`/item/Y4Xy0ywcyXc47YTmFv1m`} className="contBoton">
                    <Button className="btn btn-primary mx-4 btnGift">Comprar</Button>
                </Link>
                
            </div>
        </section>
        
    )
}

export default GiftCard