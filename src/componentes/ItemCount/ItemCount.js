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
             <button onClick={handleRestar} className="btn btn-primary">-</button>
             <span className="contador">{contador}</span>
             <button onClick={handleSumar} className="btn btn-primary">+</button>
             
             <Button onClick={onAdd} className="btn btn-primary mx-4">Añadir al carrito</Button>
            </div>

        </div>

    )
}
export default ItemCount