export const test = {
  meta: {
    title: 'Spread op: array copy -tiny',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Copy_an_array'
    }]
  },
  
  first: function () {
    var x = Array(9).fill({});
    var y = x.slice(0);
  },
  second: function () {
    var x = Array(9).fill({});
    var y = [...x];
  }

};