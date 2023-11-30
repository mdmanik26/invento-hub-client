import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";


const useManager = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic()
  

    const { data: isManager, isPending: isManagerLoading } = useQuery({
        queryKey: [user?.email, 'isManager'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/manager/${user.email}`)
            // console.log(res.data);
            return res.data?.manager
        }
    })
    return [isManager, isManagerLoading]
};

export default useManager;