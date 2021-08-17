var backgroundImage, canvas;
var database

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var game,player,form
var car1,car2,car3,car4,cars
var track, car1_img,car2_img,car3_img,car4_img;

function preload (){

car2_img = loadImage ("/IMG/car2.jpg");
car3_img = loadImage ("/IMG/car3.jpg");
car4_img = loadImage ("/IMG/car4.jpg");
car1_img = loadImage ("/IMG/car1.jpg");
track-img = loadImage ('/IMG/ground.jpg');



}

function setup()  {
canvas = createCanvas(displayWidth - 20,displayHeight- 30);
database = firebase.database();
game = newGame();
game.getState;
game.start();


}



function draw(){

if(playerCount === 4){
game.update(1);
}
    
if (gameState ===1){
clear();
game.play();
}



if (gameState ===2){
    
    game.end();
}

}
















































