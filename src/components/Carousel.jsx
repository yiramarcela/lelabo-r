import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import "../styles/lesalon.css";

export const Carousel = ({ images }) => {
  const [currImg, setcurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ backgroundImage: `url(${images[currImg]})` }}
      >
        <div className="center"></div>
        {images.length > 1 && (
          <>
            <button
              className="left"
              onClick={() => currImg > 0 && setcurrImg(currImg - 1)}
            >
              <ArrowBackIosIcon />
            </button>
            <button
              className="right"
              onClick={() =>
                currImg >= images.length - 1
                  ? setcurrImg(0)
                  : setcurrImg(currImg + 1)
              }
            >
              <ArrowForwardIosIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
