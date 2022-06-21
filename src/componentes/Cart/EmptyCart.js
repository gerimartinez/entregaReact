import { Link } from "react-router-dom"

const EmptyCart = () => {
    
    return (
        <div className="container my-5">
            <h2>Tu carrito esta vacio</h2>
            <hr/>
            <Link to="/productos" className="btn btn-primary btnCount">Ir a comprar</Link>
        </div>
    )
    
}
export default EmptyCart