import React from "react";
import { Link } from "react-router-dom";
import '../styles/sections.css'

export const Submenu = ({isOpenMenu}) => {
  const submenuitems = JSON.parse(localStorage.getItem("submenu"));
  return !isOpenMenu && (
    <div className="container">
    <ul className='sectionList'>
      {submenuitems.map((item) => {
        return  (
          <li key={item.title} className="sousSection">
            <Link to={item.path} page={item.title} onClick={() =>{localStorage.setItem("title", item.title)}}>
              <h1>{item.title}</h1>
            </Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
};
