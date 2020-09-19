/**
 * @author 和霁
 * @date 2017-11-15
 */

import Calculate from "./calculate";

class ChainCal extends Calculate {
    private value: number;

    constructor(num: number) {
        super();
        this.value = num;
    }

    add(arg: number) {
        this.value= super.sum(this.value, arg);
        return this;
    }

    sub(arg: number) {
        this.value= super.subtract(this.value, arg);
        return this;
    }

    mul(arg: number) {
        this.value= super.multiply(this.value, arg);
        return this;
    }

    div(arg: number) {
        this.value= super.divide(this.value, arg);
        return this;
    }

    getValue() {
        return this.value;
    }
}

export default function(num: number) {
    return new ChainCal(num);
}
