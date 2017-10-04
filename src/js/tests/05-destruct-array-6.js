export const test = {
  title: 'Destructuring arrays VI - Swap variables',
  code1:   
`
var a = 1,
  b = 3,
  t;

t = a;
a = b;
b = t;`,

  code2:
`
var a = 1,
  b = 3;

[a, b] = [b, a];`,

  value: 0,
  first: function () {
    var a = 1,
      b = 3,
      t;

    t = a;
    a = b;
    b = t;
  },
  second: function () {
    var a = 1,
      b = 3;

    [a, b] = [b, a];
  }

};