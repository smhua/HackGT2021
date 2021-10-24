let x = 400;
let y = 300;
let vx = 7;
let vy = 7;
function setup() {


function draw() {
    
  background(0);
  rect(x, y, 80, 60);
  
  x = x + vx;
  y = y + vy;
  
  if (x + 80 >= width || x <= 0) {
    vx = vx * -1;
  }
  if (y + 60 >= height || y <= 0) {
    vy = vy * -1;
  }
}