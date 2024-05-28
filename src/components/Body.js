import React, { useEffect, useState } from 'react';
import RestaurantCard, { withPromoteddLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RESTAURANTS_API } from "../utils/constants";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);

    // HOC
    const RestaurantCardPromoted = withPromoteddLabel(RestaurantCard);

    // Fetch data from the API
    const fetchData = async (pageNum = 1) => {
        try {
            const response = await fetch(RESTAURANTS_API + pageNum);
            const json = await response.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (pageNum === 1) {
                setListOfRestaurants(restaurants);
                setFiltered(restaurants);
            } else {
                setListOfRestaurants(prev => [...prev, ...restaurants]);
                setFiltered(prev => [...prev, ...restaurants]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Handler for search functionality
    const handleSearch = () => {
        const filteredRes = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFiltered(filteredRes);
    };

    // Handler for filtering top rated restaurants
    const filterTopRated = () => {
        const filteredList = listOfRestaurants.filter((res) =>
            res.info.avgRating > 4.5
        );
        setFiltered(filteredList);
    };

    // Handler for loading more restaurants
    const loadMore = () => {
        setPage(prevPage => {
            const nextPage = prevPage + 1;
            fetchData(nextPage);
            return nextPage;
        });
    };

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return (
            <h1 className="text-center text-red-500 m-4 p-4">
                No Internet Connection! Please check your Internet Connection
            </h1>
        );
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body max-w-7xl mx-auto p-4">
            <div className="filter flex flex-col sm:flex-row justify-between items-center mb-4">
                <div className="search mb-4 sm:mb-0 sm:mr-4 flex items-center w-full sm:w-auto">
                    <input
                        type="text"
                        className="search-box border border-gray-300 rounded-lg p-2 mr-2 w-full sm:w-auto"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button 
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <div className="flex items-center">
                    <button 
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                        onClick={filterTopRated}>
                        Top Rated Restaurant
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((restaurant) => (
                    <Link
                        className="custom-link"
                        key={restaurant.info.id}
                        to={`/restaurants/${restaurant.info.id}`}
                    >
                        {restaurant?.info?.promoted ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>

            <div className="load-more m-4 p-4 flex justify-center">
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={loadMore}>
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Body;
