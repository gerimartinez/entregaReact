import "./ItemCount.css"
import Button from "react-bootstrap/esm/Button"

const ItemCount = ( {max, setContador, contador, onAdd} ) => {

    
    const handleSumar = () => {
        contador < max && setContador(contador + 1)
    }
    const handleRestar = () => {
        contador > 1 && setContador(contador - 1)
    }
    

    return (
        <div className="my-3 buttons">
            
            <div className="botones-cantidad">
             <button 
                 onClick={handleRestar} 
                 /*className={`${ counter === 1 ? "btn outline-primary" : "btn outline-primary"} ${counter === 1 ? "min-value" : "" }`}
                 disabled = {counter === 1 ? true : false } */               
                >
                 -
             </button>
             <span className="contador">{contador}</span>
             <button onClick={handleSumar} className="btn btn-primary btnCount">+</button>
             
             <Button onClick={onAdd} className="btn btn-primary mx-4 btnCount">Añadir al carrito</Button>
            </div>

        </div>

    )
}
export default ItemCount