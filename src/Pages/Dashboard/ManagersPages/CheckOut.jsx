import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../Shared/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const CheckOut = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [cart] = useCart()

    const totalSellingPrice = cart.reduce((total, item) => total + parseFloat(item.sellingPrice), 0)
    // console.log(totalSellingPrice);

    const handleCheckOut = () => {
        const salesItem = cart
        console.log('this is cart sales items', salesItem)

        axiosSecure.post('/sales', salesItem)
            .then(res => {
                console.log(res.data);

                if (res.data.insertedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Paid Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    axiosSecure.delete(`/carts/${user.email}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.deletedCount > 0) {
                                navigate('/dashboard/salesSummary')
                            }
                        })



                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>InventoHUB | Dashboard | CheckOut</title>
            </Helmet>
            {cart.length > 0 ? <div>
                <div className="flex justify-between items-center mt-2 pl-4">
                    <h1 className="text-3xl text-[#5fcab3] font-semibold">Total Price: {totalSellingPrice}</h1>
                    <button onClick={handleCheckOut} className="btn btn-outline bg-[#5fcab3] text-xl text-white font-semibold">Get Paid</button>
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
                                {/* <th>Quantity</th> */}
                                <th>Discount</th>
                                <th>SellingPrice</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((product, idx) =>
                                    <tr key={product._id}>
                                        <th>
                                            <h1>{idx + 1}</h1>
                                        </th>

                                        <td className="text-center">
                                            <h1>{product?._id}</h1>

                                        </td>

                                        <td className="text-center">
                                            <h1>{product?.name}</h1>
                                        </td>
                                        <td className="text-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={product?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </td>



                                        <td className="text-center">
                                            <h1 className="text-xl text-center font-bold">{product?.discount}%</h1>

                                        </td>

                                        <td className="text-center">
                                            <h1 className="text-xl  font-bold">{product?.sellingPrice}</h1>

                                        </td>




                                    </tr>

                                )}



                        </tbody>
                    </table>
                </div>
            </div>

                :
                <div className="text-center font-bold text-2xl max-w-[500px] mx-auto py-20">
                    <p>No Products Added</p>
                </div>
            }
        </div >
    );
};

export default CheckOut;