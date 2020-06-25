class garbage{
    constructor(x,y,width,height){
        var options={
            isStatic: true
            
        }
        
        this.body = Bodies.rectangle(x, y, 190,240, options);
        this.x = x;
        this.y = y;
      this.width = 190;
      this.height =240 ;
     this.image=loadImage("sprite/dustbingreen.png");
      World.add(world, this.body);
      
    }

display(){
    push ();
    var pos =this.body.position;
    fill("white");
   imageMode(CENTER);
        image( this.image,pos.x, pos.y, this.width, this.height);
    
    
   
    pop();
  }
};