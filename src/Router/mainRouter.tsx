import {createBrowserRouter} from "react-router-dom" 
import HomeScreen from "../Pages/HomeScreen"
import AddToCart from "../Pages/AddToCart"

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<HomeScreen/>
    },
    {
        path:"/add-to-cart",
        element:<AddToCart/>
    }
])