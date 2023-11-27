

const Package = () => {
    return (
        <div className="my-10">
            <h1 className="text-5xl font-bold text-center mx-auto mb-10 max-w-[1000px] text-[#5bc2ab] ">Make your business easier by <br />purchasing our package</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-20 md:px-4 lg:px-20 gap-10">

                <div className="rounded-lg border border-[#5bc2ab] px-4 py-6 space-y-3">
                    <p className="text-xl text-slate-400">FREE</p>
                    <p>$<span className="font-bold text-5xl">0</span></p>
                    <p>/month billed annually</p>
                    <p>$ 0 billed monthly</p>
                    <button className="btn btn-outline bg-[#5bc2ab] w-full">Get Started</button>
                </div>

                <div className="rounded-lg border border-[#5bc2ab] px-4 py-6 space-y-3">
                    <p className="text-xl text-slate-400">STANDARD</p>
                    <p>$<span className="font-bold text-5xl">19</span></p>
                    <p>/month billed annually</p>
                    <p>$ 19 billed monthly</p>
                    <button className="btn btn-outline bg-[#5bc2ab] w-full">Get Started</button>
                </div>
                <div className="rounded-lg border border-[#5bc2ab] px-4 py-6 space-y-3">
                    <p className="text-xl text-slate-400">PROFESSIONAL</p>
                    <p>$<span className="font-bold text-5xl">99</span></p>
                    <p>/month billed annually</p>
                    <p>$ 99 billed monthly</p>
                    <button className="btn btn-outline bg-[#5bc2ab] w-full">Get Started</button>
                </div>
                <div className="rounded-lg border-2 border-amber-500 px-4 py-6 space-y-3">
                    <p className="text-xl text-slate-400">PREMIUM</p>
                    <p>$<span className="font-bold text-5xl">119</span></p>
                    <p>/month billed annually</p>
                    <p>$ 119 billed monthly</p>
                    <button className="btn btn-outline  bg-amber-500 w-full">Get Started</button>
                </div>
                <div className="rounded-lg border border-[#5bc2ab] px-4 py-6 space-y-3">
                    <p className="text-xl text-slate-400">ENTERPRISE</p>
                    <p>$<span className="font-bold text-5xl">199</span></p>
                    <p>/month billed annually</p>
                    <p>$ 199 billed monthly</p>
                    <button className="btn btn-outline bg-[#5bc2ab] w-full">Get Started</button>
                </div>
               

            </div>
        </div>
    );
};

export default Package;