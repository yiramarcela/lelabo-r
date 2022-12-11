
import {math} from 'canvas-sketch-util/math';
import {random} from 'canvas-sketch-util/random';
import { degToRad, randomRange, startFrame} from './Bgs/auxFunc';
import {drawSquares} from './Bgs/drawSquares';
import {draw2} from './Bgs/draw2';
import {draw3} from './Bgs/draw3';
import {draw4} from './Bgs/draw4';
import {draw5} from './Bgs/draw5';
import {draw6} from './Bgs/draw6';
import {draw7} from './Bgs/draw7';
import {dibujaMoebiusO} from './Bgs/drawMoebiusO';
import {dibujaLetraO} from './Bgs/drawLetraO';
import {dibujaCaracol} from './Bgs/drawCaracol';
import {dots} from './Bgs/dots';

// import drawSquares from '';
//funcion random
// 
export const canvasInfo= ()=>{

			const colorcitos = ['#FCDC34', '#FC316A', '#FC9E2D'];
			let index=Math.floor(Math.random() * colorcitos.length)

			let time = 0;

			const canvas1 = document.getElementById('glCanvas');

			const context = canvas1.getContext('2d');
				
			canvas1.width  = window.innerWidth;
			canvas1.height = window.innerHeight;

			let w = canvas1.width;
			let h = canvas1.height;


// implementar la funcion dinamica de 




// implementar la funcion dinamica de 
///esta parte se queda, aca se va  aestablecer la funcion que va a randomizar el fondo y otras cositas.
const bg=[
			dots,
			// drawSquares,
			draw2,
			draw3,
			// draw4,
			draw5,
			draw6,
			// dibujaLetraO,
			dibujaMoebiusO,
			// dibujaCaracol,
			// draw7
  ]

const bgIndex = Math.floor(randomRange(0, bg.length));

// console.log(index)
	

//dev version
let choice = bg[bgIndex];

//implemented
// let choice = bg[bgIndex];

choice();

}
















