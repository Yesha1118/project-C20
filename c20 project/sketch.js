var canvas,bg;
var together;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/catSitting.png");
    catImg2=loadAnimation("images/catWalking1.png","images/catWalking2.png");
    catImg3= loadAnimation("images/catHappy.png");
    mouseImg1=loadAnimation("images/mouseGift.png");
    mouseImg2= loadAnimation("images/mouseTease1.png","images/mouseTease2.png");
    mouseImg3=loadAnimation("images/mouseHappy.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.15;
    
    cat = createSprite(900, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.25;

    makeCatWalk();

}

function draw() {

    background(bg);

//CHOOSE THE CORRECT IF BLOCK FOR CHECKING COLLISION 

    /*if(cat.y - mouse.x < (cat.height - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }*/

    /*if(cat.x - mouse.y < (cat.width - mouse.y)/2)
    { 
        cat.velocityX= -4;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }*/

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }

    /*if(cat.y - mouse.y < (cat.height - mouse.height)/2)
    { 
        cat.velocityX= 4;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }*/

    drawSprites();
}


function makeCatWalk(){

        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25; 

        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
}
