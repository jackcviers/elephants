'use strict';

var chai = require('chai');
chai.should();
var expect = chai.expect;
var semigroup = require('../lib/semigroup').companion;

describe('semigroup', function(){
  it('should exist', function(done){
    expect(semigroup).to.exist
    done()
  });
  describe('#concat', function(){
    beforeEach(function(done){
      this.concrete = semigroup(2)
      done()
    });
    afterEach(function(done){
      this.concrete = {}
      done()
    });
    it('should exist', function(done){
      expect(this.concrete.concat).to.exist
      done()
    });
    it('should be associative', function(done){
      var b, c, expected;
      b = semigroup(3)
      c = semigroup(4)
      expected = 2 + 3 + 4
      this.concrete.concat(b).concat(c).value.should.equal(expected)
      this.concrete.concat(b).concat(c).value.should.equal(this.concrete.concat(b.concat(c)).value)
      done()
    });
  });
});

