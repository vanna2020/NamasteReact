import { LOGO_URL } from "../utils/constant";
import React ,{ useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

const [filterButton, setFilterButton] = useState("login")

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
            <li>Cart</li>
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