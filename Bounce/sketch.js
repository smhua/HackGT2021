let x;
let y;

let vx;
let vy;
function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 300;
  vx = 7;
  vy = 7;
}

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