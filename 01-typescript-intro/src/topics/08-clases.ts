export class Person {
    // public name: string;
    // public address: string;

    // constructor( name: string, address: string ) {
    //     this.name = name;
    //     this.address = address;
    // }

    constructor (
        public name: string,
        private address: string = 'No Addres'
    ) {}

}

// export class Hero extends Person {
    
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super( realName, 'New York' )
//     }

// }

export class Hero {

    //public person: Person;
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {

        //this.person = new Person(realName)
    }

}

const person = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony Stark', person)

console.log(ironman);