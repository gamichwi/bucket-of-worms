let pointsArray = [];

const numberOfPoints = 500;
const startRadius = 30;

const speed = 0.7;

let done = false;

function setup() {
  createCanvas(600, 600);
  background(220);
  
  //noStroke();
  
  createBurst();
}

function draw() {
  if(!done) {
    pointsArray.forEach(point => {
      point.update();
      point.draw();
      if(point.rad < 0) {
        done = true;
      }
    });
  }
}

function mouseReleased() {
  createBurst();
}

function createBurst() {
  background(220);
  done = false;
  points = [];
  
  for(let i = 0; i < numberOfPoints; i ++) {
    //pointsArray.push(new Point(width/2, 600, random(TAU), startRadius));
		//pointsArray.push(new Point(width/2, height/2, random(TAU), startRadius));
		pointsArray.push(new Point(random(1,600), random(1,600), random(TAU), startRadius));
  }
}

class Point {
  constructor(x, y, ang, rad) {
    this.x = x;
    this.y = y;
    this.ang = ang;
    this.rad = rad;
  }
  
  update() {
    this.rad -= 0.5;
    this.ang += random(-PI/6, PI/6);
    
    this.x += cos(this.ang) * this.rad * speed;
    this.y += sin(this.ang) * this.rad * speed;
  }
  
  draw() {
    const startColor = color(255, 0, 255);
    const endColor = color(255, 255, 255);
    
    const col = lerpColor(startColor, endColor, map(this.rad, startRadius, 0, 0, 1));
    fill(col);
    circle(this.x, this.y, this.rad * 2);
  }
}