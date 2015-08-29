var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#each()', function() {

  var o;

  beforeEach(function() {
    o = {
      'a' : 1,
      'b' : 2
    };
  });

  it('should modify each value', function() {
    obj(o).each(function(v) { return v * 2 });
    expect(o.a).to.equal(2);
    expect(o.b).to.equal(4);
  });

});

