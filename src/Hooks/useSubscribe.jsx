import { useQuery } from "@tanstack/react-query"

import useAxiosPublic from "./useAxiosPublic"


const useSubscribe = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/subscription')
            return res.data
        }
    })
    return [packages, refetch]
}
export default useSubscribe;