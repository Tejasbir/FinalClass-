var mainMenu;
var gameState = 0;
var game;
var bg, bgi;
var PlSS, PlSSI;
var ESSG, ESS, ESS2, ESS3, ESS4, ESSI;
var button;
var bulletP, bulletPI;
var bulletE;

function preload() {
bgi = loadImage("Pictures/Space Planet.jpg");
PlSSI = loadImage("Pictures/Alien shooter v.2 main spaceship.png");
bulletPI = loadImage("Pictures/PLSS bullet.png");
ESSI = loadImage("Picture/Alien shooter v.2 enemy spaceship.png");
}



function setup() {
  createCanvas(displayWidth, displayHeight - 111);
  bg = createSprite(600, 530, displayWidth, displayHeight);
  bg.addImage(bgi);
  bg.scale = 3;
  
  //Player Spaceship
  PlSS = createSprite(600, 600, 30, 50) ;
  PlSS.addImage(PlSSI);
  PlSS.scale = 0.5;

  var r = Math.round(random(100,800));
  //Enemy Spaceship(s)
  ESS = new Spaceship(r, 0, 160, 180);
  ESS.depth = bg.depth + 1;
 
  ESS2 = new Spaceship(r + 100, 0, 160, 180);
  ESS2.depth = bg.depth + 1;
  
  ESS3 = new Spaceship(r + 200, 0, 160, 180);
  ESS3.depth = bg.depth + 1;
  
  ESS4 = new Spaceship(r + 300, 0, 160, 180);
  ESS4.depth = bg.depth + 1;
 
  button = new Button();

  bulletGroup = new Group();

  ESSG = new Group();


}

function draw() {
  background(0,0,0);

  PlSS.x = mouseX;
  PlSS.y = mouseY;
  drawSprites();
  if (keyDown("SPACE")){
    createBullets();

  }

if (bulletGroup.isTouching(ESS)){
  for(var i = 0; i < ESSG.lenght; i ++){
    if(bulletGroup.isTouching(ESSG[i])){
      ESSG[i].destroy()
    }
  }
}
  

  button.display();
  ESS.display();
  ESS2.display();
  ESS3.display();
  ESS4.display();
}
function createBullets(){
  bullet = createSprite(PLSS.x, PLSS.y - 10, 10, 100);
  bullet.velocityY = -30;
  bulletGroup.add(bullet);
  bullet.addImage(bulletPI);
  bullet.lifetime = 200;
}
function enemy(){
  ESS = createSprite(random(100,800), 0, 160, 180);
  ESS.addImage(ESSI);
  ESSG.add(ESS)
  ESS.lifetime = 200;
  
  
}
