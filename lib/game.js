const Asteroid = require("./asteroid")
const Util = require("./util")


// Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
// Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

function Game() {


  this.addAsteroids()
}

Game.prototype.add = function() {

}

Game.prototype.addAsteroids = function() {

}

Game.prototype.randomPosition = function() {

}

Game.prototype.draw = function(ctx) {

}

Game.prototype.moveObjects = function() {

}

module.exports = Game
