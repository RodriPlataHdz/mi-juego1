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
var brocoliGroup,burritoGroup,cocaGroup,burgerGroup,manzanaGroup,platanoGroup;

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
  createCanvas(600,800);
 
  fit = createSprite(300,680);
  fit.addImage(fitImg);
  fit.scale = 3;

  MH = createSprite(300,100);
  MH.addImage(MH4);
  MH.scale = 1;
  brocoliGroup = new Group();
  burritoGroup = new Group();
  cocaGroup = new Group();
  burgerGroup = new Group();
  manzanaGroup = new Group();
  platanoGroup = new Group();
  edges = createEdgeSprites();
}

function draw() {
  background(juego_background); 
  if(keyDown("a")){
    fit.x = fit.x -5
  }
  if(keyDown("d")){
    fit.x = fit.x +5
  }
  fit.bounce(edges)

  
  lanzar_burrito();
  lanzar_burger();
 
if(keyDown("s")){
  lanzar_brocoli();
}

  drawSprites();
}

function lanzar_burrito(){
  if (frameCount % 50 === 0){
  burrito = createSprite(300,160);
  burrito.addImage(burritoImg)
  burrito.scale = 0.5;
  burrito.velocityX = Math.round(random(-3,3))
  burrito.velocityY = 3
  burritoGroup.add(burrito)
  burrito.depth = MH.depth;
  MH.depth = MH.depth + 1; 
  
}
}
function lanzar_burger(){
  if (frameCount % 40 === 0){
    burger = createSprite(300,160);
    burger.addImage(burgerImg)
    burger.scale = 0.5;
    burger.velocityX = Math.round(random(-3,3))
    burger.velocityY = 3
  burgerGroup.add(burger)
  burger.depth = MH.depth;
  MH.depth = MH.depth + 1; 
  
}
}

function lanzar_brocoli(){
  
    brocoli = createSprite(300,650);
    brocoli.addImage(brocoliImg)
    brocoli.scale = 0.5;
    brocoli.x = fit.x;
    brocoli.y = fit.y;
    //brocoli.velocityX = Math.round(random(-3,3))
    brocoli.velocityY = -4
    brocoliGroup.add(brocoli)
    brocoli.depth = fit.depth;
  fit.depth = fit.depth + 1; 
  
}
