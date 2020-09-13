//Create variables here
var dog, happyDog, dogImg;
var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
  dog = createSprite(250, 250, 50, 50);
  dog.addImage(dogImg)

  

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() { 
  background(color(46, 139, 87));
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  dog.display();

  drawSprites();
  //add styles here

  text("STOCK", 250, 200);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


