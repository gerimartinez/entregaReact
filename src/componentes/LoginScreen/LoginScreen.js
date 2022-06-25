import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import "./LoginScreen.css"

const LoginScreen = () => {

    const {login, error} = useAuthContext()

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
        
    }
    
    return (
        <section className="h-100 gradient-form" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                    <div className="row g-0">
                        <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">

                            <div className="text-center">
                            <img src="../imagenes/armonstudio.png" className="imgArmon"></img>
                            <h4 className="mt-1 mb-5 pb-1 titleText">ARMON STUDIO</h4>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <p className="textLogin">Ingresa tu cuenta</p>

                                <div className="form-outline mb-4">
                                    <input 
                                    type={"email"} 
                                    name="email"
                                    value={values.email}
                                    onChange={handleInputChange}
                                    id="form2Example11" 
                                    class="form-control"
                                    placeholder="email@example.com"/>

                                    {error.email && <small className='text-danger'>{error.email}</small>}
                                </div>

                                <div className="form-outline mb-4">
                                    <input 
                                    type={"password"}
                                    name="password"
                                    value={values.password}
                                    onChange={handleInputChange} 
                                    id="form2Example22" 
                                    className="form-control"
                                    placeholder="password"/>
                                   
                                    {error.password && <small className='text-danger'>{error.password}</small>}
                                </div>

                                
                                <button type="submit" className="btn  btn-block fa-lg gradient-custom-2 mb-3 btnLogin">Login</button>
            

                            </form>

                        </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4 textAsideTitle">SOMOS MÁS QUE UNA TIENDA DE LENTES DE SOL</h4>
                            <p className="small mb-0 textAside">
                                "ARMON" viene de Armonía. Y de esto se trata un poco este emprendimiento,
                                de tener buena comunicación con mis clientxs, de destinarle tiempo a mis ideas, 
                                a sus opiniones y a sus gustos.
                                De adaptarme a los cambios que sean necesarios para evolucionar.
                                De crear un ambiente de equilibrio, con buenas energías y 
                                predisposición para poder recibirlos, atenderlos de la mejor manera 
                                y que se sientan cómodos y libres a la hora de elegir sus Armon!
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
     </section>
    )
}
export default LoginScreen