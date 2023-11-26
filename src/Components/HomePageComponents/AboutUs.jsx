import { FaRegLightbulb, FaHandsHelping , FaUniversalAccess  } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoDiamondSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";


const AboutUs = () => {
    return (
        <div className="my-20 lg:px-20">
            <h1 className="text-5xl text-[#5bc2ab] text-center font-bold">Why People Choose Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">

                <div className="text-center px-4 py-2 flex flex-col justify-center items-center">
                    <FaRegLightbulb className="text-6xl text-[#5bc2ab]"></FaRegLightbulb>
                    <h1 className="text-2xl my-4 font-semibold">Easy to Use</h1>
                    <p className="text-md font-medium ">Create any document with a few clicks.</p>
                </div>

                <div className="text-center px-4 py-2 flex flex-col justify-center items-center">
                    <TbReportSearch className="text-6xl text-[#5bc2ab]"></TbReportSearch>
                    <h1 className="text-2xl my-4 font-semibold">Real-time Reports</h1>
                    <p className="text-md font-medium ">Gather and share business insights in realtime.</p>
                </div>

                <div className="text-center px-4 py-2 flex flex-col justify-center items-center">
                    <IoDiamondSharp className="text-6xl text-[#5bc2ab]"></IoDiamondSharp>
                    <h1 className="text-2xl my-4 font-semibold">Free Forever</h1>
                    <p className="text-md font-medium ">Access all the inventory, sales & purchase features for free.</p>
                </div>
                


                <div className="text-center px-4 py-2 flex flex-col justify-center items-center">
                    <MdOutlineSecurity className="text-6xl text-[#5bc2ab]"></MdOutlineSecurity>
                    <h1 className="text-2xl my-4 font-semibold">Privacy and Security</h1>
                    <p className="text-md font-medium ">Your data is secure with a world class encryption standard.</p>
                </div>

                <div className="text-center px-4 py-2 flex flex-col justify-center items-center">
                    <FaHandsHelping  className="text-6xl text-[#5bc2ab]"></FaHandsHelping >
                    <h1 className="text-2xl my-4 font-semibold">24/7 Chat Support</h1>
                    <p className="text-md font-medium ">Our Average response time is less than a minute.</p>
                </div>

                <div className="text-center px-4 py-2 flex flex-col justify-center items-center">
                    <FaUniversalAccess  className="text-6xl text-[#5bc2ab]"></FaUniversalAccess >
                    <h1 className="text-2xl my-4 font-semibold">Instant Access</h1>
                    <p className="text-md font-medium ">Use TranZact anytime and anywhere in the world.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;