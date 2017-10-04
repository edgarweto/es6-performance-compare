export const test = {
  title: 'Assigning to new variable names',
  code1:   
`
var o = {p: 42, q: true};
var foo = o.p,
  bar = o.q;`,

  code2:
`
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;`,

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