import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// AppLayout component: Serves as the main layout for the app with a header and a dynamic content area
const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            {/* Outlet component: renders the matched child route's component */}
            <Outlet />
        </div>
        </Provider>
    );
};

// Define routes using createBrowserRouter
const appRouter = createBrowserRouter([
    {
        path: "/", // Root path
        element: <AppLayout />, // Main layout component
        children: [
            {
                path: "/", // Default child path (home page)
                element: <Body />
            },
            {
                path: "/about", // About page path
                element: <About />
            },
            {
                path: "/contact", // Contact page path
                element: <Contact />
            },
            {
                path: "/restaurants/:resId", // Dynamic path for restaurant menu
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart/>

            }
        ],
        // Element to render for any unmatched routes (error handling)
        errorElement: <Error />
    }
]);

// Create root element and render the app with the defined router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);