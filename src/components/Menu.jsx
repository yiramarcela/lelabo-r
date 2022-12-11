/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MENU } from "../data/menu";
import "../styles/lelabo.css";
import "../styles/sections.css";

export const Menu = ({
  toggleMenu,
  isOpenMenu,
  baseArticles,
  setFormationRouteId }) => {
  const [menu, setMenu] = useState(MENU);

  const setMenuByArticles = () => {
    setFormationMenu();
  }

  const setFormationMenu = () => {

  }

  useEffect(() => {
    if (baseArticles.length === 0) return;
    setMenuByArticles()
  }, [baseArticles]);


  // isOpenMenu=false;
  return (
    isOpenMenu && (
      <div className="menu" id="menu">
        <ul>
          {MENU.map((item) => {
            return (
              <li key={item.title} className="listItem" id="btnALaUne">
                {item.submenu ? (
                  <Link
                    to="/submenu"
                    className="btnlistItem"
                    onClick={() => {
                      toggleMenu();
                      localStorage.setItem("titleLocation", item.title)
                      localStorage.setItem(
                        "submenu",
                        JSON.stringify(item.submenu)
                      );
                    }}
                  >
                    <h1>{item.title}</h1>
                  </Link>
                ) : (
                  <Link
                    to={item.path}
                    page={item.title}
                    onClick={() => {
                      toggleMenu();
                      localStorage.setItem("titleLocation", item.title);
                      localStorage.setItem("title", item.title);
                    }}
                  >
                    <h1>{item.title}</h1>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};
