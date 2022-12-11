import {math} from 'canvas-sketch-util/math';
import {random} from 'canvas-sketch-util/random';
import { degToRad, randomRange, startFrame} from './auxFunc';

// import drawSquares from '';
//funcion random
// 
export const draw5 = function(){

			const colorcitos = ['#FCDC34', '#FC316A', '#FC9E2D'];
			let index=Math.floor(Math.random() * colorcitos.length)
			const canvas1 = document.getElementById('glCanvas');
			const context = canvas1.getContext('2d');

					// definiciones
				const cx = canvas1.width * 0.5;
				const cy= canvas1.height * 0.5;
				let x;
				let y;
				let w = canvas1.width;
				let h = canvas1.height;
				let time = 10;
				let num = Math.ceil(Math.random() * 80) + 80;
				let radius = w * 0.1;

				// context.translate(x,y);

				//dibujo
				let dibujo = ()=>{
					const slice = degToRad(360 / num);

					time=(time)+0.01;

					let lfo = Math.sin(time);


					startFrame();

					for(let i = 0; i<num; i++){
						context.save();
						let angle = slice * i;

							x = cx + radius * Math.tan(angle);
							y = cy + radius * Math.tan(angle);

						context.translate(x,y);
						context.rotate(angle);

						// context.clearRect(x*2, w*2, canvas1.width, canvas1.height);
						// context.clearRect( (-w * 0.5) , (-h/2 *0.5) , w/2, h/2);

						context.lineWidth = 1;
						context.strokeStyle = '#9999';
						context.fillStyle = '#02559211';
						context.rotate(degToRad(slice + time*40 ));
						context.beginPath();
						context.rect(  w * 0.1 , h * 0.1 , w, h);
						context.stroke(); 
						context.fill();
						context.restore();
					}
				// context.rotate(degToRad(slice+time*20))
				}
				
				// for(let i = 0; i < num; i++){
					setInterval(dibujo,20);
				// }
}
			




