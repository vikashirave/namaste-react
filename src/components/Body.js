import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurants"
    );

    //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6391621&lng=73.7404306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    const json = await data.json();
    console.log("json:---", json);
    console.log(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListOfRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like your offline!! Please check your internet connection.</h1>

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filterList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filterList);
              //console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantsList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredRestaurantsList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id} >
          <RestaurantCard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
