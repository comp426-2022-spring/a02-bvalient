// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs';
import minimist from 'minimist';

// Call the coinFlip function and put the return into STDOUT

const args = minimist(process.argv.slice(2));
args['count']; 

const count = args.count || 1;
let array = coinFlips(args.number);

console.log(array);
console.log(countFlips(array));

// npm install minimist
