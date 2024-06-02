// components/Footer.js

const Footer = () => {
    return (
        <footer className="bg-white mt-10">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <a className="text-xl font-bold text-gray-800 lg:text-2xl" href="#">
                            Ultimate Catering
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a className="text-gray-800 hover:text-gray-600 mx-4" href="/">Home</a>
                        <a className="text-gray-800 hover:text-gray-600 mx-4" href="/services">Services</a>
                        <a className="text-gray-800 hover:text-gray-600 mx-4" href="/about">About Us</a>
                        <a className="text-gray-800 hover:text-gray-600 mx-4" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
