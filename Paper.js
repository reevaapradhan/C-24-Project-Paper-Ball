class Paper{
    constructor(){
        var opt={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(20,562,30,opt);
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill(255)
        ellipse(20,562,30);
    }
};