import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle, FaUser, FaUserCircle } from "react-icons/fa";
import { BiSolidLockOpen } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const Login = () => {
    const axiosPublic = useAxiosPublic()
    const { login, googleSignIn } = useContext(AuthContext)
    const [show, setShow] = useState(null)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value

        login(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Invalid username or password",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(res => {

                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })





            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div className="p-5 border-2 rounded-lg shadow-lg max-w-[500px] mx-auto min-h-[400px] my-20 bg-gradient-to-r from-slate-50 to-slate-100">
            <form onSubmit={handleLogin} className="px-3">
                <Helmet>
                    <title>InventoHUB | Login</title>
                </Helmet>
                <div>
                    <FaUserCircle className="mx-auto text-7xl md:text-9xl text-black"></FaUserCircle>
                    <p className="mb-2 text-xl font-medium text-gray-500">Email</p>
                    <div className="flex mb-3">
                        <FaUser className="bg-white text-xl w-12 h-12 p-3"></FaUser>
                        <input className="outline-0 bg-gray-200 w-full py-2 px-3" type="email" name="email" placeholder="Email" required /> <br /> <br />
                    </div>
                    <p className="mb-2 text-xl font-medium text-gray-500">Password</p>
                    <div className="flex relative">
                        <BiSolidLockOpen className="bg-white text-xl w-12 h-12 p-3"></BiSolidLockOpen>
                        <input className=" outline-0 bg-gray-200 w-full py-2 px-3"
                            type={show ? "text" : "password"}
                            name="password"
                            placeholder="password"
                            required /> <br /> <br />
                        <span className='absolute right-3 top-3 text-2xl' onClick={() => setShow(!show)}>
                            {
                                show ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
                            }
                        </span>

                    </div>


                    <label className="label my-2">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <input className='btn btn-outline bg-[#5bc2ab] w-full' type="submit" name="" value="Login" />
                    <p className="my-4 text-center">Dont have an account? <Link className="text-blue-600" to={'/signUp'}>Register</Link></p>



                </div>
            </form>
            <button onClick={handleGoogle} className="flex gap-2 w-full items-center btn btn-outline bg-[#5bc2ab]"> <FaGoogle className="text-red-500 text-xl"></FaGoogle> Sign In With Google</button>
        </div>
    );
};

export default Login;