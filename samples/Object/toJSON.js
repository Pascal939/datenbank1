class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y
  }
}

class Line {
 constructor(x1,y1, x2, y2) {
    this.pt1 = new Point( x1,y1 )
    this.pt2 = new Point( x2,y2)
 }
}
let line = new Line(10,10,50,50)
let jsonObject = JSON.stringify(line)
line = JSON.parse('{"pt1":{"x":10,"y":10},"pt2":{"x":50,"y":50}}' )
console.log( line instanceof Line)
line = Object.assign( new Line(), JSON.parse(jsonObject ) )
console.log( line instanceof Line)
console.log( line.pt1 instanceof Point )