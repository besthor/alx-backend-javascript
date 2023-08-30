const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM no Round', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber('SUM', 1, 4), 5);
    });
  });

  describe('SUM first round', function () {
    it('should return 6', function () {
      assert.equal(calculateNumber('SUM', 2.4, 4), 6);
    });
  });

  describe('SUM second round ', function () {
    it('should return 6', function () {
      assert.equal(calculateNumber('SUM', 4, 2.4), 6);
    });
  });

  describe('SUM both round', function () {
    it('should return 6', function () {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT no round', function () {
    it('should return 2', function () {
      assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -3', function () {
      assert.equal(calculateNumber('SUBTRACT', 2, 4.5), -3);
    });
  });

  describe('SUBTRACT second round', function () {
    it('should return 3', function () {
      assert.equal(calculateNumber('SUBTRACT', 4.5, 2), 3);
    });
  });

  describe('SUBTRACT both round', function () {
    it('should return -4', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      assert.equal(calculateNumber('DIVIDE', 8, 4), 2);
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber('DIVIDE', 9.5, 2), 5);
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 0.2', function () {
      assert.equal(calculateNumber('DIVIDE', 2, 9.5), 0.2);
    });
  });

  describe('DIVIDE both round', function () {
    it('should return 0.2', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
