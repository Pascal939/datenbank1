class Circle {
	constructor( x,y ) {
		this.x = x 
		this.y = y
		
		this.r = 30
		this.color = `rgba(${parseInt(Math.random() *255)},${parseInt(Math.random() *255)},${parseInt(Math.random() *255)}, 0.5)`
	}
}

let x_value = parseInt(Math.random() * 50)
let y_value = 10

let circle = null 



window.onload = () =>{
	const canvas = document.createElement("canvas")
	
	canvas.id = "canvas"
	canvas.width = 1000
	canvas.height = 1000
	canvas.style.backgroundColor = "#666666"
	
	document.body.appendChild( canvas )
	
	circle = new Circle( canvas.width / 2, canvas.height / 2 )
	
	setInterval( moveEvent, 20 )
}


function moveEvent() {
	
	
	
		
		
		
		let newX =  circle.x + x_value
		let newY =  circle.y + y_value
		
		
		// Linke Seite
		if( newX <= 0 ) {
			newX = -newX
			x_value = Math.abs(x_value)
		}
		
		// Rechte Seite
		if( newX >= canvas.width ) {
			newX = 2 * canvas.width - newX
			x_value = -Math.abs(x_value)
		}
		
		// Oben
		if( newY <= 0 ) {
			newY = -newY
			y_value = Math.abs(y_value)
		}
		
		//Unten
		if( newY >= canvas.height ) {
			newY = 2 * canvas.height - newY
			y_value = -Math.abs(y_value)
		}
		
		circle.x = newX;
		circle.y = newY;
		
		
		

	
	drawCircles()
}

function drawCircles() {
	const canvas = document.getElementById("canvas")
	const ctx = canvas.getContext("2d")
	
	ctx.clearRect(0,0,canvas.width, canvas.height )
	
	
	
		ctx.beginPath()
		ctx.fillStyle = circle.color
		ctx.moveTo( circle.x, circle.y )
		ctx.arc( circle.x, circle.y , circle.r , 0 , 2*Math.PI)
		ctx.fill()
	

	
}