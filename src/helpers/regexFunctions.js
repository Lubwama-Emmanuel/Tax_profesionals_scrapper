const { appendToFile } = require("../fileHandlers.js/createFile");

// Matching tax ptrofessionals
exports.matchLink = (link) => {
  const regex =
    /https:\/\/blacktaxprofessionals\.com\/taxprofessionals\/[a-zA-Z0-9-]+\/$/;
  matchedLink = link.match(regex);
  if (regex.test(link)) {
    appendToFile("output.txt", matchedLink[0]);
  }
};

// Matching emails for tax professionals
exports.matchEmail = (s) => {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const email = s.match(regex);
  return email[0]
};

// Matches and returns phone_number
exports.matchPhone = (num) => {
  const regex = /[0-9]+/
  const phoneNumber = num.match(regex)
  return phoneNumber[0]
}