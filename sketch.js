
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree,treeImg;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(600,height,1200,20);
tree = new Tree(1003,313,353,413);
boy  =new Boy(253,393,277,348);
stone = new Stone(174,299,50,50);
chain= new Chain(stone.body,{x:159, y:310})
mango=new Mango(943,283,27,34);
mango1=new Mango(1013,213,27,34);
mango2= new Mango(1034,260,27,35)
mango3=new Mango(987,238,24,35);
mango4=new Mango(934,209,27,35);
mango5=new Mango(1000,150,27,37);
mango6=new Mango(900,278,27,35)
	Engine.run(engine);
  
}


function draw() {
	background(0);
    rectMode(CENTER);
    background(0);
  
  drawSprites();
 ground.display()
 tree.display()
 boy.display();
 stone.display();
 chain.display();
 mango.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();

detectcollison(stone,mango);
detectcollison(stone,mango1);
detectcollison(stone,mango2);
detectcollison(stone,mango3);
detectcollison(stone,mango4);
detectcollison(stone,mango5);
detectcollison(stone,mango6);




}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:174,y:299})
		boy.attach(stone.body);
	}
}

function detectcollison(lstone,lmango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance>-mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}
}