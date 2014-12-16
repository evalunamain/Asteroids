(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    this.bindKeyHandlers();
  
    window.setInterval((function () {
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var gv = this;
    key('up', function(){ gv.game.ship.power([0, -2]) });
    key('down', function(){ gv.game.ship.power([0, 2]) });
    key('left', function(){ gv.game.ship.power([-2, 0]) });
    key('right', function(){ gv.game.ship.power([2, 0]) });
    key('space', function(){ gv.game.ship.fireBullet() });
  };

})();
