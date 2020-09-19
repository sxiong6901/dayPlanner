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
var SmpCal = (function (_super) {
    __extends(SmpCal, _super);
    function SmpCal() {
        var _this = _super.call(this) || this;
        _this.add = function (arg1, arg2) {
            return _super.prototype.sum.call(_this, arg1, arg2);
        };
        _this.sub = function (arg1, arg2) {
            return _super.prototype.subtract.call(_this, arg1, arg2);
        };
        _this.mul = function (arg1, arg2) {
            return _super.prototype.multiply.call(_this, arg1, arg2);
        };
        _this.div = function (arg1, arg2) {
            return _super.prototype.divide.call(_this, arg1, arg2);
        };
        return _this;
    }
    return SmpCal;
}(calculate_1.default));
;
exports.default = new SmpCal();
//# sourceMappingURL=smpCal.js.map