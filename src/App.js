import "./styles.css"
import { Navbar } from "./componentes/Navbar/Navbar"
import { Nosotros } from "./componentes/Nosotros/Nosotros"

function App() {
  return (
    <div className="App">
       <Navbar/>

       <Nosotros titulo="Bienvenido!" contenido="Lentes de sol con onda"/>
    </div>
  );
}

export default App;