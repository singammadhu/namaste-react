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
        <div className="flex justify-between items-center bg-pink-100 shadow-lg p-3 relative">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    className="w-16 mr-2"
                    src={LOGO_URL}
                    alt="Logo"
                />
             </div>

            {/* Online Status */}
            <div className="hidden sm:flex items-center mr-auto">
                <span className="mr-2">Online Status: {onlineStatus ? "✅" : "❎"}</span>
            </div>

            {/* Sandwich menu icon (visible on smaller screens only) */}
            <div className="sm:hidden">
                <button
                    className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
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

            {/* Menu */}
            <div className={`sm:flex flex-col sm:flex-row items-center ${showMenu ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-lg">
                    <li className="sm:hidden">Online Status: {onlineStatus ? "✅" : "❎"}</li>
                    <li>
                        <Link to="/" className="hover:text-blue-500 transition-colors duration-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-500 transition-colors duration-200">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-500 transition-colors duration-200">Contact</Link>
                    </li>
                    <li>
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

            {/* Mobile view CSS */}
            <style jsx>{`
                @media (max-width: 640px) {
                    .hidden {
                        display: none;
                    }
                    .block {
                        display: block;
                    }
                }
            `}</style>
        </div>
    );
};

export default Header;
