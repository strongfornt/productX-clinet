import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Products from "../pages/ProductPage/Products";
import Login from "../pages/authentication/Login/Login";
import Register from "../pages/authentication/Registration/Register";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Protected from "./protected/ProtectedRoute";
import Error from "../pages/Error/Error";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
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
                element:<Protected><Cart/></Protected>
            }
        ]

    }
])