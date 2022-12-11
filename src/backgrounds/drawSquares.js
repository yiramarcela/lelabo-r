let drawSquares = () => {
		
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
				x=  20 + (rWidth+gap) * i;
				y=  20 + (rHeight+gap) * j;
				
				context1.beginPath();
				context1.rect( x, y, rWidth, rHeight);
				context1. stroke();

				if (Math.random() > 0.5){
					context1.beginPath();
					context1.rect(x + 8, y + 8, rWidth-16, rHeight - 16);
					context1.stroke();
				}
			}
		}
};


//funciones para dibujar patrones
export drawSquares();

	
