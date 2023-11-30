import { useContext } from "react";
import { AuthContext } from "../../../Shared/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


import { IoBagCheckOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import useProducts from "../../../Hooks/useProducts";
import { Helmet } from "react-helmet-async";


const SalesCollection = () => {
    const [products, refetch]  = useProducts()
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()


    const handleAddToCheckOut = (product) => {
        // console.log('inseid', product)
        const cartItem = {
            productId: product._id,
            name: product.productName,
            image: product.image,
            quantity: product.productQuantity,
            discount: product.discount,
            sellingPrice: product.sellingPrice,
            email: user.email,
            productionCost:product.productionCost,
            sellingDate: new Date()
        }
        console.log(cartItem);
        axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Added to the checkOut-cart successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }

            })

    }



    return (
        <div>
            <Helmet>
                <title>InventoHUB | Dashboard | SalesCollection</title>
            </Helmet>
            <div className=" bg-[#5fcab3] px-4 py-4">
                <form className=" w-3/4 mx-auto flex justify-between items-center gap-6">
                    <input placeholder="Enter Product id" className="flex-1 px-3 py-3 rounded-lg w-full" type="text" />
                    <button className="text-white text-xl w-1/4 btn btn-outline bg-red-700">Search</button>
                </form>
            </div>

            <div className="overflow-x-auto pl-4 mt-4">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-[#5fcab3] text-xl text-white ">
                        <tr>
                            <th>
                                <h1>#</h1>
                            </th>

                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Quantity</th>
                            <th>Discount</th>
                            <th>SellingPrice</th>
                            <th>Add for Check-Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, idx) =>
                                <tr key={product._id}>
                                    <th>
                                        <h1>{idx + 1}</h1>
                                    </th>

                                    <td className="text-center">
                                        <h1>{product?._id}</h1>

                                    </td>

                                    <td className="text-center">
                                        <h1>{product?.productName}</h1>
                                    </td>
                                    <td className="text-center">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={product?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </td>

                                    <td className="text-center">
                                        <h1 className="text-xl text-center font-bold">{product?.productQuantity}</h1>

                                    </td>
                                    <td className="text-center">
                                        <h1 className="text-xl text-center font-bold">{product?.discount}%</h1>

                                    </td>

                                    <td className="text-center">
                                        <h1 className="text-xl  font-bold">{product?.sellingPrice}</h1>

                                    </td>



                                    <td className="text-center">
                                        <button onClick={() => handleAddToCheckOut(product)} className="btn text-xl btn-outline text-white bg-[#5fcab3] ">

                                            <IoBagCheckOutline className="text-white text-2xl"></IoBagCheckOutline>
                                        </button>

                                    </td>
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

export default SalesCollection;