var typeclass = {
  concat: function(that) {
    return that;
  }
};

function Semigroup(value) {
  this.value = value;
}
function semigroup(value) {
  return new Semigroup(value);
}

Semigroup.prototype = typeclass;

Semigroup.prototype.concat = function(that) {
  return semigroup(that.value + this.value)
}


module.exports = {companion: semigroup, instance: Semigroup, typeclass: typeclass}

