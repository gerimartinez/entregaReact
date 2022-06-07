import "./ItemDetail.css"
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button'



export const ItemDetail = ({item}) => {
    return(
        <Card style={{ width: '18rem' }} className="card">
         <Card.Img variant="top" src={item.img}/>
        <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>
                  DEFINE YOUR LOOK
           </Card.Text>
       </Card.Body>
        <ListGroup className="list-group-flush">
           <ListGroupItem>Proteccion UV 400</ListGroupItem>
           <ListGroupItem>Ultra livianos</ListGroupItem>
           <ListGroupItem>${item.precio}</ListGroupItem>
        </ListGroup>
        <Card.Body>
           {/*<Card.Link href="#">Card Link</Card.Link>*/}
           <ItemCount/>
           <Button className="btn btn-primary mx-3">Añadir al carrito</Button>
        </Card.Body>
    </Card>
    )
}