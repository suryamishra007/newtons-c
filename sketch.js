
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1;
var roof;
var rope1;


function setup() {


	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	b1 = new Bob(300,400,50);
	b2 = new Bob(350,400,50);
	b3 = new Bob(400,400,50);
	b4 = new Bob(450,400,50);
	b5 = new Bob(500,400,50);
	

	roof = new Ground(500,100,800,20);

	rope1 = new Rope(b1.body,roof.body,-100,0);
	rope2 = new Rope(b2.body,roof.body,-50,0);
	rope3 = new Rope(b3.body,roof.body,0,0);
	rope4 = new Rope(b4.body,roof.body,50,0);
	rope5 = new Rope(b5.body,roof.body,100,0);
	
	
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
 

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
   
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:-100})
	}
}


