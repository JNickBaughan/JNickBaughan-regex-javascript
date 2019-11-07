// https://flaviocopes.com/javascript-regular-expressions/#match-items-in-ranges
// https://www.regular-expressions.info/engine.html

//string includes a lowercase letter
function includesAtLeastOnelowerCaseChar(text) {
  const regEx = /[a-z]/;
  return regEx.test(text);
}

//string includes only lowercase letters
function includesOnlyLowerCaseChars(text) {
  const regEx = /^[a-z]+$/;
  return regEx.test(text);
}

//string is only ONE single lowercase Char
function isOneLowerCaseChar(text) {
  const regEx = /^[a-z]$/;
  return regEx.test(text);
}

//string includes any number of lowercase letters between 'hello' and 'world'
function lowerCaseInMiddle(text) {
  const regEx = /hello[a-z]+world/;
  return regEx.test(text);
}

//string includes all lowercase letters and digits, but no uppercase
function isAllLowerCaseAndDigits(text) {
  const regEx = /^[^A-Z][a-z0-9]+$/;
  return regEx.test(text);
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//string includes one or more lowercase letters between 'hello' and 'world'
function lowerCasesInMiddle(text) {
  const regEx = /hello[a-z]+world/;
  return regEx.test(text);
}

//matches any string with a non digit character
function noDigits(text) {
  const regEx = /[^0-9]/;
  return regEx.test(text);
}

//matches any string with a non digit character
function noDigitsThroughout(text) {
  const regEx = /^[^0-9]$/;
  return regEx.test(text);
}

//matches any char without
///^([^0-9]*)$/
module.exports = {
  includesAtLeastOnelowerCaseChar,
  includesOnlyLowerCaseChars,
  isOneLowerCaseChar,
  lowerCaseInMiddle,
  isAllLowerCaseAndDigits
  //   onlyLowerCase,
  //   lowerCaseInMiddle,
  //   lowerCasesInMiddle,
  //   lowerCaseSingle,
  //   lowerCaseOrDigit,
  //   noDigits,
  //   noDigitsThroughout
};
