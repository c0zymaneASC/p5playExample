// https://creative-coding.decontextualize.com/making-games-with-p5-play/
// http://molleindustria.github.io/p5.play/docs/index.html

var actionMan;
var bkg;

function preload() {
  // specify width and height of each frame and number of frames
  var walkAnimation = loadAnimation(
    "./images/hero_walk_1.png",
    "./images/hero_walk_2.png",
    "./images/hero_walk_3.png",
    "./images/hero_walk_4.png",
    "./images/hero_walk_5.png",
    "./images/hero_walk_6.png");

  var standAnimation = loadAnimation(
    "./images/hero_walk_1.png");

  actionMan = createSprite(0, 0, 85, 85);
  actionMan.addAnimation("walk", walkAnimation);
  actionMan.addAnimation("stand", standAnimation);

  bkg = loadImage('images/background.png');
}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('#container');
  actionMan.position.x = width / 2;
  actionMan.position.y = height - 150;
  actionMan.changeAnimation("stand");
}

function draw() {
  background(80);
  image(bkg, 0, 0);
  drawSprites();


  if (mouseX > actionMan.position.x + 10) {
    actionMan.changeAnimation("walk");
    actionMan.setSpeed((mouseX - actionMan.position.x) * 0.2, 0);
    actionMan.mirrorX(1);
  } else if (mouseX < actionMan.position.x - 10) {
    actionMan.changeAnimation("walk");
    actionMan.setSpeed((actionMan.position.x - mouseX) * 0.2, 180);
    actionMan.mirrorX(-1);
  } else {
    actionMan.changeAnimation("stand");
    actionMan.setSpeed(0);
  }

  // if (keyIsDown(RIGHT_ARROW)) {
  //   actionMan.changeAnimation("walk");
  //   actionMan.setSpeed(1, 0);
  //   actionMan.mirrorX(1);
  // } else if (keyIsDown(LEFT_ARROW)) {
  //   actionMan.changeAnimation("walk");
  //   actionMan.setSpeed(1, 180);
  //   actionMan.mirrorX(-1);
  // } else {
  //   actionMan.changeAnimation("stand");
  //   actionMan.setSpeed(0);
  // }
}

