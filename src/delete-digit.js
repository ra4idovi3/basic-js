const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newArr = [];
  let strArr = [...String(n)];
  for (let i = 0; i < strArr.length; i++) {
    let arr3 = [...strArr];
    arr3.splice(i, 1);
    newArr.push(+arr3.join(""));
  }
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit,
};
