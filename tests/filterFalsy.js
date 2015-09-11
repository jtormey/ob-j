var expect = require('chai').expect,
    obj = require('../obj.js');

describe('#filterFalsy()', function() {

  var o;

  beforeEach(function() {
    oF = {
      'a' : '',
      'b' : undefined,
      'c' : null,
      'd' : 0,
      'e' : false
    };

    oT = {
      'a' : 'string',
      'b' : 7,
      'c' : true
    };
  });

  it('should filter all falsy values', function() {
    obj(oF).filterFalsy();
    expect(oF).to.deep.equal({});
  });

  it('should not filter any truthy values', function() {
    obj(oT).filterFalsy();
    expect(oT.a).to.equal('string');
    expect(oT.b).to.equal(7);
    expect(oT.c).to.equal(true);
  });

});

