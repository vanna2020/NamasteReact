import {useState,useEffect} from "react"

const useRestaurantMenu = () =>{

    const [listRestaurant, setListRestaturant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();

    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3917085&lng=81.8707618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log("json")
        setListRestaturant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
    }
    return listRestaurant, filteredRestaurant;
    

}

export default useRestaurantMenu;