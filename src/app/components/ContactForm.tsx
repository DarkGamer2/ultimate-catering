// components/ContactForm.js
"use client"
import { useState } from "react";

const ContactForm = () => {
    const [clientFirstName, setClientFirstName] = useState("");
    const [clientLastName, setClientLastName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPhoneNumber, setClientPhoneNumber] = useState("");
    const [clientQuery, setClientQuery] = useState("");
    const [buttonText, setButtonText] = useState("Submit");

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(clientFirstName, clientLastName, clientEmail, clientPhoneNumber, clientQuery);
    };

    return (
        <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="clientFirstName">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="clientFirstName"
                        type="text"
                        name="clientFirstName"
                        onChange={(e) => setClientFirstName(e.target.value)}
                        placeholder="Jane"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="clientLastName">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="clientLastName"
                        type="text"
                        name="clientLastName"
                        onChange={(e) => setClientLastName(e.target.value)}
                        placeholder="Doe"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="clientEmail">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="clientEmail"
                        type="email"
                        name="clientEmail"
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="john@example.com"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="clientPhoneNumber">
                        Contact Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="clientPhoneNumber"
                        type="tel"
                        name="clientPhoneNumber"
                        onChange={(e) => setClientPhoneNumber(e.target.value)}
                        placeholder="123-456-7890"
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="clientQuery">
                        Query
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="clientQuery"
                        name="clientQuery"
                        onChange={(e) => setClientQuery(e.target.value)}
                        placeholder="Your query"
                    ></textarea>
                </div>
            </div>
            <div className="text-center">
                <button
                    className="hover:bg-pink-600 hover:-translate-y-0.5 transform transition active:bg-pink-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 bg-indigo-500 text-white px-5 py-4 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base" onSubmit={handleSubmit}
                    type="submit"
                >
                    {buttonText}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
