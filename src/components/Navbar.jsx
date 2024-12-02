import {FaFacebook, FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    GR
                </h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/gy%C5%B1jt%C5%91-robert-03b4a2244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-500"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin/>
                </a>
                <a
                    href="https://www.instagram.com/gyujto.sw/?locale=bz-hans&hl=am-et"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-pink-500"
                    aria-label="Instagram"
                >
                    <FaInstagram/>
                </a>
                <a
                    href="https://www.facebook.com/gyujto.robert.9?locale=ro_RO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-700"
                    aria-label="Facebook"
                >
                    <FaFacebook/>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
