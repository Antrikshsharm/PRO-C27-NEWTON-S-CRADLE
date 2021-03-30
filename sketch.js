
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject
var rope1,rope2,rope3,rope4,rope5;
var world;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;

	roofObject=NEW roof(800,height/4,width/7,20);

	bobDiameter=40;

    startBobPositionX=width/2;
	startBobPositionY=height/4+500;
    bobObject1=new bob(startBobPositionX=bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX=bobDiameter,startBobPositionY,bobDiameter);
	bobObject1=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject1=new bob(startBobPositionX=bobDiameter,startBobPositionY,bobDiameter);
	bobObject1=new bob(startBobPositionX=bobDiameter*2,startBobPositionY,bobDiameter);

	
	var render = Render,create({
		element:document.body,
		engine: engine,
		option:{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});
rope1=new rope(bobObject1.body,roofObject.body,roofObject.body,-bobDiameter*2, 0)
rope2=new rope(bobObject2.body,roofObject.body,roofObject.body,-bobDiameter*1, 0)
rope3=new rope(bobObject3.body,roofObject.body,roofObject.body,0, 0)
rope4=new rope(bobObject4.body,roofObject.body,roofObject.body,-bobDiameter*1, 0)
rope5=new rope(bobObject5.body,roofObject.body,roofObject.body,-bobDiameter*2, 0)

Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(230);
  
  text (mouseX+","+mouseY,mouseX,mouseY)
  roofObject.display();

  roof1.display()
  roof2.display()
  roof3.display()
  roof4.display()
  roof5.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()



  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}



