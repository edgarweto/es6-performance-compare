export const test = {
  title: 'const: scoping rules',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const'
  }],

  first: function () {
    var x = 1;
    if (true) {
      (function () {
        var x = 2;
      }());
    }
  },
  second: function () {
    const x = 1;
    if (true) {
      const x = 2;
    }
  }

};