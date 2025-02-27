const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  if (s1 === "" || s2 === "") {
    return 0;
  }
  let count = [];

  for (let i in s1) {
    let searchindex = s2.indexOf(s1[i]);
    if (searchindex !== -1) {
      count.push(s1[i]);
      s2.splice(searchindex, 1);
    }
  }
  //console.log(count, count.join('').length);
  return count.join("").length;
}

module.exports = {
  getCommonCharacterCount,
};
