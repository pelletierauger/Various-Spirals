var angle = 0;
var angleTrig = 0;
var speed = 0.05 / 360 * Math.PI * 2;
var s = 2;
var currentScale = 1;
var looping = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  fill(255, 255, 0);
  noStroke();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(currentScale, currentScale);
  var hyp = 0.2;
  push();
  rotate(angle);
  for (var wi = 0; wi < 1000; wi++) {
    fill(255, 0, 0);
    ellipse(0, 0, s * 2, s * 2);
    translate(hyp + (wi / 50), 0);
    rotate(angle);
  }
  pop();
  angle -= speed;
  
  var x = 0;
  var y = 0;
  for (var j = 0; j < 1000; j++) {
    fill(255, 255, 0);
    ellipse(x, y, s, s);
    x += cos(angleTrig + angleTrig * j) * (hyp + (j / 50));
    y += sin(angleTrig + angleTrig * j) * (hyp + (j / 50));
    
  }
  angleTrig -= speed;
  // stroke(255);
  textSize(20/currentScale);
  text("angleTrig : " + angleTrig, -width/2.2/currentScale, height/2.2/currentScale);
  // noStroke();
}

function keyPressed() {
  if (keyCode === 32) {
    if (looping) {
      noLoop();
      looping = false;
    } else {
      loop();
      looping = true;
    }
  }
}