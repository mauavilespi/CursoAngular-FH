function addNumbers( a: number, b:number ) {
    return a + b;
}

const addNumbersArrow = ( a:number, b:number ) => `${a + b}`;

function multiply ( firstNumber: number, secondNumber?: number, base:number = 2 ) {
    return firstNumber * base;
}

const multiplyArrow = ( firstNumber: number, secondNumber?: number, base: number = 2 ) => (firstNumber * base);

const result = addNumbers(1,2);
const result2 = addNumbersArrow(1,2);
const multiplyResult: number = multiply(5);
const multiplyResult2: number = multiplyArrow(4);

//console.log( {result, result2, multiplyResult, multiplyResult2} );

interface Character {
    name: string;
    hp: number;
    showHP: () => void;
}

const healCharacter = ( character: Character, amount:number ) => {

    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHP() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter(strider, 30)
healCharacter(strider, 30)
strider.showHP();

export {}