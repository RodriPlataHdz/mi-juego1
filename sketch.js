var juego_background;
var brocoli;
var burrito;
var MH1;
var MH2;
var MH3;
var MH4;
var coca;
var fit;
var burger;
var manzana;
var platano;
var cocaImg;
var fitImg;
var burgerImg;
var manzanaImg;
var platanoImg;
var brocoliImg;
var burritoImg;
var MH;
var vida_fit = 250;
var vida_MH = 1000;
var alimentos_fit = 500;

function preload(){
  juego_background = loadImage("sprites/cocina.png");
  brocoliImg = loadImage("sprites/brocoli.png");
  burritoImg = loadImage("sprites/burrito.png");
  MH1 = loadImage("sprites/chica1.png");
  MH2 = loadImage("sprites/chica2.png");
  MH3 = loadImage("sprites/chica3.png");
  MH4 = loadImage("sprites/chica4.png");
  cocaImg = loadImage("sprites/coca.png");
  fitImg = loadImage("sprites/fit.png");
  burgerImg =loadImage("sprites/hamburguesa.png");
  manzanaImg = loadImage("sprites/manzana.png");
  platanoImg = loadImage("sprites/platano.png");
}

function setup() {
  createCanvas(1200,1500);
 
  fit = createSprite(600,1350);
  fit.addImage(fitImg);
  fit.scale = 5;

  MH = createSprite(600,200);
  MH.addImage(MH4);
  MH.scale = 2;
}

function draw() {
  background(juego_background);  
  drawSprites();
}