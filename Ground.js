class Ground{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        Matter.Body.setStatic(this.body,true);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}