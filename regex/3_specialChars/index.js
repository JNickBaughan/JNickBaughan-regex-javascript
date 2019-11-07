//matches any digit //same as [0-9]
function containsDigit(text) {
  const regEx = /\d/;
  return regEx.test(text);
}

function containsOneDigitBetweenAnyText(text) {
  const regEx = /[a-zA-Z]+\d[a-zA-Z]+/;
  return regEx.test(text);
}

//matches any non digit //same as [^0-9]
function containsNonDigit(text) {
  const regEx = /\D/;
  return regEx.test(text);
}

//matches any non alpha numeric char plus _ //same as [0-9a-zA-Z_]
function containsAnyAlphaNumAndUnderscore(text) {
  const regEx = /\w/;
  return regEx.test(text);
}

//matches any non alpha numeric char plus _ //same as [0-9a-zA-Z_]
function containsAnyNonAlphaNumAndUnderscore(text) {
  const regEx = /\W/;
  return regEx.test(text);
}

module.exports = {
  containsDigit,
  containsOneDigitBetweenAnyText,
  containsNonDigit,
  containsAnyAlphaNumAndUnderscore,
  containsAnyNonAlphaNumAndUnderscore
};
