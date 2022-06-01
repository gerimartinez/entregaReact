import Item from "../Item/Item"

const ItemList = ( {items} ) => {
    return (
        <div className="divCard">
                   
                    {
                        items.map((item) => <Item key={item.id} item={item}/>)
                    } 
                        
        </div>
    )
}

export default ItemList
//  <h2 className="h2Productos">PRODUCTOS</h2>
  //                   <hr/>