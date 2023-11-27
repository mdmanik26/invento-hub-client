
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="border h-screen flex justify-center items-center">
                <div className="text-center">
                    <img className="w-1/4 mx-auto" src="https://i.ibb.co/fkykDKq/error1.png" alt="" />
                    
                    <p className="mb-5 text-xl ">Looks like this page went on vacation</p>
                    <Link to={'/'}>
                        <button className="px-5 btn font-semibold btn-outline hover:text-white hover:bg-[#5bc2ab] py-2 rounded-md">Go Home</button>
                    </Link>
                </div>
            </div>
    );
};

export default Error;