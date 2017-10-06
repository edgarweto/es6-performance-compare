export const test = {
  title: 'Basic assignment II',

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