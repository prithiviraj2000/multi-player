var ball;
var database;
var posOfBall;
var position
function setup(){
   
    createCanvas(500,500)
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    posOfBall=database.ref('ball/position'); //x:350, y:350
    posOfBall.on("value", readPosition) //value=x:350, y:350
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){ //data=x:350, y:350
position=data.val() // position.x= 350 ; position.y= 350
ball.x=position.x;
ball.y=position.y;
}
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
