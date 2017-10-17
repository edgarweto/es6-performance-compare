export const test = {
  meta: {
    title: 'Array: Swapping variables',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Swapping_variables'
    }]
  },

  first: function () {
    var a = 1, b = 3;
    
    var temp = a;
    a = b;
    b = temp;
  },
  second: function () {
    var a = 1, b = 3;

    [a, b] = [b, a];
  }

};