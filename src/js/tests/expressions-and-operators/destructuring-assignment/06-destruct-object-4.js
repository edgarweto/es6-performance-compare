export const test = {
  meta: {
    title: 'Object: Assigning to new variable names',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_to_new_variable_names'
    }]
  },

  first: function () {
    var o = {p: 42, q: true};
    var foo = o.p,
      bar = o.q;
  },
  second: function () {
    var o = {p: 42, q: true};
    var {p: foo, q: bar} = o;
  }

};