"use client"
import Link from "next/link";
import { Lato } from "next/font/google";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const lato=Lato({
    subsets:["latin"],
    weight:["300","400","700"],
    display:"swap",
    variable:"--lato"
})
const NavigationBar=()=>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <header className="bg-white py-4">
            <nav className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/"
                         className="text-red-600 font-bold text-xl">Ultimate Catering
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/services"
                                 className="text-black hover:text-black">Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"
                                className="text-black hover:text-black">Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
                        {/* Hamburger Icon */}
                       <MenuIcon className="text-black"/>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white py-2">
                    <ul className="text-black text-center">
                        <li>
                            <Link href="/services"
                                className="block py-2 hover:text-black">Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"
                                className="block py-2 hover:text-black">Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default NavigationBar;