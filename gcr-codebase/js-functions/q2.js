
function applyOperation(numbers, operation) {
    let result = [];

    for (let number of numbers) {
        result.push(operation(number));
    }

    return result;
}

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

console.log(applyOperation([1, 2, 3, 4], double));
console.log(applyOperation([1, 2, 3, 4], square));
