/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  if(Math.random() > .5){
    return "tails"
  } else {
    return "heads"
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  let returnable = [];
  for(let i = 0; i < flips; i++){
    returnable.push(coinFlip());
  } 
  return returnable;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let heads = 0;
  let tails = 0;
  for(let i = 0; i < array.length; i++){
    if (array[i] == "heads"){
      heads += 1;
    } else {
      tails += 1
    }
  }
  return "{ heads: " + heads + ", tails: " + tails + " }"
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  let er_mes = "Error: no input." + "\n"
  let fix_mes = "Usage: node guess-flip --call=[heads|tails]"
  if(call != "heads" && call != "tails"){
    return er_mes + fix_mes
  }
  let theFlip = coinFlip();
  let resultW = "win"
  let resultsL = "lose"
  if(theFlip == call){
    return "{ call: " + call + ", flip: " + theFlip + ", result: " + resultW + " }"
  } else {
    return "{ call: " + call + ", flip: " + theFlip + ", result: " + resultsL + " }"
  }
}


/** Export 
 * 
 * Export all of your named functions
*/
