import "./Cart.css"
import { useCartContext } from "../context/CartContext"
import { HiOutlineTrash } from "react-icons/hi"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import  EmptyCart  from "./EmptyCart"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem, addItem, item} = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    if (cart.length === 0) return <EmptyCart/>
    
    const handleAgregar = () => {
        if (cantidad === 0) return
        
        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart)
    }
    

    return (
        <div className="container my-5 carContainer">  
            <h2 className="title">TU COMPRA</h2>
            
            {
                cart.map((item) => (
                    <section className="divContCart">
                      <div className="row mb-4 d-flex justify-content-between align-items-center" key={item.id}>
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                src={item.img} className="imgCart"/>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2">
                                <h6 className="text-muted">Modelo: {item.nombre}</h6>
                                <h6 className="text-black mb-0">Cantidad: {item.cantidad}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex text-muted"> 
                              ${item.precio}
                            </div>
                            {/* <div className="col-md-4 col-lg-4 col-xl-4">
                                <ItemCount
                                      max={item.max}
                                      contador={cantidad}
                                      setContador={setCantidad}
                                      onAdd={handleAgregar}
                                />
                            </div> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0 text-black">${item.precio * item.cantidad}</h6>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 text-end">
                                <a href="#!" className="text-black"><i className="fas fa-times"></i></a>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger"><HiOutlineTrash/></button>
                          </div>
                          
                        </div>
                     <hr className="my-4"/>
                    
                  </section>   
                    
                ))
            }
            <Button className="btn btn-primary mx-4 vaciarCarrito" onClick={emptyCart}>Vaciar carrito</Button>
            <h2 className="total">Total: ${totalPrice()}</h2>
            <Link to="/checkout" >
                  <button className="btn btn-primary mx-4 iniciarCompra">INICIAR COMPRA</button>
            </Link>  
            <div className="contBtns">
               
                <Link to="/productos" >
                   <button className="btn btn-primary btnSeguir">Seguir comprando</button>
                </Link>
               
                
            </div>
           
        </div>
    )
}

export default Cart