export const test = {
  title: 'Default values',


  first: function () {
    var x = {a: 3},
      a = x.a !== undefined ? x.a : 10,
      b = x.b !== undefined ? x.b : 5;
  },
  second: function () {
    var {a = 10, b = 5} = {a: 3};
  }

};