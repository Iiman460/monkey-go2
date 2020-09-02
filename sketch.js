
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground;
var canjump = false;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    
  monkey = createSprite(50,260,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,300,500,15);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  monkey.velocityY = 2
  
  if (monkey.isTouching(ground)){
  canjump = true;
  }
  else {
  canjump = false;
  }
  if (keyDown("space")&&canjump === true){
  
  monkey.y = monkey.y - 100;
  }
  monkey.collide(ground);
  bananas();
  obstacles();
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate());
  text("Survival time: "+score,100,50);
  
}
function bananas(){
if (World.frameCount%80 === 0){
banana = createSprite(350,200,30,30);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.05;
  banana.velocityX = - 20;
  
banana.lifetime = 200;
  
  FoodGroup.add(banana);
}


}

function obstacles(){
if (World.frameCount% 300 === 0){
obstacle = createSprite(300,265,20,20);
 obstacle.addImage("obstacle1",obstacleImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -15;
  obstacle.lifetime = 300;
} 

}



