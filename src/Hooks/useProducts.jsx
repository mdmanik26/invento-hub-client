import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useProducts = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products', user?.email],enabled: !!(user?.email),
        queryFn: async () => {
            const res = await axiosSecure.get(`/products/${user?.email}`)
            return res.data
        }
    })
    return [products, refetch]
};

export default useProducts;