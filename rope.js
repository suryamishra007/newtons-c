class Rope{

    constructor(body1,body2,offsetx,offsety,)
    {
        this.offsetx = offsetx;
        this.offsety = offsety;
        

        var option={
            bodyA:body1,
            bodyB:body2,
           pointB:{x:this.offsetx,y:this.offsety}
        }
        this.rope=Matter.Constraint.create(option);
        World.add(world,this.rope)
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var anchor1x = pointA.x;
        var anchor1y = pointA.y;
        var anchor2x = pointB.x+this.offsetx;
        var anchor2y = pointB.y+this.offsety;
        strokeWeight(5);
        line(anchor1x,anchor1y,anchor2x,anchor2y);
    }
    }