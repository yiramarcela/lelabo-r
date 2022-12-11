import {math} from 'canvas-sketch-util/math';
import {random} from 'canvas-sketch-util/random';
import { degToRad, randomRange, startFrame} from './auxFunc';

// import drawSquares from '';
//funcion random
// 
export const drawSquares = function(){

			const colorcitos = ['#FCDC34', '#FC316A', '#FC9E2D'];
			let index=Math.floor(Math.random() * colorcitos.length)
			let time = 0;
			const canvas1 = document.getElementById('glCanvas');
			const context = canvas1.getContext('2d');
				
			canvas1.width  = window.innerWidth;
			canvas1.height = window.innerHeight;

			let w = canvas1.width;
			let h = canvas1.height;

			context.lineWidth = w * 0.003;
			startFrame();
			//squares dimension
			let rWidth = 60;
			let rHeight = 60;
			let gap = 20;

			//frquency for squares drawing
			let freqHor = canvas1.width / 80;
			let freqVert = canvas1.height / 80;
			let x,y;

			let dibujo = ()=>{
				
				startFrame();

				for(let i = 0; i<freqHor;  i++){
					for (let j=0; j<freqVert;  j++){
						x=  10 + (rWidth+gap) * i;
						y=  65 + (rHeight+gap) * j;
						
						context.beginPath();
						context.rect( x, y, rWidth, rHeight);
						context. stroke();

						let a = Math.random()

						if (a > 0.5){

									// startFrame()
									context.save();
									context.beginPath();
									context.rect(x + 8, y + 8, rWidth-16, rHeight - 16);
									context.lineWidth = w * 0.0055;
									// context.fillStyle = '#2229';
									if(a > 0.75){
										// context.fill();
									}
									context.stroke();
									context.restore();
								
						}
			}


					}

				}
			dibujo()	
			setInterval(dibujo,1600)
}
			




