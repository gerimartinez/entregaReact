import { Button } from 'react-bootstrap' 



export const ItemListContainer = ({texto}) => {

    return (
        <section className="container my-5">
            <h2>PRODUCTOS</h2>
            <hr/>
            <p>{texto}</p>
        </section>
    )
}