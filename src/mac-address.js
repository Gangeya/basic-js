const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const hex = '0123456789ABCDEF';
  let result = true;
  let str = n.split('-').join('');

  str.length == 12 ? true : false;

  console.log(str);
  for (let index = 0; index < str.length; index++) {
    if (!hex.includes(str[index])) {
      result = false;
      break;
    }
  }
  return result;
}
module.exports = {
  isMAC48Address,
};
