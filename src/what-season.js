const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date == 'undefined') {
    return 'Unable to determine the time of year!';
  }
  
  try {
    date.getTime();
  } catch(err) {
    throw new Error(err);
  }

  const month = date.getMonth(),
        year = {
          'winter': [0, 1, 11],
          'spring': [2, 3, 4],
          'summer': [5, 6, 7],
          'autumn': [8, 9, 10]
        };
  let reulst = '';
  Object.keys(year).forEach((season) => {
      if (year[season].indexOf(month) >= 0) {
          reulst = season;
      }
  });
  return reulst;
};
