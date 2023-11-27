import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = data => {
        console.log(data)
        // createUser(data.email, data.password)
        //     .then(res => {
        //         console.log(res.user);

        //         updateUserProfile(data.name, data.photo)
        //             .then(res => {
        //                 // const userInfo = {
        //                 //     name: data.name,
        //                 //     email: data.email
        //                 // }
        //                 // axiosPublic.post('/users', userInfo)
        //                 //     .then(res => {
        //                 //         console.log('user added to the database', res.data);
        //                 //     })
        //                 // reset();
        //                 Swal.fire({
        //                     position: "top-end",
        //                     icon: "success",
        //                     title: "User created successfully",
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                 });
        //                 navigate('/')
        //             })
        //             .catch(err => console.log(err))
        //     })
        //     .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-3">

            <Helmet>
                <title>InventoHUB | SignUp</title>
            </Helmet>
            <div className=" p-5 border-2 rounded-lg shadow-lg max-w-[500px] mx-auto min-h-[400px] my-20 bg-[#5bc2ac5e]">
                <FaUserCircle className="mx-auto text-7xl md:text-9xl text-black"></FaUserCircle>
                <p className="mb-2 text-xl font-medium text-gray-500">Name</p>

                <input {...register("photo", { required: true })} required className="outline-0  w-full py-2 px-3" type="text" name="photo" placeholder="photo" /> <br />
                {errors.photo && <span className="text-red-600">Photo is required</span>}
                <br />

                <p className="mb-2 text-xl font-medium text-gray-500">Name</p>

                <input {...register("name", { required: true })} required className="outline-0  w-full py-2 px-3" type="text" name="name" placeholder="Name" /> <br />
                {errors.name && <span className="text-red-600">Name is required</span>}
                <br />

                <p className="mb-2 text-xl font-medium text-gray-500">Email</p>
                <input {...register("email", { required: true })} className="outline-0  w-full py-2 px-3" type="email" name="email" placeholder="Email" required /> <br />
                {errors.email && <span className="text-red-600">Email is required</span>}
                <br />
                <p className="mb-2 text-xl font-medium text-gray-500">Password</p>
                <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[\W_]).+$/ })} className=" outline-0  w-full py-2 px-3"
                    type="password"
                    name="password"
                    placeholder="password"
                /> <br />
                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be six character or longer</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have 1 UPPERCASE, 1 special character and six character or longer.</span>}

                <input className='btn btn-primary w-full mt-4' type="submit" name="" value="SignUp" />
                <p className="my-4 text-center">Already have an account? <Link className="text-blue-600" to={'/login'}>Login</Link></p>



            </div>

        </form>
    );
};

export default SignUp;