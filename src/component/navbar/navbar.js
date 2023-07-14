import React from "react";
import { NavbarStyle } from "../../component/navbar/navbarstyle";
import {useNavigate} from "react-router-dom";


export const Navbar = () => {
  const navigate = useNavigate();

  const handleSwitch = () => {
    navigate("/home");
  };
  return (
    <NavbarStyle>
      <div className="nav">
        <div className="nav-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaaLSM0dkOWaJ1NseGhAMp049j9PlZQe-AA&usqp=CAU"
            alt="nav-logo"
            className="nav-logo"  onClick={handleSwitch}
          />
        </div>
        <div className="nav-center">
          <ul className="navlist">
            <a href="/home">
              <li className="navlistitem">HOME</li>
            </a>

            <a href="/about">
              <li className="navlistitem">ABOUT</li>
            </a>
            <a href="/posts">
               <li className="navlistitem">POSTS</li>
            </a>


           
            <a href="/write">
              {" "}
              <li className="navlistitem">WRITE</li>
            </a>
            <li className="navlistitem">LOGOUT</li>
          </ul>
        </div>
        <div className="nav-right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&usqp=CAU"
            alt="top-img"
            className="top-img"
          />
        </div>
      </div>
    </NavbarStyle>
  );
};
