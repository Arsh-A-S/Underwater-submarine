var sea,ship;
var seaImg,RocketImg;
var fish1,fish2,fish3;
var go;

function preload(){
  //uncomment the code to add animation to ship 
  RocketImg = loadAnimation("submarine1.png","submarine2.png","submarine3.png","submarine4.png","submarine5.png","submarine6.png");
  
  seaImg = loadImage("sea.png");
  fish1Img = loadImage("fish1-2.png");
  fish12Img = loadImage("fish1.png");
  fish2Img = loadImage("fish2.png");
  fish22Img = loadImage("fish2-3.png");
  goImg = loadImage("go.jpg");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(350,210);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=2.5;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",RocketImg);
  ship.scale =0.5;

  fish1 = createSprite(405,40,10,10);
  fish1.addImage(fish1Img);
  fish1.velocityX= -5;
  fish1.scale = 0.1199990;

  fish2 = createSprite(5,250,10,10);
  fish2.addImage(fish22Img);
  fish2.velocityX= 5;
  fish2.scale = 0.1199990;
  
  fish3 = createSprite(405,360,10,10);
  fish3.addImage(fish1Img);
  fish3.velocityX= -5;
  fish3.scale = 0.1199990;
  
  go = createSprite (175,2000,10,10);
  go.addImage(goImg);
  go.scale=0.5;
}

function draw() {
  background(0);
  var box1 = createSprite(200,10,500,20);

  var box2= createSprite(200,390,500,20);
  sea.velocityX = -3;
  ship.collide(box1);
  ship.collide(box2);
  box2.visible=false;
  box1.visible=false;

  //uncomment code to reset the background
  if(sea.x < 45){
   sea.x = sea.width/1.000000000000000000000000000001;
  }

  if (keyDown(UP_ARROW)) {
    ship.y-=10;
  }

  if (keyDown(DOWN_ARROW)) {
    ship.y+=10;
  }

  if (fish1.x<0) {
    fish1.addImage(fish12Img);
    fish1.velocityX= 5;
  }

  if (fish1.x>405) {
    fish1.addImage(fish1Img);
    fish1.velocityX= -5;
  }

  if (fish3.x<0) {
    fish3.addImage(fish12Img);
    fish3.velocityX= 5;
  }

  if (fish3.x>405) {
    fish3.addImage(fish1Img);
    fish3.velocityX= -5;
  }

  if (fish2.x<0) {
    fish2.addImage(fish22Img);
    fish2.velocityX= 5;
  }

  if (fish2.x>405) {
    fish2.addImage(fish2Img);
    fish2.velocityX= -5;
  }

  if (ship.collide(fish1) || ship.collide(fish2) || ship.collide(fish3)) {
    ship.destroy;
    go.y = 200;
    fish1.destroy;
    fish2.destroy;
    fish3.destroy;
  }
 
  drawSprites();
}
