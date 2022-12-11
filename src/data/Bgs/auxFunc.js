import {math} from 'canvas-sketch-util/math';
import {random} from 'canvas-sketch-util/random';

// import drawSquares from '';
//funcion random
// 
const degToRad = (deg)=>{
	return deg / 180 * Math.PI;
};

const randomRange = (min, max)=>{
	return Math.random() * (max-min) + min;
}


let startFrame=()=>{
	const canvas1 = document.getElementById('glCanvas');
	const context = canvas1.getContext('2d');
	context.save();
	context.clearRect(0, 0, canvas1.width, canvas1.height);
	context.restore();
}

// let animate= function(){
// 	requestAnimationFrame(animate);
// }

export { degToRad, randomRange, startFrame}
			




