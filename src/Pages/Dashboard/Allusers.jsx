import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { BsSendPlus } from "react-icons/bs";



const Allusers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users')
            return result.data
        }
    })

   

    return (
        <div>

            <div className="overflow-x-auto px-4 mt-4">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead className="bg-[#5fcab3] text-xl text-white ">
                    <tr>
                        <th>
                            <h1>#</h1>
                        </th>

                        <th className="text-center">User Name</th>
                        <th className="text-center">User Email</th>
                        <th className="text-center">Shop Name </th>
                        <th className="text-center">Role</th>
                        <th className="text-center">Send Notice</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, idx) =>
                            <tr key={user._id}>
                                <th>
                                    <h1>{idx + 1}</h1>
                                </th>

                                <td className="text-center">
                                    <h1>{user?.name}</h1>

                                </td>
                                <td className="text-center">
                                <h1>{user?.email}</h1>

                                </td>
                                <td className="text-center">
                                    <h1 className="text-xl text-center font-bold">{user?.productLimit}</h1>

                                </td>
                                <td className="text-center">
                                    <h1 className="text-xl text-center font-bold">{user?.role ? user.role : 'User'}</h1>

                                </td>

                                <th className="text-center">
                                        <button className="btn btn-ghost btn-xl">
                                            <BsSendPlus className="text-red-500 text-2xl"></BsSendPlus >
                                        </button>

                                    </th>
                            </tr>

                        )
                    }


                </tbody>
                {/* foot */}

            </table>
        </div>
        </div>
    );
};

export default Allusers;