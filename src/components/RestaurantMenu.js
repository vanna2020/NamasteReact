import { useEffect, useState } from "react"

const RestaurantMenu = () => {

    const [resMenu , setResMenu] = useState(null)

 useEffect(()=>{
    fetchMenu();
 },[])

 const fetchMenu = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3917085&lng=81.8707618&restaurantId=508862&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    const json = await data.json()
    console.log(json.data?.cards[2]?.card?.card?.info?.name)
    setResMenu(json.data)
 }

 const {name} = resMenu?.cards[2]?.card?.card?.info

    return (

        <div className="menu">
            <h1>{name}</h1>
        </div>
    )
}
export default RestaurantMenu;