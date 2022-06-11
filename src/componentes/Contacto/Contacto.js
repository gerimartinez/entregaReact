import { useState } from "react"
import Button from "react-bootstrap/Button"


export const Contacto = () => {

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        tel: ""
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
            <h2>Contacto</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <h4>Login</h4>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    placeholder="Nombre"
                    type={"text"}
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
                    name="telefono"
                    onChange={handleInputChange}
                    value={values.tel}
                    placeholder="Numero de telefono"
                    type={"text"}
                    className="form-control my-2"
                />
                <Button type={"submit"}>Enviar</Button>
            </form>
        </div>


        
    )
}

export default Contacto 
  //  useEffect(() => {

    //    const clicker = () => {
   //         console.log("click detectado")
    //    }

      //  window.addEventListener("click", clicker)

      //  return () => {
       //     window.addEventListener("click", clicker)
        //}
    //}, [])
