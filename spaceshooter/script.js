
//Creating animations from sprite sheets
var spaceShip;
var astroid;
var bkg;
var collideCount = 0;

function preload() {
  var shipImage = loadImage('images/spaceship.png');
  var shipImageFire = loadImage('images/spaceship-fire.png');

  spaceShip = createSprite(0, 0, 85, 85);
  spaceShip.addImage('rest', shipImage);
  spaceShip.addImage('move', shipImageFire);

}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('#container');

  spaceShip.position.x = width / 2;
  spaceShip.position.y = height / 2;

  spaceShip.changeImage('rest');
}

function draw() {
 background(80);

 if(mouseIsPressed){
   spaceShip.changeImage('move');
 } else {
   spaceShip.changeImage('rest');
 }
 drawSprites();
}

var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {

});