
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1=new Paper(100,650,50);
    dustbin=new Dustbin(600,660);
	ground=new Ground(400,680,800,20);

    keyPressed();
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin.display();
  ground.display(); 
  drawSprites();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35})
}
}