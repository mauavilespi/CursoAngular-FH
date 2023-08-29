interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const { 
    song:anotherSong, 
    songDuration:duracion, 
    audioVolume:volumen,
    details
 } = audioPlayer;

const { author } = details;

// console.log( 'Song: ', song );
// console.log( 'Song: ', anotherSong );
// console.log( 'Duracion: ', duracion );
// console.log( 'Volumen: ', volumen );
// console.log( 'Author:', author);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [ , , trunks= 'Not Found' ] = dbz;


console.error( 'Personaje 3: ', trunks || 'No hay personaje' );

export  {}