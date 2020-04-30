var bullet;
var wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(70);
  wall=createSprite(1400,200,thickness,400);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(100,200,50,25);
  bullet.shapeColor=color(255,255,255);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(0,0,0);  
  drawSprites();

  bullet.velocityX=speed;

  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage>10)
    {
      wall.shapeColor=color("red");
    }

    if(damage<10)
    {
      wall.shapeColor=color("green");
    }
  }
}