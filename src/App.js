import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { Navbar } from "./componentes/Navbar/Navbar"
import { Home } from './componentes/Home/Home';
import GiftCard from "./componentes/GiftCard/GiftCard"
import Contacto from "./componentes/Contacto/Contacto"
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ItemVendidos from './componentes/ItemVendidos/ItemVendidos';


function App() {
  
  return (
    <BrowserRouter>

       <Navbar/>

        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/productos' element={ <ItemListContainer/> }/>
           <Route path='/categorias/:categoryId' element={ <ItemListContainer/> }/>
           <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
           <Route path='/giftcard' element={<GiftCard/>}/>
           <Route path='/contacto' element={<Contacto/>}/>
           <Route path='*' element={ <Navigate to={"/"}/> } />
        </Routes>
                 
    </BrowserRouter>
   
  );
}

export default App;