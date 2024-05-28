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
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100">
            {/* Logo container with an image element */}
            <div className="logo-container">
                <img
                    className="w-28"
                    src={LOGO_URL} // Source URL for the logo image
                    alt="Logo" // Alt text for accessibility
                />
            </div>

            {/* Navigation items */}
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "❎"}</li>
                    <li className="px-4">
                        {/* Link to the home page */}
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        {/* Link to the about page */}
                        <Link to="about">About Me</Link>
                    </li>
                    <li className="px-4">
                        {/* Link to the contact page */}
                        <Link to ="contact">Contact</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="cart">Cart ({totalItems})</Link>
                    </li> 

                    {/* Button to toggle login/logout state */}
                    <button
                        className="login"
                        onClick={() => {
                            // Toggle button text between Login and Logout
                            setBtn(btn === "Login" ? "Logout" : "Login");
                        }}
                    >
                        {btn} {/* Display the current state of the button */}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
