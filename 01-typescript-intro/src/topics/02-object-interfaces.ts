
const skills: string[] = [ 'Bash', 'Counter', 'Healing' ]

interface Character {
    name: string;
    hp: number;
    skils: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skils: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

console.table(strider);


export {}