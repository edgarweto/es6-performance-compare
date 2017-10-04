export const test = {
  title: 'Default values',
  code1:   
`
var x = {a: 3},
  a = x.a !== undefined ? x.a : 10,
  b = x.b !== undefined ? x.b : 5;`,

  code2:
`
var {a = 10, b = 5} = {a: 3};`,

  first: function () {
    var x = {a: 3},
      a = x.a !== undefined ? x.a : 10,
      b = x.b !== undefined ? x.b : 5;
  },
  second: function () {
    var {a = 10, b = 5} = {a: 3};
  }

};