


import React from 'react';
import { Link } from 'react-router-dom';
import {  signOut } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast'; 
import auth from '../firebase.config';

const Navbar = () => {
    
    const user =auth.currentUser;
    console.log(user)

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success('Successfully Logged Out!'); 
            window.location.reload();
        } catch (error) {
            console.error('Error signing out: ', error);
            toast.error('Logout Failed!'); 
        }
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Navbar Start */}
                    <div className="flex items-center">
                        <div className="dropdown lg:hidden">
                            <button
                                tabIndex={0}
                                className="text-gray-800 focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                            <ul
                                tabIndex={0}
                                className="dropdown-content mt-3 space-y-2 rounded-lg bg-white shadow-lg z-[1] p-2">
                                <li>
                                    <Link to="/" className="block text-gray-800 hover:text-blue-500">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/add-item" className="block text-gray-800 hover:text-blue-500">
                                        Add Item
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-blue-500">
                            TopItem
                        </Link>
                    </div>

                    {/* Navbar Center */}
                    <div className="hidden lg:flex">
                        <ul className="flex space-x-8">
                            <li>
                                <Link to="/" className="text-gray-800 hover:text-blue-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-item" className="text-gray-800 hover:text-blue-500">
                                    Add Item
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navbar End */}
                    <div className="flex space-x-4 items-center">
                        {user ? (
                            <>
                                <img
                                    src={user.photoURL || 'https://via.placeholder.com/40'}
                                    alt="Profile"
                                    className="h-10 w-10 rounded-full"
                                />
                                <span className="text-gray-800">{user.displayName || 'User'}</span>
                                <button
                                    onClick={handleLogout}
                                    className="btn bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                                    Log In
                                </Link>
                                <Link to="/register" className="btn bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} /> 
        </nav>
    );
};

export default Navbar;
