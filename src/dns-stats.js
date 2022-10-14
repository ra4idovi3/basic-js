const { NotImplementedError } = require("../extensions/index.js");

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
  let domainsObj = {};
  let newArr = [];

  for (let el of domains) {
    let s = el.split(".").reverse();
    s;
    let str = "";
    for (let i = 0; i < s.length; i++) {
      str = str + "." + s[i];
      newArr.push(str);
    }
  }

  newArr = [...new Set(newArr)];
  domains = " " + domains.join(" ") + " ";

  for (let el of newArr) {
    let s = el.split(".").reverse().join(".");

    domainsObj[el] = [...domains.matchAll(s)].length;
  }
  return domainsObj;
}

module.exports = {
  getDNSStats,
};
