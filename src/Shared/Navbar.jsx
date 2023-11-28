import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import './NavBar.css'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "./AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useManager from "../Hooks/useManager";


const Navbar = () => {
   const [isAdmin] = useAdmin()
   const [isManager] = useManager()
//    console.log(isManager)
    const { user, logOut } = useContext(AuthContext)
    const [menu, setMenu] = useState()
    const [open, setOpen] = useState()

   



    return (

        <div className=" text-white bg-[#5fcab3]">

            <div className="flex justify-between px-2 items-center">

                <div className="flex-1  flex flex-row lg:flex-row gap-6 justify-between items-center  px-3 py-5">


                    <div className="hidden lg:flex  items-center ">
                        <img className="w-[70px] " src="https://i.ibb.co/S3H8g8q/logo1.png" alt="" />
                        <h1 className="text-3xl font-bold text-white">InventoHUB</h1>
                    </div>


                    <div>
                        <div className="lg:hidden" onClick={() => setMenu(!menu)}>
                            {
                                menu === true ? <AiOutlineClose className="text-2xl" ></AiOutlineClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                            }



                        </div>
                        {
                            user ? <ul className={` z-10 font-semibold shadow-lg rounded-md md:shadow-lg lg:shadow-none lg:flex absolute lg:static gap-6 text-lg 
                            ${menu ? "top-18 left-8 bg-[#5fcab3ab]  lg:bg-transparent text-black" : "-top-40 right-8"}`}>
                                <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/'}>Home</NavLink></li>

                                {isAdmin || isManager ? "" : <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/createShop'}>Create Store</NavLink></li>}

                                {isManager ? <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><Link to={'/dashboard/managerHome'}>Dashboard</Link></li> : ""}

                                {isAdmin ? <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><Link to={'/dashboard'}>Dashboard</Link></li> : ""}

                                <li className=" rounded-b-md lg:rounded-b-0  text-black md:text-black text-center lg:text-left px-2 lg:px-0"><a rel="noreferrer" target="_blank" href="https://youtu.be/jk8L4_Wx40U?si=UrlaHwHULTYftHL6"> Watch Demo</a></li>
                            </ul> :

                                <ul className={` z-10 font-semibold shadow-lg rounded-md md:shadow-lg lg:shadow-none lg:flex absolute lg:static gap-6 text-lg 
${menu ? "top-18 left-8 bg-[#5fcab3ab] lg:bg-transparent text-black" : "-top-40 right-8"}`}>
                                    <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/'}>Home</NavLink></li>
                                    <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2  lg:px-0"><NavLink to={'/login'}>Login</NavLink></li>
                                    <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/signUp'}>Register</NavLink></li>
                                    <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/createShop'}>Create Store</NavLink></li>
                                    <li className=" rounded-b-md lg:rounded-b-0  text-black md:text-black text-center lg:text-left px-2 lg:px-0"><a rel="noreferrer" target="_blank" href="https://youtu.be/jk8L4_Wx40U?si=UrlaHwHULTYftHL6"> Watch Demo</a></li>
                                </ul>
                        }
                    </div>
                </div>


                {
                    user ? <div className='relative'>
                        <div className='flex flex-row items-center gap-3'>
                            <div
                                onClick={() => setOpen(!open)}
                                className='p-4 md:py-1 md:px-2 lg:px-2 border-[3px] border-white flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>

                                <div className='hidden md:block'>
                                    <img className='rounded-full'
                                        referrerPolicy='no-referrer'
                                        src={user?.photoURL}
                                        alt='profile'
                                        height='30'
                                        width='30' />
                                </div>
                            </div>
                        </div>
                        {open && (
                            <div className='absolute rounded-xl shadow-md w-[100px] md:w-[150px]  overflow-hidden right-0 top-12 text-md bg-white text-black'>


                                <div className='flex flex-col cursor-pointer'>


                                    <p className="text-center font-semibold text-lg"> {user?.displayName} </p>
                                    <button
                                        onClick={logOut}
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div> : <img className='rounded-full'
                        referrerPolicy='no-referrer'
                        src="https://i.ibb.co/pXGpjP2/user.jpg"
                        alt='profile'
                        height='40'
                        width='40' />
                }








            </div>
        </div>

    );
};

export default Navbar;