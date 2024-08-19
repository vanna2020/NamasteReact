import {useState,useEffect} from "react"

const useRestaurantMenu = () =>{

    const [listRestaurant, setListRestaturant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3917085&lng=81.8707618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        
        const json = await data.json();
        setListRestaturant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }
    return listRestaurant;

}
export default useRestaurantMenu;