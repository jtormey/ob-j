var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#to()', function() {

  var o,
      t = {};

  beforeEach(function() {
    o = {
      'a' : 1,
      'b' : 2
    };
  });

  it('should adopt the new object', function() {
    obj(o).to(t).filter('a');
    expect(t.a).to.equal(1);
    expect(t.b).to.be.undefined;
  });

  it('should not equal the initial object', function() {
    obj(o).to(t);
    expect(o).not.to.equal(t);
  });

  it('should not be affected by changes to the initial object', function() {
    obj(o).to(t);
    o.c = 3;
    expect(t.c).to.be.undefined;
  });

});

