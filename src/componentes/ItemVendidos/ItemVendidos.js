import "./ItemVendidos.css"

export const ItemVendidos = () => {
    return(
       <section>
           <h1>NUESTROS PRODUCTOS MAS VENDIDOS</h1>
           <div className="vendidoContainer">
             <div className="prodCard">
                    <img src="./imagenes/mila.png" className="imgVendidos"></img>
                    <h2>Mila</h2>
                    <p>$3500</p>
              </div>
                <div className="prodCard">
                    <img src="./imagenes/dolle.png" className="imgVendidos"></img>
                    <h2>Dolle</h2>
                    <p>$3200</p>
                </div>
                <div className="prodCard">
                    <img src="./imagenes/estocolmo.png" className="imgVendidos"></img>
                    <h2>Estocolmo</h2>
                    <p>$2800</p>
                </div>
         </div>
       </section> 
        
    )
}
export default ItemVendidos