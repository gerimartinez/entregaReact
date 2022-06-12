import "./ItemListContainer.css"
import { useContext, useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { pedirDatos } from "../../mock/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


export const ItemListContainer = () => {
  


   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

   const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos(true)
            .then((resp) => {
              if (!categoryId) {
                setItems(resp)
              } else {
                setItems(resp.filter((item) => item.categoria === categoryId))
              }
              
            })
            .catch((error) => {
              console.log("error, ", error)
            })
            .finally(() => {
                setLoading(false)
            })
    
    }, [categoryId])

        
    return (
        <section className="container my-5">
            <nav className="headerNav">
                    <Link to={"/categorias/negro"} className="navLink">Negro</Link>
                    <Link to={"/categorias/carey"} className="navLink">Carey</Link>
             </nav>
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
