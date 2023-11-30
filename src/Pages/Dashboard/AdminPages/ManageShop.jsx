import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BsSendPlus } from "react-icons/bs";
import { Helmet } from "react-helmet-async";


const ManageShop = () => {
    const axiosSecure = useAxiosSecure()
    const { data: shops = [] } = useQuery({
        queryKey: ['shops'],
        queryFn: async () => {
            const result = await axiosSecure.get('/shops')
            return result.data
        }
    })

    console.log(shops);
    return (
        <div>
            <Helmet>
                <title>InventoHUB | Dashboard | ManageShop</title>
            </Helmet>
            <h1 className="text-center font-semibold text-5xl text-[#5fcab3]">All Shops</h1>
            <div className="overflow-x-auto px-4 mt-4">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-[#5fcab3] text-xl text-white ">
                        <tr>
                            <th>
                                <h1>#</h1>
                            </th>

                            <th className="text-center">Shop Name</th>
                            <th className="text-center">Shop Logo</th>
                            <th className="text-center">Product Limit</th>
                            <th className="text-center">Shop Description</th>
                            <th className="text-center">Send Notice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shops.map((shop, idx) =>
                                <tr key={shop._id}>
                                    <th>
                                        <h1>{idx + 1}</h1>
                                    </th>

                                    <td className="text-center">
                                        <h1>{shop?.shopName}</h1>

                                    </td>
                                    <td className="text-center">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={shop?.shopLogo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-center">
                                        <h1 className="text-xl text-center font-bold">{shop?.productLimit}</h1>

                                    </td>
                                    <td className="text-center">
                                        <h1 className="text-xl text-center font-bold">{shop?.shopInfo}</h1>

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

export default ManageShop;