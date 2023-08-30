const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  describe('Two Integers', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  describe('One round', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });

  describe('One round 2', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(3.7, 1), 5);
    });
  });

  describe('One round floor', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(1, 3.3), 4);
    });
  });

  describe('One round floor 2', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(3.3, 1), 4);
    });
  });

  describe('Two round', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('Two round again', function () {
    it('should return 6', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe('Two round reversed', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(3.7, 1.2), 5);
    });
  });

  describe('Two round again floor both', function () {
    it('should return 3', function () {
      assert.strictEqual(calculateNumber(1.2, 2.1), 3);
    });
  });
});