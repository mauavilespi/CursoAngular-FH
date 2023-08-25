function addNumbers( a: number, b:number ) {
    return a + b;
}

const addNumbersArrow = ( a:number, b:number ) => `${a + b}`;

function multiply ( firstNumber: number, secondNumber?: number, base:number = 2 ) {
    return firstNumber * base;
}

const multiplyArrow = ( firstNumber: number, secondNumber?: number, base: number = 2 ) => (firstNumber * base);

const result = addNumbers(1,2).toString()
const result2 = addNumbersArrow(1,2);
const multiplyResult: number = multiply(5);
const multiplyResult2: number = multiplyArrow(4);

console.log( {result, result2, multiplyResult, multiplyResult2} );

export {}