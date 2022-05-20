import "./Nosotros.css"


export const Nosotros = (props) => {
    console.log(props)

    return (
        <section className="nosotros">
            <h2>{props.titulo}</h2>
            <hr/>
            <p>{props.contenido}</p>
        </section>
    )
}