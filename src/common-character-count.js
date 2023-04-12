const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 =4 "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let commonArr = [];
  let s1New = s1.split('');
  for(let i = 0; i < s2.length; i++){
    if(s1New.includes(s2[i])){
      commonArr.push(s2[i])
      s1New.splice(s1New.findIndex(el=>el===s2[i]), 1)
    }
  }
  return commonArr.length
}

module.exports = {
  getCommonCharacterCount
};
