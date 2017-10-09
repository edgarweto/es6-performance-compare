export const test = {
  title: 'Object: Basic assignment',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Basic_assignment'
  }],

  first: function () {
    var u = {a: 1, b: 2},
      a = u.a,
      b = u.b;
  },
  second: function () {
    var u = {a: 1, b: 2},
      {a, b} = u;
  }

};