import ItemCount from "../ItemCount/ItemCount"


const Item = ({item}) => {
    return (
        <div className="divInCard">
             <h2>{item.nombre}</h2>
             <img src={item.img} alt="" className='imgCard'/>
             <p>${item.precio}</p>
             <ItemCount contador/>
             <hr/>
        </div>
    )
}
export default Item