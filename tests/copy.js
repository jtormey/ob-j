var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#copy()', function() {

  var o;

  beforeEach(function() {
    o = {
      'a' : 1,
      'b' : 2
    };
  });

  it('should create an exact copy', function() {
    var copy = obj(o).copy().end();
    expect(copy.a).to.equal(o.a);
    expect(copy.b).to.equal(o.b);
  });

  it('should not affect the previous object', function() {
    var copy = obj(o).copy().exclude('a').end();
    expect(copy.a).to.be.undefined;
    expect(o.a).not.to.be.undefined;
  });

});

