import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import CreateShop from "../Pages/CreateShop";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import ManagerHome from "../Pages/Dashboard/ManagerHome";
import ManagerRoute from "./ManagerRoute";
import ProductManagement from "../Pages/Dashboard/ManagersPages/ProductManagement";
import AddProduct from "../Components/ManagersComponent/AddProduct";
import AdminRoute from "./AdminRoute";
import ManageShop from "../Pages/Dashboard/AdminPages/ManageShop";
import UpdateProduct from "../Pages/Dashboard/ManagersPages/UpdateProduct";
import SalesCollection from "../Pages/Dashboard/ManagersPages/SalesCollection";
import CartCollection from "../Pages/Dashboard/ManagersPages/CartCollection";
import CheckOut from "../Pages/Dashboard/ManagersPages/CheckOut";
import Subscription from "../Pages/Dashboard/Subscription";

import SaleSummary from "../Pages/Dashboard/AdminPages/SaleSummary";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/createShop',
                element: <PrivateRoutes><CreateShop></CreateShop></PrivateRoutes>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
                children: [
                   
                   
                    {
                        path: '/dashboard/manageShop',
                        element: <AdminRoute><ManageShop></ManageShop></AdminRoute>
                    },
                    {
                        path: '/dashboard/saleSummary',
                        element: <AdminRoute><SaleSummary></SaleSummary></AdminRoute>
                    },
                    {
                        path: '/dashboard/salesSummary',
                        element: <ManagerHome></ManagerHome>
                    },
                    {
                        path: '/dashboard/productManagement',
                        element: <ManagerRoute><ProductManagement></ProductManagement></ManagerRoute>
                    },
                    {
                        path: '/dashboard/productManagement/addProduct',
                        element: <ManagerRoute><AddProduct></AddProduct></ManagerRoute>
                    },
                    {
                        path: '/dashboard/productManagement/updateProduct/:id',
                        element: <ManagerRoute><UpdateProduct></UpdateProduct></ManagerRoute>,
                        loader: ({ params }) => fetch(`https://invento-hub-server.vercel.app/product/${params.id}`)
                    },
                    {
                        path: '/dashboard/salesCollection',
                        element: <ManagerRoute><SalesCollection></SalesCollection></ManagerRoute>
                    },

                    {
                        path: '/dashboard/cart',
                        element: <ManagerRoute><CartCollection></CartCollection></ManagerRoute>
                    },
                    {
                        path: '/dashboard/checkOut',
                        element: <ManagerRoute><CheckOut></CheckOut></ManagerRoute>
                    },
                    {
                        path: '/dashboard/subscription',
                        element: <ManagerRoute><Subscription></Subscription></ManagerRoute>,
                        
                       
                    },
                   
                ]
            }


        ]
    },

])