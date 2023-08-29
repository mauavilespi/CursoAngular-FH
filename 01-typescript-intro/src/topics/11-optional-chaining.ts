export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Mauricio',
}

const passenger2: Passenger = {
    name: 'Julian',
    children: ['Laura', 'Tatiana']
}

const printChildren = ( passenger: Passenger ): number => {
    if ( !passenger.children ) return 0;
    // const howManyChildren = passenger.children?.length || 0; // Si es undefined o NULL
    const howManyChildren = passenger.children!.length; // Siempre es seguro
    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

printChildren( passenger1 )