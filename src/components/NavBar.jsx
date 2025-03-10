import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

import logo from "../assets/chef.png";

import "./NavBar.css";

export default function Navbar({ favorite }) {
  return (
    <div className="navbar_container">
      <div className="nav_logo_container">
        <img className="nav_logo" src={logo} alt="logo" />
        <h1>YUMMY</h1>
      </div>
      <ul className="nav_list">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/recipe">
            Recipe
          </Link>
        </li>
        <li>
          <Link id="link" to="/favorite">
            <Badge badgeContent={favorite.length} showZero>
              Favorite
            </Badge>
          </Link>
        </li>
        <li>
          <Link className="link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
