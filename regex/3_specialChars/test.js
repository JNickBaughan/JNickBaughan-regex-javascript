const {
  containsDigit,
  containsNonDigit,
  containsAnyAlphaNumAndUnderscore,
  containsAnyNonAlphaNumAndUnderscore,
  containsOneDigitBetweenAnyText
} = require("./index");

test("containsOneDigitBetweenAnyText - text: 'aa3aa'", () => {
  const text = "aa3aa";
  const expected = true;
  const actual = containsOneDigitBetweenAnyText(text);
  expect(actual).toEqual(expected);
});

test("containsOneDigitBetweenAnyText - text: 'aa33aa'", () => {
  const text = "aa33aa";
  const expected = false;
  const actual = containsOneDigitBetweenAnyText(text);
  expect(actual).toEqual(expected);
});

test("containsOneDigitBetweenAnyText - text: '3aa'", () => {
  const text = "3aa";
  const expected = false;
  const actual = containsOneDigitBetweenAnyText(text);
  expect(actual).toEqual(expected);
});

test("containsOneDigitBetweenAnyText - text: 'aa3'", () => {
  const text = "aa3";
  const expected = false;
  const actual = containsOneDigitBetweenAnyText(text);
  expect(actual).toEqual(expected);
});

test("containsDigit - text: 'aaa'", () => {
  const text = "aaa";
  const expected = false;
  const actual = containsDigit(text);
  expect(actual).toEqual(expected);
});

test("containsDigit - text: 'aa3a'", () => {
  const text = "aa3a";
  const expected = true;
  const actual = containsDigit(text);
  expect(actual).toEqual(expected);
});

test("containsNonDigit - text: '333'", () => {
  const text = "333";
  const expected = false;
  const actual = containsNonDigit(text);
  expect(actual).toEqual(expected);
});

test("containsNonDigit - text: '333e'", () => {
  const text = "333e";
  const expected = true;
  const actual = containsNonDigit(text);
  expect(actual).toEqual(expected);
});

test("containsAnyAlphaNumAndUnderscore - text: 'aaa'", () => {
  const text = "aaa";
  const expected = true;
  const actual = containsAnyAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});

test("containsAnyAlphaNumAndUnderscore - text: '111'", () => {
  const text = "111";
  const expected = true;
  const actual = containsAnyAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});

test("containsAnyAlphaNumAndUnderscore - text: 'AAA'", () => {
  const text = "AAA";
  const expected = true;
  const actual = containsAnyAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});

test("containsAnyAlphaNumAndUnderscore - text: '&*('", () => {
  const text = "&*(";
  const expected = false;
  const actual = containsAnyAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});

test("containsAnyAlphaNumAndUnderscore - text: '_&*('", () => {
  const text = "_&*(";
  const expected = true;
  const actual = containsAnyAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});

////

test("containsAnyNonAlphaNumAndUnderscore - text: '111'", () => {
  const text = "111";
  const expected = false;
  const actual = containsAnyNonAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});

test("containsAnyNonAlphaNumAndUnderscore - text: 'AAA'", () => {
  const text = "AAA";
  const expected = false;
  const actual = containsAnyNonAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});

test("containsAnyNonAlphaNumAndUnderscore - text: '&*('", () => {
  const text = "&*(";
  const expected = true;
  const actual = containsAnyNonAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});

test("containsAnyNonAlphaNumAndUnderscore - text: '_&*('", () => {
  const text = "_&*(";
  const expected = true;
  const actual = containsAnyNonAlphaNumAndUnderscore(text);
  expect(actual).toEqual(expected);
});
