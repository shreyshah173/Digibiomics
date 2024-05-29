// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#00a95b] text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <Link to="/">DigiBiomics®</Link>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="">Home</Link>
                    <Link to="/about" className="">About Us</Link>
                    <Link to="/services" className="">Services</Link>
                    {/* <div className="relative group">
                        <button className="">Services</button>
                        <div className="absolute left-0 top-full z-10 hidden group-hover:block bg-[#0e7746] mt-2 rounded shadow-lg">
                            <Link to="/services/mental-health" className="block px-4 py-2 hover:bg-green-600">Mental Health</Link>
                            <Link to="/services/lung-disorders" className="block px-4 py-2 hover:bg-green-600">Lung Disorders</Link>
                            <Link to="/services/cancer-screening" className="block px-4 py-2 hover:bg-green-600">Cancer Screening</Link>
                        </div>
                    </div> */}

                    <Link to="/blog" className="">Blog</Link>
                    <Link to="/contact" className="">Contact Us</Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 rounded-full text-black"
                        />
                        <button className="absolute right-0 top-0 mt-2 mr-2 text-green-800">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full">
                        Get a Quote
                    </button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[#0e7746]">
                    <Link to="/" className="block px-4 py-2">Home</Link>
                    <Link to="/about" className="block px-4 py-2">About Us</Link>
                    <Link to="/services" className="block px-4 py-2">Services</Link>
                    <Link to="/blog" className="block px-4 py-2">Blog</Link>
                    <Link to="/contact" className="block px-4 py-2">Contact Us</Link>
                    <div className="relative px-4 py-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 pr-10 rounded-full text-black w-full"
                        />
                        <button className="absolute right-0 top-0 mt-4 mr-6 text-green-800" style={{}}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <button className="bg-green-600 hover:bg-green-500 text-white pr-10 py-2 px-4 rounded-full w-full mt-2" style={{ marginBottom: '10px', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        Get a Quote
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
