const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var dustbin1;
var paper1;
var world;
var dustbin1,dustbin2,dustbin3;
var bin1;


function setup() {
createCanvas(1200, 400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
paper1 = new paper(100,100,30);
dustbin1= new dustbin(1090,240,20,250);
dustbin2= new dustbin(890,240,20,250);   


dustbin3= new dustbin(990,395,190,20);
bin1= new garbage(990,230,190,100);

ground1 = new ground(600,350,1200,20);
	
}

function draw() {

 background(0);
 Engine.update(engine);

 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
bin1.display();

ground1.display();
  drawSprites();
}
 function keyPressed() {
			
if (keyCode === UP_ARROW) {
			
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-80});
		   
 };
}
