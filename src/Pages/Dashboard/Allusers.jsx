import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Allusers = () => {

    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users')
            return result.data
        }
    })
    return (
        <div>
            <h1>users : {users.length}</h1>
        </div>
    );
};

export default Allusers;