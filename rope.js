class rope{

    constructor(bodyA,pointB){
      var options={
    bodyA: bodyA,
    pointB : pointB,
    stiffness:0.04,
    length : 200
        }
this.rope=Matter.Constraint.create(options)
World.add(world,this.rope)
    }
    display(){
        
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
    }
}