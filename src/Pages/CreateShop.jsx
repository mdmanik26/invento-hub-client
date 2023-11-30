import Swal from "sweetalert2";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const CreateShop = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const handleCreateShop = (e) => {

        e.preventDefault();
        const form = e.target
        const shopName = form.shopName.value
        const shopLogo = form.logo.value
        const shopInfo = form.info.value
        const shopLocation = form.location.value
        const ownerEmail = form.email.value
        const ownerName = form.name.value
        const productLimit = 3

        const shop = { shopName, shopLogo, shopInfo, shopLocation, ownerEmail, ownerName, productLimit }
        // console.log(shop)

        axiosPublic.post('/shops', shop)
            .then(res => {
                console.log('shop added to the database', res.data);
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Shop created successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    axiosPublic.patch(`/users/manager/${ownerEmail}`)
                        .then(res => {
                            console.log(res.data);
                        })
                }
                
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "You can not create more than one shop",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                navigate('/')

            })



    }
    return (
        <Container>
            
            <Helmet>
                <title>InventoHUB | Create Shop </title>
            </Helmet>

            <Navbar></Navbar>
            <div className="my-20">
                <h1 className="text-5xl font-bold text-center text-[#5bc2ab]">Create Your Shop</h1>

                <div className='px-2'>
                    <div className=" rounded-lg border-2 border-blue-950 py-3 md:py-6 md:my-20 px-4 max-w-[1000px] mx-auto">

                        <form onSubmit={handleCreateShop}>
                            <div className=' md:flex justify-between items-center gap-4 mt-4 space-y-4 md:space-y-0'>
                                <div className='flex-1'>
                                    <p className="text-lg font-semibold  text-left">Shop Name</p>
                                    <input className='text-white focus:text-black focus:border-l-8 focus:border-[#5bc2ab] focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-[#5bc2ab]' type="text" name="shopName" required placeholder="Shop Name" />
                                </div>
                                <div className='flex-1'>
                                    <p className="text-lg font-semibold  text-left">Shop Logo</p>
                                    <input className='text-white focus:text-black focus:border-l-8 focus:border-[#5bc2ab] focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white  bg-[#5bc2ab]' type="text" name="logo" required placeholder="Shop Logo" />

                                </div>
                            </div>
                            <div className=' md:flex justify-between items-center gap-4 mt-4 space-y-4 md:space-y-0'>
                                <div className='flex-1'>
                                    <p className="text-lg font-semibold  text-left">Shop Info</p>
                                    <input className='text-white focus:text-black focus:border-l-8 focus:border-[#5bc2ab] focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-[#5bc2ab]' type="text" name="info" required placeholder="Shop Info" />
                                </div>
                                <div className='flex-1'>
                                    <p className="text-lg font-semibold  text-left">Shop Location</p>
                                    <input className='text-white focus:text-black focus:border-l-8 focus:border-[#5bc2ab] focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-[#5bc2ab]' type="text" name="location" required placeholder="Shop Location" />
                                </div>

                            </div>
                            <div className=' md:flex justify-between items-center gap-4 mt-4 space-y-4 md:space-y-0'>

                                <div className='flex-1'>
                                    <p className="text-lg font-semibold  text-left">Shop-Owner Email</p>
                                    <input readOnly defaultValue={user?.email} className='text-white focus:text-black focus:border-l-8 focus:border-[#5bc2ab] focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-[#5bc2ab]' type="email" name="email" required placeholder="Shop-Owner Email" />
                                </div>

                                <div className='flex-1'>
                                    <p className="text-lg font-semibold  text-left">Shop-Owner Name</p>
                                    <input readOnly defaultValue={user?.displayName} className='text-white focus:text-black focus:border-l-8 focus:border-[#5bc2ab] focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-[#5bc2ab]' type="text" name="name" required placeholder="Shop-Owner Name" />

                                </div>

                            </div>


                            <div>

                                <input className=' bg-white hover:cursor-pointer w-full px-3 py-3 md:mt-7 outline-0  hover:bg-[#5bc2ab] border-2 border-blue-950  rounded-lg text-black hover:text-white font-semibold' type="submit" name="" value="Create Shop" />

                            </div>


                        </form>




                    </div>





                </div>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default CreateShop;