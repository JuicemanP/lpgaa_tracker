import { Link } from "react-router-dom";
import React, { useState } from "react";
import BASE_URL from "../baseUrl";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <nav>
          <Link to="/standings">STANDINGS</Link>
          <span>||</span>
          <Link to="/create-player">ADD NEW PLAYER</Link>
          <span>||</span>
          <Link to="/update-player">UPDATE PLAYER</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
