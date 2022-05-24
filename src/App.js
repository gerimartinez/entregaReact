import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { Navbar } from "./componentes/Navbar/Navbar"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { Counter } from "./ejemplos/Counter/Counter"

function App() {

  const bienvenida = {
    title: "Bienvenido",
    texto: "Lentes de sol con onda!"
    
  }

  return (
    <div className="App">
       <Navbar/>
       <ItemListContainer texto={bienvenida.texto}/>
       <Counter/>
    </div>
  );
}

export default App;