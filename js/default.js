// function add(first, second) {
//     const total = first + second;
//     // second = second || 0; (shortcut way to change undifined value)
//     //if there is no parameter and then we have to do before es6- if (second === undefined) {
//     //     second = 0;
//     // }
//     return total;
// }

// after es-6
function add(first, second=0) {
    const total = first + second;
    
    return total;
}

const result = add(10, 20);
console.log(result);