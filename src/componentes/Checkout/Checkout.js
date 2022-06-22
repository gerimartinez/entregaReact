import "./Checkout.css"
import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { Navigate } from "react-router-dom"
import  Button  from "react-bootstrap/Button"
import { db } from "../../firebase/config"
import { collection, getDocs, addDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId } from "firebase/firestore"

const Checkout = () => {
    const {cart, totalPrice, emptyCart} = useCartContext()

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        email: "",
        telefono: ""
        
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 5) {
            alert("El nombre es demasiado corto")
            return 
        }
        if (values.nombre.length < 5) {
            alert("El email es invalido")
            return 
        }
        if (values.nombre.length < 5) {
            alert("La direccion no es correcta")
            return 
        }

        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: totalPrice()
        }

        console.log(orden)
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), "in", cart.map(el => el.id)))

        const outOfStock = []
        const productos = await getDocs(q)
       
        productos.docs.forEach((doc) =>{
            const itemToUpdate = cart.find(prod => prod.id === doc.id)

            if ((doc.data().max - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    max: doc.data().max - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })
        
        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {
            console.log(outOfStock)
            alert("Hay items sin stock")
        }

        
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2 className="finPedido">¡GRACIAS POR SU COMPRA!</h2>
                <hr/>
                <p className="numPedido">Su numero de pedido es: {orderId}</p>
            </div>
        )
    }
    
    if (cart.length === 0) {
        return <Navigate to="/"/>
    
 }

    return (
      <form onSubmit={handleSubmit} className="container my-5 formContainer">
            <h2 className="titulo">CHECKOUT</h2>
            <div className="" >
                <div className="">
                    <div className="form-outline">
                      <input
                          name="nombre"
                          onChange={handleInputChange}
                          value={values.nombre}
                          placeholder="Nombre"
                          type={"text"}
                          className="form-control my-2"
                        />
                  </div>
              </div>
               <div className="">
                  <div className="">
                     <input
                            name="apellido"
                            onChange={handleInputChange}
                            value={values.apellido}
                            placeholder="Apellido"
                            type={"apellido"}
                            className="form-control my-2"
                         />
                       
                   </div>
              </div> 
          </div>
             <hr />

          <div className="">
                <div className="">
                    <div className="">
                       <input
                           name="direccion"
                           onChange={handleInputChange}
                           value={values.direccion}
                           placeholder="Direccion"
                           type={"text"}
                           className="form-control my-2"
                         />                            
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline">
                       <input
                            name="email"
                            onChange={handleInputChange}
                            value={values.email}
                            placeholder="email@example.com"
                            type={"text"}
                            className="form-control my-2"
                         />
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline">
                        <input
                            name="telefono"
                            onChange={handleInputChange}
                            value={values.telefono}
                            placeholder="Telefono"
                            type={"number"}
                            className="form-control my-2"
                         />
                    </div>
                </div> 
              
         </div>
         <div className="bg-grey resumenCont">
             <div className="p-5">
                 <h3 className="fw-bold mb-5 mt-2 pt-1 textoCheck" >Resumen</h3>
                 <hr className="my-4"/>

                 <div className="d-flex justify-content-between mb-4">
                     <h5 className="text-uppercase"></h5>
                     <h5> </h5>
                 </div>

                 <h5 className="text-uppercase mb-3 textoCheck">Tu compra</h5>

                    <div className="mb-4 pb-2">
                              <h6 className="text-muted"></h6>
                              <h6 className="text-black mb-0">{} </h6>

                        
                    </div>

                    {/* <h5 class="text-uppercase mb-3">Codigo de descuento</h5>

                    <div class="mb-5">
                        <div class="form-outline">
                            <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                            <label class="form-label" for="form3Examplea2">Ingresa tu codigo</label>
                        </div>
                    </div> */}

                    <hr className="my-4"/>

                    <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase textoCheck">Total: $ {totalPrice()}</h5>
                            
                    </div>

                    <Button type="submit" className="btn btn-dark btn-block btn-lg btnCheck">Enviar</Button>
                    <button onClick={emptyCart} 
                        className="btn btn-dark btn-block btn-lg btnCheck">Cancelar mi compra
                    </button> 
         </div>
           </div>
           
            
    </form>
 )
}
export default Checkout



