const CustomError = require("../extensions/custom-error");

// module.exports = class DepthCalculator {
//   calculateDepth(/* arr */) {
//     throw new CustomError('Not implemented');
//     // remove line with error and write your code here
//   }
// };


module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    if (!Array.isArray(arr)) {
        return 1;
    }
    arr.forEach(item => {
        if (Array.isArray(item)) {
            let currentDeth = this.calculateDepth(item) + 1;
            if (currentDeth > maxDepth) {
                maxDepth = currentDeth;
            }
        }
    });
    return maxDepth;
  }
};