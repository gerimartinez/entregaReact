import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useAuthContext } from "../componentes/context/AuthContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {

    const {auth} = useAuthContext()

    return (
        <div>
            <BrowserRouter>
                {
                    auth.loggedIn
                    ?  <PrivateRoutes/>
                    :  <PublicRoutes/>
                }
              
                
 
            </BrowserRouter>
        </div>
    )
}
export default AppRouter