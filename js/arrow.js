// function declaration:
function add(first, second) {
    const total = first + second;
    return total;
}


// funciton expresion:
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

const result = add(10, 20);
console.log(result);
