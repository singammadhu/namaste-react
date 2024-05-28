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
      const response = await fetch(RESTAURANTS_API+pageNum);
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
      <h1>
        No Internet Connection! Please check your Internet Connection
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border boader-solid border-black "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
            className='px-4 py-2 bg-green-100 m-4 rounded-lg'
            onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-50 rounded-lg" onClick={filterTopRated}>
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
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
          className="px-4 py-2 bg-blue-100 rounded-lg"
          onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Body;
