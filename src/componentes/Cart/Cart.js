import { useCartContext } from "../context/CartContext"
import Table from 'react-bootstrap/Table'
import { HiOutlineTrash } from "react-icons/hi"

const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()
    

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>

            {
                cart.map((item) => (
                    <Table striped bordered hover size="sm" key={item.id}>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.nombre}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.precio * item.cantidad}</td>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger"><HiOutlineTrash/></button>
                            </tr>
                        </tbody>
                    </Table>
                    
                ))
            }

           <h2>Total: ${totalPrice()}</h2>
           <button className="btn btn-primary btnShop" onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart