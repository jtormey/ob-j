var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#filter()', function() {

  var o;

  beforeEach(function() {
    o = {
      'a' : 1,
      'b' : 2,
      'c' : 3
    };
  });

  it('should filter a single property', function() {
    obj(o).filter('b');
    expect(o.a).to.be.undefined;
    expect(o.b).not.to.be.undefined;
    expect(o.c).to.be.undefined;
  });

  it('should filter multiple properties', function() {
    obj(o).filter(['a', 'c']);
    expect(o.a).not.to.be.undefined;
    expect(o.b).to.be.undefined;
    expect(o.c).not.to.be.undefined;
  });

});

