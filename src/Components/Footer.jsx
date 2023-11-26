import { FaWhatsapp, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (


        <div className="bg-[#6ce6cb] text-black">
            <footer className="grid grid-cols-1 lg:grid-cols-2 p-10 ">
                <div className="grid grid-cols-3">
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a><br />
                        <a className="link link-hover">Design</a><br />
                        <a className="link link-hover">Marketing</a><br />
                        <a className="link link-hover">Advertisement</a><br />
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a><br />
                        <a className="link link-hover">Contact</a><br />
                        <a className="link link-hover">Jobs</a><br />
                        <a className="link link-hover">Press kit</a><br />
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a><br />
                        <a className="link link-hover">Privacy policy</a><br />
                        <a className="link link-hover">Cookie policy</a><br />
                    </nav>
                </div>

                <nav className="mt-4 lg:mt-0">
                    <header className="footer-title">Newsletter</header>
                    <div className="flex gap-2 items-center">
                        <input className="w-full py-3 rounded-md px-2" type="text" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>

                    <div className="flex items-center gap-4 text-3xl mt-4 ">

                        <FaWhatsapp className="text-white"></FaWhatsapp>
                        <FaYoutube className="text-red-600"></FaYoutube>
                        <FaInstagram className="text-violet-600" ></FaInstagram>
                        <FaFacebook className="text-blue-600"></FaFacebook>
                        <FaLinkedinIn ></FaLinkedinIn>
                        <FaTwitter className="text-white"></FaTwitter>
                    </div>

                    <div className="mt-2">
                        <p>Mobile: +91 000 123 34</p>
                        <p>Email: inventohub@gmail.com</p>
                    </div>

                </nav>




            </footer>
            <hr className="w-3/4 border-2 mx-auto" />


            <div className="text-center px-20 py-3 ">
                <img className="w-[100px] mx-auto" src="https://i.ibb.co/S3H8g8q/logo1.png" alt="" />
                <h1 className="text-2xl font-bold">InventoHUB</h1>
                <p>Copyright © 2023 - All right reserved</p>

            </div>


        </div>
    );
};

export default Footer;