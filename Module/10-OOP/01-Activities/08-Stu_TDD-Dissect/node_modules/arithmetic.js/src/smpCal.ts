import Calculate from "./calculate";

class SmpCal extends Calculate{
    constructor(){
        super()
    }

    add = (arg1: number, arg2: number) => {
        return super.sum(arg1, arg2)
    }

    sub = (arg1: number, arg2: number) => {
        return super.subtract(arg1, arg2)
    }

    mul = (arg1: number, arg2: number) => {
        return super.multiply(arg1, arg2)
    }

    div = (arg1: number, arg2: number) => {
        return super.divide(arg1, arg2)
    }
};


export default new SmpCal();