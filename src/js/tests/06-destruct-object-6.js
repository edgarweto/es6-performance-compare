export const test = {
  title: 'Assigning to new variable names and providing default values',


  first: function () {
    var x = {a: 3},
      aa = x.a !== undefined ? x.a : 10,
      bb = x.b !== undefined ? x.b : 5;
  },
  second: function () {
    var {a: aa = 10, b: bb = 5} = {a: 3};
  }

};