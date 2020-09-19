var arithmetic = require("../index");
var smpCal = arithmetic.smpCal;


// console.error(arithmetic)
// console.error(smpCal.add)

var chai = require("chai");
var expect = chai.expect;

var add = smpCal.add,
    sub = smpCal.sub,
    mul = smpCal.mul,
    div = smpCal.div;

describe("测试 smpCal", function() {
    it("1 + 2 = 3", function() {
        expect(smpCal.add(1, 2)).to.be.equal(3);
    });

    it("0.1 + 0.2 = 0.3", function() {
        expect(smpCal.add(0.1, 0.2)).to.be.equal(0.3);
    });

    it("4 + 0.2 = 4.2", function() {
        expect(add(4, 0.2)).to.be.equal(4.2);
    });

    it("0.2 + 4 = 4.2", function() {
        expect(add(0.2, 4)).to.be.equal(4.2);
    });

    it("0.44 + 0.2 = 0.64", function() {
        expect(add(0.44, 0.2)).to.be.equal(0.64);
    });

    it("0.2 + 0.44 = 0.64", function() {
        expect(add(0.2, 0.44)).to.be.equal(0.64);
    });
    it("2 - 1 = 1", function() {
        expect(sub(2, 1)).to.be.equal(1);
    });

    it("1 - 2 = -1", function() {
        expect(sub(1, 2)).to.be.equal(-1);
    });

    it("0.2 - 0.1 = 0.1", function() {
        expect(sub(0.2, 0.1)).to.be.equal(0.1);
    });

    it("0.1 - 0.2 = -0.1", function() {
        expect(sub(0.1, 0.2)).to.be.equal(-0.1);
    });

    it("0.22 - 0.2 = 0.02", function() {
        expect(sub(0.22, 0.2)).to.be.equal(0.02);
    });

    it("0.3 - 0.22 = 0.08", function() {
        expect(sub(0.3, 0.22)).to.be.equal(0.08);
    });
    it("2 * 1 = 2", function() {
        expect(mul(2, 1)).to.be.equal(2);
    });

    it("0.56 * 100 = 56", function() {
        expect(mul(0.56, 100)).to.be.equal(56);
    });

    it("100 * 0.56 = 56", function() {
        expect(mul(100, 0.56)).to.be.equal(56);
    });

    it("0.2 * 0.1 = 0.02", function() {
        expect(mul(0.2, 0.1)).to.be.equal(0.02);
    });
    it("2 ／ 1 = 2", function() {
        expect(div(2, 1)).to.be.equal(2);
    });

    it("1 ／ 0.2 = 5", function() {
        expect(div(1, 0.2)).to.be.equal(5);
    });

    it("0.1 ／ 2 = 0.05", function() {
        expect(div(0.1, 2)).to.be.equal(0.05);
    });

    it("0.03 ／ 0.1 = 0.3", function() {
        expect(div(0.03, 0.1)).to.be.equal(0.3);
    });

    it("0.3 ／ 0.01 = 30", function() {
        expect(div(0.3, 0.01)).to.be.equal(30);
    });
});

