const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = Array.from(String(n));
  let minNumber = array.map(el=>el).sort()[0];
  array.splice(array.findIndex(el=>el===minNumber), 1);
  return Number(array.join(''))
}

module.exports = {
  deleteDigit
};
