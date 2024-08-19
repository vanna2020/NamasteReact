import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [showIndex, setShowIndex] =useState(null)
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("Restaurant-Menu", json.data);
    setResMenu(json.data);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log("categories",categories)

  return (
    <div className="border border-solid rounded-sm text-center m-10">
      <h2 className="font-bold my-10 text-lg">{name}</h2>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
       {categories.map((category, index)=>(
        <RestaurantCategory 
        key={category?.card?.card?.title} 
        data={category?.card?.card}
        showItem={index === showIndex ? true : false}
        setShowIndex={()=>setShowIndex(index)}
        />))
    }
    </div>
  );
};
export default RestaurantMenu;
