var bird,pipe,pipe1,
bronze,diamond,silver,gold,
background,gameover,ground,instruction,
menu,name,ok,neww,ready,scoreboard,score,start

var birdImg,pipeImg,pipe1Img,
bronzeImg,diamondImg,silverImg,goldImg,
backgroundImg,gameoverImg,groundImg,instructionImg,
menuImg,nameImg,okImg,newwImg,readyImg,scoreboardImg,scoreImg,startImg

function preload(){
backgroundImg=loadImage("background.png")
birdImg=loadAnimation("bird3.png","bird 2.jpg","bird.jpg")
groundImg=loadImage("ground.jpg")
}


function setup(){
createCanvas(500,800)

bird = createSprite(200,500,100,50)
bird.addAnimation("birdy",birdImg)
bird.shapeColor = "red"
bird.velocityY =6
bird.scale = 3

pipe = createSprite(300,200,50,100)
pipe.shapeColor = "red"


pipe1 = createSprite(100,100,50,100)
pipe1.shapeColor = "red"

bronze= createSprite(500,200,50,100)
bronze.shapeColor = "red"

silver= createSprite(50,200,50,100)
silver.shapeColor = "red"

gold= createSprite(250,200,50,100)
gold.shapeColor = "red"

diamond= createSprite(500,200,50,100)
diamond.shapeColor = "red"

ground= createSprite(250,800,500,100)
ground.shapeColor = "red"
ground.addImage(groundImg)
ground.scale = 3.3

gameover= createSprite(500,200,50,100)
gameover.shapeColor = "red"

instruction= createSprite(500,200,50,100)
instruction.shapeColor = "red"

menu= createSprite(500,200,50,100)
menu.shapeColor = "red"

ok= createSprite(500,200,50,100)
ok.shapeColor = "red"

neww= createSprite(500,200,50,100)
neww.shapeColor = "red"

ready= createSprite(500,200,50,100)
ready.shapeColor = "red"

scoreboard= createSprite(500,200,50,100)
scoreboard.shapeColor = "red"

score= createSprite(500,200,50,100)
score.shapeColor = "red"

start= createSprite(500,200,50,100)
start.shapeColor = "red"
}


function draw(){
 background(backgroundImg)

 text("x: "+mouseX+"y: "+mouseY,mouseX,mouseY)

bird.collide(ground)

if(keyDown("space")){
    bird.velocityY=-3
}

 drawSprites();
}