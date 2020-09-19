"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculate = (function () {
    function Calculate() {
    }
    Calculate.prototype._numToString = function (num) {
        var precision, numString;
        numString = num.toString();
        try {
            precision = numString.split(".")[1].length;
        }
        catch (e) {
            precision = 0;
        }
        return {
            intNum: Number(numString.replace(".", "")),
            precision: precision
        };
    };
    Calculate.prototype.sum = function (arg1, arg2) {
        var argR1 = this._numToString(arg1);
        var argR2 = this._numToString(arg2);
        var n1 = argR1.intNum, p1 = argR1.precision;
        var n2 = argR2.intNum, p2 = argR2.precision;
        var c = Math.abs(p1 - p2);
        var m = Math.pow(10, Math.max(p1, p2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            p1 > p2 ? (n2 = n2 * cm) : (n1 = n1 * cm);
        }
        return (n1 + n2) / m;
    };
    Calculate.prototype.subtract = function (arg1, arg2) {
        return this.sum(arg1, -arg2);
    };
    Calculate.prototype.multiply = function (arg1, arg2) {
        var argR1 = this._numToString(arg1);
        var argR2 = this._numToString(arg2);
        var n1 = argR1.intNum, p1 = argR1.precision;
        var n2 = argR2.intNum, p2 = argR2.precision;
        var m = p1 + p2;
        return n1 * n2 / Math.pow(10, m);
    };
    Calculate.prototype.divide = function (arg1, arg2) {
        var argR1 = this._numToString(arg1);
        var argR2 = this._numToString(arg2);
        var n1 = argR1.intNum, p1 = argR1.precision;
        var n2 = argR2.intNum, p2 = argR2.precision;
        var m = p2 - p1;
        var c = Math.abs(m);
        return m >= 0 ? n1 * Math.pow(10, m) / n2 : n1 / (n2 * Math.pow(10, c));
    };
    return Calculate;
}());
exports.default = Calculate;
//# sourceMappingURL=calculate.js.map