require('chai').should();
var random = require('../src/random');

describe('Random', function () {
    describe('generate', function () {
        it ('should generate random number with Arcsine', function () {
            random.arcsine(0, 1).should.be.a('number');
        });
        it ('should generate random number with Beta', function () {
            random.beta(1, 1, 0, 1).should.be.a('number');
        });
        it ('should generate random number with Cauchy', function () {
            random.cauchy(1, 1).should.be.a('number');
        });
        it ('should generate random number with Chi-Square', function () {
            random.chiSquare(1).should.be.a('number');
        });
        it ('should generate random number with Cosine', function () {
            random.cosine(0, 1).should.be.a('number');
        });
        it ('should generate random number with DoubleLog', function () {
            random.doubleLog(0, 1).should.be.a('number');
        });
        it ('should generate random number with Erlang', function () {
            random.erlang(1, 1).should.be.a('number');
        });
        it ('should generate random number with Exponential', function () {
            random.exponential(1, 1).should.be.a('number');
        });
        it ('should generate random number with ExtremeValue', function () {
            random.extremeValue(0.5, 5, 0, 1).should.be.a('number');
        });
        it ('should generate random number with F Ratio', function () {
            random.fRatio(1, 1).should.be.a('number');
        });
        it ('should generate random number with Gamma', function () {
            random.gamma(1, 1, 1).should.be.a('number');
        });
        it ('should generate random number with Laplace', function () {
            random.laplace(1, 1).should.be.a('number');
        });
        it ('should generate random number with Logarithmic', function () {
            random.logarithmic(0, 1).should.be.a('number');
        }); 
        it ('should generate random number with Logistic', function () {
            random.logistic(1, 1).should.be.a('number');
        }); 
        it ('should generate random number with Lognormal', function () {
            random.lognormal(1, 1, 1).should.be.a('number');
        }); 
        it ('should generate random number with Normal', function () {
            random.normal(1, 1).should.be.a('number');
        }); 
        it ('should generate random number with Parabolic', function () {
            random.parabolic(0, 1).should.be.a('number');
        }); 
        it ('should generate random number with Pareto', function () {
            random.pareto(1).should.be.a('number');
        }); 
        it ('should generate random number with Pearson5', function () {
            random.pearson5(1, 1).should.be.a('number');
        }); 
        it ('should generate random number with Pearson6', function () {
            random.pearson6(1, 1, 1).should.be.a('number');
        }); 
        it ('should generate random number with Power', function () {
            random.power(1).should.be.a('number');
        }); 
        it ('should generate random number with Rayleigh', function () {
            random.rayleigh(1, 1).should.be.a('number');
        }); 
        it ('should generate random number with Student\'s T', function () {
            random.studentT(1).should.be.a('number');
        }); 
        it ('should generate random number with Triangular', function () {
            random.triangular(0, 1, 1).should.be.a('number');
        }); 
        it ('should generate random number with Uniform', function () {
            random.uniform(0, 1).should.be.a('number');
        }); 
        it ('should generate random number with Weibull', function () {
            random.weibull(1, 1, 1).should.be.a('number');
        }); 
        it ('should generate random number with Bernoulli', function () {
            random.bernoulli(0.5).should.be.a('number');
        }); 
        it ('should generate random number with Binomial', function () {
            random.binomial(10, 0.5).should.be.a('number');
        }); 
        it ('should generate random number with Geometric', function () {
            random.geometric(0.5).should.be.a('number');
        }); 
        it ('should generate random number with Hypergeometric', function () {
            random.hypergeometric(6, 10, 4).should.be.a('number');
        }); 
        it ('should generate random number with NegativeBinomial', function () {
            random.negativeBinomial(5, 0.5).should.be.a('number');
        }); 
        it ('should generate random number with Pascal', function () {
            random.pascal(5, 0.5).should.be.a('number');
        }); 
        it ('should generate random number with Poisson', function () {
            random.poisson(5).should.be.a('number');
        }); 
        it ('should generate random number with UniformDiscrete', function () {
            random.uniformDiscrete(1, 10).should.be.a('number');
        }); 
    });
});
