import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../Shared/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ProductManagement = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const result = await axiosSecure.get(`/products/${user?.email}`)
            return result.data
        }
    })







    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/products/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The product has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })




            }
        });
    }



    return (
        <div className="px-6 py-10 text-center">
            <Helmet>
                <title>InventoHUB | Dashboard | ProductManagement</title>
            </Helmet>
            {products?.length > 0 ?
                <div>

                    <div className="flex justify-between items-center">
                        <h1 className=" text-5xl font-semibold text-[#5fcab3]">Total Products : {products?.length}</h1>
                        <Link to={'/dashboard/productManagement/addProduct'}><button className="btn btn-outline bg-[#5fcab3]">Add Product</button></Link>
                    </div>

                    <div className="overflow-x-auto px-4 mt-4">
                        <table className="table table-zebra w-full">
                            {/* head */}
                            <thead className="bg-[#5fcab3] text-xl text-white ">
                                <tr>
                                    <th>
                                        <h1>#</h1>
                                    </th>

                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Product Quantity</th>
                                    <th>Sale Count</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, idx) =>
                                        <tr key={product._id}>
                                            <th>
                                                <h1>{idx + 1}</h1>
                                            </th>

                                            <td>
                                                <h1>{product?.productName}</h1>

                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-20 h-20">
                                                        <img src={product?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                                <h1 className="text-xl text-center font-bold">{product?.productQuantity}</h1>

                                            </td>
                                            <td>
                                                <h1 className="text-xl text-center font-bold">{product?.salesCount}</h1>

                                            </td>

                                            <td>
                                                <Link to={`/dashboard/productManagement/updateProduct/${product._id}`}>
                                                    <button className="btn text-xl btn-outline text-white bg-[#5fcab3] ">
                                                        <FaRegEdit></FaRegEdit>
                                                    </button>
                                                </Link>
                                            </td>

                                            <th>
                                                <button onClick={() => handleDeleteProduct(product._id)} className="btn text-xl btn-outline text-white bg-[#5fcab3] ">
                                                    <FaTrash className="text-red-500 text-lg"></FaTrash>
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

                :
                <div className="w-full min-h-[800px] flex flex-col items-center justify-center">
                    <Link to={'/dashboard/productManagement/addProduct'}><button className="btn btn-outline bg-[#5fcab3]">Add Product</button></Link>
                    <p className="text-red-500 font-semibold text-xl text-center">No Products in the Shop</p>
                </div>}

        </div>
    );
};

export default ProductManagement;