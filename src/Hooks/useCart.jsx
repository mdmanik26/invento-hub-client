import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";



const useCart = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],enabled: !!(user?.email),
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts/${user?.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;