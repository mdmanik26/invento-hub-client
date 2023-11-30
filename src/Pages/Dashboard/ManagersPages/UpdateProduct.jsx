import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const image_Api_key = import.meta.env.VITE_IMAGE_API_KEY
const image_Hosting_Key = `https://api.imgbb.com/1/upload?key=${image_Api_key}`

const UpdateProduct = () => {
    const product = useLoaderData()
    console.log(product)
    // console.log(data._id)
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_Hosting_Key, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {

            const updatedProduct = {
                
                productName: data.name,
                image: res.data.data.display_url,
                productQuantity: parseFloat(data.quantity),
                productLocation: data.location,
                productionCost: parseFloat(data.productionCost),
                profitMargin: parseFloat(data.profitMargin),
                discount: data.discount,
                description: data.description,
                
            }

            console.log(updatedProduct)

            const menuRes = await axiosSecure.put(`/product/${product._id}`, updatedProduct)
            console.log(menuRes.data)

            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    return (
        <div className="mx-auto max-w-5xl my-10">
            <Helmet>
                <title>InventoHUB | Update Product</title>
            </Helmet>
            <h1 className="text-5xl text-center text-[#5fcab3] font-bold my-6"> Update Product</h1>

            <div className="w-5xl bg-[#5fcab334] px-6 py-4">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex justify-between items-center  gap-3 mb-4">
                        <div className="flex-1">
                            <label>Product Name<span className="text-red-500">*</span></label><br />
                            <input defaultValue={product?.productName} placeholder="Product Name" {...register("name", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                        <div className="flex-1">
                            <label>Product Image<span className="text-red-500">*</span></label><br />
                            <input required {...register("image")} type="file" placeholder="Choose product Photo" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center  gap-3 mb-4">
                        <div className="flex-1">
                            <label>Product Quantity
                                <span className="text-red-500">*</span></label><br />
                            <input defaultValue={product?.productQuantity} placeholder="Product Quantity" {...register("quantity", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                        <div className="flex-1">
                            <label>Product Location<span className="text-red-500">*</span></label><br />
                            <input defaultValue={product?.productLocation} placeholder="Product Location" {...register("location", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center  gap-3 mb-4">
                        <div className="flex-1">
                            <label>Production Cost<span className="text-red-500">*</span></label><br />
                            <input defaultValue={product?.productionCost} placeholder="Production Cost" {...register("productionCost", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                        <div className="flex-1">
                            <label>Profit Margin<span className="text-red-500">*</span></label><br />
                            <input defaultValue={product?.profitMargin} placeholder="Profit Margin" {...register("profitMargin", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center  gap-3 mb-2">
                        <div className="flex-1">
                            <label>Discount<span className="text-red-500">*</span></label><br />
                            <input defaultValue={product?.discount} placeholder="Discount" {...register("discount", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                        <div className="flex-1">
                            <label>Description<span className="text-red-500">*</span></label><br />
                            <input defaultValue={product?.description} placeholder="Description" {...register("description", { required: true })} className="py-3 px-3 rounded-lg w-full" />
                        </div>
                    </div>

                    <button className="px-4 btn btn-outline w-full bg-[#5fcab3] text-white mt-4">
                        Update Product

                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;