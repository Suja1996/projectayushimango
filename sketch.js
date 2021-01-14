
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var ball1,rope1;
var ball2,rope2
var ball3,rope3
var ball4,rope4
var ball5,rope5,gr

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ball1= new ball(400,500)
rope1 = new rope(ball1.body,{x:400, y:250})
ball2=new ball(440,500)
rope2=new rope(ball2.body,{x:440,y:250})
ball3 = new ball(360,500)
rope3= new rope(ball3.body,{x:360,y:250})
ball4=new ball(320,500)
rope4 = new rope(ball4.body,{x:320,y:250})
ball5= new ball(480,500)
rope5=new rope(ball5.body,{x:480,y:250})
gr=new Ground(400,250,200,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
 ball5.display();
 rope5.display();
 gr.display();

  drawSprites();
 
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }
}

function mouseDragged(){
    
    Matter.Body.setPosition(ball5.body, {x: mouseX , y: mouseY});
}

