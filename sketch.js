
var ground;
var obstacle, obstacle1;
var player;
var backgroundImg;

function preload(){
 backgroundImg = loadImage("image/bg.jpg");
}

function setup(){
  createCanvas(1350, 650);

  background1 = createSprite(690, 325);
  background1.addImage("background1", backgroundImg);
  background1.scale = 3.4;

  
  //player = new Player(300, 500, 20, 70);
  
}

function draw(){
  background(255);

    
    createObstacle();
     drawSprites();
}

function createObstacle(){
  if(frameCount%60===0){
    obstacle  = createSprite(300, -10, 500, 20);
    obstacle.velocityY = 3;
    obstacle.shapeColor=color(244, 226, 101);
    obstacle.x = Math.round(random(100, 1200));
    obstacle.lifetime= 225;
    
  }
}


function fruits() {
  if(World.frameCount%80===0) {
    rand =  Math.round(random(1,4));
    if(rand===1) {
      fruit.addImage(fruit1);
    }
    else if(rand===2) {
      fruit.addImage(fruit2);
    }
    else if(rand===3) {
      fruit.addImage(fruit3);
    }
    else if(rand===4) {
      fruit.addImage(fruit4);
    }
    fruit.y = Math.round(random(50,340));
  
    position =  Math.round(random(1,2));

    
    if(position==1)
    {
      fruit.x = 600;
      fruit.velocityX = -(7+(score/4));
    }
    else
    {
      if(position==2) {
        fruit.x = 0;
    fruit.velocityX = (7+(score/4));
      
    
    fruit.setLifetime = 100;
      }
    }
    fruitGroup.add(fruit);
    
}
}