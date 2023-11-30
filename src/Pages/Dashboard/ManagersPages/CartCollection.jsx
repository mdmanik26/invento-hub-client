
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import { Helmet } from "react-helmet-async";


const CartCollection = () => {
    

    const [cart] = useCart()
    console.log(cart);
   
    

    return (
        
        <div>
            <Helmet>
                <title>InventoHUB | Dashboard | CartCollection</title>
            </Helmet>
            {cart?.length > 0 ?
                <div>
                    <div className="flex justify-between items-center pl-4 mt-2">
                        <h1 className=" text-4xl font-semibold text-[#5fcab3]">Total Products : {cart?.length}</h1>
                        <Link to={'/dashboard/checkOut'}><button className="btn btn-outline text-xl text-white bg-[#5fcab3]">Proceed CheckOut</button></Link>
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

                                            {/* <td className="text-center">
                                                <h1 className="text-xl text-center font-bold">{product?.quantity}</h1>

                                            </td> */}

                                            <td className="text-center">
                                                <h1 className="text-xl text-center font-bold">{product?.discount}%</h1>

                                            </td>

                                            <td className="text-center">
                                                <h1 className="text-xl  font-bold">{product?.sellingPrice}</h1>

                                            </td>




                                        </tr>

                                    )
                                }


                            </tbody>
                            {/* foot */}

                        </table>
                    </div>

                </div> :
               <div className="text-center font-bold text-2xl max-w-[500px] mx-auto py-20">
                <p>No Products Added</p>
               </div>

            }
        </div>
    );
};

export default CartCollection;