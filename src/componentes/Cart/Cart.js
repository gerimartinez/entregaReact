import "./Cart.css"
import { useCartContext } from "../context/CartContext"
import { HiOutlineTrash } from "react-icons/hi"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()
    
    if (cart.length === 0) {
        return (

            <div className="container my-5">
                <h2>Tu carrito esta vacio</h2>
                <hr/>
                <Link to="/productos" className="btn btn-primary">Ir a comprar</Link>
            </div>
  
        )
    }
    
   

   
    return (
        <div className="container my-5">
            
            <h2>Tu compra</h2>
            
            {
                cart.map((item) => (
                    <section className="divContCart">
                      <div className="row mb-4 d-flex justify-content-between align-items-center" key={item.id}>
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                src={item.img} className="imgCart"/>
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">Modelo: {item.nombre}</h6>
                                <h6 className="text-black mb-0">Cantidad: {item.cantidad}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex"> 
                              ${item.precio}
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">${item.precio * item.cantidad}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger"><HiOutlineTrash/></button>
                          </div>
                        </div>
                     <hr className="my-4"/>
                    
                  </section>   
                    
                ))
            }
            <h2>Total: ${totalPrice()}</h2>
            <div className="contBtns">
                
                <Button className="btn btn-primary mx-3 vaciarCarrito" onClick={emptyCart}>Vaciar carrito</Button>
                <Link to="/productos" className="btn btn-primary btnSeguir">Seguir comprando</Link>  
            </div>
           
           
        </div>
    )
}

export default Cart