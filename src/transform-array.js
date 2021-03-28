const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] == '--discard-next') {
          i++;
          if (arr[i+1] == '--double-prev' || arr[i+1] == '--discard-next') {
              i++;
          }
      } else if (arr[i] == '--discard-prev' && i != 0) {
          newArr.pop();
      } else if (arr[i] == '--double-next' && i < arr.length - 1) {
          newArr.push(arr[i+1]);
      } else if (arr[i] == '--double-prev' && i != 0) {
          newArr.push(arr[i-1]);
      } else if (typeof(arr[i]) == 'number') {
          newArr.push(arr[i]);
      }
  }
  return newArr;
};