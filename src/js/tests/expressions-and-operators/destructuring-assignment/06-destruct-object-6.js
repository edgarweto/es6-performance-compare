export const test = {
  meta: {
    title: 'Object: Assigning to new variable names and providing default values',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_to_new_variables_names_and_providing_default_values'
    }]
  },

  first: function () {
    var x = {a: 3},
      aa = x.a !== undefined ? x.a : 10,
      bb = x.b !== undefined ? x.b : 5;
  },
  second: function () {
    var {a: aa = 10, b: bb = 5} = {a: 3};
  }

};