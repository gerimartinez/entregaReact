import "./ItemListContainer.css"
import { useEffect, useState } from 'react'
import { pedirDatos } from "../../mock/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import Loader from "../Loader/Loader"


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


