import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () =>{

    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

 const CartItems = useSelector((store)=> store.cart.item)

return <div className="text-center m-4 p-4">
  <h1 className="font-bold">Cart</h1>
  <button className="font-white bg-black p-4 m-2" onClick={handleClearCart}>Remove Items</button>
  <ItemList items={CartItems}/>
</div>
}
export default Cart;