import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [btn, setBtn] = useState("Login");
    const [showMenu, setShowMenu] = useState(false); // State to toggle menu
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="flex flex-row justify-between items-center bg-pink-100 shadow-lg p-3 sm:p-4 sm:bg-yellow-100">
            {/* Logo */}
            <div className="logo-container mb-2 sm:mb-0">
                <img
                    className="w-24 sm:w-28"
                    src={LOGO_URL}
                    alt="Logo"
                />
            </div>

            {/* Menu */}
            <div className={`sm:flex flex-col sm:flex-row items-center w-full sm:w-auto ${showMenu ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 text-lg w-full sm:w-auto">
                    <li className="px-2 sm:px-4">Online Status: {onlineStatus ? "✅" : "❎"}</li>
                    <li className="px-2 sm:px-4">
                        <Link to="/" className="hover:text-blue-500 transition-colors duration-200">Home</Link>
                    </li>
                    <li className="px-2 sm:px-4">
                        <Link to="/about" className="hover:text-blue-500 transition-colors duration-200">About Me</Link>
                    </li>
                    <li className="px-2 sm:px-4">
                        <Link to="/contact" className="hover:text-blue-500 transition-colors duration-200">Contact</Link>
                    </li>
                    <li className="px-2 sm:px-4 font-bold">
                        <Link to="/cart" className="hover:text-blue-500 transition-colors duration-200">Cart ({totalItems})</Link>
                    </li>
                </ul>
                
                {/* Login button */}
                <button
                    className="mt-2 sm:mt-0 sm:ml-4 px-3 sm:px-4 py-1 sm:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                    onClick={() => setBtn(btn === "Login" ? "Logout" : "Login")}
                >
                    {btn}
                </button>
            </div>

            {/* Hamburger menu icon */}
            <div className="sm:hidden">
                <button
                    className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none mt-1"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {showMenu ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16a1 1 0 100-2H4a1 1 0 100 2zm16 5H4a1 1 0 000 2h16a1 1 0 000-2zm0 6H4a1 1 0 100 2h16a1 1 0 100-2z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16a1 1 0 100-2H4a1 1 0 100 2zm16 5H4a1 1 0 000 2h16a1 1 0 000-2zm0 6H4a1 1 0 100 2h16a1 1 0 100-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile view CSS */}
            <style jsx>{`
                @media (max-width: 640px) {
                    ul.flex {
                        flex-direction: column;
                    }
                    ul.flex li {
                        margin-top: 0.3rem;
                        padding: 0.3rem 0;
                        border-top: 1px solid #ccc; /* Add separator between menu items */
                    }
                    ul.flex li:first-child {
                        border-top: none; /* Remove separator for the first item */
                    }
                    .block {
                        display: block;
                    }
                    .hidden {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default Header;
