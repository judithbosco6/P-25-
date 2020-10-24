class Paper{
        constructor(x,y,radius) {
            var options={
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:1.2
            }
            this.body=Bodies.circle(x,y,radius,options);
            this.radius=radius;
            World.add(world,this.body);
            this.image = loadImage("paper.png");
            this.radius=70;
        }
        display(){
            var angle=this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill("red");
            ellipseMode(RADIUS);
            ellipse(0, 0,this.radius,this.radius);
            pop(); 
        }
    }