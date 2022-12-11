import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { canvasInfo } from "../data/canvas.js";
import "../styles/lelabo.css";


export const Canvas = () => {

  // const canvasRef = useRef(canvasInfo.canvas1);
  const canvasRef = useRef(document.getElementById('glCanvas'));
  // console.log(canvasRef);
  // const canvasObj = canvasRef.current;
  // const context1 = canvasObj.getContext('2D');

  useEffect(() => {
    canvasInfo();
  },[canvasInfo.time]);

  // canvasInfo.time

  return (
    <canvas className='Canvas' id='glCanvas' ref={canvasRef}>
    </canvas>
  );
};
