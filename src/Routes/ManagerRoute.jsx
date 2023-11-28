/* eslint-disable react/prop-types */

import { useContext, } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useManager from "../Hooks/useManager";


const ManagerRoute = ({ children }) => {
    const [isManager, isManagerLoading] = useManager()
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading || isManagerLoading) {
        return <h1 className="text-red-600 font-semibold text-3xl text-center">Loading..........</h1>
    }
    if (user && isManager) {
        return children;
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

export default ManagerRoute;