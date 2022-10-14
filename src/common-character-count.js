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
  let cnt = 0;
  let cmnArr = [];
  let s1a = [...new Set(s1)];
  let s2a = [...new Set(s2)];
  for (let el of s1a) {
    for (let el2 of s2a) {
      if (el2 == el) {
        cmnArr.push(el);
      }
    }
  }
  for (let el of cmnArr) {
    cnt += Math.min([...s1.matchAll(el)].length, [...s2.matchAll(el)].length);
  }
  return cnt;
}

module.exports = {
  getCommonCharacterCount,
};
