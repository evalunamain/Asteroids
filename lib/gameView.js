(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    window.setInterval((function () {
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  };

  GameView.prototpe.bindKeyHandlers = function () {
    key('up', function(){ this.game.ship.power() });
    key('down', function(){ this.game.ship.power() });
    key('left', function(){ this.game.ship.power() });
    key('right', function(){ this.game.ship.power() });
  };

})();
