(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};

  Util.inherits = function (subClass, parentClass) {

    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    subClass.prototype = new Surrogate();

  };

  Util.randomVec = function (length) {
    length = length || 10;

    var x = ((Math.random() * 2) - 1) * length;
    var y = ((Math.random() * 2) - 1) * length;

    return [x, y];
  };

})();
