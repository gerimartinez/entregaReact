import "./Checkout.css"
import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { createRoutesFromChildren, Navigate } from "react-router-dom"
import  Button  from "react-bootstrap/Button"
import { db } from "../../firebase/config"
import { collection, getDocs, addDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { Formik, FormikConsumer } from 'formik';
import * as Yup from "yup"

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio")
                .min(4, "El nombre es demasiado corto")
                .max(30, "Maximo 30 caracteres"),
    apellido: Yup.string()
                .required("Este campo es obligatorio")
                .min(4, "El nombre es demasiado corto")
                .max(30, "Maximo 30 caracteres"),
    email: Yup.string() 
                .required("Este campo es obligatorio")
                .email("Formato de email invalido"),
    direccion: Yup.string() 
                .required("Este campo es obligatorio")
                .min(4, "La direccion es demasiado corta")
                .max(30, "Maximo 30 caracteres"),
})              

const Checkout = () => {
    const {cart, totalPrice, emptyCart} = useCartContext()


    const [orderId, setOrderId] = useState(null)

  

    const generarOrden = async (values) => {
       

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
    <div>
        <Formik
            initialValues={{
                 nombre: "",
                 apellido: "",
                 direccion: "",
                 email: "",
                 telefono: ""
            }}
            onSubmit={generarOrden}
            validationSchema={schema}
        >
            {(formik) => ( 
            

            

                <form onSubmit={formik.handleSubmit} className="container my-5 formContainer">
                    <h2 className="titulo">CHECKOUT</h2>
                    <div className="" >
                        <div className="">
                            <div className="form-outline">
                                <input
                                    name="nombre"
                                    onChange={formik.handleChange}
                                    value={formik.values.nombre}
                                    placeholder="Nombre"
                                    type={"text"}
                                    className="form-control my-2"
                                />
                                {formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}
                            </div>
                        </div>
                     <div className="">
                         <div className="">
                                <input
                                    name="apellido"
                                    onChange={formik.handleChange}
                                    value={formik.values.apellido}
                                    placeholder="Apellido"
                                    type={"apellido"}
                                    className="form-control my-2"
                                 />
                                {formik.errors.apellido && <p className="alert alert-danger">{formik.errors.apellido}</p>}
                            </div>
                     </div> 
                  </div>
                    <hr />

                  <div className="">
                        <div className="">
                            <div className="">
                                <input
                                    name="direccion"
                                    onChange={formik.handleChange}
                                    value={formik.values.direccion}
                                    placeholder="Direccion"
                                    type={"text"}
                                    className="form-control my-2"
                                />
                              {formik.errors.direccion && <p className="alert alert-danger">{formik.errors.direccion}</p>}
                            
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    placeholder="email@example.com"
                                    type={"text"}
                                    className="form-control my-2"
                                />
                              {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input
                                    name="telefono"
                                    onChange={formik.handleChange}
                                    value={formik.values.telefono}
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
                            <h5 className="text-uppercase compra">Tu compra:</h5>
                            <h5> </h5>
                        </div>

                        <h5 className="text-uppercase mb-3 textoCheck"></h5>
                     {
                        cart.map((item) => (
                            <div className="mb-4 pb-2" key={item.id} >
                                    <h6 className=" mb-0 compra">Producto: {item.nombre}</h6>
                                    <h6 className=" mb-0 compra">Cantidad: {item.cantidad}</h6>
                                    <h6 className=" mb-0 compra">Precio: ${item.precio * item.cantidad}</h6>
                            </div>
                        ))
                     }

                            <hr className="my-4"/>

                            <div className="d-flex justify-content-between mb-5">
                                    <h5 className="text-uppercase totalCheck">Total: $ {totalPrice()}</h5>
                                    
                            </div> 
                  
                        <Button type="submit" className="btn btn-dark btn-block btn-lg mx-4 btnCheck">Enviar</Button>
                        <button onClick={emptyCart} 
                             className="btn btn-dark btn-block btn-lg btnCheck">Cancelar mi compra
                        </button> 
                    </div>
                </div> 
                   
                   
        
       </form>
      )} 
          
    </Formik>       
   </div>
  
 )
}
export default Checkout



