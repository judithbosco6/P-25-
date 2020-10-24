
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var dustbinLeft,dustbinRight,dustbinBottom;
var dustbinObj;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(500,680,1000,20)

	paperObject=new Paper(200,650,20);
	dustbinLeft=new Dustbin(680,620,10,90);
	dustbinRight=new Dustbin(820,620,10,90);
	dustbinBottom=new Dustbin(750,665,120,10);
	dustbinObj=new Dustbin(750,665);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  ground.display();
  dustbinLeft.display();
  dustbinRight.display();
  dustbinBottom.display();
  dustbinObj.display();
  paperObject.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:155});
	}
}



