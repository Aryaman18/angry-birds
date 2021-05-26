class Pig{
    constructor(x,y){
        var options = {
            'restitiution':1,
            'friction':0.3,
        }
        this.body= Bodies.rectangle(x,y,50,50,options);
        this.height=50;
        this.width=50;
        World.add(world,this.body);
    }

    display1(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       rect(0,0, this.width, this.height);
       pop();
       
    }




}