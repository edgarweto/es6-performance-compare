export const test = {
  meta: {
    title: 'Spread op: array concat',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#A_better_way_to_concatenate_arrays'
    }]
  },
  
  first: function () {
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    arr1 = arr1.concat(arr2);
  },
  second: function () {
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    arr1 = [...arr1, ...arr2];
  }

};