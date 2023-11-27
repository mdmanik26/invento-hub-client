

const Time = () => {
    return (
        <div className="my-10 py-10 lg:px-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-6 rounded-lg bg-[#61ccb534]">
            <div className="flex-1">
                <img className="max-w-2/4" src="https://i.ibb.co/FB2N3nL/time2.png" alt="" />
            </div>
            <div className="flex-1 px-4 text-center lg:text-left">
                <h1 className="text-5xl font-bold text-[#5bc2ab] ">Save 90% of <br /> your time and efforts.</h1>
                <p className="my-4 text-slate-500 text-lg max-w-[500px] font-medium text-center lg:text-justify">Leverage our technology and get your inventory and reconciliation done faster to save your critical time and money.</p>
                <button className="btn btn-ghost text-white font-semibold text-xl bg-[#6ce6cb] px-6">Sign Up</button>
            </div>
        </div>
    );
};

export default Time;