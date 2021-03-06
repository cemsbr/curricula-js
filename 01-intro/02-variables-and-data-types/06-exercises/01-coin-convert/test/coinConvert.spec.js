'use strict';

const Assert = require('chai').assert;
const coinConvert = require('../solution/coinConvert');

describe('coinConvert()', () => {

  it('deveria devolver [162.5, 900, 33000], para $50', () => {
    const dollars = 50;
    const reais = dollars * 3.25;
    const pesosMx = dollars * 18;
    const pesosCl = dollars * 660;
    Assert.deepEqual(coinConvert(dollars), [reais, pesosMx, pesosCl]);
  });

  it('deveria devolver [325, 1800, 66000], para $100', () => {
    const dollars = 100;
    const reais = dollars * 3.25;
    const pesosMx = dollars * 18;
    const pesosCl = dollars * 660;
    Assert.deepEqual(coinConvert(dollars), [reais, pesosMx, pesosCl]);
  });

  it('deveria devolver [243.75, 1350, 49500], para  $85', () => {
    const dollars = 85;
    const reais = dollars * 3.25;
    const pesosMx = dollars * 18;
    const pesosCl = dollars * 660;
    Assert.deepEqual(coinConvert(dollars), [reais, pesosMx, pesosCl]);
  });
});
