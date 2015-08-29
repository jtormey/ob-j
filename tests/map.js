var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#map()', function() {

  var o;

  var map = {
    'a' : 'A',
    'b' : 'B'
  };

  beforeEach(function() {
    o = {
      'a' : 1,
      'b' : 2,
      'c' : 3
    };
  });

  it('should map all of the properties', function() {
    obj(o).map(map);
    expect(o.A).to.equal(1);
    expect(o.B).to.equal(2);
  });

  it('should replace old properties', function() {
    obj(o).map(map);
    expect(o.a).to.be.undefined;
    expect(o.b).to.be.undefined;
  });

  it('should not include properties not specified in the map', function() {
    obj(o).map(map);
    expect(o.c).to.be.undefined;
  });

});

