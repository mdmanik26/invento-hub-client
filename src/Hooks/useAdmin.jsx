
import { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider';

import { useQuery } from '@tanstack/react-query';
// import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure();
  

    const { data: isAdmin, isPending: isAdminLoading, } = useQuery({
        queryKey: [user?.email, 'isAdmin',],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            // console.log(res.data);
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;