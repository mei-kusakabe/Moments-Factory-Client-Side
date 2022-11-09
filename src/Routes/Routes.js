import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddReview from "../Pages/AddReview/AddReview";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import FourZeroFour from "../Pages/Others/FourZeroFour/FourZeroFour";

import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import SingleReview from "../Pages/SingleReview/SingleReview";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


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
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviewPage/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            // {
            //     path: '/reviewsfactory/:id',
            //     element: <SingleReview></SingleReview>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/reviewsfactory/${params.id}`)
            // }

        ]

    },
    { path: '*', element: <FourZeroFour></FourZeroFour> }

])