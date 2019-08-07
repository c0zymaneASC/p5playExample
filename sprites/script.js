// https://creative-coding.decontextualize.com/making-games-with-p5-play/
// http://molleindustria.github.io/p5.play/docs/index.html

var spr1, spr2;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('#container');

  spr1 = createSprite(0, 0, 50, 50);
  spr1.shapeColor = color("cyan");

  spr1.rotateToDirection = true;
  

  spr1.velocity.y = 1;

  spr1.position.x = 0;
  spr1.position.y = 0;
  spr1.maxSpeed = 5;

  spr2 = createSprite(0, 0, 100, 100);
  spr2.shapeColor = color("red");

  spr2.position.x = width / 2;
  spr2.position.y = height / 2;
}

function draw() {
  background(80);
  drawSprites();
  
  if (mouseIsPressed) {
    spr1.attractionPoint(0.5, mouseX, mouseY);
  } else {
    spr1.setSpeed(0);
  }

  spr2.rotation += 1;

  spr1.collide(spr2);
}