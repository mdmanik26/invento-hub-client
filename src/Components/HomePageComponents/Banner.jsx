import Aos from "aos";
import { useEffect } from "react";


const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
            <div className="flex-1">
                <img className="max-w-2/4" src="https://i.ibb.co/9wnfMt4/banner.jpg" alt="" />
            </div>
            <div data-aos="flip-up" className="flex-1 px-4 text-center lg:text-left">
                <h1 className="text-5xl font-bold text-[#5bc2ab] ">Welcome to Organize <br /> Your Business</h1>
                <p className="my-4 text-slate-500 text-lg font-medium text-center lg:text-justify">Optimize your business potential with InventoHUB, the pinnacle of inventory management. Streamline operations, eliminate inefficiencies, and boost profitability effortlessly. Experience precision control and seamless organization, empowering your journey to success. Join us today and revolutionize the way you manage inventory, ensuring a future of prosperity and growth.</p>
                <button className="btn btn-ghost text-white font-semibold text-xl bg-[#6ce6cb] px-6">Sign Up</button>
            </div>
        </div>

    );
};

export default Banner;