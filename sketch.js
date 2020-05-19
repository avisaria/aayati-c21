var wall, thickness;

var bullet, speed, weight;

var deform;

function setup() {
  createCanvas(1600,400);

 bullet = createSprite(50, 200, 40, 10);
 bullet.shapeColor = (255);

 thickness = random(22, 83);
 
wall = createSprite(1200, 200, thickness, height/2);
wall.shapeColor = rgb(80, 80, 80);
 
 speed = random(223, 321);
  weight = random(30, 52);
}

function draw() {

bullet.velocityX = speed;

if (wall.x -bullet.x < wall.width/2 + bullet.width/2){
  bullet.velocityX = 0;

deform = 0.5 * weight * speed * speed / thickness * thickness * thickness;

if (deform > 180){
  wall.shapeColor = rgb(255, 0, 0);
}

if (deform < 100){
  wall.shapeColor = rgb (0, 255, 0);
}

}
  
  background(0);  
  drawSprites();
  
}