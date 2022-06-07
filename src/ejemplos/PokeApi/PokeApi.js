import { useEffect, useState } from "react"


const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    const handleSiguiente = () => {
        setId(id + 1)
    }
    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }
    
   // const handleInput = (e) => {
    //    fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
   //          .then((resp) => resp.json())
  //           .then((data) => {
   //          setPokemon(data)
   //         })
  //  }

    useEffect(() => {
       fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
             .then((resp) => resp.json())
             .then((data) => {
             setPokemon(data)
            })
    }, [id])
    
    return (
        <div className="container my-5">
            <h2>Poke Api</h2>
            <hr/>
            
            {/*<input type="text" onChange={handleInput}/>*/}

            <button className="btn btn-outline-primary" onClick={handleAnterior}>Anterior</button>
            <button className="btn btn-primary mx-3" onClick={handleSiguiente}>Siguiente</button>

           <h3>{pokemon?.name}</h3>
           <img src={pokemon?.sprites.front_default} alt={pokemon?.name}/> 
                
        </div>
    )
}
export default PokeApi