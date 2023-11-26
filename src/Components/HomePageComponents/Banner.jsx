

const Banner = () => {
    return (

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
            <div className="flex-1">
                <img className="max-w-2/4" src="https://i.ibb.co/9wnfMt4/banner.jpg" alt="" />
            </div>
            <div className="flex-1 px-4 text-center lg:text-left">
                <h1 className="text-5xl font-bold text-[#5bc2ab] ">Welcome to Organize <br /> Your Business</h1>
                <p className="my-4 text-slate-500 text-lg font-medium text-center lg:text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, id impedit commodi aspernatur, est sed labore numquam assumenda enim magni laudantium incidunt hic fugiat, quasi ut dolore cumque dolores porro?</p>
                <button className="btn btn-ghost text-white font-semibold text-xl bg-[#6ce6cb] px-6">Sign Up</button>
            </div>
        </div>

    );
};

export default Banner;