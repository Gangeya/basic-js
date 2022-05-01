const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options, sep = "+", addsep = "|") {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator || sep;
  let addition = options.addition === undefined ? "" : options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator || addsep;

  let addstr = Array(additionRepeatTimes)
    .fill(addition + "")
    .join(additionSeparator);
  let result = Array(repeatTimes)
    .fill(str + addstr)
    .join(separator);
  //console.log(result);
  return result;
}

module.exports = {
  repeater,
};
