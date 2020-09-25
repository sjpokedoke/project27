class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
		this.offsetY=offsetY
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        pointB: {x:this.offsetX, y:this.offsetY}
    }
    this.Chain = Constraint.create(options);
    World.add(world, this.Chain);
    }
    display(){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;
        var pointBvertexX = pointB.x+this.offsetX;
        var pointBvertexY = pointB.y+this.offsetY;
        
        strokeWeight(2);
        stroke("pink");
        line(pointA.x,pointA.y, pointBvertexX,pointBvertexY);
    }
}