/**
 * @author 和霁
 * @date 2017-11-15
 */

// sum, subtract, multiply and divide

class Calculate {
    _numToString(num: number) {
        let precision: number, numString: string;
        numString = num.toString();

        try {
            precision = numString.split(".")[1].length;
        } catch (e) {
            precision = 0;
        }

        return {
            intNum: Number(numString.replace(".", "")),
            precision
        };
    }

    sum(arg1: number, arg2: number) {
        let argR1 = this._numToString(arg1);
        let argR2 = this._numToString(arg2);
        let { intNum: n1, precision: p1 } = argR1;
        let { intNum: n2, precision: p2 } = argR2;

        let c = Math.abs(p1 - p2);
        let m = Math.pow(10, Math.max(p1, p2));

        if (c > 0) {
            var cm = Math.pow(10, c);
            p1 > p2 ? (n2 = n2 * cm) : (n1 = n1 * cm);
        }

        return (n1 + n2) / m;
    }

    subtract(arg1: number, arg2: number) {
        return this.sum(arg1, -arg2);
    }

    multiply(arg1: number, arg2: number) {
        let argR1 = this._numToString(arg1);
        let argR2 = this._numToString(arg2);
        let { intNum: n1, precision: p1 } = argR1;
        let { intNum: n2, precision: p2 } = argR2;

        let m = p1 + p2;

        return n1 * n2 / Math.pow(10, m);
    }

    divide(arg1: number, arg2: number) {
        let argR1 = this._numToString(arg1);
        let argR2 = this._numToString(arg2);
        let { intNum: n1, precision: p1 } = argR1;
        let { intNum: n2, precision: p2 } = argR2;

        let m = p2 - p1;
        let c = Math.abs(m);
        return m >= 0 ? n1 * Math.pow(10, m) / n2 : n1 / (n2 * Math.pow(10, c));
    }
}

export default Calculate;
