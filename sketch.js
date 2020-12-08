
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(600, 600);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.x = ground.width / 2;
  ground.velocityX = -5;
  
  foodGroup = new Group();
  obstacleGroup = new Group();

}

function draw() {
  background("skyblue");

  text("survival Time =" + survivalTime, 500, 50);
survivalTime = survivalTime + Math.round((frameCount /200));

  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8

  if (ground.x < 200) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);

  //spawn the clouds
  food();

  Obstacles();

  drawSprites();
}

function food() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600, 100, 40, 10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(190,300))
    banana.scale = 0.1;
    banana.velocityX = -3;


    //assigning lifetime to the variable
    banana.lifetime = 200;

    //adjust the depth
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    
    foodGroup.add(banana);
  }
}

function Obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 330, 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    obstacle.lifetime = 120;
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
  }
}
