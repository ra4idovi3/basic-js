const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (
    !date instanceof Date ||
    isNaN(Date.parse(date)) ||
    Object.getOwnPropertyNames(date).length > 0
  ) {
    throw new Error(`Invalid date!`);
  }
  switch (date.toString().split(" ")[1]) {
    case "Jan":
    case "Dec":
    case "Feb":
      return "winter";
    case "Mar":
    case "Apr":
    case "May":
      return "spring";
    case "Jul":
    case "Jun":
    case "Aug":
      return "summer";
    case "Sep":
    case "Oct":
    case "Nov":
      return "fall";
  }
}

module.exports = {
  getSeason,
};
