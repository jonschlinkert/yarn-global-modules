'use strict';

require('mocha');
var assert = require('assert');
var yarnModules = require('./');

describe('yarn-global-modules', function() {
  it('should get the yarn global modules directory', function() {
    assert.equal(typeof yarnModules(), 'string');
    console.log(yarnModules())
    assert(/yarn/i.test(yarnModules()));
  });
});
