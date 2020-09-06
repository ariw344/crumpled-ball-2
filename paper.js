class Paper {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        this.paperImage = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        fill(rgb(255, 0, 255));
        imageMode(CENTER);
        image(this.paperImage, this.body.position.x, this.body.position.y, 50, 50);
    }
};