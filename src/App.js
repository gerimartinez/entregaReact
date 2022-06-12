import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { Navbar } from "./componentes/Navbar/Navbar"
import { Footer } from './componentes/Footer/Footer';
import GiftCard from "./componentes/GiftCard/GiftCard"
import Contacto from "./componentes/Contacto/Contacto"
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ItemVendidos from './componentes/ItemVendidos/ItemVendidos';
import { CartContext } from './componentes/context/CartContext';
import { useState } from 'react';



function App() {

  const [cart, setCart] = useState([])
  console.log(cart)

  const addItem = (item) => {
    setCart ( [...cart, item] )
  }

  return (
   <CartContext.Provider value={ {cart, addItem} }>

      <BrowserRouter>

        <Navbar/>

          <Routes>
            <Route path='/' element={<ItemVendidos/>}/>
            <Route path='/productos' element={ <ItemListContainer/> }/>
            <Route path='/categorias/:categoryId' element={ <ItemListContainer/> }/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
            <Route path='/giftcard' element={<GiftCard/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='*' element={ <Navigate to={"/"}/> } />
          </Routes>

          <Footer/>
      </BrowserRouter>

   </CartContext.Provider>
  );
}

export default App;