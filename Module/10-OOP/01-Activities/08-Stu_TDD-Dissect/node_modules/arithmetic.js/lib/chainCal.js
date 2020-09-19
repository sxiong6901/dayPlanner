"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_1 = require("./calculate");
var ChainCal = (function (_super) {
    __extends(ChainCal, _super);
    function ChainCal(num) {
        var _this = _super.call(this) || this;
        _this.value = num;
        return _this;
    }
    ChainCal.prototype.add = function (arg) {
        this.value = _super.prototype.sum.call(this, this.value, arg);
        return this;
    };
    ChainCal.prototype.sub = function (arg) {
        this.value = _super.prototype.subtract.call(this, this.value, arg);
        return this;
    };
    ChainCal.prototype.mul = function (arg) {
        this.value = _super.prototype.multiply.call(this, this.value, arg);
        return this;
    };
    ChainCal.prototype.div = function (arg) {
        this.value = _super.prototype.divide.call(this, this.value, arg);
        return this;
    };
    ChainCal.prototype.getValue = function () {
        return this.value;
    };
    return ChainCal;
}(calculate_1.default));
function default_1(num) {
    return new ChainCal(num);
}
exports.default = default_1;
//# sourceMappingURL=chainCal.js.map