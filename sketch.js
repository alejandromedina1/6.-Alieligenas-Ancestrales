let player;
let alien = [];

function setup() {
  createCanvas(400, 400);
  player = new Player(loadImage('Images/ship.png'));
  for (let i = 0; i < 15; i++) {
    alien.push(new Array (15));
  }
  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 3; column++) {
      alien [row][column]= new Alien(loadImage('Images/alien.png'), 80 * row+ 40 , 60 * column+50);
    }
  }
}

function draw() {
  background(220);
  player.draw();
  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 3; column++) {
    alien[row][column].draw()
    }
  }
}

function keyPressed(){
  if (key === "a" || key === "A") {
    player.setX(player.getX()-40);
  }
  if (key === "d" || key === "D") {
    player.setX(player.getX()+40);
  }
}