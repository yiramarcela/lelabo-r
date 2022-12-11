import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/lelabo.css";
import { Canvas } from "./Canvas";

const colorcitos = ['#FCDC34', '#FC316A', '#FC9E2D'];
let index=Math.floor(Math.random() * colorcitos.length)
let colorDeFondo = colorcitos[index];

// let bg = document.getElementById('bg');

// bg.style.background-color = colorDeFondo;

export const Bg = () => {


  return (
    <>     
    <Canvas/>
    <div className='Bg' id='Bg' style={{backgroundColor:` ${colorDeFondo}`}}></div>
    </>
  );
};
