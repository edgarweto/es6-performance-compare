export const test = {
  title: 'Spread op: function calls',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Spread_in_function_calls'
  }],
  
  first: function () {
    function myFunction(x, y, z) {}
    var args = [0, 1, 2];
    myFunction.apply(null, args);
  },
  second: function () {
    function myFunction(x, y, z) {}
    var args = [0, 1, 2];
    myFunction(...args);
  }

};