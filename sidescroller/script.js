
//Creating animations from sprite sheets
var actionMan;
var bkg;

function preload() {
  var walkAnimation = loadAnimation(
    "./images/hero_walk_1.png",
    "./images/hero_walk_2.png",
    "./images/hero_walk_3.png",
    "./images/hero_walk_4.png",
    "./images/hero_walk_5.png",
    "./images/hero_walk_6.png");

    actionMan = createSprite(0, 0, 85, 85);
    actionMan.addAnimation("walk", walkAnimation);
    //actionMan.addAnimation("stand", standAnimation);
  
    bkg = loadImage('images/background.png');
}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('#container');

  actionMan.position.x = width / 2;
  actionMan.position.y = height - 150;
}

function draw() {
  background(80);
  image(bkg, 0, 0);
  drawSprites();
}

