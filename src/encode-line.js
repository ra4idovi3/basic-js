const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = [];
  for (let i = 0; i < str.length; i++) {
    let cnt = 1;
    console.log("s");
    for (let j = i + 1; j <= str.length; j++) {
      if (str[i] == str[j]) {
        cnt += 1;
      } else if (str[i] != str[j]) {
        encoded.push(cnt, str[i]);
        cnt = 1;
      }
      i = j;
    }
    cnt;
  }
  return encoded.filter((el) => el != 1).join("");
}

module.exports = {
  encodeLine,
};
