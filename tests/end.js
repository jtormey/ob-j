var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#end()', function() {

  var o;

  beforeEach(function() {
    o = {
      'a' : 1,
      'b' : 2
    };
  });

  it('should return a value', function() {
    var val = obj(o).end();
    expect(val).to.equal(o);
  });

  it('should return the most recent value', function() {
    var val = obj(o).copy().filter('a').end();
    expect(val).not.to.equal(o);
    expect(val.a).to.equal(1);
    expect(val.b).to.be.undefined;
  });

});

