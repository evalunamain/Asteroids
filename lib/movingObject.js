(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (args) {
    this.pos = args.pos;
    this.vel = args.vel;
    this.radius = args.radius;
    this.color = args.color;
    this.game = args.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var x1 = this.pos[0];
    var x2 = otherObject.pos[0];
    var y1 = this.pos[1];
    var y2 = otherObject.pos[1];

    var radiiSum = (this.radius + otherObject.radius);
    var d_squared = (Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    var distance = Math.sqrt(d_squared);

    if (distance < radiiSum) {
      return true;
    } else {
      return false;
    }
   };

   MovingObject.prototype.collideWith = function (otherObject) {
     this.game.remove(this);
     this.game.remove(otherObject);
   };

})();
