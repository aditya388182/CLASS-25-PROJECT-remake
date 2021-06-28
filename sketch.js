
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbinImg,paperImg;

function preload()
{
  dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,600,10);
ground = new Ground(400,680,800,20);

binls = new Bin(550,620,20,100);
binrs = new Bin(670,620,20,100);
binbs = new Bin(610,660,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");
  Engine.update(engine);

  paper.display();
  ground.display();
  binls.display();
  binrs.display();
  binbs.display();
  imageMode(CENTER);
  image(dustbinImg,610,620,150,120);



  

  



  

  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:11.6,y:-11.6})	
}
if(keyCode === DOWN_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:-11.6,y:11.6})	
  }
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-11.6})	
    }
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:-1,y:11.6})	
      }

}



