import "./Item.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
       
      <Card border="light" style={{ width: '18rem' }} className="card">
         <Card.Img variant="top" src={item.img}/>
         <Card.Body>
             <Card.Title className="card-Title">{item.nombre}</Card.Title>
             <Card.Text className="card-Text">
                 <hr></hr>
                 <strong className="card-Precio">${item.precio}</strong>
             </Card.Text>
             <Link to={`/item/${item.id}`} className="contBoton">
               <Button className="btn btn-primary mx-3 bg-geri">Shop now</Button>
              </Link>
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