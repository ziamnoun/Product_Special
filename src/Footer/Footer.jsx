import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-200 py-6 mt-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2">Top Item</h2>
                        <p className="text-gray-600">Dhaka,BAngladesh</p>
                        <p className="text-gray-600">Email: contact@Top Item.com</p>
                        <p className="text-gray-600">Phone: (123) 456-7890</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 md:mt-0">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Top Item. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
