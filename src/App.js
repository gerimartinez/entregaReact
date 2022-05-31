import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { Navbar } from "./componentes/Navbar/Navbar"
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <div className="App">
       <Navbar/>
        <ItemListContainer/>
         
    </div>
  );
}

export default App;