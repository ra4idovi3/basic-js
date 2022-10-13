const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArr: [],
  getLength: function () {
    return this.chainArr.length;
  },
  addLink: function (value = "") {
    this.chainArr.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink: function (pos) {
    if (
      typeof pos != "number" ||
      !Number.isInteger(pos) ||
      !(pos - 1 in this.chainArr)
    ) {
      this.chainArr = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chainArr.splice(pos - 1, 1);
    return chainMaker;
  },
  reverseChain: function () {
    this.chainArr.reverse();
    return chainMaker;
  },
  finishChain: function () {
    const finistStr = this.chainArr.join("~~");
    this.chainArr = [];
    return finistStr;
  },
};

module.exports = {
  chainMaker,
};
