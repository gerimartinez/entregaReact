import { useState } from "react"

const Counter = () => {

    let [contador, setContador] = useState(1)
    /*let [contador2, setContador2] = useState(1)*/


    const incrementar = () => {
        setContador(contador + 1)
    }
    /*const incrementar2 = () => {
        setContador2(contador2 + 1)
    }*/


    return (
        <div className="container my-5" /*onClick={incrementar}*/>
            <h2>
                Counter
            </h2>
            <hr/>
            <button className="btn btn-primary" onClick={incrementar}>Click me</button>
            <hr/>
            <h4>{contador}</h4>
            <p>FyH del ultimo click: {new Date().toLocaleString}</p>
            
        </div>

    )
}
export default Counter