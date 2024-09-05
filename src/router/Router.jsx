import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Products from "../pages/ProductPage/Products";
import Login from "../pages/authentication/Login/Login";
import Register from "../pages/authentication/Registration/Register";
import Cart from "../pages/Cart/Cart";


export const router = createBrowserRouter([
    {
        path:'/products',
        element:<RootLayout/>,
        children:[
            {
                path:'/products',
                element:<Products/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ]

    }
])