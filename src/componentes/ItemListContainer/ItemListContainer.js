import "./ItemListContainer.css"
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import Loader from "../Loader/Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"


export const ItemListContainer = () => {
  


   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

   const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, 
          where("categoria", "==", categoryId)) : productosRef 
          where("precio", ">", 3000)

        getDocs(q)
          .then((data) => {
            const newItems = data.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data()
              }
            })
            setItems(newItems)
          })
          .finally(() => {
              setLoading(false)
          })

    }, [categoryId])

    if (loading) {
      return (
        
        <Loader/>
      )
    }
        
    return (
        <section className="container my-5">
            <Dropdown className="contDropdown">
                <Dropdown.Toggle className="btn-categorias">
                  Categorias
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <Link to={"/productos"} className="navLink-categorias">Todos</Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <Link to={"/categorias/negro"} className="navLink-categorias">Negro</Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <Link to={"/categorias/carey"} className="navLink-categorias">Carey</Link>
                  </Dropdown.Item>
                   <Dropdown.Item href="#/action-3">
                      <Link to={"/categorias/colores"} className="navLink-categorias">Colores</Link>
                    </Dropdown.Item>
                 </Dropdown.Menu>
           </Dropdown>

            
            
           <ItemList items={items}/>
        </section>
    )
} 


