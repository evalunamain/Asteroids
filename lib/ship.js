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

  Ship.prototype.fireBullet = function () {
    var shipVel = this.vel.slice();
    var bulletVel = shipVel;

    if (shipVel[0] > 0) {
      bulletVel[0] += Asteroids.Bullet.POWER;
    } else if (shipVel[0] < 0) {
      bulletVel[0] -= Asteroids.Bullet.POWER;
    }

    if (shipVel[1] > 0) {
      bulletVel[1] += Asteroids.Bullet.POWER;
    } else if (shipVel[1] < 0) {
      bulletVel[1] -= Asteroids.Bullet.POWER;
    }

    if (shipVel[0] === 0 && shipVel[1] === 0) {
      bulletVel[1] -= Asteroids.Bullet.POWER;
    }

    var bullet = new Asteroids.Bullet({
      pos: this.pos.slice(),
      vel: bulletVel,
      game: this.game
    });

    this.game.add(bullet);
  };


})();
