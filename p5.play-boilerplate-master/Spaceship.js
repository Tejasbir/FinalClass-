class Spaceship{
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.image = loadImage("Pictures/Alien shooter v.2 enemy spaceship.png")
    }


display(){
    image(this.image, this.x, this.y, this.height, this.width)
}





}