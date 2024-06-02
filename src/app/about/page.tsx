import NavigationBar from "../components/NavigationBar";


export default function About() {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
           <NavigationBar/>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-10">
                <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-800">
                    About Us
                </h1>
                <p className="text-center text-gray-600 mt-4">
                    Founded in 2020, Ultimate Catering is a family-owned business dedicated to delivering exceptional culinary experiences for every occasion.
                </p>

                <div className="mt-10">
                    <div className="flex flex-col lg:flex-row lg:-mx-4">
                        <div className="lg:w-1/3 lg:mx-4">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                                <p className="text-gray-600 mt-2">
                                    Our passion for food and commitment to quality shine through in every dish we prepare.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mx-4 mt-6 lg:mt-0">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
                                <p className="text-gray-600 mt-2">
                                    From intimate gatherings to grand celebrations, we tailor our services to meet your unique needs.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mx-4 mt-6 lg:mt-0">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-2xl font-bold text-gray-800">Our Commitment</h2>
                                <p className="text-gray-600 mt-2">
                                    At Ultimate Catering, we believe that great food brings people together, and we are honored to be a part of your special moments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
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
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
