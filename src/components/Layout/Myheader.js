import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../Styles/HeaderStyles.css";
import Mymenu from "../../Pages/Head.js"; // Ensure this is an array of menu items
import mylogo from "../../images/logo-no-background.png"; // Ensure this path is correct

export default class Myheader extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="/" className="logo"> {/* Added href to make the logo link to home */}
          <img className="logo-img" src={mylogo} alt="Logo" />
        </a>
        <nav>
          <div className="nav-div">
            <ul className="nav-links">
              {Mymenu.map((headerMenu) => (
                <li key={headerMenu.id}>
                  <NavLink 
                    to={headerMenu.url} 
                    className={({ isActive }) => isActive ? `${headerMenu.cssClass} active` : headerMenu.cssClass} 
                    id={headerMenu.cssId}
                  >
                    {headerMenu.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
