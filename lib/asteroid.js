const Util = require("./util.js")
const MovingObject = require("./moving_object.js")
//
// const DEFAULTS = {
//   COLOR: "red",
//   RADIUS: 25,
//   SPEED: 4
// }

function Asteroid(options) {
  options = options || {},
  options.color = "red", //red is a random default
  options.radius = 25, //25 is a random default
  options.vel = options.vel || Util.randomVec(4) //4 is a random default speed
  options.pos = options.pos

  MovingObject.call(this, options)
}

Util.inherits(Asteroid, MovingObject)


module.exports = Asteroid
