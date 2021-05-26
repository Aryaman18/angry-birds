class Box {
    constructor(x,y,width,height){
        var options = {
            restitiution:1
        }
        this.body= Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);
    }

    display1(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       fill("red")
       rectMode(CENTER);
       strokeWeight(4)
       stroke("green");
       rect(0,0, this.width, this.height);
       pop();
       
    }




}