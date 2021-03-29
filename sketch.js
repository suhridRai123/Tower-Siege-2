const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var bird;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);   
    
    Sling = new SlingShot(bird.body, {x:200, y:50})
    log = new Log(log.body)
}

function draw(){
    background( 0);

    Engine.update(engine);x
    box1.display();
    box2.display(); 
    ground.display();
    platform.display();
    box3.display();
    box4.display();

    box5.display();

    bird.display();

    Sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    Sling.fly()
}

function keyPressed(){
    if(keyCode === 32){
        Sling.attach(bird.body);
    }
}
