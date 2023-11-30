import { NavLink, Outlet } from "react-router-dom";
import Container from '../Components/Container'
import { FaHome, FaListUl, FaDashcube, FaListOl, } from "react-icons/fa";
import Footer from "../Components/Footer";
import useAdmin from "../Hooks/useAdmin";
import useManager from "../Hooks/useManager";
import { FaCartShopping  } from "react-icons/fa6";
import {  MdOutlineBorderAll  } from "react-icons/md";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isManager] = useManager()
    console.log(isManager);

   

    return (
        <Container>
            <div className="flex ">
                <div className="w-[270px] min-h-[800px] bg-[#5fcab3] text-white">
                    <div className="hidden lg:flex  items-center ">
                        <img className="w-[70px] " src="https://i.ibb.co/S3H8g8q/logo1.png" alt="" />
                        <h1 className="text-3xl font-bold text-white">InventoHUB</h1>
                    </div>
                    <ul className="menu text-xl p-3">

                        {isAdmin &&

                            <>
                               
                                <li>
                                    <NavLink to={'/dashboard/manageShop'}>
                                        <FaListUl></FaListUl>
                                        Manage Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/saleSummary'}>
                                        <MdOutlineBorderAll></MdOutlineBorderAll>
                                        Sale Summary</NavLink>
                                </li>



                            </>}



                        {isManager && <>
                            <li>
                                <NavLink to={'/dashboard/salesSummary'}>
                                    <FaHome></FaHome>
                                    Sales Summary</NavLink>
                            </li>
                            <li className="text-md">
                                <NavLink to={'/dashboard/productManagement'}>

                                    Product Management</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/salesCollection'}>
                                    <FaListOl></FaListOl>
                                    Sales-Collection</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/cart'}>
                                    <FaCartShopping></FaCartShopping>
                                    Check-out Cart</NavLink>
                            </li>

                        </>}
                        <div className="divider"></div>
                        <li>
                            <NavLink to={'/'}>
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>
                    

                    </ul>
                </div>

                <div className="flex-1">
                    <div className="flex gap-2 items-center text-white font-bold text-2xl text-center bg-[#5fcab3] py-3 px-10">
                        <FaDashcube></FaDashcube>
                        <h1>Dashboard</h1>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Dashboard;