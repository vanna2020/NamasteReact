import { LOGO_URL } from "../utils/constant";
import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {

const [filterButton, setFilterButton] = useState("login")
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext)
const cartItems = useSelector((store)=> store.cart.items)


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= { LOGO_URL }
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              onlineStatus: {onlineStatus? "Online ": "Offline"}
            </li>
            <li>
              <Link to="/grocery">
                Grocery
                </Link>
                </li>
            <li>
              <Link to="/">
                Home
                </Link>
                </li>
            <li>
            <Link to="/about">
              About Us  
            </Link>
            </li>
            <li>
              Contact Us
              </li>
              <Link to="/cart">
            <li className="font-bold px-4">Cart ({cartItems.length})</li>
            </Link>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
          <button className="login"
          onClick={()=>{
            filterButton === "login" ?
            setFilterButton("logout") :
            setFilterButton("login")
          }}
          >
            {filterButton}
            </button>
        </div>
      </div>
    );
  };

  export default Header;