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
function repeater(str, options) {
  let newstr = "";
  let repeat = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : "+";
  let additionalRepeat =
    "addition" in options
      ? repeater(String(options.addition), {
          repeatTimes: options.additionRepeatTimes || 0,
          separator: options.additionSeparator || "|",
        })
      : "";
  for (let i = 0; i < repeat; i++) {
    newstr += str + additionalRepeat;
    if (i < repeat - 1) {
      newstr += separator;
    }
  }

  return newstr;
}

module.exports = {
  repeater,
};
