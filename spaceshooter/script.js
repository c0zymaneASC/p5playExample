
//Creating animations from sprite sheets
var spaceShip;
var astroid;
var bkg;
var collideCount = 0;

function preload() {
  var shipImage = loadImage('images/spaceship.png');
  var shipImageFire = loadImage('images/spaceship-fire.png');

  astroid = createSprite(0, 0, 100, 100);

  spaceShip = createSprite(0, 0, 85, 85);
  spaceShip.addImage('rest', shipImage);
  spaceShip.addImage('move', shipImageFire);

}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('#container');

  astroid.shapeColor = color("red");
  astroid.position.x = width;
  astroid.position.y = height / 2;

  spaceShip.position.x = width / 2;
  spaceShip.position.y = height / 2;

  spaceShip.changeImage('rest');

  spaceShip.maxSpeed = 5;
}

function draw() {
 background(80);
 

 if(mouseIsPressed){
   spaceShip.changeImage('move');
   spaceShip.rotateToDirection = true;
   spaceShip.attractionPoint(1, mouseX, mouseY);
 } else {
   spaceShip.changeImage('rest');
 }

 spaceShip.collide(astroid);
 drawSprites();
}

var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {
  spaceShip.position.x = 50;
  spaceShip.position.y = 50;
  spaceShip.rotation = 0;

});