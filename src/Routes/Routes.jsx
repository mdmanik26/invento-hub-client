import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import CreateShop from "../Pages/CreateShop";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome";
import ManagerHome from "../Pages/Dashboard/ManagerHome";
import AdminRoute from "./AdminRoute";
import ManagerRoute from "./ManagerRoute";
import Allusers from "../Pages/Dashboard/Allusers";


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
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/adminHome',
                        element: <AdminHome></AdminHome>
                    },
                    {
                        path: '/dashboard/managerHome',
                        element: <ManagerHome></ManagerHome>
                    },
                    {
                        path: '/dashboard/allUsers',
                        element: <Allusers></Allusers>
                    }
                ]
            }


        ]
    },

])