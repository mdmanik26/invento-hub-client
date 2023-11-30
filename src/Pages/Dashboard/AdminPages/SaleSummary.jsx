import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Allusers from "../Allusers";
import { Helmet } from "react-helmet-async";


const SaleSummary = () => {

    const axiosSecure = useAxiosSecure()
    const {  data: sales = [] } = useQuery({
        queryKey: ['sales'],
        queryFn: async () => {
            const res = await axiosSecure.get('/sales')
            return res.data
        }
    })

 
    const {  data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/products')
            return res.data
        }
    })

    return (
        <div>
            <Helmet>
                <title>InventoHUB | Dashboard | Sales Summary</title>
            </Helmet>
            <div>
                <h1 className="text-3xl font-bold text-center my-3">Sales Summary</h1>
                <div className=" max-w-[800px] mx-auto grid grid-cols-3 gap-4">
                    <div className="text-center border rounded-lg px-4 bg-[#5fcab3] py-3">
                        <h1 className="text-2xl font-bold text-violet-500">Total Income</h1>
                        {/* <p className="text-5xl font-bold">{sales.length}</p> */}

                    </div>
                    <div className="text-center border rounded-lg px-4 bg-[#5fcab3] py-3">
                        <h1 className="text-2xl font-bold text-violet-500">Total Product</h1>
                        <p className="text-5xl font-bold">{products?.length}</p>

                    </div>
                    <div className="text-center border rounded-lg px-4 bg-[#5fcab3] py-3">
                        <h1 className="text-2xl font-bold text-violet-500">Total Sales</h1>
                        <p className="text-5xl font-bold">{sales?.length}</p>
                    </div>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-center my-3">All Users</h1>
            <Allusers></Allusers>
        </div>
    );
};

export default SaleSummary;