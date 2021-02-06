class drop {
    var options = {
      constructor(bodyA, pointB,x,y,r){
        var options = {
            poinytA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            'friction':0.1,
        }
        
        
    }
    this.drop = Constraint.create(options);
    this.x=x;
    this.y=y;
    this.r=r;
    bodyA: bodyA,
    pointB: pointB,
    World.add(world, this.body);
  }
  display(){
    if(this.sling.bodyA){
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      push();
      
      stroke();

      if(pointA.x < 220) {
          strokeWeight(7);
          line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
          line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
          
      }
      else{
          strokeWeight(3);
          line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
          line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
         
      }
     
      
      pop();
     
 


}