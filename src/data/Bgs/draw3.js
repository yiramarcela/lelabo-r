import {math} from 'canvas-sketch-util/math';
import {random} from 'canvas-sketch-util/random';
import { degToRad, randomRange, startFrame} from './auxFunc';

// import drawSquares from '';
//funcion random
// 
export const draw3 = function(){

			const colorcitos = ['#FCDC34', '#FC316A', '#FC9E2D'];
			let index=Math.floor(Math.random() * colorcitos.length)
			const canvas1 = document.getElementById('glCanvas');
			const context = canvas1.getContext('2d');

			// definiciones
			let x = canvas1.width * 0.;
				let y= canvas1.height * 0.05;
				let w = canvas1.width * 8;
				let h = canvas1.height * 4;
				let time = 10;
				let num = Math.ceil(Math.random() * 20) + 20;

				// context.translate(x,y);

				//dibujo
				let dibujo = ()=>{
					const slice = degToRad(360 / num);

					time=(time)+0.01;

					let lfo = Math.sin(time);

					startFrame();

					context.save();
					context.translate(x,y);
					for(let i = 0; i<num; i++){
						let angle = slice * i;
						context.clearRect(x*2, w*2, canvas1.width, canvas1.height);
						// context.clearRect( (-w * 0.5) , (-h/2 *0.5) , w/2, h/2);

						context.lineWidth = 1;
						context.strokeStyle = '#9999';
						context.fillStyle = '#2222'
						context.rotate(degToRad(1)*(time*2));
						context.beginPath();
						context.rect(  (0.1) , (-h/3 * 0.5+lfo) , w/(5 - (lfo*2)), h/8);
						context.stroke(); 
						context.fill();
					}
					context.restore();

				}
				
				// for(let i = 0; i < num; i++){
					setInterval(dibujo,20);
				// }

				// dibujo()
}
			




