class Triangle {
  constructor(canvas, context, radius, fill = '#fff' ,radians = 240) {
    this.context = context;
    this.radius = radius;
    this.fill = fill;
    this.canvas = canvas;
    
    this.triangleAngle = 60; // 360 / 6 its 6 x triangle
    this.rad = (Math.PI / 180);
    this.currentSetp = 1;

    this.centerPoint = {
      x: canvas.width / 2,
      y: canvas.height / 2
    }

    this.pointA = {
      x: canvas.width / 2,
      y: canvas.height / 2
    };

    this.pointB = {
      x: canvas.width / 2,
      y: canvas.height / 2
    };

    this.radians = radians * this.rad;
  }

  calcCurrentAngle() {
      ++this.currentSetp;
      this.radians = this.currentSetp * this.triangleAngle * this.rad;
      if (this.currentSetp % 6 === 0) {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
      }
  }

  draw() {
    this.context.beginPath();

    this.context.moveTo(this.centerPoint.x,this.centerPoint.y);
    this.context.lineTo(this.pointA.x,this.pointA.y);
    this.context.lineTo(this.pointB.x,this.pointB.y);
   

    this.context.closePath();

    this.context.fillStyle = this.fill;
    this.context.fill();
  }

  update() {

    this.calcCurrentAngle();

    this.pointA.x = this.centerPoint.x  +  (Math.cos(this.radians) * this.radius);
    this.pointA.y = this.centerPoint.y  +  (Math.sin(this.radians) * this.radius) ;

    this.pointB.x = this.centerPoint.x  +  (Math.cos(this.radians + (this.triangleAngle *  this.rad)) * this.radius);
    this.pointB.y = this.centerPoint.y  +  (Math.sin(this.radians + (this.triangleAngle *  this.rad)) * this.radius);

    this.draw();
  }
}
