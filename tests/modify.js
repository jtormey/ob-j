var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#modify()', function() {

  var o;

  beforeEach(function() {
    o = {
      'a' : 1,
      'b' : 2
    };
  });

  it('should modify the property value', function() {
    obj(o).modify(function(o) { o.a = 3 });
    expect(o.a).to.equal(3);
  });

  it('should not modify other property values', function() {
    obj(o).modify(function(o) { o.a = 3 });
    expect(o.b).to.equal(2);
  });

});

