var addDays = require("date-fns/addDays");

const getd = (no_of_days) => {
  const newd = addDays(new Date(2020, 7, 22), no_of_days);
  return `${newd.getDate()}-${newd.getMonth() + 1}-${newd.getFullYear()}`;
};

module.exports = getd;
