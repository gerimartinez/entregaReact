import "./ItemDetail.css"
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button'
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"



export const ItemDetail = ({item }) => {

    const {addItem, isInCart} = useContext(CartContext)
    console.log(isInCart(item.id))

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    

    const handleAgregar = () => {
        if (cantidad === 0) return
        
        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart)
    }

    return(
        <section>
          <Card border="light"  className="cardDetail">
             <Card.Img variant="top" src={item.img}/>
                <Card.Body className="cardBody-Detail">
                    <Card.Title className="cardTitleDetail">{item.nombre}</Card.Title>
                    <Card.Text className="cardDefine">
                        DEFINE YOUR LOOK
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="cardText">Proteccion UV 400</ListGroupItem>
                    <ListGroupItem className="cardText">Ultra livianos</ListGroupItem>
                    <ListGroupItem className="cardPrecio">${item.precio}</ListGroupItem>
                </ListGroup>
                <Card.Body className="cardBody-Detail">
                    
                    {
                        isInCart(item.id)
                        ? <Link to="/cart" className="btn btn-primary my-5 btnFinalizar">Finalizar compra</Link>
                         
                        :
                            <ItemCount
                                max={item.max}
                                contador={cantidad}
                                setContador={setCantidad}
                                onAdd={handleAgregar}
                                
                            />
                    }
                 <Link to="/productos" className="btn btn-primary btnSeguir">Seguir comprando</Link>  
                </Card.Body>
           </Card>
           <Button onClick={handleVolver} className="btnVolver">Volver</Button>
        </section>
        
    )
}