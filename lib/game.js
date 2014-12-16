(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.dimX = Game.DIM_X;
    this.dimY = Game.DIM_Y;
    this.numAsteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 20;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();

      this.asteroids.push(
        new Asteroids.Asteroid({pos: pos})
      );
    }
  };

  Game.prototype.randomPosition = function () {
    var x = Game.DIM_X * Math.random();
    var y = Game.DIM_Y * Math.random();

    return [x, y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });
  };

})();
