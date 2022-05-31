import "./ItemListContainer.css"
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { pedirDatos } from "../../mock/pedirDatos"
import ItemList from "../ItemList/ItemList"



export const ItemListContainer = () => {
    
   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

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
      
            {
                loading
                ?  <Spinner animation="border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </Spinner>
                : <ItemList items={items}/>
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
