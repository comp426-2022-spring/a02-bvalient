// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs';
import { createRequire } from 'module';


// Call the coinFlip function and put the return into STDOUT
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['number']

// const number = args.number || 1;
let array = coinFlips(args.number || 1);

console.log(array);
console.log(countFlips(array));
// npm install minimist
