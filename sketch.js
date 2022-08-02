var box;
  
  function setup(){
    createCanvas(400, 400);
    box = createSprite(160, 200, 30, 30);
  }

  function draw() {
   background("white");
   
   drawSprites();
    
     if (keyDown("left")){
       box.x = box.x + 4;
     }
  }
  
  
  