// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips, flipACoin} from './modules/coin.mjs';
import { createRequire } from 'module';


// Call the coinFlip function and put the return into STDOUT
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['call']

const call = flipACoin(args.call)

console.log(call);
// npm install minimist