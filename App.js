import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?size=626&ext=jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//there are two types you can use props
//resData is the key here
const RestaurantCart = ({ resData }) => {

const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo
} = resData?.data;

  return (
    <div className="res-container">
      <div className="cart">
        {/* <img className ="food-image"  alt="res-logo"  src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600"></img> */}
        {/* {it is the URL where Images are hosted} */}
        <img
          className="food-image"
          alt="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
        <div className="name">{name}</div>
        <div className="name">{cuisines.join(",")}</div>
        <div className="name">{avgRating}starts</div>
        <div className="name">₹{costForTwo / 100}for two</div>
      </div>
    </div>
  );
};

//resObj is js object
const resObj = [
  {
    type: "restaurant",
    data: {
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Arya Nagar",
      areaName: "Swaroop Nagar",
      costForTwo: 25000,
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.2,
    },
  },
  {
    data: {
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo: 35000,
      cuisines: ["Pizzas"],
      avgRating: 3.9,
    },
  },
  {
    data: {
      id: "93895",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId: "1c8517dc925655dfff4d3617bd2191a5",
      costForTwo: 2000,
      cuisines: ["Beverages", "Ice Cream", "Desserts"],
      avgRating: 4.4,
    },
  },
  {
    data: {
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      costForTwo: 25000,
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.2,
    },
  },
  {
    data: {
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId: "1c8517dc925655dfff4d3617bd2191a5",
      costForTwo: 20000,
      cuisines: ["Beverages", "Ice Cream", "Desserts" ],
      avgRating: 4.4,
    },
  },
  {
    data: {
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      costForTwo: 25000,
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.2,
    },
  },
  {
    data: {
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      costForTwo: 25000,
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.2,
    },
  },

  {
    data: {
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      costForTwo: 25000,
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.2,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="serach"></div>
      <div className="res-cart">
        {resObj.map((restaurant,index) => (
          <RestaurantCart key={index} resData={restaurant} />
        ))}
        {/* {this is we are rendering restaraunt list through props} */}
        {/* <RestaurantCart resData={resObj[0]} />
        <RestaurantCart resData={resObj[1]} />
        <RestaurantCart resData={resObj[2]} />
        <RestaurantCart resData={resObj[3]} />
        <RestaurantCart resData={resObj[4]} />
        <RestaurantCart resData={resObj[5]} /> */}
        {/* <RestaurantCart  />  */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div>Links</div>
      <div>Links</div>
      <div>Links</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
