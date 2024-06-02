// pages/services.js

import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Image from "next/image";
const products = [
    { name: "Kurma", description: "Delicious traditional Kurma", price: "$10", image: "/images/kurma.jpeg" },
    { name: "Indian Sweets", description: "Assorted Indian sweets", price: "$15", image: "/images/indian-sweets.jpg" },
    { name: "Dhalpuri Roti", description: "Dhalpuri Roti", price: "$10", image: "/images/dhalpuri-roti1-1024x682.jpg" },
    // Add more products as needed
];

const ServicesPage = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
           <NavigationBar/>

            <main className="container mx-auto px-6 py-10">
                <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-800">Our Services</h1>
                
                <section className="mt-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Catering Services</h2>
                    <p className="text-gray-600 mt-4">
                        We offer a wide range of catering services for all kinds of events. Whether it's a wedding, corporate event, or a family gathering, we have you covered with our delicious and customizable menu options.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Our Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" width={100} height={50}/>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600 mt-2">{product.description}</p>
                                    <p className="text-gray-800 font-bold mt-4">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ServicesPage;
