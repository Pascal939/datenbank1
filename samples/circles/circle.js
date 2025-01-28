class Circle {
	constructor( x,y ) {
		this.x = x 
		this.y = y
		
		this.r = 30
		this.color = `rgba(${parseInt(Math.random() *255)},${parseInt(Math.random() *255)},${parseInt(Math.random() *255)}, 0.5)`
	}
}

let arrayOfCircles = []

window.onload = () =>{
	const canvas = document.createElement("canvas")
	
	canvas.id = "canvas"
	canvas.width = 1000
	canvas.height = 1000
	canvas.style.backgroundColor = "#666666"
	
	document.body.appendChild( canvas )
	document.body.onmousedown = onMouseClick
	
}


function onMouseClick(evt) {
	
	
	arrayOfCircles.push( new Circle( evt.offsetX, evt.offsetY))
	
	if(arrayOfCircles.length != 0 && arrayOfCircles.length % 3 == 2) {
		
		let p  = arrayOfCircles.length
		let delta_x = arrayOfCircles[p - 1].x - arrayOfCircles[p - 2].x
		let delta_y = arrayOfCircles[p - 1].y - arrayOfCircles[p - 2].y
		
		arrayOfCircles.push( new Circle( arrayOfCircles[p - 1].x + delta_x, arrayOfCircles[p - 1].y + delta_y))
	}
	
	drawCircles()
}

function drawCircles() {
	const canvas = document.getElementById("canvas")
	const ctx = canvas.getContext("2d")
	
	ctx.clearRect(0,0,canvas.width, canvas.height )
	
	arrayOfCircles.forEach( circle => {
		ctx.beginPath()
		ctx.fillStyle = circle.color
		ctx.moveTo( circle.x, circle.y )
		ctx.arc( circle.x, circle.y , circle.r , 0 , 2*Math.PI)
		ctx.fill()
	})
	
	
}