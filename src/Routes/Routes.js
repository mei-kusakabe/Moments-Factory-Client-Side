import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import FourZeroFour from "../Pages/Others/FourZeroFour/FourZeroFour";

import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }, {
                path: '/services',
                element: <Services></Services>
            }

        ]

    },
    { path: '*', element: <FourZeroFour></FourZeroFour> }

])