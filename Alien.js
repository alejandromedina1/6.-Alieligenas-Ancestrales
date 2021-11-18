class Alien {
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;
    }
    draw() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, 40, 40);
        imageMode(CORNER);
    }
    move(player){
       this.y++;
    }

    getX() {
        return this.x;
    }
    setX(px) {
        this.x = px;
    }
    getY() {
        return this.y;
    }
    setY(py) {
        this.y = py;
    }
    
}