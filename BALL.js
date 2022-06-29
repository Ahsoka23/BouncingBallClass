class BALL{
    constructor(x,y){
        this.x=x
        this.y=y
        this.radius=25
        this.velocityX=0;
        this.velocityY=0;
    }

    cratee(){
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,this.radius)
        this.x+=this.velocityX;
        this.y+=this.velocityY;
    }

 
    movee(vx,vy){
        this.velocityX=vx;
        this.velocityY=vy;      
    }


    bounceOff(){
    
    if(this.y>400-this.radius||this.y<this.radius){
        this.velocityY*=-1
    }

    if(this.x>400-this.radius||this.x<this.radius){
        this.velocityX*=-1
    }
    

    }
    
}