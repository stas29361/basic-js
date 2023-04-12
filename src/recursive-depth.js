const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let maxDepth = depth;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        const depthOfItem = this.calculateDepth(item, depth + 1);
        if (depthOfItem > maxDepth) {
          maxDepth = depthOfItem;
        }
      }
    });
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
