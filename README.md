[![Build Status](https://travis-ci.org/ericzhang-cn/random.js.png)](https://travis-ci.org/ericzhang-cn/random.js])

Random number generator of statistical distributions.

Demo: [http://ml.codinglabs.org/v/distributions.html](http://ml.codinglabs.org/v/distributions.html)

Algorithm reference: [http://ftp.arl.mil/random/random.pdf](http://ftp.arl.mil/random/random.pdf)

## Quick Start
### Browsers

    <script type="text/javascript" src="/path/to/random.js"></script>
    
    <!-- html -->

    <script type="text/javascript">
        var newPoint = random.normal(0, 1);
    </script>

### Node

    var random = require('/path/to/random');
    var newPoint = random.normal(0, 1);

## Probability Distribution Functions
### Continuous Distributions

arcsine(min, max); 

beta(v, w, min, max); 

cauchy(a, b);

chiSquare(df);

consine(min, max);

doubleLog(min, max);

erlang(b, c);

exponential(a, b);

extremeValue(a, b);

fRatio(v, w);

gamma(a, b, c);

laplace(a, b);

logarithmic(min, max);

logistic(a, b);

lognormal(a, mu, sigma);

normal(mu, sigma);

parabolic(min, max);

pareto(c);

pearson5(b, c);

pearson6(b, v, w);

power(c);

rayleigh(a, b);

studentT(df);

triangular(min, max, c);

uniform(min, max);

userSpecified(usf, xMin, xMax, yMin, yMax);

weibull(a, b, c);

### Discrete Distributions

bernoulli(p);

binomial(n, p);

geometric(p);

hypergeometric(n, N, k);

negativeBinomial(s, p);

pascal(s, p);

poisson(mu);

uniformDiscrete(i, j);
