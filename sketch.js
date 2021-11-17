let player;
let alien = [];

function setup() {
  createCanvas(400, 400);
  player = new Player(loadImage('Images/ship.png'));
  for (let i = 0; i < 10; i++) {
    alien.push(new Array (10));
  }
  for (let row = 0; row < 2; row++) {
    for (let column = 0; column < 5; column++) {
      alien [row][column]= new Alien('Images/alien.png', 100 * row , 100 * column);
    }
  }
}

function draw() {
  background(220);
  player.draw();
  for (let row = 0; row < 2; row++) {
    for (let column = 0; column < 5; column++) {
      alien [row][column].draw();
    }
  }
}
