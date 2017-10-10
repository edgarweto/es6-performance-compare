export const test = {
  title: 'Object: Default values',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Default_values_2'
  }],

  first: function () {
    var x = {a: 3},
      a = x.a !== undefined ? x.a : 10,
      b = x.b !== undefined ? x.b : 5;
  },
  second: function () {
    var {a = 10, b = 5} = {a: 3};
  }

};