import { Link } from "react-router-dom";
import logo from "../assets/logo-footer.png";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full font-roboto bg-[#0A2052] text-white py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-3 py-4 justify-between items-center">
                <div className="w-full">
                    <Link to="/">
                        <img
                            src={logo}
                            alt={logo}
                            className="h-10 hover:scale-105 duration-200"
                        />
                    </Link>
                </div>
                <div className="w-full flex justify-center gap-x-10">
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        Link
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        Link
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        Link
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        Link
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        Link
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        Link
                    </Link>
                </div>
                <div className="w-full flex gap-x-2 justify-end">
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        <FaYoutube />
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        <FaTwitter />
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                    >
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
            <p className="text-sm text-center font-inter text-white">
                WhiteDoorz @ {new Date().getFullYear()}. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
