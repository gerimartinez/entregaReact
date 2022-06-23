import "../styles.css"
import { Navbar } from "../componentes/Navbar/Navbar"
import { Footer } from '../componentes/Footer/Footer';
import GiftCard from "../componentes/GiftCard/GiftCard"
import Contacto from "../componentes/Contacto/Contacto"
import { ItemListContainer } from '../componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../componentes/ItemDetailContainer/ItemDetailContainer';
import ItemVendidos from '../componentes/ItemVendidos/ItemVendidos';
import Cart from '../componentes/Cart/Cart';
import Checkout from '../componentes/Checkout/Checkout';
import { Routes, Route, Navigate} from "react-router-dom"
import UserInfo from "../componentes/UserInfo/UserInfo";



const PrivateRoutes = () => {

    return (

        <>
            <Navbar/>
            
            <Routes>
                    <Route path='/' element={<ItemVendidos/>}/>
                    <Route path='/productos' element={ <ItemListContainer/> }/>
                    <Route path='/categorias/:categoryId' element={ <ItemListContainer/> }/>
                    <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/giftcard' element={<GiftCard/>}/>
                    <Route path='/contacto' element={<Contacto/>}/>
                    <Route path='*' element={ <Navigate to={"/"}/> } />

            </Routes>
            <UserInfo/>
           <Footer/>
        </>
    )
}

export default PrivateRoutes