/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../Shared/AuthProvider"


const PrivateRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="text-center">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>

        </div>
    }
    else if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
}


export default PrivateRoutes;