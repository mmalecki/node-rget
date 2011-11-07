var assert = require('assert'),
    vows = require('vows'),
    rget = require('../');

var multiLevelData = {rget: {status: 'super'}};

vows.describe('rget').addBatch({
  'When using rget': {
    'with one level': {
      topic: rget({rget: 'awesome'}, 'rget'),
      'it should return correct property': function (result) {
        assert.equal('awesome', result);
      }
    },
    'with more levels': {
      'and default separator': {
        topic: rget(multiLevelData, 'rget.status'),
        'it should return correct property': function (result) {
          assert.equal('super', result);
        }
      },
      'and different separator': {
        topic: rget(multiLevelData, 'rget:status', ':'),
        'it should return correct property': function (result) {
          assert.equal('super', result);
        }
      }
    }
  }
}).export(module);

