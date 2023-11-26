import { FaRightLong } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
 
const Software = () => {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-[#5bc2ab] ">Use the InventoHUB Mobile App</h1>
            <p className="text-center max-w-[800px] mx-auto mt-4 font-medium">TranZact is full of features that help you manage inventory, create and track documents and streamline production.</p>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6">

                <div className="flex-1 px-4 text-center lg:text-left">
                    <h1 className="text-3xl my-4 font-bold  ">InventoHUB Inventory Management</h1>
                    <p className="text-xl font-medium">Our InventoHUB app is designed to streamline your <br />processes and increase profits.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
                        <ul className="text-md space-y-3">
                            <li className="flex gap-2 items-center"><FaRightLong className="text-[#5bc2ab]  text-xl"></FaRightLong> Min/Max Stock Levels</li>
                            <li className="flex gap-2 items-center"><FaRightLong className="text-[#5bc2ab]  text-xl"></FaRightLong> Multiple Stores</li>
                            <li className="flex gap-2 items-center"><FaRightLong className="text-[#5bc2ab]  text-xl"></FaRightLong> Inventory Valuation</li>
                            <li className="flex gap-2 items-center"><FaRightLong className="text-[#5bc2ab]  text-xl"></FaRightLong> Inventory Rejected/Dead Stock</li>
                        </ul>
                        <ul className="text-md space-y-3 mt-3 md:mt-0">
                            <li className="flex gap-2 items-center"><FaRightLong className="text-[#5bc2ab]  text-xl"></FaRightLong> Negative Stock Restriction </li>
                            <li className="flex gap-2 items-center"><FaRightLong className="text-[#5bc2ab]  text-xl"></FaRightLong> Barcode Tracking</li>
                            <li className="flex gap-2 items-center"><FaRightLong className="text-[#5bc2ab]  text-xl"></FaRightLong> Auto Stock Adjustment</li>
                            <li className="flex gap-2 items-center"><FaRightLong className="text-[#5bc2ab]  text-xl"></FaRightLong> Physical Stock Reconciliation</li>
                        </ul>
                    </div>

                    <p className="mt-6 flex items-center gap-3">Download from Google Play <FaGooglePlay className="text-2xl text-[#5bc2ab]"></FaGooglePlay> </p>

                </div>



                <div className="flex-1">
                    <img className="max-w-2/4" src="https://i.ibb.co/7ry0mRV/apps.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Software;