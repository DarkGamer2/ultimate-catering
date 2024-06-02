// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import Header from './components/NavigationBar';
import Footer from './components/Footer';

const HomePage = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <Head>
                <title>Ultimate Catering</title>
                <meta name="description" content="Ultimate Catering - Delicious food for every occasion" />
            </Head>

            <Header />

            <main className="container mx-auto px-6 py-10">
                {/* Hero Section */}
                <section className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
                            Welcome to Ultimate Catering
                        </h1>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="mt-10 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">About Us</h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        Founded in 2020, Ultimate Catering is a family-owned business dedicated to providing high-quality catering services and products. Our mission is to make every occasion memorable with our delicious food and exceptional service.
                    </p>
                </section>

                {/* Services Section */}
                <section className="mt-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center">Our Services</h2>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-800">Wedding Catering</h3>
                                <p className="text-gray-600 mt-2">
                                    Make your special day unforgettable with our exquisite wedding catering services. We offer a variety of customizable menu options to suit your preferences.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-800">Corporate Events</h3>
                                <p className="text-gray-600 mt-2">
                                    Impress your clients and colleagues with our professional corporate catering services. From small meetings to large conferences, we've got you covered.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section className="mt-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center">Our Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative w-full h-48">
                                <Image src="/images/kurma.jpeg" alt="Kurma" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800">Kurma</h3>
                                <p className="text-gray-600 mt-2">Delicious traditional Kurma</p>
                                <p className="text-gray-800 font-bold mt-4">$10</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative w-full h-48">
                                <Image src="/images/indian-sweets.jpg" alt="Indian Sweets" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800">Indian Sweets</h3>
                                <p className="text-gray-600 mt-2">Assorted Indian sweets</p>
                                <p className="text-gray-800 font-bold mt-4">$15</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative w-full h-48">
                                <Image src="/images/dhalpuri-roti1-1024x682.jpg" alt="Curry Paste" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800">Dhalpuri Roti</h3>
                                <p className="text-gray-600 mt-2">Dhalpuri Roti</p>
                                <p className="text-gray-800 font-bold mt-4">$5</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mt-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center">Customer Testimonials</h2>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <p className="text-gray-600 italic">
                                    "Ultimate Catering made our wedding day perfect with their delicious food and excellent service. Highly recommend!"
                                </p>
                                <p className="text-gray-800 font-semibold mt-4">- John & Jane Doe</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <p className="text-gray-600 italic">
                                    "The catering for our corporate event was outstanding. The food was delicious and the service was impeccable."
                                </p>
                                <p className="text-gray-800 font-semibold mt-4">- Acme Corp</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
