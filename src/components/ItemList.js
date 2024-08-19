import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addCart } from "../utils/cartSlice";

const ItemList = ({items}) =>{
    console.log(items ,"items")

    const dispatch = useDispatch()

    const handleAddItem = (item) =>{
        dispatch(addCart(item))
    }

    return(
        <div>
           {items.map((item)=>(
            <div key={item.card.info.id} className="text-start flex border-black-100 border-b-2 p-1 m-2 rounded-sm">
                <div className="w-10/12 p-2">
                <div className="text-xs font-bold">
                    <div>{item.card.info.name}</div>
                    <div> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100} </div>
                </div>
                <p className="text-xs">
                    {item.card.info.description}
                </p>
            </div>
            <div className="w-2/12 rounded-sm ">
            <button className="bg-black text-white absolute rounded-md m-auto p-1 shadow-lg text-xs z-10"
            onClick={()=>handleAddItem(item)}
            >Add +</button>
            <img src={CDN_URL + item.card.info.imageId}></img>
            </div>
            </div>
           
           ))}
        </div>
    )

}
export default ItemList;