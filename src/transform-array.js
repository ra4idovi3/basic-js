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
function transform(array) {
  if (!Array.isArray(array)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }
  let changedArr = [...array];
  for (let i = 0; i < changedArr.length; i++) {
    if (changedArr[i] == "--discard-next" && changedArr[i + 1]) {
      changedArr[i + 1] = "delete";
    }
    if (changedArr[i] == "--discard-prev" && changedArr[i - 1]) {
      changedArr[i - 1] = "delete";
    }
    if (changedArr[i] == "--double-next" && changedArr[i + 1]) {
      changedArr[i] = changedArr[i + 1];
    }
    if (changedArr[i] == "--double-prev" && changedArr[i - 1]) {
      changedArr[i] = changedArr[i - 1];
    }
  }
  return changedArr.filter(
    (el) =>
      el != "--discard-prev" &&
      el != "--double-next" &&
      el != "--discard-next" &&
      el != "--double-prev" &&
      el != "delete"
  );
}

module.exports = {
  transform,
};
