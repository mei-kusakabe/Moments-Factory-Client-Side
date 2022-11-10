import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddReview from "../Pages/AddReview/AddReview";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Myreview2 from "../Pages/MyReview2/Myreview2";
import FourZeroFour from "../Pages/Others/FourZeroFour/FourZeroFour";

import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
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

            {
                path: '/myreviews/:email',
                // path: '/reviewsfactory/:email',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/reviewsfactory?email=${params.email}`)
                loader: ({ params }) => fetch(`http://localhost:5000/myreviews?email=${params.email}`)
            },

            {
                path: '/orders',
                element: <Myreview2></Myreview2>
            },
            {
                path: '/Addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
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