var angle = 0;
var angleTrig = 0;
var speed = 0.05 / 360 * Math.PI * 2  / 10;
var s = 4;
var currentScale = 0.5;
var looping = true;
var m, n;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(24);
    fill(200, 200, 100);
    noStroke();
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    scale(currentScale, currentScale);
    var hyp = 2;
    // push();
    // rotate(angle);
    // for (var wi = 0; wi < 1000; wi++) {
    //   fill(255, 0, 0);
    //   ellipse(0, 0, s * 2, s * 2);
    //   translate(hyp + (wi / 50), 0);
    //   rotate(angle);
    // }
    // pop();
    // angle -= speed;
    // rotate(frameCount / 80);
    m = map((sin(frameCount / 80)), -1, 1, 1.4, 1.396498);
    // n = map(abs(sin(frameCount / 10)), 0, 1, 0, 5);
    var x = 0;
    var y = 0;
    for (var j = 0; j < 3000; j++) {
        var t = angleTrig + angleTrig * j;
        ellipse(x, y, s, s);
        // x += cos(t) * cos(t * 2) * cos(t * 2) * sin(t * m) * (hyp + (j / 50));
        // y += sin(t) * cos(t * 2) * cos(t * 2) * sin(t * m) * (hyp + (j / 50));

        x += cos(t) * pow(cos(t * 2.5), 40) / sin(cos(t * 2.5), 40) * (hyp + (j / 50));
        y += sin(t) * pow(cos(t * 2.5), 40) / sin(cos(t * 2.5), 40) * (hyp + (j / 50));

    }
    angleTrig -= speed;
    // stroke(255);
    // textSize(20 / currentScale);
    // text("angleTrig : " + angleTrig, -width / 2.2 / currentScale, height / 2.2 / currentScale);
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