class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y
  }
}

class Line {
 constructor(x1,y1, x2, y2) {
	 if(typeof(x1) === 	"string") {
		 let obj = JSON.parse(x1)
		 this.pt1 = Object.assign( new Point(), obj.pt1 )
		 this.pt2 = Object.assign( new Point(), obj.pt2 )
		 return
	 }
    this.pt1 = new Point( x1,y1 )
    this.pt2 = new Point( x2,y2)
 }
}
let line = new Line(10,10,50,50)
let jsonObject = JSON.stringify(line)
line = JSON.parse('{"pt1":{"x":10,"y":10},"pt2":{"x":50,"y":50}}' )
console.log( line instanceof Line)
//line = Object.assign( new Line(), JSON.parse(jsonObject ) )
line = new Line( jsonObject  );
line.pt1 = Object.assign( new Point(), JSON.parse(jsonObject ).pt1 )
line.pt2 = Object.assign( new Point(), JSON.parse(jsonObject ).pt2 )
console.log( line instanceof Line)
console.log( line.pt1 instanceof Point )