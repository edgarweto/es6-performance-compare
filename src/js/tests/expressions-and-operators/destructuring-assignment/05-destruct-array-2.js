export const test = {
  meta: {
    title: 'Array: Assignment separate from declaration',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assignment_separate_from_declaration'
    }]
  },
  
  first: function () {
    var a, b, x = [1, 2];

    a = x.length > 0 ? x[0] : undefined;
    b = x.length > 1 ? x[1] : undefined;

  },
  second: function () {
    var a, b;

    [a, b] = [1, 2];
  }

};