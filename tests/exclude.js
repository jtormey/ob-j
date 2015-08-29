var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#exclude()', function() {

  var o;

  beforeEach(function() {
    o = {
      'a' : 1,
      'b' : 2,
      'c' : 3
    };
  });

  it('should exclude a single property', function() {
    obj(o).exclude('b');
    expect(o.a).not.to.be.undefined;
    expect(o.b).to.be.undefined;
    expect(o.c).not.to.be.undefined;
  });

  it('should exclude multiple properties', function() {
    obj(o).exclude(['a', 'c']);
    expect(o.a).to.be.undefined;
    expect(o.b).not.to.be.undefined;
    expect(o.c).to.be.undefined;
  });

});

