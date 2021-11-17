class Alien {
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;
    }
    draw() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 50);
        imageMode(CORNER);
    }
    
}