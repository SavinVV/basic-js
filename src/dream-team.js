const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let nameDreamTeam = [];
  members.forEach(name => {
      if (typeof name == 'string') {
          nameDreamTeam.push(name.trimStart()[0].toUpperCase());
      }
  });
  if (nameDreamTeam.length == 0) {
      return false;
  }
  return nameDreamTeam.sort().join('');
};
