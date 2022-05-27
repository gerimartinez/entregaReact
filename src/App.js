import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { Navbar } from "./componentes/Navbar/Navbar"
import { useState } from 'react';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from "./componentes/ItemCount/ItemCount"


function App() {
  
  return (
    <div className="App">
       <Navbar/>
        <ItemCount/>
    </div>
  );
}

export default App;