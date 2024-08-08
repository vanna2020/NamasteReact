import { CDN_URL } from "../utils/constant";

const RestaurantCart = ({ resData }) => {
  console.log("resData?.info",resData);
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info;

    console.log("resData?.info",resData?.info);
    
      return (
        <div className="res-container">
          <div className="cart">
            {/* <img className ="food-image"  alt="res-logo"  src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600"></img> */}
            {/* {it is the URL where Images are hosted} */}
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
            {/* <div className="name">₹{costForTwo / 100}for two</div> */}
          </div>
        </div>
      );
    };

export default RestaurantCart;