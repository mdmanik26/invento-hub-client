

import { Helmet } from "react-helmet-async";
import useSubscribe from "../../Hooks/useSubscribe";




const Subscription = () => {
    const [packages] = useSubscribe()
    console.log(packages);


    return (
        <div>
            <Helmet>
                <title>InventoHUB | Dashboard | Subscribe</title>
            </Helmet>
            <h1 className="text-3xl font-semibold text-[#5fcab3] text-center my-4">Subscribe and Extend your product limit</h1>
            <div className="grid grid-cols-3 items-center justify-center gap-6 lg:px-20">
                {
                    packages.map(item => <div key={item._id} className="rounded-lg border border-[#5bc2ab] px-4 py-6 space-y-3">
                        <p className="text-xl text-slate-400 uppercase">{item?.name}</p>
                        <p>$<span className="font-bold text-5xl">{item?.amount}</span></p>
                        <p>/to extend your</p>
                        <p>product limit to: {item?.limit}</p>
                         <button className="btn btn-outline bg-[#5bc2ab] w-full">Subscribe</button>
                    </div>)
                }
            </div>

               


        </div>
    );
};

export default Subscription;