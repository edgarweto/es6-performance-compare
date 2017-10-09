export const test = {
  title: 'Array: Basic variable assignment',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Basic_variable_assignment'
  }],

  first: function () {
    var foo = ['one', 'two', 'three'];
    var one = foo['one'],
      two = foo['two'],
      three = foo['three'];
  },
  second: function () {
    var foo = ['one', 'two', 'three'];
    var [one, two, three] = foo;
  }

};