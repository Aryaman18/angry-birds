 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
var box1;
var box2;
var box3;
var pig1;
var log1;
var ground;


function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,height,2000,20);
  box1 = new Box(700,320,50,50);
  box2 = new Box(920,320,50,50);
  pig1 = new Pig(810,350,50,50);
  log1 = new Log(810,260,300,PI/2);
 
  

}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display1();
  box2.display1();
  pig1.display1();
  log1.display1();
  ground.display2();

  console.log(log1.body.angle);


}