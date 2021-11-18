let player;
let aliens = [];
let bullets = [];

function setup() {
  createCanvas(400, 400);
  player = new Player(loadImage('Images/ship.png'));
  for (let i = 0; i < 15; i++) {
    aliens.push(new Array(15));
  }
  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 3; column++) {
      aliens[row][column] = new Alien(loadImage('Images/alien.png'), 80 * row + 40, 60 * column + 50);
    }
  }
}

function draw() {
  background(220);
  player.draw();
  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 3; column++) {
      aliens[row][column].draw();
      aliens[row][column].move(player);
    }
  }
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].draw();
    bullets[i].move();
  }
  for (let i = 0; i < bullets.length; i++) {
    for (let row = 0; row < 5; row++) {
      for (let column = 0; column < 3; column++) {
        if (dist(bullets[i].getX(), bullets[i].getY(), aliens[row][column].getX(), aliens[row][column].getY()) < 20) {
          console.log("kill");
          aliens[row][column].setX(-100);
          aliens[row][column].setY(-200);
        }
      }
    }
  }
}

function keyPressed() {
  if (key === "a" || key === "A") {
    player.setX(player.getX() - 40);
  }
  if (key === "d" || key === "D") {
    player.setX(player.getX() + 40);
  }
  if (key === "m" || key === "M") {
    bullets.push(new Bullet(player.getX(), player.getY()));
  }
}

function mousePressed() {

}