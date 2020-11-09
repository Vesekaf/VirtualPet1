//Create variables here
var dog, happyDog, database, Food, foodS,  foodStock;
var dogImg1, dogImg2
var x;
var database;
var canvas;

function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png");  
  dogImg2 = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  dog = createSprite(250, 250);
  dog.addImage(dogImg1);
  dog.scale = 0.25;
  

  //foodStock = database.ref('Food');
  //foodStock.on("value", readStock);

  
}


function draw() {  
  background(46, 139, 87);

  
  

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);

    dog.addImage(dogImg2);

  }
  if(keyWentUp(UP_ARROW)){

    dog.addImage(dogImg1);


  }



  drawSprites();
  //add styles here
  
  fill("white");
  textSize(15);
  text("Food:    " + foodS, 250, 50);

}

function readStock(data){
  
  foodS = data.val();
  

}

function writeStock(x){
  
  database.ref('/').update({
    
    Food: x - 1
    


  })
  
}


