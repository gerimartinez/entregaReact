import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

const productos = [
    {
        id: 0,
        imagen: "./imagenes/grow.png",
        nombre: "GROW",
        cantidad: 1,
        maximo: 5,
        precio: 1980
       }, 
       {
        id: 1,
        imagen: "./imagenes/print.png",
        nombre: "PRINT",
        cantidad: 1,
        maximo: 5,
        precio: 2500
       },
       {
        id: 2,
        imagen: "./imagenes/africa.png",
        nombre: "AFRICA",
        cantidad: 1,
        maximo: 5,
        precio: 2450
       }, 
       {
        id: 3,
        imagen: "./imagenes/mila.png",
        nombre: "MILA",
        cantidad: 1,
        maximo: 5, 
        precio: 2450
       }, 
       {
        id: 4,
        imagen: "./imagenes/dolle.png",
        nombre: "DOLLE",
        cantidad: 1,
        maximo: 5,
        precio: 2230
       }, 
       {
        id: 5,
        imagen: "./imagenes/estocolmo.png",
        nombre: "ESTOCOLMO",
        cantidad: 1,
        maximo: 5,
        precio: 2550
       }, 
]

export const ItemListContainer = () => {
    
   
   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

    const pedirDatos = () => {

        return new Promise((resolve, reject) => {
          setTimeout(() => {
                   resolve(productos)
            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(true)

        pedirDatos(true)
            .then((resp) => {
              setItems(resp)
              setLoading(false)
            })
            .catch((error) => {
              console.log("error, ", error)
              setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    
    }, [])

        
    return (
        <section className="container my-5">
            <h2>PRODUCTOS</h2>
            <hr/>
            {
                loading
                ?  <Spinner animation="border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </Spinner>
                : <div>
                        {
                        items.map((item) => (
                            <div key={item.id}>
                                 <h2>{item.nombre}</h2>
                                 <img src={item.imagen}></img>
                                 <p>${item.precio}</p>
                                <hr/>
                            </div>
                        ))
                      }    
                 </div>
            }
            
            
        </section>
    )
} 

//promesa
//.then((data) => {   //me trae el resolve de la promesa
  //      console.log(data)
   //     })
     //   .catch((error) => {  //me trae el reject lo capto con catch
       // console.log("Error ", error)
        //})
