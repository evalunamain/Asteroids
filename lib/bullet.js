(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (args) {
    Asteroids.MovingObject.call(this, {
      pos: args.pos,
      vel: args.vel,
      radius: Bullet.RADIUS,
      color: Bullet.COLOR,
      game: args.game
    });
  };

  Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

  Bullet.COLOR = 'green';
  Bullet.RADIUS = 5;
  Bullet.POWER = 2;

  Bullet.prototype.collideWith = function (otherObject) {
    var bullet = this;

    if (otherObject instanceof Asteroids.Asteroid) {
      bullet.game.remove(otherObject);
      bullet.game.remove(this);
    }
  };

  Bullet.prototype.isWrappable = false;

})();
