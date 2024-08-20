// import React from 'react';

// const Navbar = () => {
//     return (
//         <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">TopItem</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Log In</a>
//     <a className="btn">Register</a>
//   </div>
// </div>
//     );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                    <div className="flex space-x-4">
                        <Link to="/login" className="btn bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                            Log In
                        </Link>
                        <Link to="/register" className="btn bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
