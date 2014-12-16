(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (args) {
    Asteroids.MovingObject.call(this, {
      pos: args.pos,
      vel: [0, 0],
      radius: Ship.RADIUS,
      color: Ship.COLOR,
      game: args.game
    });
  };

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Ship.COLOR = 'blue';
  Ship.RADIUS = 10;

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

})();
