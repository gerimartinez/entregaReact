import { useState } from "react"

const Counter = () => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {
        contador++
    }


    return (
        <div className="container my-5" onClick={incrementar}>
            <h2>
                Counter
            </h2>
            <hr/>
            <p>{contador}</p>
        </div>

    )
}

export default Counter