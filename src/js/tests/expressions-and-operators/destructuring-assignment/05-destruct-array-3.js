export const test = {
  meta: {
    title: 'Array: Default values',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Default_values'
    }]
  },
  
  first: function () {
    var a, b, x = [1];
    
    a = x.length > 0 ? x[0] : 5;
    b = x.length > 1 ? x[1] : 7;
  },
  second: function () {
    var a, b;

    [a=5, b=7] = [1];
  }

};