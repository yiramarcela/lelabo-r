import {math} from 'canvas-sketch-util/math';
// import {random} from 'canvas-sketch-util/random';
import { degToRad, randomRange, startFrame} from './auxFunc';
const random =  require('canvas-sketch-util/random');



export const dots = function(){

  const canvas1 = document.getElementById('glCanvas');
	const context = canvas1.getContext('2d');
	// desde aqui
	// definiciones
	const cx = canvas1.width * 0.5;
	const cy= canvas1.height * 0.5;
	// let x;
	// let y;
	let w = canvas1.width;
	let h = canvas1.height;

	let time = 0;
	let num = Math.ceil(Math.random() * 80) + 20;



	const agents = [];

	for(let i = 0; i < num; i++){
		let x = random.range(0,w);
		let y = random.range(0,h);

		agents.push(new Agent(x,y))
	}

	let animation = function(){
			startFrame();
			agents.forEach(agent =>{
				agent.update();
				agent.draw(context);
				agent.bounce(w,h);
			})
	requestAnimationFrame(animation);
	}

	animation()



};


class Vector2{
	constructor(x , y){
		this.x = x;
		this.y = y;
	}
}

class Agent{
		constructor(x, y){
		this.pos = new Vector2(x, y);
		this.vel = new Vector2(random.range(-1,1), random.range(-1,1));
		this.radius = random.range(1.5,6.5);
		}

		update(){
			this.pos.x += this.vel.x;
			this.pos.y += this.vel.y;
		}

		bounce(w,h){
			if(this.pos.x <= 0 || this.pos.x >= w) this.vel.x *= -1;
			if(this.pos.y <= 0 || this.pos.y >= h) this.vel.y *= -1;
		}

		draw(context){

			context.save();
			context.translate(this.pos.x, this.pos.y)
			context.beginPath();
			context.arc( 0, 0, this.radius, 0 , Math.PI *2)
			context.fillStyle = '#222b';
			context.strokeStyle = '#bbb2';

			context.fill();
			context.stroke();
			context.globalCompositeOperation = "lighter";

			context.restore();
		}

	};

