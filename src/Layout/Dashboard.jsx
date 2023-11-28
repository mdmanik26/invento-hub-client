import { NavLink, Outlet } from "react-router-dom";
import Container from '../Components/Container'
import { FaHome, FaUtensilSpoon, FaListUl, FaBook, FaUsers, FaCalendar, FaShoppingCart, FaList, FaAd, FaEnvelope, } from "react-icons/fa";
import Footer from "../Components/Footer";
import useAdmin from "../Hooks/useAdmin";
import useManager from "../Hooks/useManager";



const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isManager] = useManager()
    console.log(isManager)
    
    return (
        <Container>
            <div className="flex ">
                <div className="w-[250px] min-h-[800px] bg-[#5fcab3] text-white">
                    <div className="hidden lg:flex  items-center ">
                        <img className="w-[70px] " src="https://i.ibb.co/S3H8g8q/logo1.png" alt="" />
                        <h1 className="text-3xl font-bold text-white">InventoHUB</h1>
                    </div>
                    <ul className="menu text-xl p-3">

                        {isAdmin &&

                            <>
                                <li>
                                    <NavLink to={'/dashboard/adminHome'}>
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addItem'}>
                                        <FaUtensilSpoon></FaUtensilSpoon>
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageItems'}>
                                        <FaListUl></FaListUl>
                                        Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageBookings'}>
                                        <FaBook></FaBook>
                                        Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allusers'}>
                                        <FaUsers></FaUsers>
                                        All Users</NavLink>
                                </li>

                            </>}

                            

                           {isManager && <>
                                <li>
                                    <NavLink to={'/dashboard/managerHome'}>
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/reservation'}>
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/cart'}>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart (7)</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/paymentHistory'}>
                                        <FaList></FaList>
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/review'}>
                                        <FaAd></FaAd>
                                        Add Review</NavLink>
                                </li>
                            </>}







                        <div className="divider"></div>
                        <li>
                            <NavLink to={'/'}>
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/order/salad'}>
                                <FaHome></FaHome>
                                Order</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>
                                <FaEnvelope></FaEnvelope>
                                Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Dashboard;