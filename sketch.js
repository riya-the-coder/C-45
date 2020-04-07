var player;
var mind,happy,sad,cry,crazy,angry,excited;
var mind, happy_img, cry_img, crazy_img, angry_img, afraid_img, excited_img;
var life=3;
function preload(){
 //   mind = loadImage("");
    happy_img = loadImage("images/happy.png");
    cry_img = loadImage("images/cry.png");
    crazy_img = loadImage("images/crazy.png");
    angry_img = loadImage("images/angry.png");
    afraid_img = loadImage("images/afraid.png");
    excited_img = loadImage("images/excited.png");
   // player_img=loadImage("images/huntr.png");

}
function setup(){
 canvas=createCanvas(displayWidth-20,displayHeight-30);
 player=createSprite(200,displayHeight-80,50,50);
ObstaclesGroup=createGroup();

   
}
function draw(){
    background(0);
    player.x=World.mouseX;
    
    spawnEmotionsHappy();
    spawnEmotionsCry();
    spawnEmotionsCrazy();
    spawnEmotionsAngry();
    spawnEmotionsExcited();
    spawnObstacles();
    if(ObstaclesGroup.isTouching(player)){
        life--;
        if(life<1&&score<=0){
            gameState=END;
        }
    }
    drawSprites();

}
function spawnEmotionsHappy(){
    if(World.frameCount%180===0){
        happy=createSprite(0,-20,50,50);
        var r=Math.round(random(50,width));
        console.log(r);
        happy.x=r;
        happy.addImage(happy_img);
        happy.scale=0.3;
        happy.velocityY=3;
    }
}
function spawnEmotionsCry(){
    if(World.frameCount%320===0){
        cry=createSprite(0,0,50,50);
        var r=Math.round(random(20,width));
        console.log(r);
        cry.x=r;
        cry.addImage(cry_img);
        cry.scale=0.5;
        cry.velocityY=3;
    }
}
function spawnEmotionsCrazy(){
    if(World.frameCount%280===0){
        crazy=createSprite(0,0,50,50);
        var r=Math.round(random(50,width));
        console.log(r);
        crazy.x=r;
        crazy.addImage(crazy_img);
        crazy.scale=0.4;
        crazy.velocityY=3;
    }
}
function spawnEmotionsAngry(){
    if(World.frameCount%220===0){
        angry=createSprite(0,0,50,50);
        var r=Math.round(random(30,width));
        console.log(r);
        angry.x=r;
        angry.addImage(angry_img);
        angry.scale=0.3;
        angry.velocityY=3;
    }
}
function spawnEmotionsExcited(){
    if(World.frameCount%160===0){
        excited=createSprite(0,0,50,50);
        var r=Math.round(random(30,width));
        console.log(r);
        excited.x=r;
        excited.addImage(excited_img);
        excited.scale=0.3;
        excited.velocityY=3;
    }
}
function spawnEmotionsAfraid(){
    if(World.frameCount%100===0){
        afraid=createSprite(0,0,50,50);
        var r=Math.round(random(90,width));
        console.log(r);
        afraid.x=r;
        afraid.addImage(afraid_img);
        afraid.scale=0.5;
        afraid.velocityY=3;
    }
}
function spawnObstacles(){
    if(World.frameCount%140===0){
 obstacles=createSprite(0,-50,100,20);
 obstacles.x=Math.round(random(50,width-50));
 obstacles.width=Math.round(random(600,1200));
 //obstacles.height=Math.round(random(20,200));
 var p=Math.round(random(0,255));
 var q=Math.round(random(0,255));
 var r=Math.round(random(0,255));

 obstacles.shapeColor=rgb(p,q,r);
 obstacles.velocityY=4;
 obstacles.lifetime=300;
    }
}