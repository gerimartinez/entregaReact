import Item from "../Item/Item"

const ItemList = ( {items} ) => {
    return (
        <div className="divCard">
                     <h2>PRODUCTOS</h2>
                     <hr/>
                    {
                        items.map((item) => <Item key={item.id} item={item}/>)
                    } 
                        
        </div>
    )
}

export default ItemList