export const test = {
  title: 'Basic assignment',
  
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