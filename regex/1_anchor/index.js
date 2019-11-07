//yarn jest regex/1_anchoring

//https://flaviocopes.com/javascript-regular-expressions/#anchoring

//a string that starts with 'hello world'
function startsWithHelloWorld(text) {
  const regEx = /^hello world/;
  return regEx.test(text);
}

//a string that ends with 'hello world'
function endsWithHelloWorld(text) {
  const regEx = /hello world$/;
  return regEx.test(text);
}

//a string that is 'hello world'
function isHelloWorld(text) {
  const regEx = /^hello world$/;
  return regEx.test(text);
}

module.exports = { startsWithHelloWorld, endsWithHelloWorld, isHelloWorld };
