import "./ItemCount.css"
import Button from "react-bootstrap/esm/Button"

const ItemCount = ( {max, setContador, contador, onAdd} ) => {

    
    const handleSumar = () => {
        contador < max && setContador(contador + 1)
    }
    const handleRestar = () => {
        contador > 0 && setContador(contador - 1)
    }
    
    if (max === 0) {
        return (
            <div className="container my-3">
                <p>Sin stock</p>
            </div>
        )
    }

    return (
        <div className="my-3 buttons">
            
            <div className="botones-cantidad">
             <button 
                 onClick={handleRestar} className={`btn mx-1 ${ contador === 1 ? "btn outline-primary btnCount" : "btn outline-primary btnCount"} ${contador === 1 ? "min-value" : "" }`}
                 disabled = {contador === 0}             
                >
                 -
             </button>
             <span className="contador">{contador}</span>
             <button 
                    onClick={handleSumar} className="btn btn-primary btnCount"
                    disabled={contador === max}
                   >
                        +
                </button>
              <Button onClick={onAdd} className="btn btn-primary mx-4 btnCount">Añadir al carrito</Button>

            
            </div>

        </div>

    )
}
export default ItemCount