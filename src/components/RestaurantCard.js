import React from 'react';
import { CDN_URL_RESTAURANTS_IMAGE } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla
    } = resData?.info;

    return (
        <div className="m-4 p-4 w-full sm:w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
                className="rounded-lg w-full"
                alt="res-logo"
                src={CDN_URL_RESTAURANTS_IMAGE + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    );
};

export const withPromoteddLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
