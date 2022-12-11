import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom"

import SimpleBar from "simplebar-react";
import { info } from "../data/infoabout";
import "simplebar/dist/simplebar.min.css";
import "../styles/apropos.css";
import useInfoPagesData from "../hooks/useInfoPagesData";

export const Information = ({ isOpenMenu, data, filterData, pageKey }) => {
  const history = useNavigate();
  const pageData = useInfoPagesData(data, filterData, pageKey);

  return (
    !isOpenMenu && (
      <div className="info">
        <button
          className="btn_close"
          onClick={() => {
            history('/submenu');
          }}
        > <CloseIcon />
        </button>

        <h1>{pageData.Name}</h1>
        <SimpleBar className="simpleContainer">
          <p className='articleText'>{pageData.Contenu}</p>
        </SimpleBar>
      </div>
    )
  );
};
