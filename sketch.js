var fixedrect, movingrect;

function setup() {
createCanvas(1200,800);

 fixedrect= createSprite(600, 400, 50, 80);
 fixedrect.debug=true;
 fixedrect.shapecolor="green";
 movingrect= createSprite(400, 200, 50, 30);
 movingrect.debug=true;
 movingrect.shapecolor="green";
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 

  if(movingrect.x-fixedrect.x===fixedrect.width/2+movingrect.width/2){
    movingrect.shapecolor="red";
    fixedrect.shapecolor="red";
}
else{
  movingrect.shapecolor="green";
  fixedrect.shapecolor="green";
}
if(movingrect.y-fixedrect.y===fixedrect.height/2+movingrect.height/2){
  movingrect.shapecolor="red";
  fixedrect.shapecolor="red";
}
else{
movingrect.shapecolor="green";
fixedrect.shapecolor="green";
}

  drawSprites();
}