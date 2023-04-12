const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrStr = str.split('');
  let arr = [];
  let individ = Array.from(new Set(str));
  for(let i = 0;i<individ.length;i++){
    let count = arrStr.filter(el=>el===individ[i]).length
    if(count>1){
      arr.push(count)
    }else{
      arr.push('')
    }
        arr.push(individ[i]);

  }
  return arr.join('')
}

module.exports = {
  encodeLine
};
