class Log extends BaseClass {
  constructor(x,y,w,a){
    super(x,y,w,20,a)
    this.image=loadImage("sprites/wood2.png")
    Matter.Body.setAngle(this.body,a)
  }
    
  };
  