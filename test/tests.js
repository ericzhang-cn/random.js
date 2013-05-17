require('chai').should();
var random = require('../src/random');

describe('Random', function () {
    describe('generate', function () {
        it ('should generate random number with Arcsine', function () {
            random.arcsine(0, 1).should.be.a('number');
        });
        it ('should generate random number with Beta', function () {
            random.arcsine(0.5, 5, 0, 3).should.be.a('number');
        });
    });
});
