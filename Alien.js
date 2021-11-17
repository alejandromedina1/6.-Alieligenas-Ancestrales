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
       if ( 400 < this.y) {
       }
    }
    validateContact(bullet){
        if (dist(this.x,this.y,bullet.getX(),bullet.getY())<20) {
            return true;
        }else{
            return false;
        }
    }
    
}