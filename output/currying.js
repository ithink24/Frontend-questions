function sum(a) {
    return function (b) {
        if(b){
            return sum(a+b)
        }

        return a;
    }
}

console.log(sum(1)(2)(2)())

function add(a, b){
    return function (c, d){
        if(c !== undefined && d !== undefined){
            return add(a+b, c+d)
        }

        return a+b;
    }
}

console.log(add(1, 2)(3, 4)());