import "./Item.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
       
      <Card style={{ width: '18rem' }} className="card">
        <Link to={`/item/${item.id}`}>
          <Card.Img variant="top" src={item.img}/>
        </Link>
         
         <Card.Body className="card-body-item">
             <Card.Title className="card-Title">{item.nombre}</Card.Title>
             <Card.Text className="card-Text">
                 <hr></hr>
                 <strong className="card-Precio">${item.precio}</strong>
             </Card.Text>
             <Link to={`/item/${item.id}`} className="contBoton">
               <Button className="mx-3 btnItem">Shop now</Button>
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