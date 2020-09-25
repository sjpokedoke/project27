const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5;
var PLAY = 1;
var END = 0;
var gamestate = PLAY;

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200, 50, 300, 30);
	bob1 = new Bob(120,250,40);
	bob2 = new Bob(160,250,40);
	bob3 = new Bob(200,250,40);
	bob4 = new Bob(240,250,40);
	bob5 = new Bob(280,250,40);
	rope1 = new Chain(bob1.body,roof.body, -80, 0);
	rope2 = new Chain(bob2.body,roof.body,-40,0);
	rope3 = new Chain(bob3.body,roof.body,0,0);
	rope4 = new Chain(bob4.body,roof.body,40,0);
	rope5 = new Chain(bob5.body,roof.body,80,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
  if(bob1.body.speed<0.4&&bob2.body.speed<0.4&&bob3.body.speed<0.4&&bob4.body.speed<0.4&&bob5.body.speed<0.4&&bob5.x < 280){
		gamestate = PLAY;
	}
}
function keyPressed(){
	if(keyCode=== UP_ARROW&&gamestate === PLAY){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-40, y:-35})
		gamestate = END;
	}
}