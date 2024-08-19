import RestaurantCart, { Addinglabel } from "./RestaurantCart";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Link } from "react-router-dom";

const Body = () => {
  const [listRestaurant, setListRestaturant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // const listRestaurant = useRestaurantMenu();

  const RestaurantCardPromoted = Addinglabel(RestaurantCart);
  console.log(filteredRestaurant);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3917085&lng=81.8707618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(data)

    console.log(
      "json",
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListRestaturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  };
  console.log("12323", listRestaurant);
  return listRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box"
          ></input>
          <button
            className="button-search"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log("filteredRes", filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        <button
          className="filter-search"
          onClick={() => {
            const filterdData = listRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log("filterdData", filterdData);
            setListRestaturant(filterdData);
          }}
        >
          TOP Rated Restaurant
        </button>
      </div>
      <div className="res-cart">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+ + restaurant.info.id}>
            {restaurant?.info?.isOpen === true ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCart resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
