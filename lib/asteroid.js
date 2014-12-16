(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (args) {
    Asteroids.MovingObject.call(this, {
      pos: args.pos,
      vel: Asteroids.Util.randomVec(length),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      game: args.game
      });
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = 'red';
  Asteroid.RADIUS = 15;

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();
