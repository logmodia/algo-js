class circle {
    constructor(xPos,yPos,radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface(){
        return (this.radius^2) * 3.14;
    }
    move(xOffset,yOffset){
        return "New position : (" + xOffset + "," + yOffset + ")";
    }
}

let newCircle = new circle(5,20,4);

console.log("")
console.log("initial position : (" + newCircle.xPos + "," + newCircle.yPos + ") " + "Radius : " + newCircle.radius);
console.log("")
console.log("The surface = " + newCircle.surface);
console.log("")
console.log(newCircle.move(12,23));
console.log("")
