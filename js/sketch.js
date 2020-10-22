
var z = 550;
var c = 525;
var v = 535;
var b = 585
var eindeloos = false

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {

  background( mouseX, 0, 73, 100, 170);
  
  //SUN
  fill(255, 180);
  ellipse(450, 100, 100, 100);
  fill(255, 10);
  ellipse(450, 100, 120, 120);
  ellipse(450, 100, 140, 140);
  ellipse(450, 100, 160, 160);

  //BUILDINGS
  fill(0, 80);
  rect(0, 290, 100, 200);
  rect(120, 200, 100, 300);
  rect(160, 150, 3, 50);
  rect(410, 350, 200, 300);
  rect(520, 300, 100, 50);



  //WINDOWS FIRST BUILDING
  var lichtEen = color("#FFF4D1");
  var lichtTwee = color (80);
  fill(lichtEen);
  rect(10, 310, 10, 10);
  rect(30, 330, 10, 10);
  rect(10, 330, 10, 10);
  rect(70, 330, 10, 10);
  rect(70, 350, 10, 10);
  fill (lichtTwee)
  rect(10, 410, 10, 10);
  rect(10, 390, 10, 10);
  fill(lichtEen, 70);
  rect(50, 390, 10, 10);

  //WINDOWS BUILDING 2
  fill(lichtEen, 70);
  rect(130, 220, 10, 10);
  rect(170, 220, 10, 10);
  fill (lichtTwee)
  rect(190, 220, 10, 10);
  rect(190, 240, 10, 10);
  fill(lichtEen, 70);
  rect(190, 260, 10, 10);
  rect(170, 260, 10, 10);
  fill (lichtTwee)
  rect(130, 260, 10, 10);
  rect(170, 280, 10, 10);
  fill(lichtEen, 70);
  rect(150, 280, 10, 10);
  rect(190, 300, 10, 10);
  rect(150, 340, 10, 10);
  rect(130, 340, 10, 10);
  fill (lichtTwee)
  rect(130, 360, 10, 10);
  fill(lichtEen, 70);
  rect(170, 360, 10, 10);
  rect(190, 420, 10, 10);
  rect(150, 420, 10, 10);
  fill (lichtTwee)
  rect(190, 400, 10, 10);
  rect(170, 440, 10, 10);
  rect(130, 470, 10, 10);
  rect(150, 470, 10, 10);
  fill(lichtEen, 70);
  rect(190, 470, 10, 10);

  //WINDOWS BUILDING 3
  rect(420, 370, 10, 10);
  rect(440, 370, 10, 10);
  fill(lichtEen, 70);
  rect(480, 370, 10, 10);
  rect(500, 370, 10, 10);
  fill(lichtEen, 70);
  rect(500, 390, 10, 10);
  rect(460, 390, 10, 10);
  rect(460, 410, 10, 10);
  fill (lichtTwee)
  rect(480, 410, 10, 10);
  rect(420, 410, 10, 10);
  fill(lichtEen, 70);
  rect(500, 430, 10, 10);
  rect(480, 430, 10, 10);
  rect(420, 430, 10, 10);
  fill (lichtTwee)
  rect(440, 470, 10, 10);
  rect(420, 470, 10, 10);

  //WINDOWS BUILDING 4
  rect(530, 360, 10, 10);
  rect(550, 340, 10, 10);
  rect(530, 320, 10, 10);
  rect(570, 320, 10, 10);
  rect(550, 320, 10, 10);
  fill(lichtEen);
  rect(590, 380, 10, 10);
  rect(590, 400, 10, 10);
  rect(550, 380, 10, 10);
  fill (lichtTwee)
  rect(530, 380, 10, 10);
  rect(530, 420, 10, 10);
  rect(550, 420, 10, 10);

  //FILL GROUND
  fill(200, 250, 250);
  rect(0, 500, 600, 200);

  //GROUND
  fill(0);
  ellipse(0, 500, 200, 100);
  ellipse(0, 500, 300, 50);
  ellipse(300, 500, 70, 20);
  ellipse(500, 500, 100, 40);
  ellipse(450, 500, 100, 20);
  ellipse(300, 500, 70, 20);
  ellipse(580, 490, 170, 100);

    // AUTO
    fill (0,150,200);
    rect(z, 410, 50, 35);
    fill (60)
    rect (c,420, 25,25)
    fill (0)
    ellipse (v,445,10,10)
    fill (0)
    ellipse (b,445,10,10)



  //BRIDGE
  fill(255, 150);
  rect(0, 428, 600, 2);
  fill(0);
  quad(width / 2 + 500, height / 2 + 150, width / 2 + 576, height / 2 + 170, width / 2 - 586, height / 2 + 170, width / 2 - 560, height / 2 + 150);
  rect(0, 430, 600, 5);
  rect(20, 430, 5, 20);
  rect(40, 430, 5, 20);
  rect(60, 430, 5, 20);
  rect(80, 430, 5, 20);
  rect(100, 430, 5, 20);
  rect(120, 430, 5, 20);
  rect(140, 430, 5, 20);
  rect(160, 430, 5, 20);
  rect(180, 430, 5, 20);
  rect(200, 430, 5, 20);
  rect(220, 430, 5, 20);
  rect(240, 430, 5, 20);
  rect(260, 430, 5, 20);
  rect(280, 430, 5, 20);
  rect(300, 430, 5, 20);
  rect(320, 430, 5, 20);
  rect(340, 430, 5, 20);
  rect(360, 430, 5, 20);
  rect(380, 430, 5, 20);
  rect(400, 430, 5, 20);
  rect(420, 430, 5, 20);
  rect(440, 430, 5, 20);
  rect(460, 430, 5, 20);
  rect(480, 430, 5, 20);
  rect(500, 430, 5, 20);
  rect(520, 430, 5, 20);
  rect(540, 430, 5, 20);
  rect(560, 430, 5, 20);
  rect(580, 430, 5, 20);


  //REFLECTION
  fill(100, 150);
  rect(0, 500, 600, 200);

  z = z + -3;
  c = c + -3;
  v = v + -3;
  b = b + -3;

  if (z < 0, c < 0, v <0, b < 0) {
    print ("rijdend appie busje")
    z = 550;
    c = 525;
    v = 535;
    b = 585
  }

}


// function mousePressed () {
//   print ("dit is mousePressed")
//   lichtTwee = lichtEen
// }

// lichtEen = color("#FFF4D1");
//   var lichtTwee = color (80)


// function mousePressed () {
//   fill (lichtTwee);
// }



// var lichtEen = color("#FFF4D1");
//   var lichtTwee = color (80);