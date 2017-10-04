export const test = {
  title: 'Destructuring arrays V',
  code1:   
`
var a, b, x = [1];
a = x.length > 0 ? x[0] : 5;
b = x.length > 1 ? x[1] : 7;`,

  code2:
`
var a, b, x = [1];

[a=5, b=7] = x;`,

  value: 0,
  first: function () {
    var a, b, x = [1];
    a = x.length > 0 ? x[0] : 5;
    b = x.length > 1 ? x[1] : 7;
  },
  second: function () {
    var a, b, x = [1];

    [a=5, b=7] = x;
  }

};