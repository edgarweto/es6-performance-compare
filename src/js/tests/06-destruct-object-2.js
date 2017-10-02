export const test = {
  title: 'Destructuring objects II',
  code1:   
`
var u = {a: 1, b: 2, c: 3},
  a = u.a,
  b = u.b,
  c = u.c;`,

  code2:
`
var u = {a: 1, b: 2, c: 3},
  {a, b, c} = u;`,

  first: function () {
    var u = {a: 1, b: 2, c: 3},
      a = u.a,
      b = u.b,
      c = u.c;
  },
  second: function () {
    var u = {a: 1, b: 2, c: 3},
      {a, b, c} = u;
  }

};