import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavDark.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {FaAngleDown} from 'react-icons/fa'

function NavDark() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isOpen, setIsOpen] =useState(false)

  return (
    <>
      <nav className="container main-nav nav-Dark-1">
        <div className="logo">
          {" "}
          <div className="d-flex foot-logo">
            <NavLink to='/'>
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/find_jobs/logo-white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669995470971"
              alt=""
              className=""
            />
            </NavLink>
         
          </div>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link menu-dark"
          }
        >
          <ul>
          <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <a href="#drop" className="" onClick={()=>setIsOpen(!isOpen)}>About Us <FaAngleDown/></a>
            </li>
            <div className={isOpen ?"dropdown-display" :"dropdown"}>
            <li>
              <a href="/">About </a>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
           
           <li>
            <a href="https://docs.dework.live/" target='_blank' rel="noreferrer">Whitepaper</a>
           </li>
            </div>
       
            
            <li>
              <NavLink to="/nft-market" >NFT marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/job-portal">Find Job</NavLink>
            </li>
            <li>
              <NavLink to="/academy">Academy</NavLink>
            </li>
            
            <li>
              <a href="#team" className="explore-btn">Explore</a>
            </li>
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#home" className="dark-a" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavDark;
