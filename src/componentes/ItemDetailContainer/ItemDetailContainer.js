import { pedirDatos } from "../../mock/pedirDatos"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  { ItemDetail }  from "../ItemDetail/ItemDetail"
import { Spinner } from "react-bootstrap"


export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        pedirDatos(true)
            .then((resp) => {
              setItem(resp.find((item) => item.id === Number(itemId)))
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
                : <ItemDetail item={item}/>
            }
            
            
        </section>
    )
}