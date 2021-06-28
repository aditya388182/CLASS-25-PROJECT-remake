class Paper {

    constructor(x,y,radius){

        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    
    World.add(world,this.body);
        }

        display(){

            imageMode(CENTER);


            fill("yellow");

            image(this.image,this.body.position.x,this.body.position.y,this.radius);


        }



}