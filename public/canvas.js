

// importing modules
// const math = require('canvas-sketch-util/math');

// import {math} from '/canvas-sketch-util/math';
// import {random} from './canvas-sketch-util/random';

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


			//funciones auxiliares

			const degToRad = (deg)=>{
				return deg / 180 * Math.PI;
			};

			let startFrame=()=>{
				context.save();
				context.clearRect(0, 0, canvas1.width, canvas1.height);
				// context.fillStyle = colorDeFondo;
				// context.fillRect(0, 0, 2600,2600);
				context.restore();
			}
			 
			const randomRange = (min, max)=>{
				return Math.random() * (max-min) + min;
			}


			//squares
			const drawSquares = () => {
						context.lineWidth = w * 0.005;
						startFrame();
						//squares dimension
						let rWidth = 60;
						let rHeight = 60;
						let gap = 20;

						//frquency for squares drawing
						let freqHor = canvas1.width / 80;
						let freqVert = canvas1.height / 80;

						let x,y;

				for(let i = 0; i<freqHor;  i++){
					for (let j=0; j<freqVert;  j++){
						x=  10 + (rWidth+gap) * i;
						y=  65 + (rHeight+gap) * j;
						
						context.beginPath();
						context.rect( x, y, rWidth, rHeight);
						context. stroke();

						if (Math.random() > 0.5){
							context.beginPath();
							context.rect(x + 8, y + 8, rWidth-16, rHeight - 16);
							context.stroke();
						}
					}
				}
			}

			//02 transformaciones

			let draw2 = () => {
				// definiciones
				let x = canvas1.width * 0.5;
				let y= canvas1.height * 0.5;
				let w = canvas1.width * 0.5;
				let h = canvas1.height * 0.5;
				let time = 10;
				let num = Math.ceil(Math.random() * 20) + 20;

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

			const draw3 = () => {
				// definiciones
				// let x = canvas1.width * 0.5;
				// context.lineWidth = w*0.001;
				// context.fillStyle= red;
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

			const draw4 = () => {
				// definiciones
				const cx = canvas1.width * 0.5;
				const cy= canvas1.height * 0.5;
				let x;
				let y;
				let w = canvas1.width/10;
				let h = canvas1.height/10;
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

						context.clearRect(x*2, w*2, canvas1.width, canvas1.height);
						// context.clearRect( (-w * 0.5) , (-h/2 *0.5) , w/2, h/2);

						context.lineWidth = 1;
						context.strokeStyle = '#9999';

						//addRandom here {''#2229', '#2222', etc} 
						context.fillStyle = '#2227'
						// 

						context.rotate(degToRad(slice + time*40 ));
						context.beginPath();
						context.rect(  w * 0.1 , h * 0.1 , w/8, h/12);
						context.stroke(); 
						context.fill();
						context.restore();
					}
				// context.rotate(degToRad(slice+time*20))
				}
				
				// for(let i = 0; i < num; i++){
					setInterval(dibujo,20);
				// }

				// dibujo()

			}

			const draw5 = () => {
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

				// dibujo()
				
			}

			const draw6 = () => {
				// definiciones
				const cx = canvas1.width * 0.5;
				const cy= canvas1.height * 0.5;
				let x;
				let y;
				let w = canvas1.width;
				let h = canvas1.height;
				let time = 10;
				let num = Math.ceil(Math.random() * 80) + 20;
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
						context.fillStyle = '#0f0f0f22';
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

				// dibujo()
				
			}


			const dibujaLetraO = () => {
				// definiciones
				const cx = canvas1.width * 0.5;
				const cy= canvas1.height * 0.5;
				let x;
				let y;
				let w = canvas1.width/2;
				let h = canvas1.height/2;
				let time = 10;
				let num = 360  ;
				// let num = Math.ceil(Math.random() * 180) + 180;
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

							x = cx + radius * Math.cos(-angle);
							y = cy + radius * Math.sin(angle);

						context.translate(x,y);
						context.rotate(angle);

						context.clearRect(x*2, w*2, canvas1.width, canvas1.height);
						// context.clearRect( (-w * 0.5) , (-h/2 *0.5) , w/2, h/2);

						context.lineWidth = 1;
						context.strokeStyle = '#9999';

						//addRandom here {''#2229', '#2222', etc} 
						context.fillStyle = '#2227'
						// 

						context.rotate(degToRad(slice + time*40 ));
						context.beginPath();
						context.rect(  w * 0.1 , h * 0.1 , w/8, h/12);
						context.stroke(); 
						context.fill();
						context.restore();
					}
				// context.rotate(degToRad(slice+time*20))
				}
				
				// for(let i = 0; i < num; i++){
					setInterval(dibujo,20);
				// }

				// dibujo()

			}

			const dibujaMoebiusO = () => {
				// definiciones
				const cx = canvas1.width * 0.5;
				const cy= canvas1.height * 0.5;
				let x;
				let y;
				let w = canvas1.width/2;
				let h = canvas1.height/2;
				let time = 10;
				let num = 360  ;
				// let num = Math.ceil(Math.random() * 180) + 180;
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

							x = cx + radius * Math.cos(-angle);
							y = cy + radius * Math.sin(angle);

						context.translate(x,y);
						context.rotate(-angle);

						context.clearRect(x*2, w*2, canvas1.width, canvas1.height);
						// context.clearRect( (-w * 0.5) , (-h/2 *0.5) , w/2, h/2);

						context.lineWidth = 1;
						context.strokeStyle = '#9999';

						//addRandom here {''#2229', '#2222', etc} 
						context.fillStyle = '#2227'
						// 

						context.rotate(degToRad(slice + time*40 ));
						context.beginPath();
						context.rect(  w * 0.1 , h * 0.1 , w/8, h/12);
						context.stroke(); 
						context.fill();
						context.restore();
					}
				// context.rotate(degToRad(slice+time*20))
				}
				
				// for(let i = 0; i < num; i++){
					setInterval(dibujo,20);
				// }

				// dibujo()

			}

			const draw7 = () => {
				// definiciones
				const cx = canvas1.width * 0.5;
				const cy= canvas1.height * 0.5;
				let x;
				let y;
				let w = canvas1.width/20;
				let h = canvas1.height/20;
				let time = 10;
				let num = 12  ;
				// let num = Math.ceil(Math.random() * 180) + 180;
				let radius = w * 0.03;

				// context.translate(x,y);

				//dibujo
				let dibujo = ()=>{

					const slice = degToRad(360 / num);

					time=(time)+0.01;
					let lfo = Math.sin(time);
					startFrame();


					for(let i = 0; i<num; i++){
						let angle = slice * i;

							x = cx + radius * Math.sin(angle);
							y = cy + radius * Math.cos(angle);
						context.save();

						context.scale(1, 1);
						context.translate(x,y);
						context.rotate(angle);


						// context.clearRect(x*2, w*2, canvas1.width, canvas1.height);
						// context.clearRect(  w * 0.5, h * 0.5 , w, h);
						// context.clearRect( (-w * 0.5) , (-h/2 *0.5) , w/2, h/2);

						context.lineWidth = 1;
						context.strokeStyle = '#9999';

						//addRandom here {''#2229', '#2222', etc} 
						context.fillStyle = '#2229';
						// 

						context.rotate(degToRad(slice + time * 40 ));
						context.beginPath();
						context.rect(  w * 0.5, h * 0.5 ,  w, h);
						context.stroke(); 
						context.fill();
						context.restore();

						context.save();
						context.rotate(-angle);
						context.restore()
					}
				// context.rotate(degToRad(slice+time*20))
				}
				
				// for(let i = 0; i < num; i++){
					setInterval(dibujo,20);
				// }

				// dibujo()

			}
}


//funciones de dibujo de patrones:


	// drawSquares();
	// draw2();
	// draw3();
	// draw4();
	// draw5();
	// draw6();
	// dibujaLetraO();
	// dibujaMoebiusO();
	draw7();


// export trial

// export {
// 	drawSquares,
// 	draw2,
// 	draw3,
// 	draw4,
// 	draw5,
// 	draw6,
// 	dibujaLetraO,
// 	dibujaMoebiusO,
// 	draw7
// }














