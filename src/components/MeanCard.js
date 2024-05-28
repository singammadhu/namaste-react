import React from "react";
import { CDN_URL_ITEM_IMAGE } from "../utils/contants";
import MenuCardShimmer from "./MenuCardShimmer";

const MenuCard = ({ item }) => {
    const { name, defaultPrice, description, isVeg, isBestseller, ribbon, imageId } = item.card.info;

    return (
        <div className="menu-card border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img src={`${CDN_URL_ITEM_IMAGE}${imageId}`} alt={name} className="menu-card-image object-cover w-full" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name} - Rs.{defaultPrice / 100}</h3>
                <p className="text-gray-700 mb-2">{description}</p>
                <p className="text-sm text-gray-600">Type: {isVeg ? 'Vegetarian' : 'Non-Vegetarian'}</p>
                {isBestseller && <p className="bestseller text-sm text-white bg-green-500 rounded-full px-2 py-1 inline-block mt-2">{ribbon.text}</p>}
            </div>
        </div>
    );
};

export default MenuCard;
