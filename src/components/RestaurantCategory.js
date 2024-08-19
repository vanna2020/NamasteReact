import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory =({data, showItem , setShowIndex})=>{

    // const[showItem, setShowItem] = useState(false)

  const handleClick = () =>{
        setShowIndex()
    // setShowItem(!showItem);

  }

    console.log(data)
    return(
        <div className="w-6/12 p-4 bg-gray-50 mx-auto my-4 content-center shadow-md ">
            <div className="flex justify-between cursor-pointer">
            <span className="font-bold text-md" onClick={handleClick}>{data.title} ({data.itemCards.length}) </span>
            <span>⬇️</span>
            </div>
            {showItem && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;