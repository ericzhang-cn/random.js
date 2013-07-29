(function (exports) {

    var _this = exports;

    var E    = Math.E,
        PI   = Math.PI,
        PI_2 = PI / 2;

    var abs    = Math.abs,
        acos   = Math.acos,
        asin   = Math.asin,
        atan   = Math.atan,
        ceil   = Math.ceil,
        cos    = Math.cos,
        exp    = Math.exp,
        floor  = Math.floor,
        log    = Math.log,
        pow    = Math.pow,
        random = Math.random,
        sin    = Math.sin,
        sqrt   = Math.sqrt,
        tan    = Math.tan

    exports.arcsine = function (min, max) {
        var q = sin(PI_2 * _this.uniform(0, 1));

        return min + (max - min) * q * q;
    };

    exports.beta = function (v, w, min, max) {
        if (v < w) {
            return max - (max - min) * _this.beta(w, v, 0, 1);
        }
        var y1 = _this.gamma(0, 1, v),
            y2 = _this.gamma(0, 1, w);

        return min + (max - min) * y1 / (y1 + y2);
    };

    exports.cauchy = function (a, b) {
        return a + b * tan(PI * _this.uniform(-0.5, 0.5));
    };

    exports.chiSquare = function (df) {
        return _this.gamma(0, 2, 0.5 * df);
    };

    exports.cosine = function (min, max) {
        var a = 0.5 * (min + max),
            b = (max - min) / PI;
        
        return a + b * asin(_this.uniform(-1, 1));
    };

    exports.doubleLog = function (min, max) {
        var a = 0.5 * (min + max),
            b = 0.5 * (max - min);
        if (_this.bernoulli(0.5) === 0) {
            b = -b;
        }

        return a + b * _this.uniform(0, 1) * _this.uniform(0, 1);
    };

    exports.erlang = function (b, c) {
        var prod = 1.0;

        for (var i = 1; i <c; i++) {
            prod *= _this.uniform(0, 1);
        }

        return -b * log(prod);
    };

    exports.exponential = function (a, b) {
        return a - b * log(_this.uniform(0, 1));
    };

    exports.extremeValue = function (a, b) {
        return a + b * log(-log(_this.uniform(0, 1)));
    };

    exports.fRatio = function (v, w) {
        return (_this.chiSquare(v) / v) / (_this.chiSquare(w) / w);
    };

    exports.gamma = function (a, b, c) {
        var A = 1 / sqrt(2 * c - 1),
            B = c - log(4),
            Q = c + 1 / A,
            T = 4.5,
            D = 1 + log(T),
            C = 1 + c / E;

        if (c < 1) {
            while (true) {
                var p = C * _this.uniform(0, 1);
                if (p > 1) {
                    var y = -log((C - p) / c);
                    if (_this.uniform(0, 1) <= pow(y, c - 1)) {
                        return a + b * y;
                    }
                } else {
                    var y = pow(p, 1 / c);
                    if (_this.uniform(0, 1) <= exp(-y)) {
                        return a + b * y;
                    }
                }
            }
        } else if (c == 1.0) {
            return _this.exponential(a, b);
        } else {
            while (true) {
                var p1 = _this.uniform(0, 1),
                    p2 = _this.uniform(0, 1),
                    v = A * log(p1 / (1 - p1)),
                    y = c * exp(v),
                    z = p1 * p1 * p2,
                    w = B + Q * v - y;
                if (w + D - T * z > 0 || w >= log(z)) {
                    return a + b * y
                }
            }
        }
    };

    exports.laplace = function (a, b) {
        if (_this.bernoulli(0.5) == 1) {
            return a + b * log(_this.uniform(0, 1));
        } else {
            return a - b * log(_this.uniform(0, 1));
        }
    };

    exports.logarithmic = function (min, max) {
        var a = min,
            b = max - min;

        return a + b * _this.uniform(0, 1) * _this.uniform(0, 1);
    };

    exports.logistic = function (a, b) {
        return a - b * log(1 / _this.uniform(0, 1) - 1);
    };

    exports.lognormal = function (a, mu, sigma) {
        return a + exp(_this.normal(mu, sigma));
    };

    exports.normal = function (mu, sigma) {
        var p , p1, p2;
        do {
            p1 = _this.uniform(-1, 1);
            p2 = _this.uniform(-1, 1);
            p = p1 * p1 + p2 * p2;
        } while (p >= 1);

        return mu + sigma * p1 * sqrt(-2 * log(p) / p);
    };

    exports.parabolic = function (min ,max) {
        var parabola = function (x, min, max) {
            if (x < min || x > max) {
                return 0.0;
            }

            var a = 0.5 * (min + max),
                b = 0.5 * (max - min),
                yMax = 3 / (4 * b);

            return yMax * (1 - (x - a) * (x - a) / (b * b));
        };

        var a = 0.5 * (min  + max),
            yMax = parabola(a, min + max);

        return _this.userSpecified(parabola, min ,max, 0, yMax);
    };

    exports.pareto = function (c) {
        return pow(_this.uniform(0, 1), -1 / c);
    };

    exports.pearson5 = function (b, c) {
        return 1 / _this.gamma(0, 1 / b, c);
    };

    exports.pearson6 = function (b, v, w) {
        return _this.gamma(0, b, v) / _this.gamma(0, b, w);
    };

    exports.power = function (c) {
        return pow(_this.uniform(0, 1), 1 / c);
    };

    exports.rayleigh = function (a, b) {
        return a + b * sqrt(-log(_this.uniform(0, 1)));
    };

    exports.studentT = function (df) {
        return _this.normal(0, 1) / sqrt(_this.chiSquare(df) / df);
    };

    exports.triangular = function (min, max, c) {
        var p = _this.uniform(0, 1),
            q = 1 - p;
        if (p <= (c - min) / (max - min)) {
            return min + sqrt((max - min) * (c - min) * p);
        } else {
            return max - sqrt((max - min) * (max - c) * q);
        }
    };

    exports.uniform = function (min, max) {
        return min + (max - min) * random();
    };

    exports.userSpecified = function (usf, xMin, xMax, yMin, yMax) {
        var x,
            y,
            areaMax = (xMax - xMin) * (yMax - yMin);

        do {
            x = _this.uniform(0, areaMax) / (yMax - yMin) + xMin;
            y = _this.uniform(yMin, yMax);
        } while (y > usf(x, xMin, xMax));
        return x;
    };

    exports.weibull = function (a, b, c) {
        return a + b * pow(-log(_this.uniform(0, 1)), 1 / c);
    };

    exports.bernoulli = function (p) {
        return _this.uniform(0, 1) < p ? 0 : 1;
    };

    exports.binomial = function (n, p) {
        var sum = 0;
        for (var i = 0; i < n; i++) {
            sum += _this.bernoulli(p);
        }

        return sum;
    };

    exports.geometric = function (p) {
        return floor(log(_this.uniform(0, 1)) / log(1 - p));
    };

    exports.hypergeometric = function (n, N, K) {
        var count = 0;
        for (var i = 0; i < n; i++, N--) {
            var p = K / N;
            if (_this.bernoulli(p)) {
                count++;
                K--;
            }
        }

        return count;
    };

    exports.negativeBinomial = function (s, p) {
        var sum = 0;
        for (var i = 0; i < s; i++) {
            sum += _this.geometric(p);
        }

        return sum;
    };

    exports.pascal = function (s, p) {
        return _this.negativeBinomial(s, p) + s;
    };

    exports.poisson = function (mu) {
        var b = 1;
        for (var i = 0; b >= exp(-mu); i++) {
            b *= _this.uniform(0, 1);
        }

        return i - 1;
    };

    exports.uniformDiscrete = function (i, j) {
        return i + floor((j - i + 1) * _this.uniform(0, 1));
    };

})(typeof exports === 'undefined' ? this['random'] = {} : exports);
