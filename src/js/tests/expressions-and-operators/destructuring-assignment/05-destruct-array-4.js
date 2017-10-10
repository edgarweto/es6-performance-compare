export const test = {
  title: 'Array: Swapping variables',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Swapping_variables'
  }],

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