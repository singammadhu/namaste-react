import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
    // Extract restaurant ID from the URL parameters
    const { resId } = useParams();

    // Fetch restaurant menu information using custom hook
    const resInfo = useRestaurantMenu(resId);

    // Active category index to determine which category to show
    const [showIndex, setShowIndex] = useState(0);

    // Show a loading shimmer while data is being fetched
    if (resInfo === null) return <RestaurantMenuShimmer />;

    // Extract necessary information from the response
    const menuInfo = resInfo?.cards?.[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = menuInfo;

    // Extract and filter categories
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // Log the categories for debugging purposes
    console.log(categories);

    return (
        <div className="menu p-2 text-center">
            <h1 className="text-2xl font-bold my-6">{name}</h1>
            <h2 className="text-lg font-bold">
                {cuisines?.join(', ')} - {costForTwoMessage}
            </h2>
            {categories && categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
