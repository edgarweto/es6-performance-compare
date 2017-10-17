export const test = {
  meta: {
    title: 'Object: Assignment without declaration',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assignment_without_declaration'
    }]
  },

  first: function () {
    var u = {a: 1, b: 2},
      a = u.a,
      b = u.b;
  },
  second: function () {
    var a, b;
    ({a, b} = {a:1, b:2});
  }

};