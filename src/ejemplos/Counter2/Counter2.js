import { useState, useEffect } from "react"

const Counter2 = () => {

    const [contador, setContador] = useState({
        contador: 1,
        fyh: new Date()
    })
    
    const incrementar = () => {
        setContador( {
            contador: contador.contador + 1,
            fyh: new Date()
        } )
    }

   // useEffect (() => {
   //     console.log("Componente montado")
   //     return () => {
   //         console.log("se desmonto el counter")
   //     }
   // },[])


   // useEffect (() => {
   //     console.log("Componente actualizado")
   // },[contador])
 

    return (
        <div className="container my-5" /*onClick={incrementar}*/>
            <h2>
                Counter
            </h2>
            <hr/>
            <button className="btn btn-primary" onClick={incrementar}>Click me</button>
            <hr/>
            <h4>{contador.contador}</h4>
            <p>FyH del ultimo click: {contador.fyh.toLocaleString()}</p>
        </div>

    )
}
export default Counter2 

/*let [contador2, setContador2] = useState(1)*/
    /*const incrementar2 = () => {
        setContador2(contador2 + 1)
    }*/
    /*const [contador, setContador] = useState({
        contador: 1,
        fyh: new Date()
    })
    const incrementar = () => {
        setContador({
            contador: contador.contador + 1,
            fyh: new Date()
        })
    }*/
    /*<p>fyh del ultimo click {contador.fyh.toLocaleString()}</p>*/
