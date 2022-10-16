
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  bg_img  = loadImage("bg.webp")
  helicopter_img = loadImage("heli.png")
  human_img = loadImage("human.png")
  boat_img = loadImage("boat.png")
  packet_img = loadImage("packet.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }
  helicopter = Bodies.rectangle(1400,75,100,100,options)
  World.add(world, helicopter)

  var options = {
    isStatic:true
  }

  human = Bodies.rectangle(250,550,200,200,options)
  World.add(world, human)

  var options = {
    isStatic:true
  }
  boat = Bodies.rectangle(700,600,175,175,options)
  World.add(world, boat)

  
}


function draw() 
{
  background(bg_img);
  Engine.update(engine);
  
  
  push()
  imageMode(CENTER)
  image(helicopter_img,helicopter.position.x,helicopter.position.y,100,100)
  pop()

  push()
  imageMode(CENTER)
  image(human_img,human.position.x,human.position.y,150,150)
  pop()

 
  
  push()
  imageMode(CENTER)
  image(boat_img,boat.position.x,boat.position.y,175,175)
  pop()

 
  

  if(keyIsDown(LEFT_ARROW)){
    helicopter.position.x -=1
  }

  if(keyIsDown(RIGHT_ARROW)){
    helicopter.position.x +=1
  }

  if(keyIsDown(UP_ARROW)){
    helicopter.position.y -=1
  }

  if(keyIsDown(DOWN_ARROW)){
    helicopter.position.y +=1
  }
  
  if(keyCode === 32){

    var options = {
      isStatic:true
    }
    packet = Bodies.rectangle(human.position.x,human.position.y,50,50)
    World.add(world, packet)

    push()
    imageMode(CENTER)
    image(packet_img,human.position.x,human.position.y,50,50)
    pop()

    
  }
}


