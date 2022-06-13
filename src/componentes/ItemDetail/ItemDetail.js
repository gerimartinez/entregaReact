import "./ItemDetail.css"
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button'
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"



export const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)
    

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart)
    }

    return(
        <section>
          <Card border="light"  className="card">
             <Card.Img variant="top" src={item.img}/>
                <Card.Body>
                    <Card.Title className="cardTitle">{item.nombre}</Card.Title>
                    <Card.Text className="cardDefine">
                        DEFINE YOUR LOOK
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="cardText">Proteccion UV 400</ListGroupItem>
                    <ListGroupItem className="cardText">Ultra livianos</ListGroupItem>
                    <ListGroupItem className="cardPrecio">${item.precio}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    {/*<Card.Link href="#">Card Link</Card.Link>*/}
                    <ItemCount
                        max={item.max}
                        contador={cantidad}
                        setContador={setCantidad}
                        onAdd={handleAgregar}
                    />
                </Card.Body>
           </Card>
           <Button onClick={handleVolver} className="btnVolver">Volver</Button>
        </section>
        
    )
}