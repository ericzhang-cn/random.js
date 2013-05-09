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

    exports.cauchy = function (a, b) {
        return a + b * tan(PI * _this.uniform(-0.5, 0.5));
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

    exports.logistic = function (a, b) {
        return a - b * log(1 / _this.uniform(0, 1) - 1);
    };

    exports.logNormal = function (a, mu, sigma) {
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

    exports.power = function (c) {
        return pow(_this.uniform(0, 1), 1 / c);
    };

    exports.uniform = function (min, max) {
        return min + (max - min) * random();
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
            if (_this.bernoulli(p)) {
                count++;
                K--;
            }
        }

        return count;
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
