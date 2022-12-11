import {math} from 'canvas-sketch-util/math';
import { random } from 'canvas-sketch-util/random';
import { degToRad, randomRange, startFrame} from './auxFunc';

// import drawSquares from '';
//funcion random
// 
export function draw7(){
			const colorcitos = ['#FCDC34', '#FC316A', '#FC9E2D'];
			let index=Math.floor(Math.random() * colorcitos.length)
			const canvas1 = document.getElementById('glCanvas');
			const context = canvas1.getContext('2d');
		// desde aqui
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
				let radius = w * 0.2;

			// necesito crear un array de vectores con valores de x y  de cada elemento,

			let arrayX =[];
			let arrayY=[];

			// luego necesito pasarlos como valores constantes al boceto instanciado en el loop,
			for(let i =0 ; i < num; i++ ){
				arrayX.push(randomRange(0.5,3.5));
				arrayY.push(randomRange(0.1,0.3));
			}
					// y luego agrego un factor de aleatoriedad alrededor de seno de cada valor inicial, 

					// para crear un desplazamiento random controlado.en cada elemento
			


			// let rand = random.createRandom(2);



				// context.translate(x,y);

				console.log(random)

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

//rects
						context.scale(1, 1);

						context.save();

						context.translate(cx,cy);
						context.rotate(angle);
						context.lineWidth = 1;
						// context.strokeStyle = '#222f';
						//addRandom here {''#2229', '#2222', etc} 
						context.fillStyle = '#2229';
						// 

						context.rotate(degToRad(slice ));

						// context.save();
						context.beginPath();
						context.rotate(degToRad(slice + time*10 ));
						context.rect(  w*2,  (arrayX[i]),  w*(arrayX[i]), h*arrayY[i]/2);
						// context.scale(randomRange(w*0.5,w*1.5),1);
						context.stroke(); 
						context.fill();
						context.restore();



						//segundo fgrupo animado

// arcs1
						context.save();
						context.translate(cx,cy);
						context.rotate(-angle);



						context.lineWidth = 20;
						context.beginPath();
						context.rotate(degToRad(slice + time*40 ));
						context.arc(0,0, radius*15+(i*randomRange(-i,i)), slice * -0.3, slice * 0.6);
						context.lineWidth = randomRange(5,20);
						context.strokeStyle = '#2229';
						context.stroke();

						context.restore()

						context.save();
						context.translate(cx,cy);
						context.rotate(-angle);
//arcs2
						context.lineWidth = 20;
						context.beginPath();
						context.rotate(degToRad(slice + time*20 ));
						context.arc(0,0, radius*10+(i*randomRange(-i,i)), slice * -0.3, slice * 0.6);
						context.lineWidth = randomRange(5,20);
						context.strokeStyle = '#2229';
						context.stroke();

						context.restore()

						context.save()
						context.translate(w*0.5,h*0.5);
						context.rotate(degToRad(slice * time*40 ));
						context.restore();
					}
				}
				
				// context.translate(cx,cy);
				// context.rotate(degToRad(1+time*20))
				// for(let i = 0; i < num; i++){
					setInterval(dibujo,40);
					// dibujo();
				// }

}
			




