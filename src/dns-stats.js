const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let result = {};

  for (let item of domains) {
    arr.push(item.split('.').reverse().join('.'));
  }

  for (let item of arr) {
    let subarr = item.split('.');
    let itemLength = subarr.length;
    let curdomain = '';

    for (let i = 0; i < itemLength; i++) {
      curdomain += '.' + subarr[i];
      if (result.hasOwnProperty(curdomain)) {
        result[curdomain] += 1;
      } else {
        result[curdomain] = 1;
      }
    }
  }
  //console.log(result);
  return result;
}

module.exports = {
  getDNSStats,
};
