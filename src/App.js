import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from './componentes/context/CartContext';
import { AuthProvider } from './componentes/context/AuthContext';
import AppRouter from './routes/AppRouter';



function App() {

  
  return (

    <AuthProvider>

      <CartProvider>
        <AppRouter/>
      </CartProvider>
     

  </AuthProvider>
  );
}

export default App;