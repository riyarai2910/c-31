const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

var world, engine, canvas;
var drops

function setup(){
    canvas = createCanvas(width,height);
    engine = Engine.create();
    world = engine.world;
    
    drop = new drop ()
    
    
}

function draw(){
    
}   

