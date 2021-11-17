class Player {
    constructor(image) {
        this.image = image;
        this.x = 200;
        this.y = 350;
    }
    draw() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 50);
        imageMode(CORNER);
    }
    shoot(){
        
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
}