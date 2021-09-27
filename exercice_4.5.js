/*The calcDistance function takes the coordinates of two different points (A and B) in 2D space,
and it return the distance between those two points.
The formula to find the distance between two points is the following : dAB = square root of (x2 - x1)² + (y2 - y1)²
Two mathmatical functions are used : Math.sqrt() and Math.pow()
The result is rounded to 2 decimal places [Math.round(X *100) / 100]
*/


const calcDistance = (x2,x1,y2,y1) => Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

console.log(calcDistance(2,-2,-2,2));

console.log("rounded to 2 decimal places => " + Math.round(calcDistance(2,-2,-2,2) * 1000) / 1000);