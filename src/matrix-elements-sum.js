const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  let sum = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j]) {
        if (!m[i - 1]) {
          sum += m[i][j];
        } else {
          sum = m[i - 1][j] > 0 ? (sum += m[i][j]) : (sum += 0);
        }
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
