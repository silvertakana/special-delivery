const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box = [], ground;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    for (let index = 0; index < 50; index++) {
        box[index] = new Box(random(windowWidth),random(windowHeight-50),50+index,50+index,random(250),random(250),random(250),false,0);
    }
    
    ground = new Box(windowWidth/2,700,windowWidth,50,220,220,220,true,90);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    for (let index = 0; index < 50; index++) {
        box[index].display();
    }
   
}