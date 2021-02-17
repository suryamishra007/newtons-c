class Bob {
    constructor(x,y,r)
    {
        var option = {
            isStatic:false,
            restitution:1.2,
            friction:0.5,
            density:3,
        }
       
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,option);

        World.add(world,this.body);
    }

        display()
        {
            var pos = this.body.position;
            var angle = this.body.angle;
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            ellipseMode(CENTER)
            ellipse(0,0,this.r,this.r)
            pop()
        }
    }
