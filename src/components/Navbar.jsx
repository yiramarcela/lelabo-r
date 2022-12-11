import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "../styles/lelabo.css";

export const Navbar = ({ toggleMenu, isOpenMenu }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (isOpenMenu) {
      setTitle(localStorage.setItem("titleLocation", ""));
    } else {
      setTitle(localStorage.getItem("titleLocation"));
    }
  }, [isOpenMenu]);

  

  return (
    <header>
      <Link to="/">
        <div className="logolabo"> </div>
      </Link>
      <h3 className="sectiontitle">{localStorage.getItem("titleLocation")}</h3>
      {/* <div className="searchItem" >
        <input type="text" name="" id="recherche" placeholder="" />
        <SearchIcon className="icon" fontSize="medium"/>

      </div> */}
      <div
        className={`burger ${isOpenMenu ? "burger--close" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger__patty"></div>
      </div>
    </header>
  );
};
