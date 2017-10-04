export const test = {
  title: 'Basic assignment',
  code1:   
`
var u = {a: 1, b: 2},
  a = u.a,
  b = u.b;`,

  code2:
`
var u = {a: 1, b: 2},
  {a, b} = u;`,

  value: 0,
  first: function () {
    var u = {a: 1, b: 2},
      a = u.a,
      b = u.b;
  },
  second: function () {
    var u = {a: 1, b: 2},
      {a, b} = u;
  }

};