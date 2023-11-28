/* eslint-disable react/prop-types */


import { AuthContext } from '../Shared/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { useContext } from 'react';

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <h1 className="text-red-600 font-semibold text-3xl text-center">Loading..........</h1>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;