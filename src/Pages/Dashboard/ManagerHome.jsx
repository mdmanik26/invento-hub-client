import { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Shared/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const ManagerHome = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: sales = [] } = useQuery({
        queryKey: ['sales', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/sales/${user.email}`)
            return res.data
        }
    })

    const totalInvest = sales.reduce((total, item) => total + parseInt(item.productionCost), 0)
    const totalsellingPrice = sales.reduce((total, item) => total + parseInt(item.sellingPrice), 0)
    const totalProfit = totalsellingPrice - totalInvest


    return (
        <div>
            <Helmet>
                <title>InventoHUB | Dashboard | ManagerHome</title>
            </Helmet>
            <div>
                <h1 className="text-3xl font-bold text-center my-3">Sales Count</h1>
                <div className=" max-w-[800px] mx-auto grid grid-cols-3 gap-4">
                    <div className="text-center border rounded-lg px-4 bg-[#5fcab3] py-3">
                        <h1 className="text-2xl font-bold text-violet-500">Total Sale</h1>
                        <p className="text-5xl font-bold">{sales.length}</p>

                    </div>
                    <div className="text-center border rounded-lg px-4 bg-[#5fcab3] py-3">
                        <h1 className="text-2xl font-bold text-violet-500">Total Invest</h1>
                        <p className="text-5xl font-bold">${totalInvest}</p>

                    </div>
                    <div className="text-center border rounded-lg px-4 bg-[#5fcab3] py-3">
                        <h1 className="text-2xl font-bold text-violet-500">Total Profit</h1>
                        <p className="text-5xl font-bold">${totalProfit}</p>
                    </div>
                </div>
            </div>


            <div>
                <h1 className="text-3xl font-bold text-center my-3">Sales History</h1>
                <div>
                    <div className="overflow-x-auto pl-4 mt-4">
                        <table className="table table-zebra w-full">
                            {/* head */}
                            <thead className="bg-[#5fcab3] text-xl text-white ">
                                <tr>
                                    <th>
                                        <h1>#</h1>
                                    </th>


                                    <th className="text-center">Product Name</th>
                                    <th className="text-center">Selling Date</th>
                                    <th className="text-center">Profit</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sales.map((product, idx) =>
                                        <tr key={product._id}>
                                            <th>
                                                <h1>{idx + 1}</h1>
                                            </th>



                                            <td className="text-center text-xl font-semibold">
                                                <h1>{product?.name}</h1>
                                            </td>


                                            <td className="text-center">
                                                <h1 className="text-xl text-center font-bold">{product?.sellingDate?.substring(0, 10)}</h1>

                                            </td>
                                            <td className="text-center">
                                                <h1 className="text-xl text-center font-bold">$ {parseInt(product?.sellingPrice - product?.productionCost)}</h1>

                                            </td>





                                        </tr>

                                    )
                                }


                            </tbody>
                            {/* foot */}

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerHome;