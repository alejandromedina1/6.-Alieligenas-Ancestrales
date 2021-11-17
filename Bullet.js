class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, 3, 3);
    }
    move() {
        this.y -=3 ;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}