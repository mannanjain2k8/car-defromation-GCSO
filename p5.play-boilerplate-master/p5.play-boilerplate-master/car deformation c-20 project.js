
var car,wall,speed,weight;


function setup() {
  createCanvas(1600,400);
  
 car = createSprite(50,200,50,50)
 wall = createSprite(1050,200,60,height/2);
 speed = random(50,127);
 weight = random(450,1400);
 car.velocityX = speed
 
}

function draw() {
  background(255,255,255); 
  car.bounceOff(wall) 
  edges = createEdgeSprites();
  car.bounceOff(edges[0]);

  if(wall.x - car.x <(car.width + wall.width)/2){
    car.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation <100){
      car.shapeColor = color(0,255,0);
    }
    
if(deformation<180 && deformation>100){
  car.shapeColor = color(230,230,0);
}

if(deformation>180){
  car.shapeColor = color(255,0,0);
}


  }
  drawSprites();
}