const {
  startsWithHelloWorld,
  endsWithHelloWorld,
  isHelloWorld
} = require("./index");

test("text: 'test'", () => {
  const text = "test";
  const expected = false;
  const actual = startsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'world hello'", () => {
  const text = "world hello";
  const expected = false;
  const actual = startsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'hello world'", () => {
  const text = "hello world";
  const expected = true;
  const actual = startsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'hello world'", () => {
  const text = "a common beginner program is hello world";
  const expected = false;
  const actual = startsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'hello world'", () => {
  const text = "hello world is a common beginner program";
  const expected = true;
  const actual = startsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'test'", () => {
  const text = "test";
  const expected = false;
  const actual = endsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'world hello'", () => {
  const text = "world hello";
  const expected = false;
  const actual = endsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'hello world'", () => {
  const text = "hello world";
  const expected = true;
  const actual = endsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'hello world'", () => {
  const text = "a common beginner program is hello world";
  const expected = true;
  const actual = endsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'hello world'", () => {
  const text = "hello world is a common beginner program";
  const expected = false;
  const actual = endsWithHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'a common beginner program is hello world'", () => {
  const text = "a common beginner program is hello world";
  const expected = false;
  const actual = isHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'hello world is a common beginner program'", () => {
  const text = "hello world is a common beginner program";
  const expected = false;
  const actual = isHelloWorld(text);
  expect(actual).toEqual(expected);
});

test("text: 'hello world'", () => {
  const text = "hello world";
  const expected = true;
  const actual = isHelloWorld(text);
  expect(actual).toEqual(expected);
});
