import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";


const useUsers = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const axiosPublic = useAxiosPublic()
    const {data: staff=[]} = useQuery({
        queryKey:['staff'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/users/${user.email}`)
            return res.data
        }
    })

    return [staff]
};

export default useUsers;