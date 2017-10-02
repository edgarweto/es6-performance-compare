export const test = {
  title: 'Destructuring objects III',
  code1:   
`
var u = {a: 1, b: 2},
  a = u.a,
  b = u.b;`,

  code2:
`
var a, b;
({a, b} = {a:1, b:2});`,

  first: function () {
    var u = {a: 1, b: 2},
      a = u.a,
      b = u.b;
  },
  second: function () {
    var a, b;
    ({a, b} = {a:1, b:2});
  }

};