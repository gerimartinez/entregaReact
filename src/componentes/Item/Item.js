import "./Item.css"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
//import ItemCount from "../ItemCount/ItemCount"

const Item = ({item}) => {
    return (
        <Card border="light" style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" src={item.img}/>
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     <hr></hr>
                     ${item.precio}
                </Card.Text>
                 
                <Button variant="primary">Shop now</Button>
               
            </Card.Body>
        </Card>

    )
}
export default Item 


//<div className="divInCard">
 //            <h2>{item.nombre}</h2>
   //          <img src={item.img} alt="" className='imgCard'/>
    //         <p>${item.precio}</p>
      //       <ItemCount contador/>
        //     <hr/>
        //</div>