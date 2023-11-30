
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/AuthProvider";
import { useNavigate } from "react-router-dom";
import useShop from "../../Hooks/useShop";
import { Helmet } from "react-helmet-async";
const image_Api_key = import.meta.env.VITE_IMAGE_API_KEY
const image_Hosting_Key = `https://api.imgbb.com/1/upload?key=${image_Api_key}`

const AddProduct = () => {
    const [products] = useShop()
    console.log(typeof(products.length));
    const navigate = useNavigate()    
    const [shop, setShop] = useState()
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    

    useEffect(() => {

        axiosSecure.get(`/shops/${user.email}`)
            .then(res => {
                setShop(res.data)
            })
    }, [])

    console.log(typeof(shop?.productLimit));
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_Hosting_Key, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {

            const productionCost = parseFloat(data.productionCost)
            const profitMargin = parseFloat(data.profitMargin)
            const sellingPrice = (productionCost + (productionCost / 100 * 7.5) + (productionCost / 100 * profitMargin)).toFixed(1)
            // console.log(sellingPrice)
            const product = {
                productName: data.name,
                image: res.data.data.display_url,
                productQuantity: parseFloat(data.quantity),
                productLocation: data.location,
                productionCost: parseFloat(data.productionCost),
                profitMargin: parseFloat(data.profitMargin),
                sellingPrice,
                discount: data.discount,
                description: data.description,
                shopId: shop?._id,
                shopName: shop?.shopName,
                userEmail: user.email,
                addedDate: new Date(),
                salesCount: 0
            }

            console.log(product)
            if (products.length === shop?.productLimit || products.length > shop.productLimit) {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "You have reached your product limit",
                    showConfirmButton: false,
                    timer: 1500
                });
                return navigate('/dashboard/subscription')
            }

            else {
                const menuRes = await axiosSecure.post('/products', product)
                console.log(menuRes.data)

                if (menuRes.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }

    }

    return (
        <div className="mx-auto max-w-5xl my-10">
            <Helmet>
                <title>InventoHUB | Add Product</title>
            </Helmet>
            <h1 className="text-5xl text-center text-[#5fcab3] font-bold my-6"> Add Products</h1>

            <div className="w-5xl bg-[#5fcab334] px-6 py-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between items-center  gap-3 mb-4">
                        <div className="flex-1">
                            <label>Product Name<span className="text-red-500">*</span></label><br />
                            <input placeholder="Product Name" {...register("name", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                        <div className="flex-1">
                            <label>Product Image<span className="text-red-500">*</span></label><br />
                            <input {...register("image")} type="file" placeholder="Choose product Photo" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center  gap-3 mb-4">
                        <div className="flex-1">
                            <label>Product Quantity
                                <span className="text-red-500">*</span></label><br />
                            <input placeholder="Product Quantity" {...register("quantity", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                        <div className="flex-1">
                            <label>Product Location<span className="text-red-500">*</span></label><br />
                            <input placeholder="Product Location" {...register("location", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center  gap-3 mb-4">
                        <div className="flex-1">
                            <label>Production Cost<span className="text-red-500">*</span></label><br />
                            <input placeholder="Production Cost" {...register("productionCost", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                        <div className="flex-1">
                            <label>Profit Margin<span className="text-red-500">*</span></label><br />
                            <input placeholder="Profit Margin" {...register("profitMargin", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center  gap-3 mb-2">
                        <div className="flex-1">
                            <label>Discount<span className="text-red-500">*</span></label><br />
                            <input placeholder="Discount" {...register("discount", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                        <div className="flex-1">
                            <label>Description<span className="text-red-500">*</span></label><br />
                            <input placeholder="Description" {...register("description", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                    </div>

                    <button className="px-4 btn btn-outline w-full bg-[#5fcab3] text-white mt-4">
                        Add Product

                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;