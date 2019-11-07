const {
  includesAtLeastOnelowerCaseChar,
  includesOnlyLowerCaseChars,
  isOneLowerCaseChar,
  lowerCaseInMiddle,
  isAllLowerCaseAndDigits
  // onlyLowerCase,
  // lowerCaseInMiddle,
  // lowerCasesInMiddle,
  // lowerCaseSingle,
  // lowerCaseOrDigit,
  // noDigits,
  // noDigitsThroughout
} = require("./index");

test("isAllLowerCaseAndDigits - text '1abc23'", () => {
  const text = "1abc23";
  const expected = true;
  const actual = isAllLowerCaseAndDigits(text);
  expect(actual).toEqual(expected);
});

test("isAllLowerCaseAndDigits - text '1aBc23'", () => {
  const text = "1aBc23";
  const expected = false;
  const actual = isAllLowerCaseAndDigits(text);
  expect(actual).toEqual(expected);
});

test("lowerCaseInMiddle - text 'helloaaaworld'", () => {
  const text = "helloaaaworld";
  const expected = true;
  const actual = lowerCaseInMiddle(text);
  expect(actual).toEqual(expected);
});

test("lowerCaseInMiddle - text 'helloaworld'", () => {
  const text = "helloaworld";
  const expected = true;
  const actual = lowerCaseInMiddle(text);
  expect(actual).toEqual(expected);
});

test("includesAtLeastOnelowerCaseChar - text: 'a'", () => {
  const text = "a";
  const expected = true;
  const actual = includesAtLeastOnelowerCaseChar(text);
  expect(actual).toEqual(expected);
});

test("includesAtLeastOnelowerCaseChar - text: 'aa'", () => {
  const text = "aa";
  const expected = true;
  const actual = includesAtLeastOnelowerCaseChar(text);
  expect(actual).toEqual(expected);
});

test("includesAtLeastOnelowerCaseChar - text: 'A'", () => {
  const text = "A";
  const expected = false;
  const actual = includesAtLeastOnelowerCaseChar(text);
  expect(actual).toEqual(expected);
});

test("includesAtLeastOnelowerCaseChar - text: 'AA'", () => {
  const text = "AA";
  const expected = false;
  const actual = includesAtLeastOnelowerCaseChar(text);
  expect(actual).toEqual(expected);
});

test("includesAtLeastOnelowerCaseChar - text: 'AaA'", () => {
  const text = "AaA";
  const expected = true;
  const actual = includesAtLeastOnelowerCaseChar(text);
  expect(actual).toEqual(expected);
});

test("includesOnlyLowerCaseChars - text: 'AaBbCc'", () => {
  const text = "AaBbCc";
  const expected = false;
  const actual = includesOnlyLowerCaseChars(text);
  expect(actual).toEqual(expected);
});

test("includesOnlyLowerCaseChars - text: 'aabbcc'", () => {
  const text = "aabbcc";
  const expected = true;
  const actual = includesOnlyLowerCaseChars(text);
  expect(actual).toEqual(expected);
});

test("includesOnlyLowerCaseChars - text: 'a'", () => {
  const text = "a";
  const expected = true;
  const actual = includesOnlyLowerCaseChars(text);
  expect(actual).toEqual(expected);
});

test("isOneLowerCaseChar - text: 'aabbcc'", () => {
  const text = "aabbcc";
  const expected = false;
  const actual = isOneLowerCaseChar(text);
  expect(actual).toEqual(expected);
});

test("isOneLowerCaseChar - text: 'as'", () => {
  const text = "as";
  const expected = false;
  const actual = isOneLowerCaseChar(text);
  expect(actual).toEqual(expected);
});
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
//
//
//
//
//
// test("lowerCase - text: 'a'", () => {
//   const text = "a";
//   const expected = true;
//   const actual = lowerCase(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCase - text: 'z'", () => {
//   const text = "z";
//   const expected = true;
//   const actual = lowerCase(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCase - text: 'abcbbcbc'", () => {
//   const text = "abcbbcbc";
//   const expected = true;
//   const actual = lowerCase(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCase - text: 'A'", () => {
//   const text = "A";
//   const expected = false;
//   const actual = lowerCase(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCase - text: 'ABcD'", () => {
//   const text = "ABcD";
//   const expected = true;
//   const actual = lowerCase(text);
//   expect(actual).toEqual(expected);
// });

// test("onlyLowerCase - text: 'ABcD'", () => {
//   const text = "ABcD";
//   const expected = false;
//   const actual = onlyLowerCase(text);
//   expect(actual).toEqual(expected);
// });

// test("onlyLowerCase - text: 'ABcD'", () => {
//   const text = "abcd";
//   const expected = false;
//   const actual = onlyLowerCase(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCaseInMiddle - text: 'hellooworld'", () => {
//   const text = "hellooworld";
//   const expected = true;
//   const actual = lowerCaseInMiddle(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCaseInMiddle - text: 'hellooooooworld'", () => {
//   const text = "hellooooooworld";
//   const expected = false;
//   const actual = lowerCaseInMiddle(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCasesInMiddle - text: 'hellooooooworld'", () => {
//   const text = "hellooooooworld";
//   const expected = true;
//   const actual = lowerCasesInMiddle(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCasesInMiddle - text: 'hellooworld'", () => {
//   const text = "hellooworld";
//   const expected = true;
//   const actual = lowerCasesInMiddle(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCasesInMiddle - text: 'helloworld'", () => {
//   const text = "hello world";
//   const expected = false;
//   const actual = lowerCasesInMiddle(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCaseSingle - text: 'h'", () => {
//   const text = "h";
//   const expected = true;
//   const actual = lowerCaseSingle(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCaseSingle - text: 'hhhhhh'", () => {
//   const text = "hhhhhhh";
//   const expected = false;
//   const actual = lowerCaseSingle(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCaseOrDigit - text: 'h5h6hy8'", () => {
//   const text = "h5h6hy8";
//   const expected = true;
//   const actual = lowerCaseOrDigit(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCaseOrDigit - text: 'HHHHHH8'", () => {
//   const text = "HHHHHH8";
//   const expected = false;
//   const actual = lowerCaseOrDigit(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCaseOrDigit - text: 'HHHHHHh'", () => {
//   const text = "HHHHHHh";
//   const expected = false;
//   const actual = lowerCaseOrDigit(text);
//   expect(actual).toEqual(expected);
// });

// test("lowerCaseOrDigit - text: 'HHHHHH'", () => {
//   const text = "HHHHHH";
//   const expected = false;
//   const actual = lowerCaseOrDigit(text);
//   expect(actual).toEqual(expected);
// });

// test("noDigits - text: 'hello world'", () => {
//   const text = "h";
//   const expected = true;
//   const actual = noDigits(text);
//   expect(actual).toEqual(expected);
// });

// test("noDigits - text: '3'", () => {
//   const text = "3";
//   const expected = false;
//   const actual = noDigits(text);
//   expect(actual).toEqual(expected);
// });

// //this will match when it finds one character that is not a digit
// test("noDigits - text: 'hello world 3'", () => {
//   const text = "hello world 3";
//   const expected = true;
//   const actual = noDigits(text);
//   expect(actual).toEqual(expected);
// });

// //noDigitsThroughout
// test("noDigitsThroughout - text: 'hello3world'", () => {
//   const text = "hello3world";
//   const expected = false;
//   const actual = noDigitsThroughout(text);
//   expect(actual).toEqual(expected);
// });
