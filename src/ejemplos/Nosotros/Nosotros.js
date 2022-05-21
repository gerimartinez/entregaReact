import "./Nosotros.css"


export const Nosotros = ( {titulo, contenido} ) => {
    
    //const {titulo, contenido} = props

    return (
        <section className="nosotros">
            <h2>{titulo}</h2>
            <hr/>
            <p>{contenido}</p>
        </section>
    )
}