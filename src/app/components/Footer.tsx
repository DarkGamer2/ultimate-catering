// components/Footer.js
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Pinterest } from "@mui/icons-material";
const Footer = () => {
    return (
        <footer className="bg-white mt-10">
        <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <a className="text-xl font-bold text-gray-800 lg:text-2xl" href="#">
                        Ultimate Catering
                    </a>
                </div>
                <div className="mt-4 md:mt-0">
                    <h1 className="text-xl font-bold text-gray-800 lg:text-2xl mb-2 md:mb-0">Social Media</h1>
                    <div className="flex items-center">
                        <Facebook className="text-blue-600 mx-2"/>
                        <Instagram className="text-pink-400 mx-2"/>
                        <WhatsApp className="text-green-600 mx-2"/>
                        <Pinterest className="text-red-600 mx-2"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    );
};

export default Footer;
