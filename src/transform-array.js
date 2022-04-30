const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length == 0) {
    return [];
  }

  let result = [];
  function checkelement(el, i, arr) {
    switch (el) {
      case "--discard-next":
        break;

      case "--discard-prev":
        if (i !== 0) {
          result.splice(i - 1, 2);
        }
        break;

      case "--double-next":
        if (i !== arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;

      case "--double-prev":
        if (arr[i - 2] == "--discard-next") {
          break;
        }
        if (i !== 0) {
          result.push(arr[i - 1]);
        }
        break;

      default:
        if (arr[i - 1] == "--discard-next") {
          break;
        } else {
          result.push(el);
        }

        break;
    }
  }

  arr.forEach((el, index, arr) => checkelement(el, index, arr));
  console.log(result);
  return result;
}

module.exports = {
  transform,
};
