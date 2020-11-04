const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particle;
var plinko;
var division, divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];

function preload(){}

function setup(){

  var canvas = createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240, height, 480, 10);

  ground2 = new Ground(480, 400, 10, 800);
  
  ground3 = new Ground(240, 1, 480, 10);

  ground4 = new Ground(1, 400, 10, 800);

  division = new Division(240, 800, 480, 10);

  plinko1 = new Plinko(80, 400, 10, 10);
  
  plinko2 = new Plinko(160, 400, 10, 10);

  plinko3 = new Plinko(240, 400, 10, 10);

  plinko4 = new Plinko(320, 400, 10, 10);

  plinko5 = new Plinko(400, 400, 10, 10);

  plinko6 = new Plinko(40, 320, 10, 10);

  plinko7 = new Plinko(120, 320, 10, 10);

  plinko8 = new Plinko(200, 320, 10, 10);

  plinko9 = new Plinko(280, 320, 10, 10);

  plinko10 = new Plinko(360, 320, 10, 10);

  plinko11 = new Plinko(440, 320, 10, 10);

  plinko12 = new Plinko(80, 240, 10, 10);

  plinko13 = new Plinko(160, 240, 10, 10);

  plinko14 = new Plinko(240, 240, 10, 10);

  plinko15 = new Plinko(320, 240, 10, 10);

  plinko16 = new Plinko(400, 240, 10, 10);

  plinko17 = new Plinko(40, 160, 10, 10);

  plinko18 = new Plinko(120, 160, 10, 10);

  plinko19 = new Plinko(200, 160, 10, 10);

  plinko20 = new Plinko(280, 160, 10, 10);
    
  plinko21 = new Plinko(360, 160, 10, 10);

  plinko22 = new Plinko(440, 160, 10, 10);

  for(var k = 0; k <= width; k = k+80){

    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))

  }

  }

function draw(){

  background("black")

  Engine.update(engine);

  if(frameCount % 60 === 0){

    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));

  }

  ground1.display();

  ground2.display();

  ground3.display();

  ground4.display();

  for(var j = 0; j < particles.length; j++){

    particles[j].display();

  }

  plinko1.display();

  plinko2.display();

  plinko3.display();

  plinko4.display();

  plinko5.display();

  plinko6.display();

  plinko7.display();

  plinko8.display();

  plinko9.display();

  plinko10.display();

  plinko11.display();

  plinko12.display();

  plinko13.display();

  plinko14.display();

  plinko15.display();

  plinko16.display();

  plinko17.display();

  plinko18.display();

  plinko19.display();

  plinko20.display();

  plinko21.display();

  plinko22.display();
  
  /*for(var m = 0; m < plinkos.length; m++){

    plinkos[m].display();

  }*/

  for(var k = 0; k < divisions.length; k++){

    divisions[k].display();

  }

  division.display();

}