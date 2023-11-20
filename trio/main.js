"use strict";
var Trio = /** @class */ (function () {
    function Trio(r, i, j) {
        this.r = r;
        this.i = i;
        this.j = j;
    }
    Trio.prototype.add = function (t) {
        return new Trio(this.r + t.r, this.i + t.i, this.j + t.j);
    };
    Trio.prototype.sadd = function (t) {
        this.r = this.r + t.r;
        this.i = this.i + t.i;
        this.j = this.j + t.j;
    };
    Trio.prototype.mul = function (t) {
        var _a = [this.r, this.i, this.j], a = _a[0], b = _a[1], c = _a[2];
        var _b = [t.r, t.i, t.j], d = _b[0], e = _b[1], f = _b[2];
        return new Trio(a * d - b * e + c * f, a * e + b * d, a * f + c * d);
    };
    Trio.prototype.smul = function (t) {
        var _a = [this.r, this.i, this.j], a = _a[0], b = _a[1], c = _a[2];
        var _b = [t.r, t.i, t.j], d = _b[0], e = _b[1], f = _b[2];
        this.r = a * d - b * e + c * f;
        this.i = a * e + b * d;
        this.j = a * f + c * d;
    };
    Trio.prototype.fmt = function () {
        var _a = [this.r, this.i, this.j], a = _a[0], b = _a[1], c = _a[2];
        return "".concat(a, " + ").concat(b, "i + ").concat(c, "j");
    };
    return Trio;
}());
var o = new Trio(1, 0, 0);
var i = new Trio(0, 1, 0);
var j = new Trio(0, 0, 1);
