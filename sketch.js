var dataBase;
var playerCount = 0;
var player;
var form, game;
var gameState = 0;  
var angel, devil, battleField,selection;

function preload(){
  angel = loadImage("Images/Aanggeul.png");
  devil = loadImage("Images/ZeDuevil.png");
  battleField = loadImage("Images/Battlefield.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dataBase = firebase.database();
  form = new Form();
}

function draw() {
  background("red")
  form.display()
}