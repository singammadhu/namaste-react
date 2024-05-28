import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

// Header component: Defines the navigation header for the app
const Header = () => {
    // useState hook to manage the login button text state
    const [btn, setBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    // Calculate the total number of items in the cart
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center bg-pink-100 shadow-lg p-4 sm:bg-yellow-100">
            {/* Logo container with an image element */}
            <div className="logo-container mb-4 sm:mb-0">
                <img
                    className="w-28"
                    src={LOGO_URL} // Source URL for the logo image
                    alt="Logo" // Alt text for accessibility
                />
            </div>

            {/* Navigation items */}
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-lg w-full sm:w-auto">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "❎"}</li>
                    <li className="px-4">
                        {/* Link to the home page */}
                        <Link to="/" className="hover:text-blue-500 transition-colors duration-200">Home</Link>
                    </li>
                    <li className="px-4">
                        {/* Link to the about page */}
                        <Link to="/about" className="hover:text-blue-500 transition-colors duration-200">About Me</Link>
                    </li>
                    <li className="px-4">
                        {/* Link to the contact page */}
                        <Link to="/contact" className="hover:text-blue-500 transition-colors duration-200">Contact</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart" className="hover:text-blue-500 transition-colors duration-200">Cart ({totalItems})</Link>
                    </li>
                </ul>
                {/* Button to toggle login/logout state */}
                <button
                    className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                    onClick={() => {
                        // Toggle button text between Login and Logout
                        setBtn(btn === "Login" ? "Logout" : "Login");
                    }}
                >
                    {btn} {/* Display the current state of the button */}
                </button>
            </div>
        </div>
    );
};

export default Header;
