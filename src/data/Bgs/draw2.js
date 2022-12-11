import {math} from 'canvas-sketch-util/math';
import {random} from 'canvas-sketch-util/random';
import { degToRad, randomRange, startFrame} from './auxFunc';

// import drawSquares from '';
//funcion random
// 
export const draw2=function(){

			const colorcitos = ['#FCDC34', '#FC316A', '#FC9E2D'];
			let index=Math.floor(Math.random() * colorcitos.length)
			const canvas1 = document.getElementById('glCanvas');
			const context = canvas1.getContext('2d');
			
			// definiciones
			let x = canvas1.width * 0.5;
			let y= canvas1.height * 0.5;
			let w = canvas1.width * 0.5;
			let h = canvas1.height * 0.5;
			let time = 10;
			let num = Math.ceil(Math.random() * 20) + 20;
				
			canvas1.width  = window.innerWidth;
			canvas1.height = window.innerHeight;

			context.lineWidth = w * 0.003;
			startFrame();
			//squares dimension
			let rWidth = 60;
			let rHeight = 60;
			let gap = 20;

			//frquency for squares drawing
			let freqHor = canvas1.width / 80;
			let freqVert = canvas1.height / 80;

				// context.translate(x,y);

				//dibujo
				let dibujo = ()=>{
					const slice = degToRad(360 / num);

					time=time+0.01;

					let lfo = Math.sin(time);

					startFrame();

					context.save();
					context.translate(x,y);
					for(let i = 0; i<num; i++){
						let angle = slice * i;
						context.clearRect(x*2, w*2, canvas1.width, canvas1.height);
						// context.clearRect( (-w * 0.5) , (-h/2 *0.5) , w/2, h/2);

						context.lineWidth = 1;
						context.fillStyle = '#2229'
						context.rotate(degToRad(1)*(time*2));
						context.beginPath();
						context.rect(  (0.1) , (-h/2 * 0.5+lfo) , w/(5 - (lfo*2)), h/8);
						context.fill();
					}
					context.restore();

				}
				
				
				setInterval(dibujo,20);
}
			




