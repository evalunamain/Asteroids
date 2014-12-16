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
    this.ship = new Asteroids.Ship({pos: this.randomPosition(), game: this});
    this.bullets = [];
  };

  // Game.DIM_X = 1000;
  // Game.DIM_Y = 1000;
  Game.NUM_ASTEROIDS = 40;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();
      var game = this;

      this.asteroids.push(
        new Asteroids.Asteroid({pos: pos, game: game})
      );
    }
  };

  Game.prototype.add = function (obj) {
    if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  };

  Game.prototype.randomPosition = function () {
    var x = Game.DIM_X * Math.random();
    var y = Game.DIM_Y * Math.random();

    return [x, y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var allObjects = this.allObjects();

    allObjects.forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    var allObjects = this.allObjects();

    allObjects.forEach(function (object) {
      object.move();
    });
  };

  Game.prototype.wrap = function (pos) {
    if (pos[0] > Game.DIM_X) {
      pos[0] -= Game.DIM_X;
    } else if (pos[0] < 0) {
      pos[0] += Game.DIM_X;
    }

    if (pos[1] > Game.DIM_Y) {
      pos[1] -= Game.DIM_Y;
    } else if (pos[1] < 0) {
      pos[1] += Game.DIM_Y;
    }

    return pos;
  };

  Game.prototype.checkCollisions = function () {
    var allObjects = this.allObjects();

    for (var i = 0; i < allObjects.length; i++) {
      for (var j = 0; j < allObjects.length; j++) {
        if (i === j)  continue;
        if (allObjects[i].isCollidedWith(allObjects[j])) {
          allObjects[i].collideWith(allObjects[j]);
        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroids.Asteroid) {
      var idx = this.asteroids.indexOf(obj);
      this.asteroids.splice(idx, 1);
    } else if (obj instanceof Asteroids.Bullet) {
      var idx = this.bullets.indexOf(obj);
      this.bullets.splice(idx, 1);
    }
  };

  Game.prototype.allObjects = function () {
    var res = [];
    res = res.concat(this.asteroids);
    res = res.concat(this.ship);
    res = res.concat(this.bullets);
    return res;
  };

})();
