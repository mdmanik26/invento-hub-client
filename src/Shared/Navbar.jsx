import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import './NavBar.css'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const [menu, setMenu] = useState()
    const [open, setOpen] = useState()
    return (

        <div className=" text-white bg-[#5fcab3]">
            <div className="flex justify-between px-2 items-center">

                <div className="flex-1  flex flex-row lg:flex-row gap-6 justify-between items-center  px-3 py-5">


                    <div className="hidden lg:block">
                        <h1 className="text-3xl font-bold text-white">InventoHUB</h1>

                    </div>


                    <div>
                        <div className="lg:hidden" onClick={() => setMenu(!menu)}>
                            {
                                menu === true ? <AiOutlineClose className="text-2xl" ></AiOutlineClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                            }



                        </div>
                        <ul className={` z-10 font-semibold shadow-lg rounded-md md:shadow-lg lg:shadow-none lg:flex absolute lg:static gap-6 text-lg 
            ${menu ? "top-18 left-8 bg-white lg:bg-transparent text-black" : "-top-40 right-8"}`}>
                            <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/'}>Home</NavLink></li>
                            <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2  lg:px-0"><NavLink to={'/addbook'}>Add Book</NavLink></li>
                            <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/allBooks'}>All Books</NavLink></li>
                            <li className="  text-black md:text-black text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/borrowed'}>Borrowed
                                Books</NavLink></li>
                            <li className=" rounded-b-md lg:rounded-b-0  text-black md:text-black text-center lg:text-left px-2 lg:px-0"><NavLink to={'/login'}>Login</NavLink></li>
                        </ul>
                    </div>
                </div>


                <div className='relative'>
                    <div className='flex flex-row items-center gap-3'>

                        <div className='hidden md:block'>

                            <p> Md Manik Ali </p>

                        </div>
                        <div
                            onClick={() => setOpen(!open)}
                            className='p-4 md:py-1 md:px-2 lg:px-2 border-[3px] border-white flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                            <MdDashboard className="text-xl text-white"></MdDashboard>
                            <div className='hidden md:block'>
                                <img className='rounded-full'
                                    referrerPolicy='no-referrer'
                                    src="https://i.ibb.co/9wnfMt4/banner.jpg"
                                    alt='profile'
                                    height='30'
                                    width='30' />
                            </div>


                        </div>

                    </div>
                    {open && (
                        <div className='absolute rounded-xl shadow-md w-[100px] md:w-[150px]  overflow-hidden right-0 top-12 text-md bg-white text-black'>
                            <div className='flex flex-col cursor-pointer'>
                                <Link
                                    to='/dashboard'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                                    Dashboard
                                </Link>
                                <Link

                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    )}
                </div>








            </div>
        </div>

    );
};

export default Navbar;