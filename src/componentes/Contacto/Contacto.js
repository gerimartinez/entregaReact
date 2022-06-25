import { useState } from "react"
import Button from "react-bootstrap/Button"
import "./Contacto.css"

export const Contacto = () => {

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        consulta: ""
    })
    
    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("submit del form")
        console.log(values)
    }

    return (
        <div className="container my-5">
            <h2 className="contactTitle">Contacto</h2>
            <hr/>
            

            <form onSubmit={handleSubmit}>
                <h4 className="consulta">¡Envianos tu consulta!</h4>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    placeholder="Nombre"
                    type={"nombre"}
                    className="form-control my-2"
                />

                
                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    placeholder="Email"
                    type={"email"}
                    className="form-control my-2"
                />

                <input
                    name="consulta"
                    onChange={handleInputChange}
                    value={values.consulta}
                    placeholder="Consulta"
                    type={"text"}
                    className="form-control consultaForm"
                />
                <Button type={"submit"} className="btnEnviar">Enviar</Button>
            </form>
        </div>


        
    )
}

export default Contacto 
