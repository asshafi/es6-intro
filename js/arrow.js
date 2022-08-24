// function declaration:
// function add(first, second) {
//     const total = first + second;
//     return total;
// }

// ----------------------------------------------
// funciton expression:
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
// function expression with anonymous funciton 
const add2 = function (first, second) {
    const total = first + second;
    return total;
}
// ----------------------------------------------
// Arrow function:
function add(first, second) {
    const total = first + second;
    return total;
}

function add4(first, second) {
    return first + second;
}

const add5=function (first, second) {
    return first + second;
}

const add6 = (first, second) => first + second;

// ==========================================
const result = add(10, 20);
console.log(result);
