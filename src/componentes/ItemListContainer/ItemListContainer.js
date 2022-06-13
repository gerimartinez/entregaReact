import "./ItemListContainer.css"
import { useContext, useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { pedirDatos } from "../../mock/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'


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
              <Dropdown className="contDropdown">
                    <Dropdown.Toggle id="dropdown-basic" className="btncategorias">
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
