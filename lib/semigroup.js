
function Semigroup(value) {
  this.value = value;
}

Semigroup.prototype = {};

Semigroup.prototype.concat = function(that) {
  return new Semigroup(that.value + this.value);
}

function semigroup(value) {
  return new Semigroup(value);
}

module.exports = {companion: semigroup, instance: Semigroup};

