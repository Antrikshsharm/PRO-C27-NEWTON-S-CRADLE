class rope{
constructor(body1,body2,offsetX,offsetY)
{
    this.offsetX=offsetX
    this.offsetY=offsetYvar 
    var option={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope=constraint.create(options)
    World .add(world,thiis.rope)
}
display()
{
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;

    strokeWeight(2);

    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y

    var Anchor2X=pointB.x+this.offsetX
    var Anchor2X=pointB.x+this.offsetY

    line (Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
}
}