//creating variables
var bullet;
var wall;
var speed;
var weight;
var thickness;
var bulletWeight;
var bulletSpeed;

function setup() {
  //creating canvas
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

    //creating a rectangular sprite which represents a car
    car = createSprite(50,200,50,50);
    car.shapeColor = color(225);

  //adding random values to speed, weight and thickness
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  
  //creating a wall sprite
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapecolor = color(80,80,80);

  //adding velocity to car
  car.velocity.x  = speed


}

function draw() {
  background(255,255,255);
  if(wall.x - car.x <(car.width + wall.width)/2);{
  }  

//deformation formula
var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed / 
(ThicknessOfWall * ThicknessOfWall * ThicknessOfWall)

if(damage > 10){
  car.shapeColor = color(0,255,0);
bulletWeight = 32;
bulletSpeed = 223;
wallThickness = 40;
}

if(damage < 10){
  car.shapeColor = color(255,0,0);
  bulletWeight = 32;
  bulletSpeed = 223;
  wallThickness = 70;
}
  drawSprites();
}

