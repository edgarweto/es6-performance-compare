export const test = {
  title: 'Array: Ignoring some returned values',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Ignoring_some_returned_values'
  }],

  first: function () {
    var x = [0, 1, 2, 3];

    var a = x.length > 0 ? x[0] : undefined;
    var b = x.length > 2 ? x[1] : undefined;
  },
  second: function () {
    var x = [0, 1, 2, 3];

    var [a, , b] = x;
  }

};