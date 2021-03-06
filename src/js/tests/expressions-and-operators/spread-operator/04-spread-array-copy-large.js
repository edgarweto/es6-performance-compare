export const test = {
  meta: {
    title: 'Spread op: array copy -large',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Copy_an_array'
    }]
  },
  
  first: function () {
    var x = Array(999).fill({});
    var y = x.slice();
  },
  second: function () {
    var x = Array(999).fill({});
    var y = [...x];
  }

};