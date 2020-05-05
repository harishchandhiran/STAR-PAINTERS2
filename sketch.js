//Creates variables.
var x,y;
var gSlider,fVal;
var colours,red1,black1,green1,blue1,yellow1,orange1,pink1,purple1,brown1,white1;

function setup(){
  //Creates the canvas.
  createCanvas(displayWidth-200,displayHeight-270);
  //Gives the background colour as black. 
  background(255);
  
  colours = createButton('COLOURS');
  colours.position(625, 575);

  red1 = createButton('red');
  red1.position(470, 530);

  black1 = createButton('black');
  black1.position(505, 530);

  green1 = createButton('green');
  green1.position(550, 530);

  blue1 = createButton('blue');
  blue1.position(600, 530);

  yellow1 = createButton('yellow');
  yellow1.position(640, 530);

  orange1 = createButton('orange');
  orange1.position(690, 530);

  pink1 = createButton('pink');
  pink1.position(740, 530);

  purple1 = createButton('purple');
  purple1.position(780, 530);

  brown1 = createButton('brown');
  brown1.position(830, 530);

  white1 = createButton('ERASER');
  white1.position(900, 530);

  //Creates the slider.
  //(min,max,initial)
  gSlider = createSlider(1, 15, 4);
  //(x,y)
  gSlider.position(375, 500);
}

function draw(){

  //Gives the value of mouse position for the variables.
  x = mouseX;
  y = mouseY;

  //Gives the value of slider for fval.
  var fVal = gSlider.value();

  white1.mousePressed(()=>{
    stroke("white");
  })  

  red1.mousePressed(()=>{
    stroke("red");
  })  

  black1.mousePressed(()=>{
    stroke("black");
  })  

  green1.mousePressed(()=>{
    stroke("green");
  })  

  blue1.mousePressed(()=>{
    stroke("blue");
  })  

  yellow1.mousePressed(()=>{
    stroke("yellow");
  })  

  orange1.mousePressed(()=>{
    stroke("orange");
  })  

  pink1.mousePressed(()=>{
    stroke("pink");
  })  

  purple1.mousePressed(()=>{
    stroke("purple");
  })  

  brown1.mousePressed(()=>{
    stroke("brown");
  })  

  //Draws lines.
  if(mouseIsPressed && mouseY<400){
    //stroke(0);
    strokeWeight(fVal);
    line(x,y,pmouseX,pmouseY);
  }

  //Draws the red line
  for (var i = 0; i < 1166; i=i+20) {
    stroke("black");
    strokeWeight(2);
    line(i,400,i+5,400);
  }
}