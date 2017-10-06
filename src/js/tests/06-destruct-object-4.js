export const test = {
  title: 'Assigning to new variable names',
  

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