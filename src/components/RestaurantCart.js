import { CDN_URL } from "../utils/constant";

const RestaurantCart = ({ resData }) => {
  console.log("resData?.info", resData);
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info;

      return (
        <div className="res-container">
          <div className="cart">
            <img
              className="food-image"
              alt="res-logo"
              src={
                CDN_URL +
                cloudinaryImageId
              }
            ></img>
            <div className="name">{name}</div>
            <div className="name1">{cuisines.toString()}</div>
            <div className="name">{avgRating}starts</div>
            <div className="name">{costForTwo}</div>
          </div>
        </div>
      );
    };

//---------Creating higher Order Component ---------------//

   export const Addinglabel = (RestaurantCart) =>{
      return (props) =>{
        return(
          <div>
            <label>Veg</label>
            <RestaurantCart {...props}/>
          </div>
        )
      }
    }

export default RestaurantCart;