
//Creating animations from sprite sheets
var spaceShip;
var astroid;
var bkg;
var colideCount = 0;

function preload() {
  //Load Images
  var shipImage = loadImage('images/spaceship.png');
  var shipFireImage = loadImage('images/spaceship-fire.png');
  bkg = loadImage('./images/background.png');

  //Create Ship Sprite
  spaceShip = createSprite(0, 0, 85, 85);
  spaceShip.addImage('ship', shipImage);
  spaceShip.addImage('shipFire', shipFireImage);
  spaceShip.rotateToDirection = true;
  spaceShip.maxSpeed = 10;

  //Create Astriod Sprite
  astroid = createSprite(0, 0, 50, 50);

}

function setup() {
  var canvas = createCanvas(300, 300);
  canvas.parent('#container');


  astroid.shapeColor = color("brown");
  astroid.position.x = width / 2;
  astroid.position.y = height / 2;

  spaceShip.position.x = 50;
  spaceShip.position.y = 50;

  spaceShip.changeImage("ship");

}

function draw() {
  image(bkg, 0, 0);

  if (mouseIsPressed) {
    spaceShip.attractionPoint(0.5, mouseX, mouseY);
    spaceShip.changeImage("shipFire");
  } else {
    spaceShip.changeImage("ship");
    spaceShip.setSpeed(0);
  }

  if (spaceShip.overlap(astroid)) {
    astroid.shapeColor = color(255);
    colideCount++;
    document.getElementById("count").innerHTML = colideCount;
  } else {
    astroid.shapeColor = color("brown");
  }
  drawSprites();
}

resetButton.addEventListener('click', function () {
  colideCount = 0;
  document.getElementById("count").innerHTML = colideCount;
  spaceShip.position.x = 50;
  spaceShip.position.y = 50;
  spaceShip.rotation = 0;
});