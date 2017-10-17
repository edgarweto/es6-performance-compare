export const test = {
  meta: {
    title: 'Array: Assigning the rest of an array to a variable',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_the_rest_of_an_array_to_a_variable'
    }]
  },

  first: function () {
    var a, b, x = [1, 2, 3];

    a = x.length > 0 ? x[0] : undefined;
    b = x.length > 1 ? x.slice(1) : [];
  },
  second: function () {
    var [a, ...b] = [1, 2, 3];
  }

};