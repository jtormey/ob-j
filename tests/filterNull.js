var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#filterNull()', function() {

  var o;

  beforeEach(function() {
    o = {
      'a' : 'not-null',
      'b' : null,
      'c' : undefined
    };
  });

  it('should filter all null values', function() {
    obj(o).filterNull();
    expect(o).to.deep.equal({ 'a': 'not-null' });
  });

});

