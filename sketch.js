const Bodies=Matter.Bodies; 
const Engine=Matter.Engine;
const World=Matter.World; 

var house1, house2, house3, house4;
var virus;
var engine;
var world;
var corona, edges;
var object1, object2; 
var p1, p2, p3, p4, p5, p6, p7, p8;

function setup() {
  createCanvas(800,400);
  strokeWeight(7);
  stroke("green");

  house1 = createSprite(100, 0, 200, 200);
  house1.shapeColor = "white"; 

  house2 = createSprite(700, 0, 200, 200);
  house2.shapeColor = "white";

  house3 = createSprite(100, 350, 200, 200);
  house3.shapeColor = "white";

  house4 = createSprite(700, 350, 200, 200);
  house4.shapeColor = "White";

  corona = createSprite(400, 200, 20, 20);
  corona.shapeColor = "red";

  // top left 
  p1 = createSprite(150,50,20,20);
  p1.shapeColor = "green";
  // p1_body = Bodies.rectangle(150,50,20,20);

  p2 = createSprite(120,50,20,20);
  p2.shapeColor = "green";

  // bottom left 
  p3 = createSprite(110,350,20,20);
  p3.shapeColor = "green";

  p4 = createSprite(140,350,20,20);
  p4.shapeColor = "green";

  //top right
  p5 = createSprite(700,75,20,20);
  p5.shapeColor = "green";

  p6 = createSprite(740,75,20,20);
  p6.shapeColor = "green";

  // bottom right
  p7 = createSprite(720, 350 ,20,20);
  p7.shapeColor = "green"; 

  p8 = createSprite(750, 350,20,20);
  p8.shapeColor = "green";

  engine = Engine.create();
  world = engine.world;

 // p1.x = mouseX;
 // p1.y = mouseY;
 p1.velocityY = 1.2;

 if (corona.isTouching(p1)){
  p1.shapeColor = "red";
  console.log ("collision");
 }

if (p1.velocityY === 1 ){
  if (corona.x - p1.x === corona.width/2 + p1.width/2 && p1.x - corona.x === corona.width/2 + p1.width/2 && corona.y - p1.y === corona.height/2 + p1.height/2 && p1.y - corona.y === corona.height/2 + p1.height/2){
    p1.shapeColor = "red";
  }
}
}


function draw() {
  background(0,0,0);  
  corona.velocityX = -5; 
  corona.velocityY = -2; 
  edges = createEdgeSprites();
  corona.bounceOff(edges[3]);
  corona.bounceOff(house4);
  corona.bounceOff(edges[2]);
  corona.bounceOff(house3);
  corona.bounceOff(edges[1]);
  corona.bounceOff(house2);
  corona.bounceOff(edges[0]);
  corona.bounceOff(house1);
 // log.display();
  
  drawSprites();
}


  