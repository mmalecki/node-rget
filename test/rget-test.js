var assert = require('assert'),
    vows = require('vows'),
    rget = require('../');

vows.describe('rget').addBatch({
  'When using rget': {
    'with one level': {
      topic: rget({rget: 'awesome'}, 'rget'),
      'it should return correct property': function (result) {
        assert.equal('awesome', result);
      }
    },
    'with more levels': {
      topic: rget({rget: {status: 'super'}}, 'rget.status'),
      'it should return correct property': function (result) {
        assert.equal('super', result);
      }
    }
  }
}).export(module);

