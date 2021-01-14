class ball{
constructor(x,y){
var options={
density :10,
restitution : 0.5
}
this.body=Bodies.circle(x,y,20,options)
World.add(world,this.body)
}
display(){
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    ellipseMode(RADIUS)
    fill("cyan")
    ellipse(0,0,20,20)
    pop ()
}
}