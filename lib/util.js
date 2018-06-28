const Util = {
  inherits: function inherits(childClass, parentClass) {
    ChildClass.prototype = Object.create(BaseClass.prototype);
    ChildClass.prototype.constructor = ChildClass;    
  }
}

module.exports = Util
