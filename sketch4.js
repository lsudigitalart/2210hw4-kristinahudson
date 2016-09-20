//Kristin Hudson Homework 4

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

var x = 100;
var y = 200;
var d = 50;
var x2 = 100;
var y2 = 200;
var d2 = 50;
var ex = 30;
var ey = 30;
var ed = 30;
var speed = 4;
var score = 0;
var doonce = 1;
var greystate = 1;
var score = 0


function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  background(255);
  noStroke();
  textSize(32);
   text(score, width/2, 32);

  fill(253, 102, 0);
  ellipse(x, y, d);

  fill(0, 120, 255);
  ellipse(x2, y2, d2);
// if(mouseWasPressed == 1) {

// }

  fill(200);
  ellipse(ex, ey, ed);

//Moves grey ball arouns

    if(keyIsPressed) {
      if(key == "w"){
        ey -= speed
        println("forward");
        }
      if(key == "a"){
        ex -= speed
        println("left");
        }
      if(key == "d"){
        ex += speed
        println("right");
        }
      if(key == "s"){
        ey += speed
        println("back");
        }
   }

//Moves blue and orange balls around

  if(mouseIsPressed) {
    if(mouseButton == LEFT) {
      x = mouseX;
      y = mouseY;
    }
    if(mouseButton == RIGHT) {
      x2 = mouseX;
      y2 = mouseY;
    }


  }

  //Makes grey ball go from blue to orange

  if(ex + 15 > x2 && ex < x2 + d + 15 && ey < y2 + d + 15 && ey + 15 > y2) {
    fill(255);
    ex = x
    ey = y
    score++;
  }

}
